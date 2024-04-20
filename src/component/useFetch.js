import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
// transform data function
export const useFetch = (query, transformData, promise, debounceWait,autoComplete) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log("debounceWait",debounceWait)
  const fetchData = 
  useCallback(
    debounce(async (query, transformData,signal) => {
      try {
        const response = await promise(query,signal);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        console.log(data);
        setData(transformData(data));
      } catch (error) {
        console.log(error);
        if(!signal.aborted)
        setError(error);
      }
    }, debounceWait)
    ,[]
  );

  useEffect(() => {
    if (!query || !autoComplete) {
      setData(null);
      setError(null);
      return;
    }
    const controller = new AbortController()
    const signal=controller.signal

     fetchData(query, transformData,signal);

     return ()=>{
        controller.abort();
     }
  }, [query, transformData]);
  return [data, setData, error];
};

//making url string dynamic, if user wants to change the url
// stop apicalls when query is empty
// abort controller to stop simultaneous network call,cancellnetwork calls

const fetchItems = async (url) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    // setList(data);
    return data
    // console.log("data", data);
  } catch (err) {
    console.log("error", err);
  }
};

const debounce = (func, delay) => { 
  if (typeof func !== "function") {
    throw new Error("Not a valid func");
  }

  if (typeof delay != "number" || delay < 0) {
    throw new Error("not a valid delay");
  }
  let timeout;
  return (...args) => {
    console.log("args",...args)
    return new Promise((resolve) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(async () => {
        const data = await func(...args);
        resolve(data);
      }, delay);
    });
  };
};

const debounceQuery = debounce(fetchItems,1000)
export default debounceQuery

import SearchBox from "../component/SearchBox";
import ListBox from "../component/ListBox";
// extension to a regular input box
function TypeAhead() {
  const transformData = (data)=>data.results
  const dataPromise = async (query,signal)=>await fetch(
    `https://swapi.dev/api/people/?search=${query}`,{signal}
  )
  return (
    
    <div className="App">
      <div className="wrapper">
        <SearchBox
          id="personName"
          name="personName"
          label="Enter Person Name"
          placeholder="Enter Your Fev star war char"
          autoComplete={true}
          maxItems={5}
          styles={{
            label: "",
            input: "",
          }}
          debouncewait={400} 
          listBox={(items) => <ListBox items={items} />}
          noItemMessage={() => <div>Something went wrong
           </div>}
           transformData={transformData}
           promise={dataPromise}
        />
      </div>
    </div>
  );
}

export default TypeAhead;

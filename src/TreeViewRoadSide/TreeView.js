import React, { useState } from "react";
import explorer from "./data";

const TreeViewComp = ({ explorer, searchQuery }) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    setExpand(!expand);
  };
  const filterData = (data, query) => {
    return data?.filter((item) => {
      const isMatch = item.name.includes(query);
      if (isMatch) {
        return item;
      }
      if (item.items.length > 0) {
        return filterData(item.items, query).length > 0;
      }
    });
  };
  return (
    <>
      {filterData([explorer], searchQuery).map((filteredItem, index) =>
        filteredItem.isFolder ? (
          <div className="folder" style={{ marginTop: "5px" }} key={index}>
            <div onClick={toggleExpand} style={{ cursor: "pointer" }}>
              <span key={index}>&gt;{filteredItem.name}</span>
            </div>

            <div
              style={{
                display: expand ? "block" : "none",
                paddingLeft: "25px",
              }}
            >
              {filteredItem.items.map((exp) => {
                return (
                  <>
                    <TreeViewComp
                      explorer={exp}
                      key={exp.id}
                      searchQuery={searchQuery}
                    />
                    {/* <span>{exp.name}</span> */}
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <span className="file">{explorer.name}</span>
        )
      )}
    </>
  );
};

const TreeView = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <input
        placeholder="search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TreeViewComp explorer={explorerData} searchQuery={searchQuery} />
    </>
  );
};

export default TreeView;

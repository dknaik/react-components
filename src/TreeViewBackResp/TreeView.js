import React, { useEffect, useState } from "react";
import "./treeview.css"
const response = [
  {
    id: 4,
    parentId: 3,
    name: "Days",
  },
  {
    id: 1,
    parentId: null,
    name: "Years",
  },
  {
    id: 2,
    parentId: 1,
    name: "Months",
  },

  {
    id: 5,
    parentId: null,
    name: "Stars",
  },
  {
    id: 3,
    parentId: 2,
    name: "Weeks",
  },
  {
    id: 6,
    parentId: 5,
    name: "Sun",
  },
  {
    id: 7,
    parentId: 5,
    name: "Proxima centaural",
  },
  {
    id: 8,
    parentId: null,
    name: "Dogs",
  },
];
const TreeView = () => {
  const [formData, setFormData] = useState({ checkedTree: [] });
  const [data, setData] = useState([]);
  const formatData = (response) => {
    const map = {};
    const result = [];

    response.forEach((item) => {
      item.children = [];
      map[item.id] = item;
    });

    response.forEach((item) => {
      if (item.parentId != null) {
        map[item.parentId].children.push(item);
      } else {
        result.push(item);
      }
    });
    console.log("map", map);
    return result;
  };

  useEffect(() => {
    const formatedData = formatData(response);
    setData(formatedData);
    console.log("formatedData", formatedData);
  }, []);

  const renderedTree = (data) => {
    console.log("data", data);
    const [expandedItems,setExpandedItems]=useState({})
    const handleExpandToggle = (itemId)=>{
        setExpandedItems((prev)=>{
            return {
                ...prev,
                [itemId]:!prev[itemId]
            }
        })
    }

    
    return (
      <>
        <ul>
          {data?.map((item) => {
            return (
              <li key={item.id}>
                <span style={{cursor:'pointer'}} onClick={()=>handleExpandToggle(item.id)}>&gt;</span>
                {item.name}
                {expandedItems[item.id] && item.children.length > 0 && renderedTree(item.children)}
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <input placeholder="search..." />
      <div>{renderedTree(data)}</div>
    </div>
  );
};

export default TreeView;

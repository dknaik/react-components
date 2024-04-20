import React, { useState } from "react";
import "./tree.css"
const FolderComponent = ({ files }) => {
    const [expand,setExpand]=useState(false)
  return (
    <div>
      <div onClick={()=>setExpand(!expand)} className="folder">
        {files.isFolder ? (
          <>
            <button className={expand?'expand':''}>{">"}</button>
          </>
        ) : (
          null
        )}
        {files.name}
      </div>
      {
        files.isFolder &&  expand &&
        files.children.map((exp)=>(
            <div style={{paddingLeft:'20px'}}>
                <FolderComponent files={exp}/>
            </div>
        ))
      }
    </div>
  );
};

export default FolderComponent;

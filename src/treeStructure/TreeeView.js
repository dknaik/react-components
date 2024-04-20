import React from "react";
import FolderComponent from "./FolderComponent";
import { files } from "./data.js";

const TreeeView = () => {
  return (
    <div>
      <FolderComponent files={files} />
    </div>
  );
};

export default TreeeView;

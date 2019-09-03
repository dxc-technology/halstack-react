import React from "react";
import Tab from "@material-ui/core/Tab";


const DxcTab = ({ label = "", iconSrc = "", disabled = false }) => {
  return (
    <div>
      <Tab label={label} icon={iconSrc} disabled={disabled}/> 
    </div>
  );
};

export default DxcTab;

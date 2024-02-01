import {
  DxcDialog,
  DxcButton,
  DxcInset,
  DxcDropdown
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };
  const options = [
    {
      value: "1",
      label: "Amazon with a very long text",
    },
    {
      value: "2",
      label: "Ebay",
    },
    {
      value: "3",
      label: "Apple",
    },
  ];
  return (
    <DxcInset space="2rem">
      <DxcButton label="Enter your data" onClick={handleClick} />
      {isDialogVisible && (
        <DxcDialog onCloseClick={handleClick}>
          <DxcInset space="1.5rem">
            <DxcDropdown label="Default" options={options} onSelectOption={(value) => {}} />
          </DxcInset>
        </DxcDialog>
      )}
    </DxcInset>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog,
  DxcInset,
  DxcDropdown
};

export default { code, scope };

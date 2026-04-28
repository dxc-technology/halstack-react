import { DxcTimeInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (value) => {
    console.log(value);
  };
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTimeInput
        label="Enter your name"
        defaultValue="12:00 AM"
        onChange={onChange}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTimeInput,
  DxcInset,
  useState,
};

export default { code, scope };

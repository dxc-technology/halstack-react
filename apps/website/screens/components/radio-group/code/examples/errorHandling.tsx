import { DxcRadioGroup, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [error, setError] = useState("");
  const onBlur = ({ error }) => {
    setError(error);
  };

  const options = [
    { label: "Pasta", value: "pasta" },
    { label: "Fish", value: "fish" },
    { label: "Meat", value: "Meat" },
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcRadioGroup
        label="Food"
        options={options}
        onBlur={onBlur}
        error={error == null ? "" : error}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcRadioGroup,
  DxcInset,
  useState,
};

export default { code, scope };

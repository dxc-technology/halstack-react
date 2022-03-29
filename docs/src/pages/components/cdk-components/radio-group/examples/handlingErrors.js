import { DxcRadioGroup } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [error, setError] = useState("");
  const onBlur = ({ error }) => {
    setError(error);
  };

  const options = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "36px" }}>
      <DxcRadioGroup
        label="Error handling"
        helperText="Controlling the error state of a radio group"
        options={options}
        error={error == null ? "" : error}
        onBlur={onBlur}
      />
    </div>
  );
}`;

const scope = {
  DxcRadioGroup,
  useState,
};

export default { code, scope };

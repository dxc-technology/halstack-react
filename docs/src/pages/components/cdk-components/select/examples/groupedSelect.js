import { DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const options = [
    {
      label: "Managers",
      options: [
        { label: "Pablo", value: "pablo" },
        { label: "Marcos", value: "marcoss" },
        { label: "Rachel", value: "rachel" },
        { label: "Margaret", value: "margaret" },
      ],
    },
    {
      label: "Engineers",
      options: [
        { label: "Yiminghe", value: "yiminghe" },
        { label: "Manuel", value: "manuel" },
        { label: "Bryan", value: "bryan" },
        { label: "Anand", value: "anand" },
        { label: "Jiale", value: "jiale" },
      ],
    },
    {
      label: "Designers",
      options: [
        { label: "Alex", value: "alex" },
        { label: "Tim", value: "tim" },
        { label: "Jairo", value: "Jairo" },
      ],
    },
  ];

  return (
    <DxcSelect
      label="Label"
      placeholder="Choose options"
      options={options}
      multiple
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSelect,
  useState,
};

export default { code, scope };

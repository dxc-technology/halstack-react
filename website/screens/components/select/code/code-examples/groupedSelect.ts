import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const options = [
    {
      label: "Managers",
      options: [
        { label: "Pablo", value: "pablo" },
        { label: "Marcos", value: "marcos" },
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
    <DxcInset space="large">
      <DxcSelect
        label="Grouped options"
        placeholder="Choose options"
        options={options}
        multiple
        size="fillParent"
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcInset,
  useState,
};

export default { code, scope };

import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";

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
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcSelect
        label="Select your coworkers"
        placeholder="Choose a colleague"
        options={options}
        multiple
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcInset,
};

export default { code, scope };

import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    {
      label: "Designers",
      options: [
        { label: "Lara", value: "lara" },
        { label: "Irene", value: "irene" }
      ],
    },
    {
      label: "Developers",
      options: [
        { label: "Jairo", value: "jairo" },
        { label: "Enrique", value: "enrique" },
        { label: "Jiale", value: "jiale" },
        { label: "Iván", value: "ivan" }
      ],
    },
    {
      label: "Managers",
      options: [
        { label: "Aitor", value: "aitor" },
        { label: "Raquel", value: "Raquel" }
      ],
    },
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
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

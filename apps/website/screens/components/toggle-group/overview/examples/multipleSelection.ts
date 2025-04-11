import { DxcInset, DxcToggleGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    {
      value: 1,
      icon: "format_bold",
      title: "Bold",
    },
    {
      value: 2,
      icon: "format_italic",
      title: "Italic",
    },
    {
      value: 3,
      icon: "format_underlined",
      title: "Underlined",
    },
    {
      value: 4,
      icon: "format_align_left",
      title: "Align left",
    },
    {
      value: 5,
      icon: "format_align_center",
      title: "Align center",
    },
    {
      value: 6,
      icon: "format_align_right",
      title: "Align right",
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcToggleGroup
        defaultValue={[3, 4]}
        multiple
        options={options}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcToggleGroup,
};

export default { code, scope };

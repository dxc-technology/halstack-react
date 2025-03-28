import { DxcToggleGroup, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };
  const optionsWithIcon = [
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
        defaultValue={3}
        onChange={onChange}
        options={options}
        orientation="vertical"
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcToggleGroup,
  DxcInset,
};

export default { code, scope };

import { DxcToggleGroup, DxcInset } from "@repo/ui";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };
  const options = [
    {
      value: 1,
      label: "Facebook",
      icon: "filled_thumb_up"
    },
    {
      value: 2,
      label: "X",
      icon: "filled_raven"
    },
    {
      value: 3,
      label: "Linkedin",
      icon: "filled_work"
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcToggleGroup
        label="Choose a social network"
        defaultValue={2}
        options={options}
        onChange={onChange}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcToggleGroup,
  DxcInset,
};

export default { code, scope };

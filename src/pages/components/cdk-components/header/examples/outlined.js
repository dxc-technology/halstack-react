import { DxcHeader, DxcDropdown, DxcSwitch } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onClick = () => {};
  const selectOption = () => {};
  const optionsWithoutIcon = [
    {
      value: 1,
      label: "Amazon"
    },
    {
      value: 2,
      label: "Ebay"
    },
    {
      value: 3,
      label: "Apple"
    }
  ];

  return (
    <DxcHeader theme="light" underlined={true} onClick={onClick}>a
      <DxcDropdown
        theme={"light"}
        onSelectOption={selectOption}
        label={"Dropdown"}
        options={optionsWithoutIcon}
        mode="outlined"
      />
    </DxcHeader>
  );
}`;

const scope = {
  DxcHeader,
  DxcDropdown,
  DxcSwitch
};

export default { code, scope };

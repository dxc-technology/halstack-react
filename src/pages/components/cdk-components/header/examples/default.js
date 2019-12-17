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
    <DxcHeader theme="light" underlined={false} onClick={onClick}>
      <DxcDropdown
        theme={"light"}
        onSelectOption={selectOption}
        label={"Dropdown"}
        options={optionsWithoutIcon}
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

import { DxcDropdown, DxcRow, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const icon = (
    <svg
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      fill="currentColor"
    >
      <g id="Bounding_Box">
        <rect fill="none" width="24" height="24" />
      </g>
      <g id="Master">
        <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
      </g>
    </svg>
  );

  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Option 1",
    },
    {
      value: 2,
      label: "Option 2",
    },
    {
      value: 3,
      label: "Option 3",
    },
  ];

  return (
    <DxcInset space="large">
      <DxcRow justify="center">
        <DxcDropdown
          icon={icon}
          options={options}
          onSelectOption={selectOption}
        ></DxcDropdown>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcDropdown,
  DxcRow,
  DxcInset,
};

export default { code, scope };

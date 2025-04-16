import { DxcSelect, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
    { label: "Option 05", value: "5" },
    { label: "Option 06", value: "6" },
    { label: "Option 07", value: "7" },
    { label: "Option 08", value: "8" },
    { label: "Option 09", value: "9" },
    { label: "Option 10", value: "10" },
    { label: "Option 11", value: "11" },
    { label: "Option 12", value: "12" },
    { label: "Option 13", value: "13" },
    { label: "Option 14", value: "14" },
    { label: "Option 15", value: "15" },
    { label: "Option 16", value: "16" },
    { label: "Option 17", value: "17" },
    { label: "Option 18", value: "18" },
    { label: "Option 19", value: "19" },
    { label: "Option 20", value: "20" },
    { label: "Option 21", value: "21" },
    { label: "Option 22", value: "22" },
    { label: "Option 23", value: "23" },
    { label: "Option 24", value: "24" },
    { label: "Option 25", value: "25" },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="center">
        <DxcSelect
          label="Single searchable"
          placeholder="Choose an option"
          helperText="Type to search among the available options"
          options={options}
          searchable
        />
        <DxcSelect
          label="Multiple searchable"
          helperText="Select one or more options"
          defaultValue={["1", "2"]}
          options={options}
          multiple
          searchable
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcFlex,
  DxcInset,
};

export default { code, scope };

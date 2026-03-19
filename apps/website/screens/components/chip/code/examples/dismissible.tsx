import { DxcChip, DxcFlex, DxcInset, DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

type Option = { label: string; value: string; icon: string };

const options: Option[] = [
  { label: "Electric Car", value: "car", icon: "electric_car" },
  { label: "Motorcycle", value: "motorcycle", icon: "Motorcycle" },
  { label: "Train", value: "train", icon: "train" },
  { label: "Bike", value: "bike", icon: "pedal_bike" },
];

const findOptionByValue = (value: string): Option | null => options.find((opt) => opt.value === value) ?? null;

type TransportSelectProps = {
  selectedOptions: Option[];
  onChange: (selected: Option[]) => void;
};

const TransportSelect = ({ selectedOptions, onChange }: TransportSelectProps) => {
  const handleSelectChange = ({ value }: { value: string | string[] }) => {
    if (Array.isArray(value)) {
      onChange(value.map((val) => findOptionByValue(val)).filter(Boolean) as Option[]);
    }
  };

  return (
    <DxcSelect
      label="Select your favourite vehicles"
      placeholder="Choose your vehicles"
      options={options}
      onChange={handleSelectChange}
      value={selectedOptions.map((opt) => opt.value)}
      multiple
      enableSelectAll
    />
  );
};

const code = `() => {
  const [selectedOptions, setSelectedOptions] = useState([options[0], options[2]]);

  const handleDismiss = (valueToRemove) => {
    setSelectedOptions(selectedOptions.filter(opt => opt.value !== valueToRemove));
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-m)">
        <TransportSelect selectedOptions={selectedOptions} onChange={setSelectedOptions} />

        {selectedOptions.length > 0 && (
          <DxcFlex gap="var(--spacing-gap-s)" wrap="wrap">
            {selectedOptions.map((option) => (
              <DxcChip
                key={option.value}
                mode="dismissible"
                label={option.label}
                prefix={option.icon}
                onClick={() => handleDismiss(option.value)}
              />
            ))}
          </DxcFlex>
        )}
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
  DxcFlex,
  useState,
  options,
  TransportSelect,
};

export default { code, scope };

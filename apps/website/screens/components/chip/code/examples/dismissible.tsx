import { DxcChip, DxcFlex, DxcInset, DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const options = [
    {
      label: "Electric Car",
      value: "car",
      icon: "electric_car",
    },
    {
      label: "Motorcycle",
      value: "motorcycle",
      icon: "Motorcycle",
    },
    {
      label: "Train",
      value: "train",
      icon: "train",
    },
    {
      label: "Bike",
      value: "bike",
      icon: "pedal_bike",
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState([options[0], options[2]]);

  const findOptionByValue = (value) => {
    return options.find(opt => opt.value === value) || null;
  };

  const handleSelectChange = ({ value }) => {
    if (Array.isArray(value)) {
      const newSelectedOptions = value.map(val => findOptionByValue(val)).filter(Boolean);
      setSelectedOptions(newSelectedOptions);
    }
  };

  const handleDismiss = (valueToRemove) => {
    setSelectedOptions(selectedOptions.filter(opt => opt.value !== valueToRemove));
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-m)">
        <DxcSelect
          label="Select your favourite hobbies"
          placeholder="Choose your hobbies"
          options={options}
          onChange={handleSelectChange}
          value={selectedOptions.map(opt => opt.value)}
          multiple
          enableSelectAll
        />
        
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
  DxcSelect,
  useState,
};

export default { code, scope };

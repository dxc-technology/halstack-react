import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcFlex from "../flex/Flex";
import DxcNumberInput from "./NumberInput";
import { useState } from "react";
import DxcTextInput from "../text-input/TextInput";

export default {
  title: "Number Input",
  component: DxcNumberInput,
} as Meta<typeof DxcNumberInput>;

// const formatNumber = (value: string | number, decimals = 2, thousandSep = ",", decimalSep = ".") => {
//   if (value === "" || isNaN(Number(value))) return "";
//   const fixed = Number(value).toFixed(decimals);
//   const [intPart, decPart] = fixed.split(thousandSep);
//   const withThousands = intPart?.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSep) ?? "";
//   return decPart ? `${withThousands}${decimalSep}${decPart}` : withThousands;
// };

// const NumberInputWithFormat = () => {
//   const [value, setValue] = useState("");

//   const handleUpdate = ({ value }) => {
//     setValue(value);
//     const numericValue = formatNumber(value);
//     console.log("NUMERICVALUE", numericValue);
//   };

//   return <DxcNumberInput label="Importe" value={value} onChange={handleUpdate} onBlur={handleUpdate} />;
// };

const formatNumber = (value: string, locale: string = "es-ES", decimals: number = 2) => {
  if (value === "" || isNaN(Number(value))) return value;
  const number = Number(value);
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
};

const NumberInputWithFormat = () => {
  const [value, setValue] = useState("");

  const handleChange = ({ value }: { value: string }) => {
    // Prevent other characters than numbers, comma, dot and minus
    const filtered = value.replace(/[^0-9.,-]/g, "");
    setValue(filtered);
  };

  const handleBlur = ({ value }: { value: string }) => {
    const formatted = formatNumber(value, "en-EN", 2);
    setValue(formatted);
  };

  return <DxcTextInput pattern="^[0-9.,-]*$" value={value} onChange={handleChange} onBlur={handleBlur} prefix="$" />;
};

const NumberInput = () => (
  <>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcNumberInput />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Without controls" theme="light" level={4} />
      <DxcNumberInput showControls={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label and placeholder" theme="light" level={4} />
      <DxcNumberInput label="Number input" placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Helper text, optional and value" theme="light" level={4} />
      <DxcNumberInput label="Number input" defaultValue="12" helperText="Help message" optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled and placeholder" theme="light" level={4} />
      <DxcNumberInput label="Disabled number input" disabled placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled, helper text, optional and value" theme="light" level={4} />
      <DxcNumberInput label="Disabled number input" helperText="Help message" disabled optional defaultValue="10" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Read only" theme="light" level={4} />
      <DxcNumberInput label="Example label" helperText="Help message" readOnly optional prefix="€" defaultValue="33" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered read only" theme="light" level={4} />
      <DxcNumberInput label="Example label" helperText="Help message" readOnly optional prefix="€" defaultValue="1" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active read only" theme="light" level={4} />
      <DxcNumberInput
        label="Example label"
        helperText="Help message"
        readOnly
        optional
        prefix="€"
        placeholder="Placeholder"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Prefix" theme="light" level={4} />
      <DxcNumberInput label="With prefix" prefix="+34" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Suffix" theme="light" level={4} />
      <DxcNumberInput label="With suffix" suffix="USD" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <DxcNumberInput
        label="Error number input"
        helperText="Help message"
        error="Error message."
        defaultValue="23"
        optional
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcNumberInput label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcNumberInput label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcNumberInput label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcNumberInput label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcNumberInput label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcNumberInput label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcNumberInput label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcNumberInput label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcNumberInput label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcNumberInput label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcNumberInput label="FillParent" size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Different sizes inside a flex" theme="light" level={4} />
      <DxcFlex justifyContent="space-between" gap="var(--spacing-gap-ml)">
        <DxcNumberInput label="fillParent" size="fillParent" />
        <DxcNumberInput label="medium" size="medium" />
        <DxcNumberInput label="large" size="large" />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Amount" theme="light" level={4} />
      <NumberInputWithFormat />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcNumberInput>;

export const Chromatic: Story = {
  render: NumberInput,
};

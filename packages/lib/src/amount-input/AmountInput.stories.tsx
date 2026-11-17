import { Meta, StoryObj } from "@storybook/react-vite";
import type { CurrencyConfigType, UnitsConfigType } from "./types";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcAmountInput from "./AmountInput";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Amount Input",
  component: DxcAmountInput,
} satisfies Meta<typeof DxcAmountInput>;

const currencyConfig = {
  currency: "CNY",
  currencyDisplay: "symbol",
  currencySign: "accounting",
} as CurrencyConfigType;

const unitsConfig = {
  unit: "kilometer",
  unitDisplay: "short",
} as UnitsConfigType;

const Examples = () => {
  return (
    <>
      <DxcAmountInput label="Amount" helperText="Help message" readOnly optional defaultValue="1234.56" />
      <DxcAmountInput label="Amount" helperText="Help message" optional defaultValue="1234.56" clearable />
      <DxcAmountInput alignment="right" label="Distance" defaultValue="1231234.56" config={{ unitsConfig }} clearable />
      <DxcAmountInput label="Amount" helperText="Help message" error="Error message." defaultValue="1234.56" />
    </>
  );
};

const LocalizationExamples = () => {
  return (
    <>
      <DxcAmountInput label="Amount" helperText="Help message" optional defaultValue="1231234.56" clearable />
      <DxcAmountInput
        label="Amount"
        helperText="Help message"
        optional
        defaultValue="1231234.56"
        clearable
        config={{ currencyConfig }}
      />
      <DxcAmountInput
        label="Amount"
        helperText="Symbol after"
        optional
        defaultValue="1231234.56"
        clearable
        config={{ currencyConfig, symbolPosition: "after" }}
      />
      <DxcAmountInput
        label="Amount"
        helperText="Symbol before"
        optional
        defaultValue="1231234.56"
        clearable
        config={{ currencyConfig, symbolPosition: "before" }}
      />
      <DxcAmountInput
        label="Distance"
        defaultValue="1231234.56"
        config={{ unitsConfig }}
        onBlur={({ value, error }) => {
          console.log({ value, error });
        }}
        clearable
      />
      <DxcAmountInput label="Amount" helperText="Negative" defaultValue="-1234.56" config={{ currencyConfig }} />
    </>
  );
};

const AmountInput = () => {
  return (
    <>
      <HalstackProvider localeTag="en-US">
        <ExampleContainer>
          <Title title="Without label" theme="light" level={4} />
          <DxcAmountInput ariaLabel="Amount" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="With label and placeholder" theme="light" level={4} />
          <DxcAmountInput label="Amount" placeholder="Enter an amount" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Helper text, optional, value and clearable" theme="light" level={4} />
          <DxcAmountInput label="Amount" helperText="Enter an amount" optional defaultValue="1234.56" clearable />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled with placeholder" theme="light" level={4} />
          <DxcAmountInput label="Disabled amount" disabled placeholder="Enter an amount" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled with value" theme="light" level={4} />
          <DxcAmountInput label="Disabled amount" helperText="Help message" disabled optional defaultValue="1234.56" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Read only" theme="light" level={4} />
          <DxcAmountInput label="Amount" helperText="Help message" readOnly optional defaultValue="1234.56" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Invalid" theme="light" level={4} />
          <DxcAmountInput label="Amount" helperText="Help message" error="Error message." defaultValue="1234.56" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered" theme="light" level={4} />
          <Examples />
          <DxcAmountInput label="Amount" helperText="Help message" error="Error message." defaultValue="1234.56" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Active" theme="light" level={4} />
          <Examples />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Focused" theme="light" level={4} />
          <Examples />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Configuration" theme="light" level={2} />
          <DxcAmountInput label="Distance" defaultValue="1231234.56" config={{ unitsConfig }} />
          <DxcAmountInput label="Currency" defaultValue="1231234.56" config={{ currencyConfig }} />
          <DxcAmountInput
            label="Custom separators"
            defaultValue="1231234.56"
            config={{ decimalSeparator: "@", thousandSeparator: "#" }}
          />
          <DxcAmountInput alignment="right" label="Distance" defaultValue="1231234.56" config={{ unitsConfig }} />
          <DxcAmountInput alignment="right" label="Currency" defaultValue="1231234.56" config={{ currencyConfig }} />
          <DxcAmountInput
            alignment="right"
            label="Custom separators"
            defaultValue="1231234.56"
            config={{ decimalSeparator: "@", thousandSeparator: "#" }}
          />
        </ExampleContainer>
        <ExampleContainer>
          <HalstackProvider localeTag="nl-NL">
            <Title title="nl-NL locale" theme="light" level={3} />
            <LocalizationExamples />
          </HalstackProvider>
          <HalstackProvider localeTag="fr-FR">
            <Title title="fr-FR locale" theme="light" level={3} />
            <LocalizationExamples />
          </HalstackProvider>
        </ExampleContainer>
        <Title title="Sizes" theme="light" level={2} />
        <ExampleContainer>
          <Title title="Small size" theme="light" level={4} />
          <DxcAmountInput label="Small" size="small" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Medium size" theme="light" level={4} />
          <DxcAmountInput label="Medium" size="medium" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Large size" theme="light" level={4} />
          <DxcAmountInput label="Large" size="large" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Fill parent size" theme="light" level={4} />
          <DxcAmountInput label="Fill parent" size="fillParent" />
        </ExampleContainer>
      </HalstackProvider>
    </>
  );
};

type Story = StoryObj<typeof AmountInput>;

export const Chromatic: Story = {
  render: AmountInput,
};

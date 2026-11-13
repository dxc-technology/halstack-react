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

const AmountInput = () => {
  const currencyConfig = {
    currency: "CNY",
    currencyDisplay: "symbol",
    currencySign: "standard",
  } as CurrencyConfigType;

  const unitsConfig = {
    unit: "kilometer",
    unitDisplay: "short",
  } as UnitsConfigType;
  return (
    <>
      <ExampleContainer>
        <Title title="Without label" theme="light" level={4} />
        {/* <DxcAmountInput /> */}
        <HalstackProvider localeTag="en-IN">
          <DxcAmountInput label="Amount default" helperText="US locale" />
          <DxcAmountInput
            label="Amount in RMB"
            config={{ currencyConfig: currencyConfig }}
            defaultValue="1234.56"
            maxValue={10000}
            minValue={1000}
            onChange={(event) => console.log(event)}
            onBlur={(event) => console.log(event)}
            alignment="right"
            clearable
          />
          <DxcAmountInput
            label="Distance in km"
            config={{ unitsConfig: unitsConfig, decimalSeparator: "()", thousandSeparator: "@" }}
          />
        </HalstackProvider>
        <DxcAmountInput label="Amount default" helperText="no locale" />
        <DxcAmountInput label="Amount in RMB" config={{ currencyConfig: currencyConfig }} />
        <DxcAmountInput
          label="Distance in km"
          config={{ unitsConfig: unitsConfig, decimalSeparator: "()", thousandSeparator: "@" }}
        />
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof AmountInput>;

export const Chromatic: Story = {
  render: AmountInput,
};

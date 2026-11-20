import {
  DxcAmountInput,
  DxcDateInput,
  DxcTimeInput,
  HalstackProvider,
  DxcInset,
  DxcFlex,
} from "@dxc-technology/halstack-react";

const code = `() => {

const labels = {
  formFields: {
    optionalLabel: "(Freiwillig)",
  },
};

  return (
    <HalstackProvider localeTag="de-DE" labels={labels}>
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex direction="column" gap="2rem">
          <DxcDateInput
            label="Date"
            placeholder
            optional
          />
          <DxcTimeInput
            label="Time"
            optional
          />
          <DxcAmountInput
            label="Amount"
            optional
            config={{
              currencyConfig: {
                currency: "EUR",
              },
            }}
          />
        </DxcFlex>
      </DxcInset>
    </HalstackProvider>
  );
}`;

const scope = {
  DxcFlex,
  DxcTimeInput,
  DxcDateInput,
  DxcAmountInput,
  HalstackProvider,
  DxcInset,
};

export default { code, scope };

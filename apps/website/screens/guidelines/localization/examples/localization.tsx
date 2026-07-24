import { DxcDateInput, DxcTimeInput, HalstackProvider, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

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
            placeholder="Select a date"
            optional
          />
          <DxcTimeInput
            label="Time"
            optional
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
  HalstackProvider,
  DxcInset,
};

export default { code, scope };

import { DxcDateInput, HalstackProvider, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {

  return (
    <HalstackProvider localeTag="de-DE">
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcDateInput
          label="Date"
          placeholder="Select a date"
          optional
        />
      </DxcInset>
    </HalstackProvider>
  );
}`;

const scope = {
  DxcDateInput,
  HalstackProvider,
  DxcInset,
};

export default { code, scope };

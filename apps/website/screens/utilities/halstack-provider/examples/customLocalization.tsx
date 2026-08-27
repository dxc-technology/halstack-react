import { DxcTextInput, HalstackProvider, DxcDateInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const labels = {
    formFields: {
      optionalLabel: "(Optionnel)",
    },
  };

  return (
    <HalstackProvider labels={labels} localeTag="fr-CH">
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex gap="var(--spacing-gap-xl)" direction="column">
          <DxcTextInput
            label="Input text"
            defaultValue="Example text"
            clearable
            optional
          />
          <DxcDateInput
            label="Date"
            placeholder="Select a date"
            optional
          />
          </DxcFlex>
        </DxcInset>
    </HalstackProvider>
  );
}`;

const scope = {
  DxcTextInput,
  DxcDateInput,
  HalstackProvider,
  DxcInset,
  DxcFlex,
};

export default { code, scope };

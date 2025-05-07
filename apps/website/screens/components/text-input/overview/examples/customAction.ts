import { DxcTextInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const copyAction = {
    onClick: () => {
      console.log("Copied.");
    },
    icon: "Content_Copy",
    title: "Copy",
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex justifyContent="center">
        <DxcTextInput
          action={copyAction}
          clearable
          defaultValue="J.Smith1961"
          helperText="How should we call you?"
          label="Username"
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };

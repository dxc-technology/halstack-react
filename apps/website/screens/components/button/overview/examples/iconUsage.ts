import { DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1.5rem">
        <DxcFlex justifyContent="space-evenly">
          <DxcButton label="Primary" size={{ width: "large" }} icon="filled_home" />
          <DxcButton label="Primary" size={{ width: "large" }} iconPosition="after" icon="filled_home" />
          <DxcButton icon="filled_home" title="Go home" />
        </DxcFlex>
        <DxcFlex justifyContent="space-evenly">
          <DxcButton size={{ width: "large" }} mode="secondary" label="Secondary" icon="filled_home" />
          <DxcButton
            size={{ width: "large" }}
            mode="secondary"
            label="Secondary"
            iconPosition="after"
            icon="filled_home"
          />
          <DxcButton mode="secondary" icon="filled_home" title="Go home" />
        </DxcFlex>
        <DxcFlex justifyContent="space-evenly">
          <DxcButton label="Tertiary" mode="tertiary" size={{ width: "large" }} icon="filled_home" />
          <DxcButton
            label="Tertiary"
            mode="tertiary"
            size={{ width: "large" }}
            iconPosition="after"
            icon="filled_home"
          />
          <DxcButton mode="tertiary" icon="filled_home" title="Go home" />
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcFlex,
  DxcInset,
};

export default { code, scope };

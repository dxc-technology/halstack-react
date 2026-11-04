import { DxcButtonLink, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcFlex justifyContent="space-evenly">
          <DxcButtonLink href="#" label="Primary" size={{ width: "large" }} icon="filled_home" />
          <DxcButtonLink href="#" label="Primary" size={{ width: "large" }} iconPosition="after" icon="filled_home" />
          <DxcButtonLink href="#" icon="filled_home" title="Go home" />
        </DxcFlex>
        <DxcFlex justifyContent="space-evenly">
          <DxcButtonLink href="#" size={{ width: "large" }} mode="secondary" label="Secondary" icon="filled_home" />
          <DxcButtonLink
            href="#"
            size={{ width: "large" }}
            mode="secondary"
            label="Secondary"
            iconPosition="after"
            icon="filled_home"
          />
          <DxcButtonLink mode="secondary" icon="filled_home" title="Go home" />
        </DxcFlex>
        <DxcFlex justifyContent="space-evenly">
          <DxcButtonLink href="#" label="Tertiary" mode="tertiary" size={{ width: "large" }} icon="filled_home" />
          <DxcButtonLink
            href="#"
            label="Tertiary"
            mode="tertiary"
            size={{ width: "large" }}
            iconPosition="after"
            icon="filled_home"
          />
          <DxcButtonLink href="#" mode="tertiary" icon="filled_home" title="Go home" />
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButtonLink,
  DxcFlex,
  DxcInset,
};

export default { code, scope };

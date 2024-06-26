import { DxcButton, DxcFlex, DxcInset } from "@repo/ui";

const code = `() => {

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1.5rem">
        <DxcFlex justifyContent="space-evenly">
          <DxcButton label="Primary" size="large" icon="filled_home" />
          <DxcButton
            label="Primary"
            size="large"
            iconPosition="after"
            icon="filled_home"
          />
          <DxcButton icon="filled_home" title="Go home" />
        </DxcFlex>
        <DxcFlex justifyContent="space-evenly">
          <DxcButton
            size="large"
            mode="secondary"
            label="Secondary"
            icon="filled_home"
          />
          <DxcButton
            size="large"
            mode="secondary"
            label="Secondary"
            iconPosition="after"
            icon="filled_home"
          />
          <DxcButton mode="secondary" icon="filled_home" title="Go home" />
        </DxcFlex>
        <DxcFlex justifyContent="space-evenly">
          <DxcButton label="Text" mode="text" size="large" icon="filled_home" />
          <DxcButton
            label="Text"
            mode="text"
            size="large"
            iconPosition="after"
            icon="filled_home"
          />
          <DxcButton mode="text" icon="filled_home" title="Go home" />
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

import { DxcCheckbox, DxcInset, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="5rem" justifyContent="center">
        <DxcFlex direction="column" gap="0.5rem">
          <DxcHeading level={4} text="Vertical" />
          <DxcCheckbox label="Option" labelPosition="after" />
          <DxcCheckbox label="Option" labelPosition="after" />
          <DxcCheckbox label="Option" labelPosition="after" />
        </DxcFlex>
        <DxcFlex direction="column" gap="0.5rem">
          <DxcHeading level={4} text="Horizontal" />
          <DxcFlex gap="1.5rem">
            <DxcCheckbox label="Option" labelPosition="after" />
            <DxcCheckbox label="Option" labelPosition="after" />
            <DxcCheckbox label="Option" labelPosition="after" />
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcFlex,
  DxcHeading,
};

export default { code, scope };

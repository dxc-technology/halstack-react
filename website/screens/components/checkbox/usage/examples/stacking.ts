import {
  DxcCheckbox,
  DxcInset,
  DxcStack,
  DxcRow,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcRow gutter="xxxlarge" justify="center">
        <DxcStack gutter="0.5rem">
          <DxcHeading level={4} text="Vertical"></DxcHeading>
          <DxcCheckbox label="Option" labelPosition="after" />
          <DxcCheckbox label="Option" labelPosition="after" />
          <DxcCheckbox label="Option" labelPosition="after" />
        </DxcStack>
        <DxcStack gutter="0.5rem">
          <DxcHeading level={4} text="Horizontal"></DxcHeading>
          <DxcRow gutter="medium">
            <DxcCheckbox label="Option" labelPosition="after"></DxcCheckbox>
            <DxcCheckbox label="Option" labelPosition="after"></DxcCheckbox>
            <DxcCheckbox label="Option" labelPosition="after"></DxcCheckbox>
          </DxcRow>
        </DxcStack>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcStack,
  DxcRow,
  DxcHeading,
};

export default { code, scope };

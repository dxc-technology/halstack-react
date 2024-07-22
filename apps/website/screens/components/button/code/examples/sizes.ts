import { DxcButton, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
    <DxcFlex gap="1.5rem" direction="column">
        <DxcFlex gap="1.5rem">
          <DxcButton icon="person" semantic="default" size={{ height: "small", width: "small" }} />
          <DxcButton label="Submit" size={{ height: "small", width: "medium" }} />
          <DxcButton label="Search" icon="search" iconPosition="after" size={{ height: "small", width: "large" }} />
          <DxcButton label="Edit" iconPosition="after" size={{ height: "small", width: "fitContent" }} />
          <DxcButton label="Learn more" size={{ height: "small", width: "fillParent" }} />
        </DxcFlex>
        <DxcFlex gap="1.5rem">
          <DxcButton icon="person"semantic="default" size={{ height: "medium", width: "small" }} />
          <DxcButton label="Submit" size={{ height: "medium", width: "medium" }} />
          <DxcButton label="Search" icon="search" iconPosition="after" size={{ height: "medium", width: "large" }} />
          <DxcButton label="Edit" iconPosition="after" size={{ height: "medium", width: "fitContent" }} />
          <DxcButton label="Learn more" size={{ height: "medium", width: "fillParent" }} />
        </DxcFlex>
        <DxcFlex gap="1.5rem">
          <DxcButton icon="person" semantic="default" size={{ height: "large", width: "small"}} />
          <DxcButton label="Submit" size={{ height: "large", width: "medium" }} />
          <DxcButton label="Search" icon="search" iconPosition="after" size={{ height: "large", width: "large" }} />
          <DxcButton label="Edit" iconPosition="after" size={{ height: "large", width: "fitContent" }} />
          <DxcButton label="Learn more" size={{ height: "large", width: "fillParent" }} />
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
  DxcFlex,
};

export default { code, scope };

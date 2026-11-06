import { DxcButtonLink, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
    <DxcFlex gap="var(--spacing-gap-l)" direction="column">
        <DxcFlex gap="var(--spacing-gap-l)">
          <DxcButtonLink href="#" icon="person" semantic="default" size={{ height: "small", width: "small" }} />
          <DxcButtonLink href="#" label="Submit" size={{ height: "small", width: "medium" }} />
          <DxcButtonLink href="#" label="Search" icon="search" size={{ height: "small", width: "large" }} />
          <DxcButtonLink href="#" label="Edit" size={{ height: "small", width: "fitContent" }} />
          <DxcButtonLink href="#" label="Learn more" size={{ height: "small", width: "fillParent" }} />
        </DxcFlex>
        <DxcFlex gap="var(--spacing-gap-l)">
          <DxcButtonLink href="#" icon="person" semantic="default" size={{ height: "medium", width: "small" }} />
          <DxcButtonLink href="#" label="Submit" size={{ height: "medium", width: "medium" }} />
          <DxcButtonLink href="#" label="Search" icon="search" size={{ height: "medium", width: "large" }} />
          <DxcButtonLink href="#" label="Edit" size={{ height: "medium", width: "fitContent" }} />
          <DxcButtonLink href="#" label="Learn more" size={{ height: "medium", width: "fillParent" }} />
        </DxcFlex>
        <DxcFlex gap="var(--spacing-gap-l)">
          <DxcButtonLink href="#" icon="person" semantic="default" size={{ height: "large", width: "small"}} />
          <DxcButtonLink href="#" label="Submit" size={{ height: "large", width: "medium" }} />
          <DxcButtonLink href="#" label="Search" icon="search" size={{ height: "large", width: "large" }} />
          <DxcButtonLink href="#" label="Edit" size={{ height: "large", width: "fitContent" }} />
          <DxcButtonLink href="#" label="Learn more" size={{ height: "large", width: "fillParent" }} />
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButtonLink,
  DxcInset,
  DxcFlex,
};

export default { code, scope };

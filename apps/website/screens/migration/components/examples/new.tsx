import { DxcContainer, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)">
        <DxcContainer 
          width="100%"
          height="var(--height-xxl)"
          background={{color: "var(--color-bg-primary-medium)"}}
        />
        <DxcContainer
          width="100%"
          height="var(--height-xxl)"
          background={{color: "var(--color-bg-primary-strong)"}}
        />
        <DxcContainer
          width="100%"
          height="var(--height-xxl)"
          background={{color: "var(--color-bg-primary-medium)"}}
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcFlex,
  DxcInset,
  DxcContainer,
};

export default { code, scope };

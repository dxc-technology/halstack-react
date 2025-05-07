import { DxcButton, DxcFlex, DxcHeading, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";

const code = `() => (
  <DxcInset space="var(--spacing-padding-xl)">
    <DxcFlex direction="column" gap="var(--spacing-gap-l)">
      <DxcHeading level={2} text="Welcome to Halstack!" />
      <DxcParagraph>
        Halstack is an Open Source Design System built and maintained by DXC Technology 
        with the purpose of providing all the necessary tools for designing 
        and implementing accessible, intuitive and consistent User Experiences 
        with Figma, UXPin and React.
      </DxcParagraph>
      <DxcButton label="Click me!" onClick={() => alert("Hello world!")} />
    </DxcFlex>
  </DxcInset>
);`;

const scope = {
  DxcButton, DxcFlex, DxcHeading, DxcInset, DxcParagraph
};

export default { code, scope };

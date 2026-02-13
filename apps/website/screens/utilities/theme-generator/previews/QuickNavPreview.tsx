import { DxcQuickNav, DxcInset, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const QuickNavPreview = () => {
  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Quick Nav" />
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcQuickNav links={links} />
      </DxcInset>
    </DxcFlex>
  );
};

export default QuickNavPreview;

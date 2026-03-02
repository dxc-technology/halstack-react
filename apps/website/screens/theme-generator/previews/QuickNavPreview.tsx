import { DxcQuickNav } from "@dxc-technology/halstack-react";

const QuickNavPreview = () => {
  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  return <DxcQuickNav links={links} />;
};

export default QuickNavPreview;

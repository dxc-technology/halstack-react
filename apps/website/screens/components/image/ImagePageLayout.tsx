import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ImagePageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/image" },
    { label: "Usage", path: "/components/image/usage" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Image" />
          <DxcParagraph>The Image component is used to embed images in Halstack-based user interfaces.</DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ImagePageHeading;

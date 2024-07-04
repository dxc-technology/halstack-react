import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const SliderPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/slider" },
    { label: "Usage", path: "/components/slider/usage" },
    { label: "Specifications", path: "/components/slider/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Slider" />
          <DxcParagraph>
            Slider control allows users to select a specific value or a range of values from a set. Usually, slider
            presents a relatively large dataset and the way that the user interacts with it is helpful to explore the
            multiple options swiftly.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default SliderPageHeading;

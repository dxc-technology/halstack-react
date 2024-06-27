import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BarChartPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/bar-chart" },
    { label: "Usage", path: "/components/bar-chart/usage" },
    { label: "Specifications", path: "/components/bar-chart/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Bar Chart" />
          <DxcParagraph>
            A bar chart is a graphical representation that displays and compares discrete data categories using
            rectangular bars. Each bar's length or height is proportional to the frequency or value of its corresponding
            category, allowing users to identify which groups are the highest or most common and compare them with
            others.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BarChartPageHeading;

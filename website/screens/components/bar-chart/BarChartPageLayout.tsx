import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BarChartPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/bar-chart" },
    // { label: "Usage", path: "/components/bar-chart/usage" },
    // { label: "Specifications", path: "/components/bar-chart/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Bar Chart" />
          <DxcParagraph>
            The bar chart component enables users to visualize data in a simple
            and intuitive way. It is used to represent data in a graphical way
            and is frequently used to display numerical data.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BarChartPageHeading;

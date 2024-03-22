import PageHeading from "@/common/PageHeading";
import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const BreadcrumbsPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [{ label: "Code", path: "/components/breadcrumbs" }];
  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Breadcrumbs" />
          <DxcParagraph>
            The Breadcrumbs component represents a list of links showing the
            location of the current page in the navigational hierarchy.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default BreadcrumbsPageHeading;

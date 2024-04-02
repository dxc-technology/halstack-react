import {
  DxcParagraph,
  DxcFlex,
  DxcAlert,
} from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const ContainerPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/container" },
    { label: "Usage", path: "/components/container/usage" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Container" />
          <DxcParagraph>
            The container component represents the box model inside the Halstack
            Design System. Is a general-purpose container that allows for
            controlled use of our design tokens. Being generic in nature can be
            "over-used", so it's important to consider situations where more
            specific and expressive components could be used.
          </DxcParagraph>
          <DxcAlert
            type="warning"
            size="fillParent"
            inlineText="Our design tokens are still being developed, so this component may change over time."
          />
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default ContainerPageHeading;

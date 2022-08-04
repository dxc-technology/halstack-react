import { DxcParagraph, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const NumberInputPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Code", path: "/components/number-input" },
    { label: "Usage", path: "/components/number-input/usage" },
    {
      label: "Specifications",
      path: "/components/number-input/specifications",
    },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <ComponentHeading name="Number Input" status="Ready" />
          <DxcParagraph>
            The number input is a text input component that only allows
            numerical values and it has controls for incrementing or
            decrementing them.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default NumberInputPageHeading;

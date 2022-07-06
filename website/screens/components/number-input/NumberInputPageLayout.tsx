import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
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
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="Number Input" status="Ready" />
          <DxcText as="p">
            The number input is a text input component that only allows
            numerical values and it has controls for incrementing or
            decrementing them.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default NumberInputPageHeading;

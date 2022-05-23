import { DxcHeading, DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";

const NumberInputPageHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const tabs = [
    { label: "Usage", path: "/components/number-input" },
    {
      label: "Specifications",
      path: "/components/number-input/specifications",
    },
  ];

  return (
    <DxcStack gutter="xlarge">
      <PageHeading>
        <DxcStack gutter="large">
          <DxcHeading level={1} text="Number Input" weight="bold"></DxcHeading>
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

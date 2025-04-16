import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const RadioGroupPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/radio-group" },
    { label: "Code", path: "/components/radio-group/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="Radio group" />
          <DxcParagraph>
            A radio group allows users to select one option from a set of related, mutually exclusive choices.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default RadioGroupPageHeading;

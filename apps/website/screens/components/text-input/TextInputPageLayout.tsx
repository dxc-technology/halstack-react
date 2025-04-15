import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const TextInputPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/text-input" },
    { label: "Usage", path: "/components/text-input/usage" },
    { label: "Specifications", path: "/components/text-input/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Text Input" />
          <DxcParagraph>
            Text inputs are input fields typically used in forms that allow the user to enter text data in a structured
            format.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TextInputPageHeading;

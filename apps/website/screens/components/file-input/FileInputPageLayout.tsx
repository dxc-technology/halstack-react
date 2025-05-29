import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const FileInputPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Overview", path: "/components/file-input" },
    { label: "Code", path: "/components/file-input/code" },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <ComponentHeading name="File Input" />
          <DxcParagraph>
            File inputs are used to allow users to upload one or more files from their local device to an application in
            a structured and accessible way.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs} />
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default FileInputPageHeading;

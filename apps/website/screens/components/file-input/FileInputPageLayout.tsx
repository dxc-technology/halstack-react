import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";
import { ReactNode } from "react";

const FileInputPageHeading = ({ children }: { children: ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/file-input" },
    { label: "Usage", path: "/components/file-input/usage" },
    {
      label: "Specifications",
      path: "/components/file-input/specifications",
    },
  ];

  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="File Input" />
          <DxcParagraph>
            The file input component is used to choose files from any location in the local machine and update those
            files to the server where the application is hosted. It is a common procedure in applications where files
            are required, like documents, images, or other information in digital formats.
          </DxcParagraph>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default FileInputPageHeading;

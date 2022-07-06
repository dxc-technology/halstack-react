import { DxcText, DxcStack } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const FileInputPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/file-input" },
    { label: "Usage", path: "/components/file-input/usage" },
    {
      label: "Specifications",
      path: "/components/file-input/specifications",
    },
  ];

  return (
    <DxcStack gutter="3rem">
      <PageHeading>
        <DxcStack gutter="2rem">
          <ComponentHeading name="File Input" status="Ready" />
          <DxcText as="p">
            The file input component is used to choose files from any location
            in the local machine and update those files to the server where the
            application is hosted. It is a common procedure in applications
            where files are required, like documents, images, or other
            information in digital formats.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcStack>
      </PageHeading>
      {children}
    </DxcStack>
  );
};

export default FileInputPageHeading;

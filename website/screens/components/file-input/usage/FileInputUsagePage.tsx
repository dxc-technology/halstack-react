import {
  DxcFlex,
  DxcText,
  DxcList,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import variants from "./examples/variants";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcText as="p">Considerations for the file input component use:</DxcText>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcList>
            <DxcText>
              Provide a meaningful label and helper text to help the user
              understand the files expected.
            </DxcText>
            <DxcText>
              When displaying errors, provide feedback about the type of error
              using the error message.
            </DxcText>
            <DxcText>
              When the file input process fails, provide useful information
              instead of showing an error message using technical or
              undetermined information (e.g. &#39;0x94 ERROR_PATH_BUSY&#39;).
            </DxcText>
          </DxcList>
        ),
      },

      {
        title: "Don'ts",
        content: (
          <DxcList>
            <DxcText>
              Use the file input component to upload multiple files inside a
              modal dialog.
            </DxcText>
            <DxcText>
              Use a variant with drag and drop functionality when designing for
              mobile devices.
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <>
        <Example example={variants} />
        <DxcTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Use case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>File</strong>
              </td>
              <td>Use the file variant when designing for multidevice</td>
            </tr>
            <tr>
              <td>
                <strong>Filedrop</strong>
              </td>
              <td>
                Use in large or complex forms when designing only for desktop
              </td>
            </tr>
            <tr>
              <td>
                <strong>Dropzone</strong>
              </td>
              <td>
                Choose the dropzone when the main purpose of the content is to
                file input files/images
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
];

const FileInputUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/file-input/usage/FileInputUsagePage.tsx" />
    </DxcFlex>
  );
};

export default FileInputUsagePage;

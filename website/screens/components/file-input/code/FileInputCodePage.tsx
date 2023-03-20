import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import errorHandling from "./examples/errorHandling";
import formFileInput from "./examples/formFileInput";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import StatusTag from "@/common/StatusTag";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <HeaderDescriptionCell>Description</HeaderDescriptionCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name: string</td>
            <td></td>
            <td>Name attribute.</td>
          </tr>
          <tr>
            <td>mode: 'file' | 'filedrop' | 'dropzone'</td>
            <td>
              <Code>'file'</Code>
            </td>
            <td>Available modes of the component.</td>
          </tr>
          <tr>
            <td>label: string</td>
            <td></td>
            <td>Text to be placed above the component.</td>
          </tr>
          <tr>
            <td>buttonLabel: string</td>
            <td></td>
            <td>Text to be placed inside the button.</td>
          </tr>
          <tr>
            <td>dropAreaLabel: string</td>
            <td></td>
            <td>
              Text to be placed inside the drag and drop zone alongside the
              button.
            </td>
          </tr>
          <tr>
            <td>helperText: string</td>
            <td></td>
            <td>Helper text to be placed above the component.</td>
          </tr>
          <tr>
            <td>accept: string</td>
            <td></td>
            <td>
              The file types that the component accepts. Its value must be one
              of all the possible values of the HTML file input's accept
              attribute. Please check the documentation{" "}
              <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept">
                here
              </DxcLink>
              .
            </td>
          </tr>
          <tr>
            <td>minSize: number</td>
            <td></td>
            <td>
              The minimum file size (in bytes) allowed. If the size of the file
              does not comply the minSize, the file will have an error.
            </td>
          </tr>
          <tr>
            <td>maxSize: number</td>
            <td></td>
            <td>
              The maximum file size (in bytes) allowed. If the size of the file
              does not comply the maxSize, the file will have an error.
            </td>
          </tr>
          <tr>
            <td>multiple: boolean</td>
            <td>
              <Code>true</Code>
            </td>
            <td>
              If true, the component allows multiple file items and will show
              all of them. If false, only one file will be shown, and if there
              is already one file selected and a new one is chosen, it will be
              replaced by the new selected one.
            </td>
          </tr>
          <tr>
            <td>value: object[]</td>
            <td></td>
            <td>
              An array of files representing the selected files. Each file has
              the following properties:
              <ul>
                <li>
                  <b>file: File</b>: Selected file.
                </li>
                <li>
                  <b>error: string</b>: Error of the file. If it is defined, it
                  will be shown and the file item will be mark as invalid.
                </li>
                <li>
                  <b>preview: string</b>: Preview of the file.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>showPreview: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, if the file is an image, a preview of it will be shown.
              If not, an icon refering to the file type will be shown.
            </td>
          </tr>
          <tr>
            <td>disabled: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the component will be disabled.</td>
          </tr>
          <tr>
            <td>callbackFile: function</td>
            <td></td>
            <td>
              This function will be called when the user adds or deletes a file.
              That is, when the file input&#39;s inner value is modified. The
              list of files will be sent as a parameter. In this function, the
              files can be updated or returned as they come. These files must be
              passed to the value in order to be shown.
            </td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Value of the tabindex.</td>
          </tr>
          <tr>
            <td>ref: object</td>
            <td></td>
            <td>
              <DxcFlex gap="0.25rem" direction="column" alignItems="baseline">
                <StatusTag status="Information">New</StatusTag>
                Reference to the component.
              </DxcFlex>
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Error handling",
        content: <Example example={errorHandling} defaultIsVisible />,
      },
      {
        title: "Inside a form",
        content: <Example example={formFileInput} defaultIsVisible />,
      },
    ],
  },
];

const FileInputCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/file-input/code/FileInputCodePage.tsx" />
    </DxcFlex>
  );
};

export default FileInputCodePage;

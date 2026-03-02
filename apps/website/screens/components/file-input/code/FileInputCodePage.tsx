import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import errorHandling from "./examples/errorHandling";
import formFileInput from "./examples/formFileInput";
import StatusBadge from "@/common/StatusBadge";
import Code, { TableCode } from "@/common/Code";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>accept</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              The file types that the component accepts. Its value must be one of all the possible values of the HTML
              file input's <Code>accept</Code> attribute. Please check the documentation{" "}
              <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept">here</DxcLink>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>buttonLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed inside the button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                callbackFile
              </DxcFlex>
            </td>
            <td>
              <TableCode>
                {"(val: {files: { file: File, error?: string, preview?: string }[], error?: string}) => void"}
              </TableCode>
            </td>
            <td>
              This function will be called when the user adds or deletes a file. That is, when the file input's inner
              value is modified. The list of files will be sent as a parameter. In this function, the files can be
              updated or returned as they come. These files must be passed to the value in order to be shown.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the component will be disabled.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>dropAreaLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed inside the drag and drop zone alongside the button.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin</TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left' and
              'right' properties in order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>maxSize</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              The maximum file size (in bytes) allowed. If the size of the file does not comply this value, the file
              will have an error.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>minSize</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              The minimum file size (in bytes) allowed. If the size of the file does not comply this value, the file
              will have an error.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'file' | 'filedrop' | 'dropzone'</TableCode>
            </td>
            <td>Available modes of the component.</td>
            <td>
              <TableCode>'file'</TableCode>
            </td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the component allows multiple file items and will show all of them. If false, only one file will
              be shown, and if there is already one file selected and a new one is chosen, it will be replaced by the
              new selected one.
            </td>
            <td>
              <TableCode>true</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                optional
              </DxcFlex>
            </td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the input will be optional, showing '(Optional)' next to the label.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>ref</td>
            <td>
              <TableCode>{"React.Ref<HTMLDivElement>"}</TableCode>
            </td>
            <td>Reference to the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>showPreview</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, if the file is an image, a preview of it will be shown. If not, an icon referring to the file
              type will be shown.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                size
              </DxcFlex>
            </td>
            <td>
              <TableCode>'medium' | 'fillParent'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'medium'</TableCode>
            </td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                value
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"{ file: File, error?: string, preview?: string }[]"}</TableCode>
            </td>
            <td>
              An array of files representing the selected files. Each file has the following properties:
              <ul>
                <li>
                  <strong>file</strong>: Selected file.
                </li>
                <li>
                  <strong>error</strong>: Error of the file. If it is defined, it will be shown and the file item will
                  be mark as invalid.
                </li>
                <li>
                  <strong>preview</strong>: Preview of the file.
                </li>
              </ul>
            </td>
            <td>-</td>
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
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/file-input/code/FileInputCodePage.tsx" />
    </DxcFlex>
  );
};

export default FileInputCodePage;

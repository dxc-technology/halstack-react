import { DxcTable, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import Link from "next/link";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import advanced from "./examples/advanced";

const selectOptionsTypeString = `{
  label?: string;
  icon?: string | SVG;
  value: string;
  onSelect: (value: string) => void;
  selected?: boolean;
}[]`;
const onButtonClickTypeString = `(val: {
    type: "submit" | "stop";
    value?: string;
    files?: File[];
    selectedOption?: SelectOption;
  }) => void;
`;

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
            <td>allowRecording</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the voice recording button will be shown. In order to change the language of the transcription
              functionality, use the <Code>localeTag</Code> prop from the{" "}
              <Link href="/utilities/halstack-provider/#localization" passHref legacyBehavior>
                <DxcLink>Halstack Provider</DxcLink>
              </Link>
              .
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>callbackFile</td>
            <td>
              <TableCode>{"(files: File[]) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the selection of top items changes. If this function is provided the
              message input will allow file selection.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Initial value of the input, only when it is uncontrolled.</td>
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
            <td>error</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              If it is a defined value and also a truthy string, the component will change its appearance, showing the
              error below the input component. If the defined value is an empty string, it will reserve a space below
              the component for a future error, but it would not change its look. In case of being undefined or null,
              both the appearance and the space for the error message would not be modified.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>files</td>
            <td>
              <TableCode>{"File[] | []"}</TableCode>
            </td>
            <td>Items to be shown at the top.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>isGenerating</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, it indicates that a request is being processed after the user submits a query.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>maxLength</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Specifies the maximum length allowed by the input. This will be checked both when the input element loses
              the focus and while typing within it. If the string entered does not comply the maximum length, the onBlur
              and onChange functions will be called with the current value and an internal error informing that the
              value length does not comply the specified range. If a valid length is reached, the error parameter of
              both events will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>minLength</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Specifies the minimum length allowed by the input. This will be checked aboth when the input element loses
              the focus and while typing within it. If the string entered does not comply the minimum length, the onBlur
              and onChange functions will be called with the current value and an internal error informing that the
              value length does not comply the specified range. If a valid length is reached, the error parameter of
              both events will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>selectOptions</td>
            <td>
              <ExtendedTableCode>{selectOptionsTypeString}</ExtendedTableCode>
            </td>
            <td>Options to be shown on the dropdown under the input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <TableCode>{"(val: { value: string; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the input element loses the focus. An object including the input value
              and the error (if the value entered is not valid) will be passed to this function. If there is no error,
              error will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onButtonClick</td>
            <td>
              <ExtendedTableCode>{onButtonClickTypeString}</ExtendedTableCode>
            </td>
            <td>
              This function will be called when the user clicks on the button (submit or stop) or presses enter. The
              type parameter indicates whether it's a <Code>'submit'</Code> or <Code>'stop'</Code> event. For submit
              events, <Code>'value'</Code>, <Code>'files'</Code>and <Code>'selectedOption'</Code> are provided.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(val: { value: string; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user types within the input element of the component. An object
              including the current value and the error (if the value entered is not valid) will be passed to this
              function. If there is no error, error will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be put as placeholder of the input.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <TableCode>{"'small' | 'medium' | 'large' | 'fillParent'"}</TableCode>
            </td>
            <td>Specifies the size of the component. The size will affect the width of the input.</td>
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
            <td>-</td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Value of the input. If undefined, the component will be uncontrolled and the value will be managed
              internally by the component.
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
        title: "Uncontrolled",
        content: <Example example={uncontrolled} defaultIsVisible />,
      },
      {
        title: "Controlled",
        content: <Example example={controlled} defaultIsVisible />,
      },
      {
        title: "Advanced",
        content: <Example example={advanced} defaultIsVisible />,
      },
    ],
  },
];

const MessageInputCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/packages/lib/src/message-input/MessageInput.tsx" />
    </DxcFlex>
  );
};

export default MessageInputCodePage;

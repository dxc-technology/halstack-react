import { DxcTable, DxcFlex } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
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
            <td>allowVoiceInput</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the voice recording button will be shown.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>callbackFile</td>
            <td>
              <TableCode>{"(files: FileData[]) => void"}</TableCode>
            </td>
            <td>This function will be called when the selection of top items changes.</td>
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
              <TableCode>{"FileData[] | []"}</TableCode>
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
              Specifies the minimum length allowed by the input. This will be checked both when the input element loses
              the focus and while typing within it. If the string entered does not comply the minimum length, the onBlur
              and onChange functions will be called with the current value and an internal error informing that the
              value length does not comply the specified range. If a valid length is reached, the error parameter of
              both events will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>modelList</td>
            <td>
              <TableCode>
                {
                  "{ label?: string; icon?: string | (React.ReactNode & React.SVGProps<SVGSVGElement>); value: string; onSelect: () => void; }[]"
                }
              </TableCode>
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
              <TableCode>{"(type: 'submit' | 'stop', signal?: AbortSignal) => void | Promise<void>"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks on the button (submit or stop) or presses enter. The
              type parameter indicates whether it's a "submit" or "stop" event. For submit events, an AbortSignal is
              provided to allow cancellation.
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
            <td>onRecordingChange</td>
            <td>
              <TableCode>{"(isRecording: boolean) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the recording state changes (starts or stops). Only used when
              isRecording prop is controlled.
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
    title: "FileData",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>The chip label.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>
              <TableCode>{"string | (React.ReactNode & React.SVGProps<SVGSVGElement>)"}</TableCode>
            </td>
            <td>
              The chip icon. It can be a string representing the icon name or a ReactNode representing a custom icon.
            </td>
          </tr>
        </tbody>
      </DxcTable>
    ),
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

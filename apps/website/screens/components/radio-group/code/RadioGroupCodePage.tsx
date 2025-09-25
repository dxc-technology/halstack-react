import { DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorHandling from "./examples/errorHandling";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

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
            <td>ariaLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Specifies a string to be used as the name for the radio group when no `label` is provided.</td>
            <td>
              <TableCode>'Radio group'</TableCode>
            </td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Initial value of the radio group, only when it is uncontrolled.</td>
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
              error below the radio group. If the defined value is an empty string, it will reserve a space below the
              component for a future error, but it would not change its look. In case of being undefined or null, both
              the appearance and the space for the error message would not be modified.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the radio group.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the radio group.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Name attribute of the input element. This attribute will allow users to find the component's value during
              the submit event.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <TableCode>{"(val: { value?: string; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the radio group loses the focus. An object including the value and the
              error will be passed to this function. If there is no error, error will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(value: string) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user chooses an option. The new value will be passed to this
              function.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the radio group will be optional, showing the text '(Optional)' next to the label and adding a
              default last option with an empty string as value. Otherwise, the field will be considered required and an
              error will be passed as a parameter to the <Code>onBlur</Code> function if an option wasn't selected.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>optionalItemLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Label of the optional radio input.</td>
            <td>
              <TableCode>'N/A'</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                options
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"{ disabled?: boolean; label: string; value: string; }[]"}</TableCode>
            </td>
            <td>
              An array of objects representing the selectable options. Each object Option has the following properties:
              <ul>
                <li>
                  <b>label</b>: Label of the option placed next to the radio input.
                </li>
                <li>
                  <b>value</b>: Value of the option. It should be unique and not an empty string, which is reserved to
                  the optional item added by the <Code>optional</Code> prop.
                </li>
                <li>
                  <b>disabled</b>: disables the option.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>readOnly</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the component will not be mutable, meaning the user can not edit the control.</td>
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
            <td>stacking</td>
            <td>
              <TableCode>'row' | 'column'</TableCode>
            </td>
            <td>Sets the orientation of the options within the radio group.</td>
            <td>
              <TableCode>'column'</TableCode>
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
            <td>value</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Value of the radio group. If undefined, the component will be uncontrolled and the value will be managed
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
        title: "Controlled",
        content: <Example example={controlled} defaultIsVisible />,
      },
      {
        title: "Uncontrolled",
        content: <Example example={uncontrolled} defaultIsVisible />,
      },
      {
        title: "Error handling",
        content: (
          <>
            <DxcParagraph>
              For handling errors, we suggest initializing the <Code>error</Code> prop with an empty string. This will
              reserve space for a possible future error message and prevent unintended layout changes. Also, the{" "}
              <Code>onBlur</Code> event will send <Code>undefined</Code> when there is no error, so you may also need to
              control this too to avoid the same problem.
            </DxcParagraph>
            <Example example={errorHandling} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const RadioGroupCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/radio-group/code/RadioGroupCodePage.tsx" />
  </DxcFlex>
);

export default RadioGroupCodePage;

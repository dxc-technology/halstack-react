import { DxcFlex, DxcTable, DxcParagraph, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import errorHandling from "./examples/errorHandling";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
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
            <td>ariaLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Specifies a string to be used as the name for the date input element when no <Code>label</Code> is
              provided.
            </td>
            <td>'Date input'</td>
          </tr>
          <tr>
            <td>autocomplete</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              HTML <Code>autocomplete</Code> attribute. Lets the user specify if any permission the user agent has to
              provide automated assistance in filling out the input value. Its value must be one of all the possible
              values of the HTML autocomplete attribute. See{" "}
              <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">MDN</DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'off'</TableCode>
            </td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the date input will have an action to clear the entered value.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Initial value of the input element, only when it is uncontrolled.</td>
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
              error below the date input component. If the defined value is an empty string, it will reserve a space
              below the component for a future error, but it would not change its look. In case of being undefined or
              null, both the appearance and the space for the error message would not be modified.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>format</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              The format in which the date value will be displayed. User must follow this format when editing the value
              or it will be considered as an invalid date. In this case, the <Code>onBlur</Code> and{" "}
              <Code>onChange</Code> functions will be called with an internal error as a parameter reporting the
              situation.
            </td>
            <td>
              <TableCode>'dd-MM-yyyy'</TableCode>
            </td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the date.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the date input.</td>
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
            <td>name</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Name attribute of the input element.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <TableCode>{"(val: { value: string; error?: string; date?: Date }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the input element loses the focus. An object including the string value,
              the error and the date value will be passed to this function. If the string value is a valid date,{" "}
              <Code>error</Code> will be undefined. Also, if the string value is not a valid date, <Code>date</Code>{" "}
              will be undefined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(val: { value: string; error?: string; date?: Date }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user types within the input element of the component. An object
              including the string value, the error and the date value will be passed to this function. If the string
              value is a valid date, <Code>error</Code> will be undefined. Also, if the string value is not a valid
              date, <Code>date</Code> will be undefined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the date will be optional, showing the text '(Optional)' next to the label. Otherwise, the field
              will be considered required and an error will be passed as a parameter to the <Code>onBlur</Code> and{" "}
              <Code>onChange</Code> functions when it has not been filled.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the date format will appear as placeholder in the field.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>readOnly</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the component will not be mutable, meaning the user can not edit the control. The date picker
              cannot be opened either. In addition, the clear action will not be displayed even if the flag is set to
              true.
            </td>
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
            <td>size</td>
            <td>
              <TableCode>'small' | 'medium' | 'large' | 'fillParent'</TableCode>
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
            <td>value</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Value of the input element. If undefined, the component will be uncontrolled and the value will be managed
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
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
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
              The component behaviour varies depending on the value of the <Code>error</Code>. We recommend reading the
              description of the prop carefully to fully understand the following example.
            </DxcParagraph>
            <Example example={errorHandling} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const DateInputCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/date-input/code/DateInputCodePage.tsx" />
    </DxcFlex>
  );
};

export default DateInputCodePage;

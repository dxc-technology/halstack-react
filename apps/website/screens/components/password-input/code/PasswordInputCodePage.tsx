import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import controlled from "./examples/controlled";
import errorHandling from "./examples/errorHandling";
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
              Specifies a string to be used as the name for the password input element when no <Code>label</Code> is
              provided.
            </td>
            <td>
              <TableCode>'Password input'</TableCode>
            </td>
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
            <td>If true, the password input will have an action to clear the entered value.</td>
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
              error below the password input component. If the defined value is an empty string, it will reserve a space
              below the component for a future error, but it would not change its look. In case of being undefined or
              null, both the appearance and the space for the error message would not be modified.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the password.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the password input.</td>
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
            <td>maxLength</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Specifies the maximum length allowed by the input. This will be checked both when the input element loses
              the focus and while typing within it. If the string entered does not comply the maximum length, the{" "}
              <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value and an
              internal error informing that the value length does not comply the specified range. If a valid length is
              reached, the error parameter of both events will not be defined.
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
              the focus and while typing within it. If the string entered does not comply the minimum length, the{" "}
              <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value and an
              internal error informing that the value length does not comply the specified range. If a valid length is
              reached, the error parameter of both events will not be defined.
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
              <TableCode>{"(val: { value: string; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the input element loses the focus. An object including the input value
              and the error (if the value entered is not valid) will be passed to this function. If there is no error,{" "}
              <Code>error</Code> will not be defined.
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
              function. If there is no error, <Code>error</Code> will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>pattern</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Regular expression that defines the valid format allowed by the password input. This will be checked both
              when the input element loses the focus and while typing within it. If the string entered does not match
              the pattern, the <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current
              value and an internal error informing that this value does not match the pattern. If the pattern is met,
              the error parameter of both events will not be defined.
            </td>
            <td>-</td>
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
        title: "Controlled",
        content: <Example example={controlled} defaultIsVisible />,
      },
      {
        title: "Uncontrolled",
        content: <Example example={uncontrolled} defaultIsVisible />,
      },
      {
        title: "Error handling",
        content: <Example example={errorHandling} defaultIsVisible />,
      },
    ],
  },
];

const PasswordInputCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/password-input/code/PasswordInputCodePage.tsx" />
  </DxcFlex>
);

export default PasswordInputCodePage;

import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorHandling from "./examples/errorHandling";
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
              Specifies a string to be used as the name for the textarea element when no <Code>label</Code> is provided.
            </td>
            <td>'Text area'</td>
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
            <td>defaultValue</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Initial value of the textarea, only when it is uncontrolled.</td>
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
              error below the textarea. If the defined value is an empty string, it will reserve a space below the
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
            <td>Helper text to be placed above the textarea.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the textarea.</td>
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
              Specifies the maximum length allowed by the textarea. This will be checked both when the input element
              loses the focus and while typing within it. If the string entered does not comply the maximum length, the{" "}
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
              Specifies the minimum length allowed by the textarea. This will be checked both when the input element
              loses the focus and while typing within it. If the string entered does not comply the minimum length, the{" "}
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
            <td>Name attribute of the textarea element.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onBlur</td>
            <td>
              <TableCode>{"(val: { value: string; error?: string }) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the textarea loses the focus. An object including the textarea value and
              the error (if the value entered is not valid) will be passed to this function. If there is no error,{" "}
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
              This function will be called when the user types within the textarea. An object including the current
              value and the error (if the value entered is not valid) will be passed to this function. If there is no
              error, <Code>error</Code> will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the textarea will be optional, showing '(Optional)' next to the label. Otherwise, the field will
              be considered required and an error will be passed as a parameter to the <Code>onBlur</Code> and{" "}
              <Code>onChange</Code> functions when it has not been filled.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>pattern</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Regular expression that defines the valid format allowed by the textarea. This will be checked both when
              the textarea loses the focus and while typing within it. If the string entered does not match the pattern,
              the <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value and an
              internal error informing that this value does not match the pattern. If the pattern is met, the error
              parameter of both events will not be defined.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be put as placeholder of the textarea.</td>
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
            <td>rows</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Number of rows of the textarea.</td>
            <td>
              <TableCode>4</TableCode>
            </td>
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
              Value of the textarea. If undefined, the component will be uncontrolled and the value will be managed
              internally.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>verticalGrow</td>
            <td>
              <TableCode>'auto' | 'manual' | 'none'</TableCode>
            </td>
            <td>
              Defines the textarea's ability to resize vertically. It can be:
              <ul>
                <li>
                  <b>'auto'</b>: The textarea grows or shrinks automatically in order to fit the content.
                </li>
                <li>
                  <b>'manual'</b>: The height of the textarea is enabled to be manually modified.
                </li>
                <li>
                  <b>'none'</b>: The textarea has a fixed height and can't be modified.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'auto'</TableCode>
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

const TextareaCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/textarea/code/TextareaCodePage.tsx" />
  </DxcFlex>
);

export default TextareaCodePage;

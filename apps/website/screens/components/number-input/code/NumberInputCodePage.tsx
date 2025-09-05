import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import errorUsage from "./examples/errorHandling";
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
            <td>
              Specifies a string to be used as the name for the number input element when no <Code>label</Code> is
              provided.
            </td>
            <td>
              <TableCode>'Number input'</TableCode>
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
              error below the input component. If the defined value is an empty string, it will reserve a space below
              the component for a future error, but it would not change its look. In case of being undefined or null,
              both the appearance and the space for the error message would not be modified.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the number.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the number input.</td>
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
            <td>max</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Maximum value allowed by the number input. If the typed value by the user surpasses max, the{" "}
              <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value and an
              internal error informing that the current value is not correct. If a valid state is reached, the error
              parameter will not be defined in both events.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>min</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Minimum value allowed by the number input. If the typed value by the user is lower than min, the{" "}
              <Code>onBlur</Code> and <Code>onChange</Code> functions will be called with the current value and an
              internal error informing that the current value is not correct. If a valid state is reached, the error
              parameter will not be defined in both events.
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
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the number will be optional, showing the text '(Optional)' next to the label. Otherwise, the
              field will be considered required and an error will be passed as a parameter to the <Code>onBlur</Code>{" "}
              and <Code>onChange</Code> functions when it has not been filled.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be put as placeholder of the number.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>prefix</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Prefix to be placed before the number value.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>readOnly</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the component will not be mutable, meaning the user can not edit the control. The value won't
              change when pressing on the up or down arrows and neither on the spin buttons.
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
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="new" />
                showControls
              </DxcFlex>
            </td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Decides whether the number input displays or not the spin buttons to adjust the value.</td>
            <td>
              <TableCode>true</TableCode>
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
            <td>step</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>The step interval to use when using the spin buttons to adjust the value.</td>
            <td>
              <TableCode>1</TableCode>
            </td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Suffix to be placed after the number value.</td>
            <td>-</td>
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
        content: <Example example={errorUsage} defaultIsVisible />,
      },
    ],
  },
];

const NumberInputCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/number-input/code/NumberInputCodePage.tsx" />
  </DxcFlex>
);

export default NumberInputCodePage;

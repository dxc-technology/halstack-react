import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
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
              <TableCode>{"string"}</TableCode>
            </td>
            <td>
              Specifies a string to be used as the name for the switch element when no <Code>label</Code> is provided.
            </td>
            <td>
              <TableCode>'Switch'</TableCode>
            </td>
          </tr>
          <tr>
            <td>checked</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the component is checked. If undefined, the component will be uncontrolled and the checked
              attribute will be managed internally by the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>defaultChecked</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Initial state of the switch, only when it is uncontrolled.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
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
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed next to the switch.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>labelPosition</td>
            <td>
              <TableCode>'before' | 'after'</TableCode>
            </td>
            <td>Whether the label should appear after or before the switch.</td>
            <td>
              <TableCode>'before'</TableCode>
            </td>
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
            <td>onChange</td>
            <td>
              <TableCode>{"(checked: boolean) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks the switch. The new value of the checked attribute will
              be passed as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>optional</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the component will display '(Optional)' next to the label.</td>
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
              <TableCode>'small' | 'medium' | 'large' | 'fillParent' | 'fitContent'</TableCode>
            </td>
            <td>Size of the component.</td>
            <td>
              <TableCode>'fitContent'</TableCode>
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
              Will be passed to the <Code>value</Code> attribute of the HTML input element. When inside a form, this
              value will be only submitted if the switch is checked.
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
    ],
  },
];

const SwitchCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/switch/code/SwitchCodePage.tsx" />
  </DxcFlex>
);

export default SwitchCodePage;

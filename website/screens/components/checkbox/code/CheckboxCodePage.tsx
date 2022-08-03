import { DxcFlex, DxcTable, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

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
            <td>defaultChecked: boolean</td>
            <td></td>
            <td>
              Initial state of the checkbox, only when it is uncontrolled.
            </td>
          </tr>
          <tr>
            <td>checked: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the component is checked. If undefined the component will
              be uncontrolled and the value will be managed internally by the
              component.
            </td>
          </tr>
          <tr>
            <td>value: string</td>
            <td></td>
            <td>
              Will be passed to the value attribute of the html input element.
              When inside a form, this value will be only submitted if the
              checkbox is checked.
            </td>
          </tr>
          <tr>
            <td>label: string</td>
            <td></td>
            <td>Text to be placed next to the checkbox.</td>
          </tr>
          <tr>
            <td>labelPosition: 'before' | 'after'</td>
            <td>
              <Code>'before'</Code>
            </td>
            <td>
              Whether the label should appear after or before the checkbox.
            </td>
          </tr>
          <tr>
            <td>name: string</td>
            <td></td>
            <td>Name attribute of the input element.</td>
          </tr>
          <tr>
            <td>disabled: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the component will be disabled.</td>
          </tr>
          <tr>
            <td>optional: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, the component will display <Code>(Optional)</Code> next
              to the label.
            </td>
          </tr>
          <tr>
            <td>onChange: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks the checkbox.
              The new value will be passed as a parameter.
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
            <td>size: string</td>
            <td>
              <Code>'fitContent'</Code>
            </td>
            <td>
              Size of the component ('small' | 'medium' | 'large' | 'fillParent'
              | 'fitContent').
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Value of the tabindex.</td>
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

const CheckboxCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/checkbox/code/CheckboxCodePage.tsx" />
    </DxcFlex>
  );
};

export default CheckboxCodePage;

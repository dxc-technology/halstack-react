import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basic from "./examples/basicUsage";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import radioGroup from "./examples/radiogroup";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>checked: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            If true, the radio is selected. If undefined the component will be
            uncontrolled and the value will be managed internally by the
            component.
          </td>
        </tr>
        <tr>
          <td>value: string</td>
          <td></td>
          <td>
            Will be passed to the value attribute of the html input element.
            When inside a form, this value will be only submitted if the radio
            is checked.
          </td>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed next to the radio.</td>
        </tr>
        <tr>
          <td>labelPosition: 'before' | 'after'</td>
          <td>
            <Code>'before'</Code>
          </td>
          <td>Whether the label should appear after or before the radio.</td>
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
          <td>required: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            If true, the radio will change its appearence, showing that the
            value is required.
          </td>
        </tr>
        <tr>
          <td>onClick: function</td>
          <td></td>
          <td>
            This function will be called when the user clicks the radio. The new
            value will be passed as a parameter.
          </td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right'
            properties in order to specify different margin sizes.
          </td>
        </tr>
        <tr>
          <td>size: string</td>
          <td>
            <Code>'fitContent'</Code>
          </td>
          <td>
            Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
            'fitContent').
          </td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: (
          <>
            <Example example={basic} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Controlled",
        content: (
          <>
            <Example example={controlled} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Uncontrolled",
        content: (
          <>
            <Example example={uncontrolled} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Radio Group",
        content: (
          <>
            <Example example={radioGroup} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const RadioCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio/code/RadioCodePage.tsx" />
    </DxcStack>
  );
};

export default RadioCodePage;

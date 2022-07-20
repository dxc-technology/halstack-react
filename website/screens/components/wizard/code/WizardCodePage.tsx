import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import icons from "./examples/icons";
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
            <td>mode: 'horizontal' | 'vertical'</td>
            <td>
              <Code>'horizontal'</Code>
            </td>
            <td>The wizard can be showed in horizontal or vertical.</td>
          </tr>
          <tr>
            <td>defaultCurrentStep: number</td>
            <td></td>
            <td>Initially selected step, only when it is uncontrolled.</td>
          </tr>
          <tr>
            <td>currentStep: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>
              Defines which step is marked as the current. The numeration starts
              at 0. If undefined, the component will be uncontrolled and the
              step will be managed internally by the component.
            </td>
          </tr>
          <tr>
            <td>onStepClick: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks a step. The step
              number will be passed as a parameter.
            </td>
          </tr>
          <tr>
            <td>steps: object[]</td>
            <td>
              <Code>[]</Code>
            </td>
            <td>
              An array of objects representing the steps. Each of them has the
              following properties:
              <ul>
                <li>
                  <b>Label: string</b>: Step label.
                </li>
                <li>
                  <b>Description: string</b>: Description that will be placed
                  next to the step.
                </li>
                <li>
                  <b>Icon: string | SVGSVGElement</b>: Element or path used as
                  the icon displayed in the step.
                </li>
                <li>
                  <b>Disabled: boolean</b>: Whether the step is disabled or not.
                </li>
                <li>
                  <b>Valid: boolean</b>: Whether the step is valid or not.
                </li>
              </ul>
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
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>
              Value of the tabindex attribute that is given to all the steps.
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
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const WizardCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/wizard/code/WizardCodePage.tsx" />
    </DxcStack>
  );
};

export default WizardCodePage;

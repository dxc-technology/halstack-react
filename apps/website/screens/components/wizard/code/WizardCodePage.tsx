import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import icons from "./examples/icons";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const stepsType = `{ 
  label: string;
  description?: string;
  disabled?: boolean;
  icon?: string |
    (React.ReactNode & 
    React.SVGProps<SVGSVGElement>);
  valid?: boolean; 
}[]`;

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
            <td>currentStep</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Defines which step is marked as the current. The numeration starts at 0. If undefined, the component will
              be uncontrolled and the step will be managed internally by the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>defaultCurrentStep</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Initially selected step, only when it is uncontrolled.</td>
            <td>
              <TableCode>0</TableCode>
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
            <td>mode</td>
            <td>
              <TableCode>'horizontal' | 'vertical'</TableCode>
            </td>
            <td>The wizard can be shown in horizontal or vertical.</td>
            <td>
              <TableCode>'horizontal'</TableCode>
            </td>
          </tr>
          <tr>
            <td>onStepClick</td>
            <td>
              <TableCode>{"(currentStep: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks a step. The step number will be passed as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                steps
              </DxcFlex>
            </td>
            <td>
              <ExtendedTableCode>{stepsType}</ExtendedTableCode>
            </td>
            <td>
              An array of objects representing the steps. Each of them has the following properties:
              <ul>
                <li>
                  <b>label</b>: Step label.
                </li>
                <li>
                  <b>description</b>: Description that will be placed next to the step.
                </li>
                <li>
                  <b>icon</b>:{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element used as the icon displayed in the step.
                </li>
                <li>
                  <b>disabled</b>: Whether the step is disabled or not.
                </li>
                <li>
                  <b>valid</b>: Whether the step is valid or not.
                </li>
              </ul>
            </td>
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

const WizardCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/wizard/code/WizardCodePage.tsx" />
  </DxcFlex>
);

export default WizardCodePage;

import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import StatusBadge from "@/common/StatusBadge";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";

const optionTypeString = `{
  disabled?: boolean;
  icon?: string | 
    (React.ReactNode 
      & React.SVGProps<SVGSVGElement>);
  label?: string;
  value: string;
}`;

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
            <td>defaultValue</td>
            <td>
              <TableCode>number | number[]</TableCode>
            </td>
            <td>The key(s) of the initially selected value(s), only when it is uncontrolled.</td>
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
            <td>multiple</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, the toggle group will support multiple selection. In that case, value must be an array of numbers
              with the keys of the selected values.
            </td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              <TableCode>{"(optionIndex: number | number[]) => void"}</TableCode>
            </td>
            <td>
              This function will be called every time the selection changes. The number with the key of the selected
              value will be passed as a parameter to this function. If multiple selection is allowed, an array of keys
              will be passed
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                options
              </DxcFlex>
            </td>
            <td>
              <TableCode>Option[]</TableCode>
              <p>
                being <Code>Option</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{optionTypeString}</ExtendedTableCode>
            </td>
            <td>An array of objects representing the selectable options.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>orientation</td>
            <td>
              <TableCode>'horizontal' | 'vertical'</TableCode>
            </td>
            <td>The orientation of the toggle group.</td>
            <td>
              <TableCode>'horizontal'</TableCode>
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
              <TableCode>number | number[]</TableCode>
            </td>
            <td>
              The key(s) of the selected value(s). If the toggle group component doesn't allow multiple selection, it
              must be one unique value. If the component allows multiple selection, value must be an array. If
              undefined, the component will be uncontrolled and the value will be managed internally by the component.
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

const ToggleGroupCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/toggle-group/code/ToggleGroupCodePage.tsx" />
  </DxcFlex>
);

export default ToggleGroupCodePage;

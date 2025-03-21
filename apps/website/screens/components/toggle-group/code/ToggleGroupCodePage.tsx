import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import StatusBadge from "@/common/StatusBadge";
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
            <td>defaultValue</td>
            <td>
              <TableCode>number | number[]</TableCode>
            </td>
            <td>The key(s) of the initially selected value(s), only when it is uncontrolled.</td>
            <td>-</td>
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
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be placed above the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>helperText</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Helper text to be placed above the component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                options
              </DxcFlex>
            </td>
            <td>
              <TableCode>
                {
                  "{ label?: string; icon: string | (React.ReactNode & React.SVGProps <SVGSVGElement>); value: string; title?: string; }[]"
                }
              </TableCode>
            </td>
            <td>
              An array of objects representing the selectable options. Each object has the following properties:
              <ul>
                <li>
                  <b>label</b>: String with the option display value.
                </li>
                <li>
                  <b>icon</b>:{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element used as the icon of an option.
                </li>
                <li>
                  <b>value</b>: Number with the option inner value.
                </li>
                <li>
                  <b>title</b>: Text representing advisory information related to an option. Under the hood, it also
                  serves as an accessible label for the icon.
                </li>
              </ul>
            </td>
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
    ],
  },
];

const ToggleGroupCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/toggle-group/code/ToggleGroupCodePage.tsx" />
    </DxcFlex>
  );
};

export default ToggleGroupCodePage;

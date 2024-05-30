import { DxcFlex, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import icons from "./examples/icons";
import TableCode from "@/common/TableCode";
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
            <td>defaultActiveTabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Initially active tab, only when it is uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>activeTabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              The index of the active tab. If undefined, the component will be
              uncontrolled and the active tab will be managed internally by the
              component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                tabs
              </DxcFlex>
            </td>
            <td>
              <TableCode>
                {
                  "{ label: string, icon: string | (React.ReactNode & React.SVGProps <SVGSVGElement>), isDisabled: boolean, notificationNumber: boolean | number }[]"
                }
              </TableCode>
            </td>
            <td>
              An array of objects representing the tabs. Each of them has the
              following properties:
              <ul>
                <li>
                  <b>label</b>: Tab label.
                </li>
                <li>
                  <b>icon</b>:{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element used as the icon that will be displayed in
                  the tab. When using Material Symbols, replace spaces with
                  underscores. By default they are outlined, if you want it to
                  be filled prefix the symbol name with{" "}
                  <TableCode>"filled_"</TableCode>.
                </li>
                <li>
                  <b>isDisabled</b>: Whether the tab is disabled or not. If the
                  component is uncontrolled and the selected tab is disabled,
                  the first non-disabled tab from the array will be selected.
                </li>
                <li>
                  <b>notificationNumber</b>: It can have boolean type or number
                  type. If true, an empty badge will appear. If false or if the
                  tab is disabled, no badge will appear. If a number is
                  specified, the component will display a badge with the value
                  as its label. Take into account that if that number is greater
                  than 99, it will appear as <TableCode>+99</TableCode> in the
                  badge.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <TableCode>'top' | 'left'</TableCode>
            </td>
            <td>
              Whether the icon should appear above or to the left of the label.
            </td>
            <td>
              <TableCode>'top'</TableCode>
            </td>
          </tr>
          <tr>
            <td>onTabClick</td>
            <td>
              <TableCode>{"(index: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks on a tab. The
              index of the clicked tab will be passed as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onTabHover</td>
            <td>
              <TableCode>{"(index: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user hovers a tab. The index
              of the hovered tab will be passed as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>
                'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                'xxlarge' | Margin
              </TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an
              object with 'top', 'bottom', 'left' and 'right' properties in
              order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied to each tab.
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
        title: "Icons and notifications",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const TabsUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tabs/code/TabsCodePage.tsx" />
    </DxcFlex>
  );
};

export default TabsUsagePage;

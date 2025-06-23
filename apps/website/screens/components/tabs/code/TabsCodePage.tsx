import { DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import controlledDeprecated from "./examples-old/controlled";
import uncontrolledDeprecated from "./examples-old/uncontrolled";
import iconsDeprecated from "./examples-old/icons";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import controlled from "./examples-new/controlled";
import uncontrolled from "./examples-new/uncontrolled";
import icons from "./examples-new/icons";

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
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="deprecated" />
                activeTabIndex
              </DxcFlex>
            </td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              The index of the active tab. If undefined, the component will be uncontrolled and the active tab will be
              managed internally by the component.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                {/* TODO: Swap experimental for required once old logic is removed */}
                <StatusBadge status="experimental" />
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>
              Contains one or more <Code>DxcTabs.Tab</Code>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="deprecated" />
                defaultActiveTabIndex
              </DxcFlex>
            </td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Initially active tab, only when it is uncontrolled.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <TableCode>'top' | 'left'</TableCode>
            </td>
            <td>Whether the icon should appear above or to the left of the label.</td>
            <td>
              <TableCode>'left'</TableCode>
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
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="deprecated" />
                onTabClick
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"(index: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks on a tab. The index of the clicked tab will be passed as
              a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="deprecated" />
                onTabHover
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"(index: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user hovers a tab. The index of the hovered tab will be passed as a
              parameter.
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
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="deprecated" />
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
              An array of objects representing the tabs. Each of them has the following properties:
              <ul>
                <li>
                  <b>label</b>: Tab label.
                </li>
                <li>
                  <b>icon</b>:{" "}
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element used as the icon that will be displayed in the tab. When using Material Symbols,
                  replace spaces with underscores. By default they are outlined, if you want it to be filled prefix the
                  symbol name with <TableCode>"filled_"</TableCode>.
                </li>
                <li>
                  <b>isDisabled</b>: Whether the tab is disabled or not. If the component is uncontrolled and the
                  selected tab is disabled, the first non-disabled tab from the array will be selected.
                </li>
                <li>
                  <b>notificationNumber</b>: It can have boolean type or number type. If true, an empty badge will
                  appear. If false or if the tab is disabled, no badge will appear. If a number is specified, the
                  component will display a badge with the value as its label. Take into account that if that number is
                  greater than 99, it will appear as <TableCode>+99</TableCode> in the badge.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcTabs.Tab",
    content: <DxcParagraph>Single tab, part of the set of Tabs.</DxcParagraph>,
    subSections: [
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
                <td>active</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>Whether the tab is active or not.</td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>Contains the component to be rendered when this tab is active.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>defaultActive</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>Whether the tab is active or not by default, but mantaining the uncontrolled behaviour.</td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>
                  <TableCode>boolean</TableCode>
                </td>
                <td>Whether the tab is disabled or not.</td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>icon</td>
                <td>
                  <TableCode>string | {"(React.ReactNode & React.SVGProps <SVGSVGElement>)"}</TableCode>
                </td>
                <td>
                  <DxcLink newWindow href="https://fonts.google.com/icons">
                    Material Symbol
                  </DxcLink>{" "}
                  name or SVG element as the icon that will be displayed in the tab. When using Material Symbols,
                  replace spaces with underscores. By default they are outlined if you want it to be filled prefix the
                  symbol name with <TableCode>"filled_"</TableCode>. The icon or the label, either of which must have a
                  valid value.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    label
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Tab label text. The icon or the label, either of which must have a valid value.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>notificationNumber</td>
                <td>
                  <TableCode>boolean | number</TableCode>
                </td>
                <td>
                  If true, an empty badge will appear. If false or if the tab is disabled, no badge will appear. If a
                  number is specified, the component will display a badge with the value as its label. Take into account
                  that if that number is greater than 99, it will appear as <TableCode>+99</TableCode> in the badge.
                </td>
                <td>
                  <TableCode>false</TableCode>
                </td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>
                  <TableCode>{"() => void"}</TableCode>
                </td>
                <td>This function will be called when the user clicks on this tab. </td>
                <td>-</td>
              </tr>
              <tr>
                <td>onHover</td>
                <td>
                  <TableCode>{"() => void"}</TableCode>
                </td>
                <td>This function will be called when the user hovers this tab.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    tabId
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Value used to identify the tab internally.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    title
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Tooltip text for the tab.</td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
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

const TabsCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/tabs/code/TabsCodePage.tsx" />
  </DxcFlex>
);

export default TabsCodePage;

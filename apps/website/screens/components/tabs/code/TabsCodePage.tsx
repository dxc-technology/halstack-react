import { DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import icons from "./examples/icons";

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
                <StatusBadge status="required" />
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
                <td>This function will be called when the user clicks on this tab. This feature is mostly recommended for compatibility with third-party routing APIs.</td>
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
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/tabs/code/TabsCodePage.tsx" />
  </DxcFlex>
);

export default TabsCodePage;

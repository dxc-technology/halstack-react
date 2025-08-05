import { DxcParagraph, DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import routerLink from "./examples/routerLink";
import routerLink6 from "./examples/routerLink6";
import nextLink from "./examples/nextLink";
import icons from "./examples/icons";
import Code, { TableCode } from "@/common/Code";
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
              Contains one or more <Code>DxcNavTabs.Tab</Code>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <TableCode>'left' | 'top'</TableCode>
            </td>
            <td>Whether the icon should appear above or to the left of the label.</td>
            <td>
              <TableCode>'left'</TableCode>
            </td>
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
    title: "DxcNavTabs.Tab",
    content: <DxcParagraph>Single tab, part of the set of Navigation Tabs.</DxcParagraph>,
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
                  <TableCode>string</TableCode>
                </td>
                <td>Tab label text.</td>
                <td>-</td>
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
                <td>href</td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>Page to be opened when the user clicks on the tab.</td>
                <td>-</td>
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
                  symbol name with <TableCode>"filled_"</TableCode>.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="new" />
                    onClick
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>{"() => void"}</TableCode>
                </td>
                <td>This function will be called when the user clicks on this tab.</td>
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
        title: "Basic usage",
        content: (
          <>
            <Example example={basicUsage} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Router navigation",
        content: (
          <>
            <DxcParagraph>There are many React based routers, unfortunately all with different APIs.</DxcParagraph>
            <DxcParagraph>
              So we decided to make our link component just an styled HTML anchor element which allows it to be used in
              any React based router. For each API is different so here are some examples for{" "}
              <DxcLink href="https://reactrouter.com/en/main/start/examples" newWindow>
                React Router
              </DxcLink>{" "}
              and{" "}
              <DxcLink
                href="https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component"
                newWindow
              >
                NextJS Link
              </DxcLink>
              .
            </DxcParagraph>
          </>
        ),
        subSections: [
          {
            title: "React router",
            content: (
              <>
                <DxcParagraph>
                  This is an example of{" "}
                  <DxcLink href="https://v5.reactrouter.com/web/api/Route/component" newWindow>
                    React Router
                  </DxcLink>{" "}
                  using the prop <Code>component</Code>. Note that this Prop is not available in v6.
                </DxcParagraph>
                <Example example={routerLink} defaultIsVisible />
              </>
            ),
          },
          {
            title: "React router v6+",
            content: (
              <>
                <DxcParagraph>
                  In{" "}
                  <DxcLink
                    href="https://github.com/remix-run/react-router/blob/v6.0.0/docs/upgrading/v5.md#remove-link-component-prop"
                    newWindow
                  >
                    React Router v6
                  </DxcLink>{" "}
                  and higher, the prop <Code>component</Code> is no longer available so it is necessary to use hooks provided by the
                  newer versions of{" "}
                  <DxcLink href="https://reactrouter.com/api/hooks/useNavigate" newWindow>
                    React Router
                  </DxcLink>
                  .
                </DxcParagraph>
                <Example example={routerLink6} defaultIsVisible />
              </>
            ),
          },
          {
            title: "NextJS Link",
            content: (
              <>
                <DxcParagraph>
                  This is an example of{" "}
                  <DxcLink
                    href="https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component"
                    newWindow
                  >
                    NextJS
                  </DxcLink>{" "}
                  .
                </DxcParagraph>
                <Example example={nextLink} defaultIsVisible />
              </>
            ),
          },
        ],
      },
      {
        title: "Icons and notifications",
        content: (
          <>
            <Example example={icons} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const NavTabsCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/nav-tabs/code/NavTabsCodePage.tsx" />
  </DxcFlex>
);

export default NavTabsCodePage;

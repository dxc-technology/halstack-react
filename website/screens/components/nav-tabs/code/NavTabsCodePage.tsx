import {
  DxcText,
  DxcStack,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import routerLink from "./examples/routerLink";
import routerLinkV6 from "./examples/routerLinkV6";
import nextLink from "./examples/nextLink";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    subSections: [
      {
        title: "DxcNavTabs",
        content: (
          <DxcTable>
            <tr>
              <th>Name</th>
              <th>Default</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
            <tr>
              <td>iconPosition: 'top' | 'left'</td>
              <td>
                <Code>'top'</Code>
              </td>
              <td>
                Whether the icon should appear above or to the left of the
                label.
              </td>
            </tr>
            <tr>
              <td>tabIndex: number</td>
              <td>
                <Code>0</Code>
              </td>
              <td>Value of the tabindex for each tab.</td>
            </tr>
          </DxcTable>
        ),
      },
      {
        title: "DxcNavTabs.Tab",
        content: (
          <DxcTable>
            <tr>
              <th>Name</th>
              <th>Default</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
            <tr>
              <td>active: boolean</td>
              <td>
                <Code>false</Code>
              </td>
              <td>Whether the tab is active or not.</td>
            </tr>
            <tr>
              <td>disabled: boolean</td>
              <td>
                <Code>false</Code>
              </td>
              <td>Whether the tab is disabled or not.</td>
            </tr>
            <tr>
              <td>href: string</td>
              <td></td>
              <td>Page to be opened when the user clicks on the tab.</td>
            </tr>
            <tr>
              <td>icon: node | string</td>
              <td></td>
              <td>
                Element or path used as the icon that will be displayed in the
                tab.
              </td>
            </tr>
            <tr>
              <td>notificationNumber: boolean | number</td>
              <td>
                <Code>false</Code>
              </td>
              <td>
                If the value is 'true', an empty badge will appear. If it is
                'false', no badge will appear. If a number is put it will be
                shown as the label of the notification in the tab, taking into
                account that if that number is greater than 99, it will appear
                as '+99' in the badge.
              </td>
            </tr>
            <tr>
              <td>children: string</td>
              <td></td>
              <td>Content of the tab.</td>
            </tr>
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
            <DxcText as="p">
              There are many React based routers, unfortunately all with
              different APIs.
            </DxcText>
            <DxcText as="p">
              So we decided to make our link component just an styled HTML
              anchor element which allows it to be used in any React based
              router. For each API is different so here are some examples for{" "}
              <DxcLink
                href="https://reactrouter.com/docs/en/v6/hooks/use-href"
                newWindow
              >
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
            </DxcText>
          </>
        ),
        subSections: [
          {
            title: "React router",
            content: (
              <>
                <DxcText as="p">
                  This is an example of{" "}
                  <DxcLink
                    href="https://v5.reactrouter.com/web/api/Route/component"
                    newWindow
                  >
                    React Router
                  </DxcLink>{" "}
                  using the prop <Code>component</Code>. Note that this Prop is
                  not available in v6.
                </DxcText>
                <Example example={routerLink} defaultIsVisible />
              </>
            ),
          },
          {
            title: "React router v6",
            content: (
              <>
                <DxcText as="p">
                  In{" "}
                  <DxcLink
                    href="https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#remove-link-component-prop"
                    newWindow
                  >
                    React Router v6
                  </DxcLink>{" "}
                  the prop <Code>component</Code> is no longer available so it
                  is necessary to use hooks provided by{" "}
                  <DxcLink
                    href="https://reactrouter.com/docs/en/v6/hooks/use-href"
                    newWindow
                  >
                    React Router v6
                  </DxcLink>
                  .
                </DxcText>
                <Example example={routerLinkV6} defaultIsVisible />
              </>
            ),
          },
          {
            title: "NextJS Link",
            content: (
              <>
                <DxcText as="p">
                  This is an example of{" "}
                  <DxcLink
                    href="https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component"
                    newWindow
                  >
                    NextJS
                  </DxcLink>{" "}
                  .
                </DxcText>
                <Example example={nextLink} defaultIsVisible />
              </>
            ),
          },
        ],
      },
    ],
  },
];

const NavTabsCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/nav-tabs/code/NavTabsCodePage.tsx" />
    </DxcStack>
  );
};

export default NavTabsCodePage;

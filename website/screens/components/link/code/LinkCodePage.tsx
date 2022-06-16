import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcLink,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import nextLink from "./examples/nextLink";
import basicUsage from "./examples/basicUsage";
import routerLink from "./examples/routerLink";
import routerLink6 from "./examples/routerLink6";
import withIcon from "./examples/withIcon";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>disabled: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the link is disabled.</td>
          </tr>
          <tr>
            <td>inheritColor: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the color is inherited from parent.</td>
          </tr>
          <tr>
            <td>icon: node | string</td>
            <td></td>
            <td>
              Element or path used as the icon that will be placed next to the
              link text.
            </td>
          </tr>
          <tr>
            <td>iconPosition: 'before' | 'after'</td>
            <td>
              <Code>'before'</Code>
            </td>
            <td>Indicates the position of the icon in the component.</td>
          </tr>
          <tr>
            <td>href: string</td>
            <td></td>
            <td>Page to be opened when the user clicks on the link.</td>
          </tr>
          <tr>
            <td>newWindow: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the page is opened in a new browser tab.</td>
          </tr>
          <tr>
            <td>onClick: function</td>
            <td></td>
            <td>
              If defined, the link will be displayed as a button. This function
              will be called when the user clicks the link.
            </td>
          </tr>
          <tr>
            <td>children: string</td>
            <td></td>
            <td>Content of the link.</td>
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
            <td>Value of the tabindex.</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Router links",
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
              . Some of these examples are just representations of how they
              should be implemented but might not work correctly in this
              scenario.
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
                <Example example={routerLink6} defaultIsVisible />
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
          {
            title: "With icon",
            content: <Example example={withIcon} defaultIsVisible />,
          },
        ],
      },
    ],
  },
];

const LinkCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/link/code/LinkCodePage.tsx" />
    </DxcStack>
  );
};

export default LinkCodePage;

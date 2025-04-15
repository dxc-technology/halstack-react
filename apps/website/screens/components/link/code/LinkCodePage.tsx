import { DxcTable, DxcParagraph, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import nextLink from "./examples/nextLink";
import basicUsage from "./examples/basicUsage";
import routerLink from "./examples/routerLink";
import routerLink6 from "./examples/routerLink6";
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
              <TableCode>string</TableCode>
            </td>
            <td>Text of the link.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the link is disabled.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Page to be opened when the user clicks on the link.</td>
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
              name or SVG element as the icon that will be placed next to the link text. When using Material Symbols,
              replace spaces with underscores. By default they are outlined if you want it to be filled prefix the
              symbol name with <TableCode>"filled_"</TableCode>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>
              <TableCode>'before' | 'after'</TableCode>
            </td>
            <td>Indicates the position of the icon in the component.</td>
            <td>
              <TableCode>'before'</TableCode>
            </td>
          </tr>
          <tr>
            <td>inheritColor</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the color is inherited from parent.</td>
            <td>
              <TableCode>false</TableCode>
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
            <td>newWindow</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the page is opened in a new browser tab.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>
              <TableCode>{"() => void"}</TableCode>
            </td>
            <td>
              If defined, the link will be displayed as a button. This function will be called when the user clicks the
              link.
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
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Router links",
        content: (
          <>
            <DxcParagraph>There are many React based routers, unfortunately all with different APIs.</DxcParagraph>
            <DxcParagraph>
              So we decided to make our link component just an styled HTML anchor element which allows it to be used in
              any React based router. For each API is different, so here are some examples for{" "}
              <DxcLink href="https://reactrouter.com/en/main/hooks/use-href" newWindow>
                React Router
              </DxcLink>{" "}
              and{" "}
              <DxcLink
                href="https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component"
                newWindow
              >
                NextJS Link
              </DxcLink>
              . Some of these examples are just representations of how they should be implemented but might not work
              correctly in this scenario.
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
                  using the prop <Code>component</Code>. Note that this prop is not available in v6.
                </DxcParagraph>
                <Example example={routerLink} defaultIsVisible />
              </>
            ),
          },
          {
            title: "React router v6",
            content: (
              <>
                <DxcParagraph>
                  In{" "}
                  <DxcLink
                    href="https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#remove-link-component-prop"
                    newWindow
                  >
                    React Router v6
                  </DxcLink>{" "}
                  the prop <Code>component</Code> is no longer available so it is necessary to use hooks provided by{" "}
                  <DxcLink href="https://reactrouter.com/en/main/hooks/use-href" newWindow>
                    React Router v6
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
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const LinkCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/link/code/LinkCodePage.tsx" />
    </DxcFlex>
  );
};

export default LinkCodePage;

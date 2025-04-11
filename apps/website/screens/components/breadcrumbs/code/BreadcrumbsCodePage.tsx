import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import Code, { TableCode, ExtendedTableCode } from "@/common/Code";
import basicUsage from "./examples/basicUsage";
import nextJS from "./examples/nextJS";
import StatusBadge from "@/common/StatusBadge";

const itemTypeString = `{
  href?: string;
  label: string;
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
            <td>ariaLabel</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Provides a label that describes the type of navigation enabled by the component.</td>
            <td>
              <TableCode>'Breadcrumbs'</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                items
              </DxcFlex>
            </td>
            <td>
              <TableCode>Item[]</TableCode>
              <p>
                being <Code>Item</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{itemTypeString}</ExtendedTableCode>
            </td>
            <td>Array of objects representing the items of the breadcrumbs.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemsBeforeCollapse</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Number of items before showing a collapsed version of the breadcrumbs. It can't be lower than two
              (root/collapsed action and current page).
            </td>
            <td>
              <TableCode>4</TableCode>
            </td>
          </tr>
          <tr>
            <td>onItemClick</td>
            <td>
              <TableCode>{"(value: string) => void"}</TableCode>
            </td>
            <td>
              Callback for custom navigation with third-party libraries such as Next (<Code>useRouter</Code>) or React
              Router (<Code>useNavigate</Code>). This function will be called when an item is clicked, receiving its{" "}
              <Code>href</Code> as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>showRoot</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>When items are collapsed, whether the root item should always be displayed or not.</td>
            <td>
              <TableCode>true</TableCode>
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
        title: "Custom navigation",
        content: (
          <>
            <DxcParagraph>There are many React based routers, unfortunately all with different APIs.</DxcParagraph>
            <DxcParagraph>
              As we explained above, the <Code>onItemClick</Code> prop is a callback that will be called when an item is
              clicked, receiving its <Code>href</Code> as a parameter. You can take advantage of this prop to navigate
              programmatically with third-party libraries hooks or functions.
            </DxcParagraph>
          </>
        ),
        subSections: [
          {
            title: "Next.js useRouter",
            content: <Example example={nextJS} defaultIsVisible />,
          },
        ],
      },
    ],
  },
];

const BreadcrumbsCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/breadcrumbs/code/BreadcrumbsCodePage.tsx" />
  </DxcFlex>
);

export default BreadcrumbsCodePage;

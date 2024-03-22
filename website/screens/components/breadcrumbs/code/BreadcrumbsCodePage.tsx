import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcParagraph,
  DxcFlex,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";

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
            <td>
              Provides a label that describes the type of navigation provided by
              the component.
            </td>
            <td>
              <TableCode>'Breadcrumbs'</TableCode>
            </td>
          </tr>
          <tr>
            <td>items</td>
            <td>
              <ExtendedTableCode>
                {`{ label: string, href?: string }`}
              </ExtendedTableCode>
            </td>
            <td>
              Array of objects with the label and href of each breadcrumb.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemsBeforeCollapse</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Number of items before showing a collapsed version of the
              breadcrumbs. It can't be lower than 2 (root/collapsed action and
              current page).
            </td>
            <td>
              <TableCode>4</TableCode>
            </td>
          </tr>
          <tr>
            <td>onItemClick</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Callback for custom navigation with third-party libraries such as
              Next (<Code>useRouter</Code>) or React Router (
              <Code>useHistory</Code>). This function will be called when an
              item is clicked, receiving its <Code>href</Code> as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>showRoot</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              Whether to always show the root item if the items are collapsed.
            </td>
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
    content: (
      <DxcParagraph>
        The following examples show the basic structure of the DxcBreadcrumbs
        component and how to use it.
      </DxcParagraph>
    ),
    // subSections: [
    //   {
    //     title: "Basic usage",
    //     content: <Example example={basicUsage} defaultIsVisible />,
    //   },
    //   {
    //     title: "Nested list",
    //     content: <Example example={nestedList} defaultIsVisible />,
    //   },
    // ],
  },
];

const BreadcrumbsCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/breadcrumbs/code/BreadcrumbsCodePage.tsx" />
    </DxcFlex>
  );
};

export default BreadcrumbsCodePage;

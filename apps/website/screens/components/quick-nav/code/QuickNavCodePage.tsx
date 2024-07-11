import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import quickNav from "./examples/quickNav";
import withContent from "./examples/withContent";
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
            <td>title</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Title of the quick nav component.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                links
              </DxcFlex>
            </td>
            <td>
              <TableCode>{"{ label: string; links?: Link[]; }[]"}</TableCode>
            </td>
            <td>
              Links of the quick nav component. Only first and second level
              links will be shown in the quick nav, due to design restrictions.
              Each link has the following properties:
              <ul>
                <li>
                  <b>label</b>: Text to be shown in the link. The content must
                  be wrapped with an id equal to the slugified label (in lower
                  case and the white spaces replaced by &#39;-&#39;) in order to
                  be able to navigate to the section that the label references.
                </li>
                <li>
                  <b>links</b>: Sublinks of the link.
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
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: (
          <>
            <Example example={quickNav} defaultIsVisible />
          </>
        ),
      },
      {
        title: "With content",
        content: (
          <>
            <Example example={withContent} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const QuickNavCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/quick-nav/code/QuickNavCodePage.tsx" />
    </DxcFlex>
  );
};

export default QuickNavCodePage;

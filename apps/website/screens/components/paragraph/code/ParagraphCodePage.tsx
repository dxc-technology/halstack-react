import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcTable } from "@repo/ui";
import basicUsage from "./examples/basicUsage";
import multipleParagraphs from "./examples/multipleParagraphs";
import TableCode from "@/common/TableCode";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>children</td>
          <td>
            <TableCode>React.ReactNode</TableCode>
          </td>
          <td>Text to be displayed in the paragraph.</td>
          <td>-</td>
        </tr>
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
        title: "Multiple paragraphs",
        content: <Example example={multipleParagraphs} defaultIsVisible />,
      },
    ],
  },
];

const ParagraphCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/paragraph/code/ParagraphCodePage.tsx" />
    </DxcFlex>
  );
};

export default ParagraphCodePage;

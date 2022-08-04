import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import basicUsage from "./examples/basicUsage";
import multipleParagraphs from "./examples/multipleParagraphs";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td>Text to be displayed in the paragraph</td>
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
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/paragraph/code/ParagraphCodePage.tsx" />
    </DxcFlex>
  );
};

export default ParagraphCodePage;

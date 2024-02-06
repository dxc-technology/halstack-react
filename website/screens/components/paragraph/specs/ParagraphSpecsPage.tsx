import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Typography",
        content: (
          <>
            <DxcTable>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>
                  <Code>fontSize</Code>
                </td>
                <td>Paragraph</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Paragraph</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>fontColor</Code>
                </td>
                <td>Paragraph</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
            </DxcTable>
          </>
        ),
      },
    ],
  },
];

const ParagraphSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/paragraph/specs/ParagraphSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ParagraphSpecsPage;

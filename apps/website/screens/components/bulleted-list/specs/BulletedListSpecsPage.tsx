import { DxcTable, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";

const sections = [
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Typography",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Component token</th>
                  <th>Element</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>fontFamily</Code>
                  </td>
                  <td>List item text</td>
                  <td>
                    <Code>font-family-sans</Code>
                  </td>
                  <td>'Open Sans, sans-serif'</td>
                </tr>
                <tr>
                  <td>
                    <Code>fontSize</Code>
                  </td>
                  <td>List item text</td>
                  <td>
                    <Code>font-scale-03</Code>
                  </td>
                  <td>1rem</td>
                </tr>
                <tr>
                  <td>
                    <Code>fontWeight</Code>
                  </td>
                  <td>List item text</td>
                  <td>
                    <Code>font-scale-03</Code>
                  </td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>
                    <Code>color</Code>
                  </td>
                  <td>List item text</td>
                  <td>
                    <Code>color-black</Code>
                  </td>
                  <td>#000000</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
];

const BulletedListSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bulleted-list/specs/BulletedListSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default BulletedListSpecsPage;

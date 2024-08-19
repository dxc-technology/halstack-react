import { DxcBulletedList, DxcTable, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Date input",
    content: <>TODO</>,
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "TODO",
        content: (
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
              <tr></tr>
              <tr></tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WAI-ARIA",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                WAI-ARIA authoring practices -{" "}
                <DxcLink href="https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/data-grids/" newWindow>
                  Data Grid Examples
                </DxcLink>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const DataGridSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/data-grid/specs/DataGridSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default DataGridSpecsPage;

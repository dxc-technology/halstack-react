import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import TableCode from "@/common/TableCode";

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
            <td>orientation</td>
            <td>
              <TableCode>'horizontal' | 'vertical'</TableCode>
            </td>
            <td>The divider can be showed in horizontal or vertical.</td>
            <td>
              <TableCode>'horizontal'</TableCode>
            </td>
          </tr>
          <tr>
            <td>weight</td>
            <td>
              <TableCode>'regular' | 'strong'</TableCode>
            </td>
            <td>Modifies the thickness of the divider.</td>
            <td>'regular'</td>
          </tr>
          <tr>
            <td>length</td>
            <td>
              <TableCode>'fixed' | '30%' | '50%' | '80%' | 'fillParent'</TableCode>
            </td>
            <td>Modifies the length of the divider.</td>
            <td>
              <TableCode>'fixed'</TableCode>
            </td>
          </tr>
          <tr>
            <td>color</td>
            <td>
              <TableCode>'default' | 'darkGrey'</TableCode>
            </td>
            <td>Modifies the color of the divider</td>
            <td>
              <TableCode>'default'</TableCode>
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
        title: "Basic Usage",
        content: (
          <p>Examples are not available yet, they will be added soon.</p>
        ),
      },
    ],
  },
];

const DividerCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/divider/code/DividerCodePage.tsx" />
    </DxcFlex>
  );
};

export default DividerCodePage;

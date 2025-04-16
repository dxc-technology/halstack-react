import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import { TableCode } from "@/common/Code";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import vertical from "./examples/vertical";

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
            <td>color</td>
            <td>
              <TableCode>'lightGrey' | 'mediumGrey' | 'darkGrey'</TableCode>
            </td>
            <td>Modifies the color of the divider.</td>
            <td>
              <TableCode>'mediumGrey'</TableCode>
            </td>
          </tr>
          <tr>
            <td>decorative</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              Specifies whether the divider serves a purely decorative purpose or functions as a semantic separator for
              content. Additionally, it determines whether the divider is accessible to screen readers.
            </td>
            <td>
              <TableCode>true</TableCode>
            </td>
          </tr>
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
            <td>
              <TableCode>'regular'</TableCode>
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
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Vertical",
        content: <Example example={vertical} defaultIsVisible />,
      },
    ],
  },
];

const DividerCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/divider/code/DividerCodePage.tsx" />
  </DxcFlex>
);

export default DividerCodePage;

import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import TableCode from "@/common/TableCode";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import customSizes from "./examples/customSides";
import StatusBadge from "@/common/StatusBadge";

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
          <td>space</td>
          <td>
            <TableCode>
              '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
              '2rem' | '3rem' | '4rem' | '5rem'
            </TableCode>
          </td>
          <td>Applies the spacing scale to all sides.</td>
          <td>
            <TableCode>'0rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>horizontal</td>
          <td>
            <TableCode>
              '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
              '2rem' | '3rem' | '4rem' | '5rem'
            </TableCode>
          </td>
          <td>Applies the spacing scale to the left and right sides.</td>
          <td>
            <TableCode>'0rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>
            <TableCode>
              '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
              '2rem' | '3rem' | '4rem' | '5rem'
            </TableCode>
          </td>
          <td>Applies the spacing scale to the top and bottom sides.</td>
          <td>
            <TableCode>'0rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>top</td>
          <td>
            <TableCode>
              '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
              '2rem' | '3rem' | '4rem' | '5rem'
            </TableCode>
          </td>
          <td>Applies the spacing scale to the top side.</td>
          <td>
            <TableCode>'0rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>right</td>
          <td>
            <TableCode>
              '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
              '2rem' | '3rem' | '4rem' | '5rem'
            </TableCode>
          </td>
          <td>Applies the spacing scale to the right side.</td>
          <td>
            <TableCode>'0rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>
            <TableCode>
              '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
              '2rem' | '3rem' | '4rem' | '5rem'
            </TableCode>
          </td>
          <td>Applies the spacing scale to the bottom side.</td>
          <td>
            <TableCode>'0rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>left</td>
          <td>
            <TableCode>
              '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
              '2rem' | '3rem' | '4rem' | '5rem'
            </TableCode>
          </td>
          <td>Applies the spacing scale to the left side.</td>
          <td>
            <TableCode>'0rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>
            <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
              <StatusBadge status="required" />
              children
            </DxcFlex>
          </td>
          <td>
            <TableCode>React.ReactNode</TableCode>
          </td>
          <td>Custom content inside the bleed.</td>
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
        title: "Custom sides",
        content: <Example example={customSizes} defaultIsVisible />,
      },
    ],
  },
];

const BleedTableCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bleed/TableCode/BleedTableCodePage.tsx" />
    </DxcFlex>
  );
};

export default BleedTableCodePage;

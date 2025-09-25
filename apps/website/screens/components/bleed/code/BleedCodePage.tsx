import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import { TableCode } from "@/common/Code";
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
          <td>bottom</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Applies the spacing scale to the bottom side.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
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
        <tr>
          <td>horizontal</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Applies the spacing scale to the left and right sides.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>left</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Applies the spacing scale to the left side.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>right</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Applies the spacing scale to the right side.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>space</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Applies the spacing scale to all sides.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>top</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Applies the spacing scale to the top side.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Applies the spacing scale to the top and bottom sides.</td>
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

const BleedCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/bleed/code/BleedCodePage.tsx" />
  </DxcFlex>
);

export default BleedCodePage;

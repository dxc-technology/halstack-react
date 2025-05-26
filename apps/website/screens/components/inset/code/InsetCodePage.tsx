import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import customSides from "./examples/customSides";
import { TableCode } from "@/common/Code";
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
            <td>Custom content inside the inset.</td>
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
        </tbody>
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
        content: <Example example={customSides} defaultIsVisible />,
      },
    ],
  },
];

const InsetCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/inset/code/InsetCodePage.tsx" />
  </DxcFlex>
);

export default InsetCodePage;

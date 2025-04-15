import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import { TableCode } from "@/common/Code";
import basicUsage from "./examples/basicUsage";
import Example from "@/common/example/Example";
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
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Custom content inside the container.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be displayed inside the tooltip.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>position</td>
            <td>
              <TableCode>'bottom' | 'top' | 'left' | 'right'</TableCode>
            </td>
            <td>
              Preferred position for displaying the tooltip. It may adjust automatically based on available space.
            </td>
            <td>
              <TableCode>'bottom'</TableCode>
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
    ],
  },
];

const TooltipCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/tooltip/code/TooltipCodePage.tsx" />
  </DxcFlex>
);

export default TooltipCodePage;

import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const sections = [
  {
    title: "Code",
    content: (
      <>
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
              <td>level</td>
              <td>
                <TableCode>1 | 2 | 3 | 4 | 5</TableCode>
              </td>
              <td>
                Defines the heading level from 1 to 5. The styles of the heading are applied according to the level. The
                HTML tag of the heading will be the one specified in the <Code>as</Code> prop. If no <Code>as</Code>{" "}
                prop is provided, the tag of the heading is the the one corresponding to the value of the{" "}
                <Code>level</Code> prop (for example, level 1 will render an <Code>h1</Code> tag).
              </td>
              <td>
                <TableCode>1</TableCode>
              </td>
            </tr>
            <tr>
              <td>
                <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                  <StatusBadge status="required" />
                  text
                </DxcFlex>
              </td>
              <td>
                <TableCode>string</TableCode>
              </td>
              <td>Heading text.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>weight</td>
              <td>
                <TableCode>'light' | 'normal' | 'bold'</TableCode>
              </td>
              <td>Modifies the default weight of the heading.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>as</td>
              <td>
                <TableCode>'h1' | 'h2' | 'h3' | 'h4'| 'h5'</TableCode>
              </td>
              <td>Specifies the HTML tag of the heading.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>
                <TableCode>
                  'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin
                </TableCode>
              </td>
              <td>
                Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left'
                and 'right' properties in order to specify different margin sizes.
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
    ],
  },
];

const HeadingCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/heading/code/HeadingCodePage.tsx" />
    </DxcFlex>
  );
};

export default HeadingCodePage;

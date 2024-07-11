import { DxcTable, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import overlay from "./examples/overlay";
import TableCode from "@/common/TableCode";
import Code from "@/common/Code";

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
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Text to be placed inside the spinner. When the component is in small mode, this label acts as an{" "}
              <Code>aria-label</Code> value.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>
              <TableCode>'large' | 'small' | 'overlay' </TableCode>
            </td>
            <td>The different variants of the components.</td>
            <td>
              <TableCode>'large'</TableCode>
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              The value of the progress indicator. If it's received the component is determinate, otherwise is
              indeterminate.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>showValue</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, the value is displayed inside the spinner.</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | Margin</TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an object with 'top', 'bottom', 'left' and
              'right' properties in order to specify different margin sizes.
            </td>
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
        title: "Overlay",
        content: <Example example={overlay} defaultIsVisible />,
      },
    ],
  },
];

const SpinnerUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/spinner/code/SpinnerCodePage.tsx" />
    </DxcFlex>
  );
};

export default SpinnerUsagePage;

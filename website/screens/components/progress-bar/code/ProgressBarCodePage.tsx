import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basic from "./examples/basicUsage";
import overlay from "./examples/overlay";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed above the progress bar.</td>
        </tr>
        <tr>
          <td>helperText: string</td>
          <td></td>
          <td>Helper text to be placed under the progress bar.</td>
        </tr>
        <tr>
          <td>overlay: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, the progress bar will be displayed as a modal.</td>
        </tr>
        <tr>
          <td>value: number</td>
          <td></td>
          <td>
            The value of the progress indicator. If it's received the component
            is determinate otherwise is indeterminate.
          </td>
        </tr>
        <tr>
          <td>showValue: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, the value is displayed above the progress bar.</td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right'
            properties in order to specify different margin sizes.
          </td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic Usage",
        content: (
          <>
            <Example example={basic} defaultIsVisible />
          </>
        ),
      },
      {
        title: "Overlay",
        content: (
          <>
            <Example example={overlay} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const ProgressBarCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/progress-bar/code/ProgressBarCodePage.tsx" />
    </DxcStack>
  );
};

export default ProgressBarCodePage;

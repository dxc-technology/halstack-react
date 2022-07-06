import { DxcTable, DxcStack } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import overlay from "./examples/overlay";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <HeaderDescriptionCell>Description</HeaderDescriptionCell>
        </tr>
        <tr>
          <td>label: string</td>
          <td></td>
          <td>Text to be placed inside the spinner.</td>
        </tr>
        <tr>
          <td>mode: 'large' | 'small' | 'overlay' </td>
          <td>
            <Code>'large'</Code>
          </td>
          <td>The spinner can have overlay or small or large size. </td>
        </tr>
        <tr>
          <td>value: number</td>
          <td></td>
          <td>
            The value of the progress indicator. If it's received the component
            is determinate, otherwise is indeterminate.
          </td>
        </tr>
        <tr>
          <td>showValue: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, the value is displayed inside the spinner.</td>
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
    <DxcStack gutter="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/spinner/code/SpinnerCodePage.tsx" />
    </DxcStack>
  );
};

export default SpinnerUsagePage;

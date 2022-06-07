import { DxcStack, DxcTable, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>shadowDepth: 0 | 1 | 2</td>
            <td>
              <Code>2</Code>
            </td>
            <td>The size of the shadow to be displayed around the box.</td>
          </tr>
          <tr>
            <td>display: string</td>
            <td>
              <Code>'inline-flex'</Code>
            </td>
            <td>Changes the display CSS property of the box div.</td>
          </tr>
          <tr>
            <td>children: node</td>
            <td></td>
            <td>Custom content that will be placed in the box component.</td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' |
              'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an object with 'top',
              'bottom', 'left' and 'right' properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>padding: string | object</td>
            <td></td>
            <td>
              Size of the padding to be applied to the component ('xxsmall' | 'xsmall' | 'small' |
              'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an object with 'top',
              'bottom', 'left' and 'right' properties in order to specify different padding sizes.
            </td>
          </tr>
          <tr>
            <td>size: string</td>
            <td>
              <Code>'fitContent'</Code>
            </td>
            <td>
              Size of the component ('small' | 'medium' | 'large' | 'fillParent'| 'fitContent').
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
        title: "Basic usage",
        content: (
          <>
            <Example example={basicUsage} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const BoxCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/box/code/BoxCodePage.tsx" />
    </DxcStack>
  );
};

export default BoxCodePage;

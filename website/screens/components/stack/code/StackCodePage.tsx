import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import alignment from "./examples/alignment";

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
          <td>alignX: 'start' | 'end' | 'center' | 'baseline' | 'stretch'</td>
          <td>
            <Code>'stretch'</Code>
          </td>
          <td>Alignment applied to children in the main axis.</td>
        </tr>
        <tr>
          <td>as: string | component</td>
          <td>
            <Code>'div'</Code>
          </td>
          <td>
            Specifies the HTML tag or component that is rendered as the wrapper
            element.
          </td>
        </tr>
        <tr>
          <td>divider: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, a divider is shown between each child.</td>
        </tr>
        <tr>
          <td>
            gutter: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '0.75rem' |
            '1rem' | '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Space applied between each child.</td>
        </tr>
        <tr>
          <td>reverse: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>If true, it changes the direction of the stack to reverse.</td>
        </tr>
        <tr>
          <td>wrap: boolean</td>
          <td>
            <Code>false</Code>
          </td>
          <td>
            Sets whether the children are forced onto one column or can wrap
            onto multiple columns.
          </td>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td>Custom content inside the stack.</td>
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
        title: "Alignments",
        content: <Example example={alignment} defaultIsVisible />,
      },
    ],
  },
];

const StackCodePage = () => {
  return (
    <DxcStack gutter="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/stack/code/StackCodePage.tsx" />
    </DxcStack>
  );
};

export default StackCodePage;

import { DxcStack, DxcTable, DxcText } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import alignment from "./examples/alignment";

const ColumnsPropsTable = () => (
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
      <td>alignY: 'start' | 'end' | 'center' | 'baseline' | 'stretch'</td>
      <td>
        <Code>'stretch'</Code>
      </td>
      <td>Alignment applied to children in the cross axis.</td>
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
      <td>If true, a divider is shown between columns.</td>
    </tr>
    <tr>
      <td>
        gutter: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '0.75rem' | '1rem'
        | '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
      </td>
      <td>
        <Code>'0rem'</Code>
      </td>
      <td>Space applied between each column.</td>
    </tr>
    <tr>
      <td>reverse: boolean</td>
      <td>
        <Code>false</Code>
      </td>
      <td>If true, it changes the direction of the columns to reverse.</td>
    </tr>
    <tr>
      <td>children: node | DxcColumns.Column</td>
      <td></td>
      <td>Each single column.</td>
    </tr>
  </DxcTable>
);

const ColumnPropsTable = () => (
  <DxcTable>
    <tr>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        width: 'auto' | 'content' | '1' | '2' | '3' | '4' | '5' | '6' | '7' |
        '8'
      </td>
      <td>
        <Code>'auto'</Code>
      </td>
      <td>
        Fixed width of the column. The width of the columns is based on an 8
        columns grid layout.
      </td>
    </tr>
    <tr>
      <td>children: node</td>
      <td></td>
      <td>Custom content inside the column.</td>
    </tr>
  </DxcTable>
);

const sections = [
  {
    title: "Props",
    subSections: [
      {
        title: "DxcColumns",
        content: <ColumnsPropsTable />,
      },
      {
        title: "DxcColumns.Column",
        content: (
          <DxcText as="p">
            Everything between the tags will be displayed as the content of a
            single column. The use of this child is optional, but provides the
            control over the width of the column.
          </DxcText>
        ),
        subSections: [
          {
            title: "Props",
            content: <ColumnPropsTable />,
          },
        ],
      },
    ],
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

const ColumnsCodePage = () => {
  return (
    <DxcStack gutter="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/columns/code/ColumnsCodePage.tsx" />
    </DxcStack>
  );
};

export default ColumnsCodePage;

import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import customSides from "./examples/customSides";

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
          <td>
            space: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' |
            '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Applies the spacing scale to all sides.</td>
        </tr>
        <tr>
          <td>
            horizontal: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' |
            '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Applies the spacing scale to the left and right sides.</td>
        </tr>
        <tr>
          <td>
            vertical: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' |
            '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Applies the spacing scale to the top and bottom sides.</td>
        </tr>
        <tr>
          <td>
            top: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem'
            | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Applies the spacing scale to the top side.</td>
        </tr>
        <tr>
          <td>
            right: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' |
            '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Applies the spacing scale to the right side.</td>
        </tr>
        <tr>
          <td>
            bottom: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' |
            '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Applies the spacing scale to the bottom side.</td>
        </tr>
        <tr>
          <td>
            left: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem'
            | '2rem' | '3rem' | '4rem' | '5rem'
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>Applies the spacing scale to the left side.</td>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td>Custom content inside the inset.</td>
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
        content: <Example example={customSides} defaultIsVisible />,
      },
    ],
  },
];

const InsetCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/inset/code/InsetCodePage.tsx" />
    </DxcFlex>
  );
};

export default InsetCodePage;

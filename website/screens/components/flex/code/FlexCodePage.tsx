import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import directionAlignment from "./examples/directionAlignment";
import gapOrderGrow from "./examples/gapOrderGrow";
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
          <td>
            direction: 'row' | 'row-reverse' | 'column' | 'column-reverse'
          </td>
          <td>
            <Code>'row'</Code>
          </td>
          <td>
            Sets <Code>flex-direction</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>
            justifyContent: 'flex-start' | 'flex-end' | 'start' | 'end' | 'left'
            | 'right' | 'center' | 'space-between' | 'space-around' |
            'space-evenly'{" "}
          </td>
          <td>
            <Code>'flex-start'</Code>
          </td>
          <td>
            Sets <Code>justify-content</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>
            alignItems: 'stretch' | 'flex-start' | 'flex-end' | 'start' | 'end'
            | 'self-start' | 'self-end' | 'center' | 'baseline'
          </td>
          <td>
            <Code>'stretch'</Code>
          </td>
          <td>
            Sets <Code>align-items</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>
            alignContent: 'normal' | 'flex-start' | 'flex-end' | 'start' | 'end'
            | 'center' | 'space-between' | 'space-evenly' | 'stretch'
          </td>
          <td>
            <Code>'normal'</Code>
          </td>
          <td>
            Sets <Code>align-content</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>
            alignSelf: 'auto' | 'flex-start' | 'flex-end' | 'center' |
            'baseline' | 'stretch'
          </td>
          <td>
            <Code>'auto'</Code>
          </td>
          <td>
            Sets <Code>align-self</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>wrap: 'nowrap' | 'wrap' | 'wrap-reverse'</td>
          <td>
            <Code>'nowrap'</Code>
          </td>
          <td>
            Sets <Code>flex-wrap</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>gap: string | Gap</td>
          <td>
            <Code>'0'</Code>
          </td>
          <td>
            Sets <Code>gap</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>grow: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>
            Sets <Code>flex-grow</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>shrink: number</td>
          <td>
            <Code>1</Code>
          </td>
          <td>
            Sets <Code>flex-shrink</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>order: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>
            Sets <Code>order</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>basis: string</td>
          <td>
            <Code>'auto'</Code>
          </td>
          <td>
            Sets <Code>flex-basis</Code> CSS property.
          </td>
        </tr>
        <tr>
          <td>as: keyof HTMLElementTagNameMap</td>
          <td>
            <Code>'div'</Code>
          </td>
          <td>Sets a custom HTML tag.</td>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td>Custom content inside the flex container.</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Direction and alignment",
        content: <Example example={directionAlignment} defaultIsVisible />,
      },
      {
        title: "Gap, order and grow",
        content: <Example example={gapOrderGrow} defaultIsVisible />,
      },
    ],
  },
];

const FlexCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/flex/code/FlexCodePage.tsx" />
    </DxcFlex>
  );
};

export default FlexCodePage;

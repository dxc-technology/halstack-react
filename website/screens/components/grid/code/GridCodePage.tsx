import {
  DxcFlex,
  DxcLink,
  DxcParagraph,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
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
          <td>autoColumns: string</td>
          <td>
            <Code>'auto'</Code>
          </td>
          <td>
            Sets the <Code>grid-auto-columns</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>autoRows: string</td>
          <td>
            <Code>'auto'</Code>
          </td>
          <td>
            Sets the <Code>grid-auto-rows</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>
            gap: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem'
            | '2rem' | '3rem' | '4rem' | '5rem' | Gap
          </td>
          <td>
            <Code>'0rem'</Code>
          </td>
          <td>
            Sets the <Code>gap</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>
            placeContent: 'normal' | 'start' | 'end' | 'center' | 'stretch' |
            'space-between' | 'space-around' | 'space-evenly' | 'baseline' |
            object
          </td>
          <td>
            <Code>'normal'</Code>
          </td>
          <td>
            Sets the <Code>place-content</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>
            placeItems: 'normal' | 'start' | 'end' | 'center' | 'stretch' |
            'baseline' | object
          </td>
          <td>
            <Code>'normal'</Code>
          </td>
          <td>
            Sets the <Code>place-items</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-items"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>templateAreas: string[]</td>
          <td></td>
          <td>
            Sets the <Code>grid-template-areas</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>templateColumns: string[]</td>
          <td></td>
          <td>
            Sets the <Code>grid-template-columns</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>templateRows: string[]</td>
          <td></td>
          <td>
            Sets the <Code>grid-template-rows</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"
            >
              MDN
            </DxcLink>{" "}
            for further information.
          </td>
        </tr>
        <tr>
          <td>as: keyof HTMLElementTagNameMap</td>
          <td>
            <Code>'div'</Code>
          </td>
          <td>Sets the a custom HTML tag.</td>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td>Custom content inside the grid container.</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "DxcGrid.GridItem",
    content: (
      <>
        <DxcParagraph>
          This compound component should be used when the decision to follow the
          Grid layout pattern is assumed only for the parent container. If the
          inner layout of a grid item does not make this same compromise and
          only features props related to the parent container, then that grid
          item should be wrapped with this component.
        </DxcParagraph>
        <DxcParagraph>
          In case you are building a complex Grid layout with several nested
          grid containers, <Code>DxcGrid.GridItem</Code> becomes very limited
          and therefore, you will have to wrap the children with{" "}
          <Code>DxcGrid</Code>.
        </DxcParagraph>
        <DxcParagraph>
          So, to fulfil that scenario,{" "}
          <strong>
            all the <Code>DxcGrid.GridItem</Code>'s props are also available in{" "}
            <Code>DxcGrid</Code>.
          </strong>
        </DxcParagraph>
      </>
    ),
    subSections: [
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
              <td>areaName: string</td>
              <td></td>
              <td>
                Name or tag corresponding to an area defined with{" "}
                <Code>grid-template-areas</Code> at the parent{" "}
                <Code>DxcGrid</Code>.
              </td>
            </tr>
            <tr>
              <td>column: number | string | GridCell</td>
              <td></td>
              <td>
                Sets the <Code>grid-column</Code> CSS property. See{" "}
                <DxcLink
                  newWindow
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column"
                >
                  MDN
                </DxcLink>{" "}
                for further information.
              </td>
            </tr>
            <tr>
              <td>row: number | string | GridCell</td>
              <td></td>
              <td>
                Sets the <Code>grid-row</Code> CSS property. See{" "}
                <DxcLink
                  newWindow
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row"
                >
                  MDN
                </DxcLink>{" "}
                for further information.
              </td>
            </tr>
            <tr>
              <td>
                placeSelf: 'auto' | 'start' | 'end' | 'center' | 'stretch' |
                'baseline' | object
              </td>
              <td>
                <Code>'auto'</Code>
              </td>
              <td>
                Sets the <Code>place-self</Code> CSS property. See{" "}
                <DxcLink
                  newWindow
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-self"
                >
                  MDN
                </DxcLink>{" "}
                for further information.
              </td>
            </tr>
            <tr>
              <td>as: keyof HTMLElementTagNameMap</td>
              <td>
                <Code>'div'</Code>
              </td>
              <td>Sets the a custom HTML tag.</td>
            </tr>
            <tr>
              <td>children: ReactNode</td>
              <td></td>
              <td>Custom content inside the grid container.</td>
            </tr>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "🚧 Examples",
    content: (
      <DxcParagraph>
        Currently under development. More examples will be available soon,
        thanks for the patience.
      </DxcParagraph>
    ) ,
    subSections: [
      // {
      //   title: "Direction and alignment",
      //   content: <Example example={basic} defaultIsVisible />,
      // },
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

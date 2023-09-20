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
import basic from "./examples/basic";
import layout from "./examples/layout";

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
          <td>autoFlow: 'row' | 'column' | 'row dense' | 'column dense'</td>
          <td>
            <Code>'row'</Code>
          </td>
          <td>
            Sets the <Code>grid-auto-flow</Code> CSS property. See{" "}
            <DxcLink
              newWindow
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"
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
          <td>Sets a custom HTML tag.</td>
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
    title: "DxcGrid.Item",
    content: (
      <>
        <DxcParagraph>
          Compound component representing a child of a grid container. It
          provides specific placement controls of how individual items stack or
          align within the grid.
        </DxcParagraph>
        <DxcParagraph>
          <strong>
            Every <Code>DxcGrid.Item</Code>'s prop is also available in{" "}
            <Code>DxcGrid</Code>
          </strong>{" "}
          to facilitate the nesting of grid containers.
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
                Sets the name of an item so that it can be referenced by a
                template created with the <Code>grid-template-areas</Code>{" "}
                property.
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
              <td>children: node</td>
              <td></td>
              <td>Custom content inside the grid container.</td>
            </tr>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basic} defaultIsVisible />,
      },
      {
        title: "Building an application layout",
        content: <Example example={layout} defaultIsVisible />,
      },
    ],
  },
];

const GridCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/grid/code/GridCodePage.tsx" />
    </DxcFlex>
  );
};

export default GridCodePage;

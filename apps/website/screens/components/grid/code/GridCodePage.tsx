import { DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basic from "./examples/basic";
import layout from "./examples/layout";
import Code, { ExtendedTableCode, TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

const gapTypeString = `{
  columnGap: string;
  rowGap: string;
}`;

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
            <td>as</td>
            <td>
              <TableCode>keyof HTMLElementTagNameMap</TableCode>
            </td>
            <td>Sets a custom HTML tag.</td>
            <td>
              <TableCode>'div'</TableCode>
            </td>
          </tr>
          <tr>
            <td>autoColumns</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Sets the <Code>grid-auto-columns</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'auto'</TableCode>
            </td>
          </tr>
          <tr>
            <td>autoFlow</td>
            <td>
              <TableCode>'row' | 'column' | 'row dense' | 'column dense'</TableCode>
            </td>
            <td>
              Sets the <Code>grid-auto-flow</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'row'</TableCode>
            </td>
          </tr>
          <tr>
            <td>autoRows</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Sets the <Code>grid-auto-rows</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'auto'</TableCode>
            </td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                <StatusBadge status="required" />
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Custom content inside the grid container.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>gap</td>
            <td>
              <TableCode>Gap</TableCode>
              <p>
                being <Code>Message</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{gapTypeString}</ExtendedTableCode>
            </td>
            <td>
              Sets the <Code>gap</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap">
                MDN
              </DxcLink>{" "}
              for further information. It can be either a value from the range or an object with the following
              properties:
              <ul>
                <li>
                  <b>rowGap</b>: gutter between rows.
                </li>
                <li>
                  <b>columnGap</b>: gutter between columns.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'0rem'</TableCode>
            </td>
          </tr>
          <tr>
            <td>placeContent</td>
            <td>
              <TableCode>
                'normal' | 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly' |
                'baseline' | PlaceContent
              </TableCode>
            </td>
            <td>
              Sets the <Code>place-content</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-content">
                MDN
              </DxcLink>{" "}
              for further information. It can be either a value from the range or an object with the following
              properties:
              <ul>
                <li>
                  <b>justifyContent</b>: aligns the grid along the inline (row) axis.
                </li>
                <li>
                  <b>alignContent</b>: aligns the grid along the block (column) axis.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'normal'</TableCode>
            </td>
          </tr>
          <tr>
            <td>placeItems</td>
            <td>
              <TableCode>'normal' | 'start' | 'end' | 'center' | 'stretch' | 'baseline' | PlaceItems</TableCode>
            </td>
            <td>
              Sets the <Code>place-items</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-items">
                MDN
              </DxcLink>{" "}
              for further information. It can be either a value from the range or an object with the following
              properties:
              <ul>
                <li>
                  <b>justifyItems</b>: aligns grid items along the inline (row) axis.
                </li>
                <li>
                  <b>alignItems</b>: aligns grid items along the block (column) axis.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'normal'</TableCode>
            </td>
          </tr>
          <tr>
            <td>templateAreas</td>
            <td>
              <TableCode>string[]</TableCode>
            </td>
            <td>
              Sets the <Code>grid-template-areas</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>templateColumns</td>
            <td>
              <TableCode>string[]</TableCode>
            </td>
            <td>
              Sets the <Code>grid-template-columns</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>templateRows</td>
            <td>
              <TableCode>string[]</TableCode>
            </td>
            <td>
              Sets the <Code>grid-template-rows</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "DxcGrid.Item",
    content: (
      <>
        <DxcParagraph>
          Compound component representing a child of a grid container. It provides specific placement controls of how
          individual items stack or align within the grid.
        </DxcParagraph>
        <DxcParagraph>
          <strong>
            Every <Code>DxcGrid.Item</Code>'s prop is also available in <Code>DxcGrid</Code>
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
                <td>areaName</td>
                <td>
                  <TableCode>string</TableCode>
                </td>
                <td>
                  Sets the name of an item so that it can be referenced by a template created with the{" "}
                  <Code>grid-template-areas</Code> property.
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>as</td>
                <td>
                  <TableCode>keyof HTMLElementTagNameMap</TableCode>
                </td>
                <td>Sets a custom HTML tag.</td>
                <td>
                  <TableCode>'div'</TableCode>
                </td>
              </tr>
              <tr>
                <td>
                  <DxcFlex direction="column" gap="var(--spacing-gap-xs)" alignItems="baseline">
                    <StatusBadge status="required" />
                    children
                  </DxcFlex>
                </td>
                <td>
                  <TableCode>React.ReactNode</TableCode>
                </td>
                <td>Custom content inside the grid item container.</td>
                <td>-</td>
              </tr>
              <tr>
                <td>column</td>
                <td>
                  <TableCode>number | string | GridCell</TableCode>
                </td>
                <td>
                  Sets the <Code>grid-column</Code> CSS property. See{" "}
                  <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column">
                    MDN
                  </DxcLink>{" "}
                  for further information. It can be either a value from the range or an object with the following
                  properties:
                  <ul>
                    <li>
                      <b>start</b>: starting position within the grid column.
                    </li>
                    <li>
                      <b>end</b>: ending position within the grid column.
                    </li>
                  </ul>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>placeSelf</td>
                <td>
                  <TableCode>'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline' | PlaceSelf</TableCode>
                </td>
                <td>
                  Sets the <Code>place-self</Code> CSS property. See{" "}
                  <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/place-self">
                    MDN
                  </DxcLink>{" "}
                  for further information. It can be either a value from the range or an object with the following
                  properties:
                  <ul>
                    <li>
                      <b>justifySelf</b>: aligns a grid item inside a cell along the inline (row) axis.
                    </li>
                    <li>
                      <b>alignSelf</b>: aligns a grid item inside a cell along the block (column) axis.
                    </li>
                  </ul>
                </td>
                <td>
                  <TableCode>'auto'</TableCode>
                </td>
              </tr>
              <tr>
                <td>row</td>
                <td>
                  <TableCode>number | string | GridCell</TableCode>
                </td>
                <td>
                  Sets the <Code>grid-row</Code> CSS property. See{" "}
                  <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row">
                    MDN
                  </DxcLink>{" "}
                  for further information. It can be either a value from the range or an object with the following
                  properties:
                  <ul>
                    <li>
                      <b>start</b>: starting position within the grid row.
                    </li>
                    <li>
                      <b>end</b>: ending position within the grid row.
                    </li>
                  </ul>
                </td>
                <td>-</td>
              </tr>
            </tbody>
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

const GridCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/grid/code/GridCodePage.tsx" />
  </DxcFlex>
);

export default GridCodePage;

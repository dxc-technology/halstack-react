import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import directionAlignment from "./examples/directionAlignment";
import gapOrderGrow from "./examples/gapOrderGrow";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";
import StatusBadge from "@/common/StatusBadge";

const gapTypeString = `{
  rowGap: string; 
  columnGap: string
}`;

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        <tbody>
          <tr>
            <td>alignContent</td>
            <td>
              <TableCode>
                'normal' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'center' | 'space-between' | 'space-evenly' |
                'stretch'
              </TableCode>
            </td>
            <td>
              Sets <Code>align-content</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'normal'</TableCode>
            </td>
          </tr>
          <tr>
            <td>alignItems</td>
            <td>
              <TableCode>
                'stretch' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'self-start' | 'self-end' | 'center' |
                'baseline' | 'normal'
              </TableCode>
            </td>
            <td>
              Sets <Code>align-items</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'normal'</TableCode>
            </td>
          </tr>
          <tr>
            <td>alignSelf</td>
            <td>
              <TableCode>'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'</TableCode>
            </td>
            <td>
              Sets <Code>align-self</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'auto'</TableCode>
            </td>
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
            <td>basis</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              Sets <Code>flex-basis</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis">
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
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusBadge status="required" />
                children
              </DxcFlex>
            </td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Custom content inside the flex container.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>direction</td>
            <td>
              <TableCode>'row' | 'row-reverse' | 'column' | 'column-reverse'</TableCode>
            </td>
            <td>
              Sets <Code>flex-direction</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'row'</TableCode>
            </td>
          </tr>
          <tr>
            <td>gap</td>
            <td>
              <TableCode>string | Gap</TableCode>
              <p>
                being <Code>Gap</Code> an object with the following properties:
              </p>
              <ExtendedTableCode>{gapTypeString}</ExtendedTableCode>
            </td>
            <td>
              Sets <Code>gap</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>grow</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Sets <Code>flex-grow</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
          <tr>
            <td>justifyContent</td>
            <td>
              <TableCode>
                'flex-start' | 'flex-end' | 'start' | 'end' | 'left' | 'normal' | 'right' | 'center' | 'space-between' |
                'space-around' | 'space-evenly'
              </TableCode>
            </td>
            <td>
              Sets <Code>justify-content</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'normal'</TableCode>
            </td>
          </tr>
          <tr>
            <td>order</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Sets <Code>order</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/order">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
          </tr>
          <tr>
            <td>shrink</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Sets <Code>flex-shrink</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>1</TableCode>
            </td>
          </tr>
          <tr>
            <td>wrap</td>
            <td>
              <TableCode>'nowrap' | 'wrap' | 'wrap-reverse'</TableCode>
            </td>
            <td>
              Sets <Code>flex-wrap</Code> CSS property. See{" "}
              <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap">
                MDN
              </DxcLink>{" "}
              for further information.
            </td>
            <td>
              <TableCode>'nowrap'</TableCode>
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

const FlexCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/flex/code/FlexCodePage.tsx" />
  </DxcFlex>
);

export default FlexCodePage;

import { DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import directionAlignment from "./examples/directionAlignment";
import gapOrderGrow from "./examples/gapOrderGrow";
import TableCode from "@/common/TableCode";
import StatusBadge from "@/common/StatusBadge";

const coreSpacingTokensTypeString = `'0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '0.75rem' | '1rem' | '1.5rem' | '2rem' | '2.5rem' | '3rem' | '3.5rem' | '4rem' | '5rem' | '6rem' | '7rem'`;

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
        <tr>
          <td>gap</td>
          <td>
            <TableCode>{coreSpacingTokensTypeString} | Gap</TableCode>
          </td>
          <td>
            Sets <Code>gap</Code> CSS property. See{" "}
            <DxcLink newWindow href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap">
              MDN
            </DxcLink>{" "}
            for further information. It can be either a value from the range or an object with the following properties:
            <ul>
              <li>
                <b>rowGap</b>: gutter between rows.
              </li>
              <li>
                <b>columnGap</b>: gutter between columns.
              </li>
            </ul>
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
          <td>fullHeight</td>
          <td>
            <TableCode>boolean</TableCode>
          </td>
          <td>If true, the component will take the full height of its parent container.</td>
          <td>
            <TableCode>false</TableCode>
          </td>
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
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/flex/code/FlexCodePage.tsx" />
    </DxcFlex>
  );
};

export default FlexCodePage;

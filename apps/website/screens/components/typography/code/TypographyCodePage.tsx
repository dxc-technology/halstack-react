import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import basicUsage from "./examples/basicUsage";
import nestedTexts from "./examples/nestedTexts";
import Code, { TableCode } from "@/common/Code";
import StatusBadge from "@/common/StatusBadge";

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
          <td>display</td>
          <td>
            <TableCode>'inline' | 'block'</TableCode>
          </td>
          <td>
            Specifies the <Code>display</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'inline'</TableCode>
          </td>
        </tr>
        <tr>
          <td>color</td>
          <td>
            <TableCode>string</TableCode>
          </td>
          <td>Color of the text.</td>
          <td>
            <TableCode>'#000000'</TableCode>
          </td>
        </tr>
        <tr>
          <td>fontFamily</td>
          <td>
            <TableCode>'Open Sans, sans-serif' | 'Source Code Pro, monospace'</TableCode>
          </td>
          <td>
            Specifies the <Code>font-family</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'Open Sans, sans-serif'</TableCode>
          </td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td>
            <TableCode>'0.75rem' | '0.875rem' | '1rem' | '1.25rem' | '1.5rem' | '2rem' | '3rem' | '3.75rem'</TableCode>
          </td>
          <td>
            Specifies the <Code>font-size</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'1rem'</TableCode>
          </td>
        </tr>
        <tr>
          <td>fontStyle</td>
          <td>
            <TableCode>'normal' | 'italic'</TableCode>
          </td>
          <td>
            Specifies the <Code>font-style</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'normal'</TableCode>
          </td>
        </tr>
        <tr>
          <td>fontWeight</td>
          <td>
            <TableCode>'300' | '400' | '600' | '700'</TableCode>
          </td>
          <td>
            Specifies the <Code>font-weight</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'400'</TableCode>
          </td>
        </tr>
        <tr>
          <td>letterSpacing</td>
          <td>
            <TableCode>'-0.025em' | '-0.0125em' | '0em' | '0.025em' | '0.05em' | '0.1em'</TableCode>
          </td>
          <td>
            Specifies the <Code>letter-spacing</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'0em'</TableCode>
          </td>
        </tr>
        <tr>
          <td>lineHeight</td>
          <td>
            <TableCode>'1em' | '1.25em' | '1.365em' | '1.5em' | '1.715em' | '2em'</TableCode>
          </td>
          <td>
            Specifies the <Code>line-height</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'1.5em'</TableCode>
          </td>
        </tr>
        <tr>
          <td>textAlign</td>
          <td>
            <TableCode>'left' | 'center' | 'right'</TableCode>
          </td>
          <td>
            Specifies the <Code>text-align</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'left'</TableCode>
          </td>
        </tr>
        <tr>
          <td>textDecoration</td>
          <td>
            <TableCode>'none' | 'underline' | 'line-through'</TableCode>
          </td>
          <td>
            Specifies the <Code>text-decoration</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'none'</TableCode>
          </td>
        </tr>
        <tr>
          <td>textOverflow</td>
          <td>
            <TableCode>'clip' | 'ellipsis' | 'unset'</TableCode>
          </td>
          <td>
            Specifies the <Code>text-overflow</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'unset'</TableCode>
          </td>
        </tr>
        <tr>
          <td>whiteSpace</td>
          <td>
            <TableCode>'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap'</TableCode>
          </td>
          <td>
            Specifies the <Code>white-space</Code> CSS property of the component.
          </td>
          <td>
            <TableCode>'normal'</TableCode>
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
          <td>Custom text.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>as</td>
          <td>
            <TableCode>
              'a' | 'blockquote' | 'cite' | 'code' | 'div' | 'em' | 'figcaption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' |
              'h6' | 'p' | 'pre' | 'small' | 'span' | 'strong'
            </TableCode>
          </td>
          <td>Determines the HTML tag with which the text is to be rendered.</td>
          <td>
            <TableCode>'span'</TableCode>
          </td>
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
        title: "Nested texts",
        content: <Example example={nestedTexts} defaultIsVisible />,
      },
    ],
  },
];

const TypographyCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/typography/code/TypographyCodePage.tsx" />
    </DxcFlex>
  );
};

export default TypographyCodePage;

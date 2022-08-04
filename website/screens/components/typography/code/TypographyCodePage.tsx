import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import basicUsage from "./examples/basicUsage";
import nestedTexts from "./examples/nestedTexts";

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
          <td>as: keyof HTMLElementTagNameMap</td>
          <td>
            <Code>'span'</Code>
          </td>
          <td>
            Determines the HTML tag with which the text is to be rendered (Any
            valid HTML tag).
          </td>
        </tr>
        <tr>
          <td>display: 'inline' | 'block'</td>
          <td>
            <Code>'inline'</Code>
          </td>
          <td>Specifies the display CSS property of the component.</td>
        </tr>
        <tr>
          <td>
            fontFamily: 'Open Sans, sans-serif' | 'Source Code Pro, monospace'
          </td>
          <td>
            <Code>'Open Sans, sans-serif'</Code>
          </td>
          <td>Specifies the font-family CSS property of the component.</td>
        </tr>
        <tr>
          <td>
            fontSize: "3.75rem" | "3rem" | "2rem" | "1.5rem" | "1.25rem" |
            "1rem" | "0.875rem" | "0.75rem"
          </td>
          <td>
            <Code>'1rem'</Code>
          </td>
          <td>Specifies the font-size CSS property of the component.</td>
        </tr>
        <tr>
          <td>fontStile: "italic" | "normal"</td>
          <td>
            <Code>'normal'</Code>
          </td>
          <td>Specifies the font-style CSS property of the component.</td>
        </tr>
        <tr>
          <td>fontWeight: "300" | "400" | "600" | "700" </td>
          <td>
            <Code>'400'</Code>
          </td>
          <td>Specifies the font-weight CSS property of the component.</td>
        </tr>
        <tr>
          <td>
            letterSpacing: "-0.025em" | "-0.0125em" | "0em" | "0.025em" |
            "0.05em" | "0.1em"{" "}
          </td>
          <td>
            <Code>'0em'</Code>
          </td>
          <td>Specifies the letter-spacing CSS property of the component.</td>
        </tr>
        <tr>
          <td>
            lineHeight: "1em" | "1.25em" | "1.365em" | "1.5em" | "1.715em" |
            "2em"{" "}
          </td>
          <td>
            <Code>'1.5em'</Code>
          </td>
          <td>Specifies the line-height CSS property of the component.</td>
        </tr>
        <tr>
          <td>textAlign: 'left' | 'center' | 'right' </td>
          <td>
            <Code>'left'</Code>
          </td>
          <td>Specifies the text-align CSS property of the component.</td>
        </tr>
        <tr>
          <td>color: string</td>
          <td>
            <Code>'#000000'</Code>
          </td>
          <td>Color of text.</td>
        </tr>
        <tr>
          <td>textDecoration: "none" | "underline" | "line-through"</td>
          <td>
            <Code>'none'</Code>
          </td>
          <td>Specifies the text-decoration CSS property of the component.</td>
        </tr>
        <tr>
          <td>textOverflow: "clip" | "ellipsis" | "unset"</td>
          <td>
            <Code>'unset'</Code>
          </td>
          <td>Specifies the text-overflow CSS property of the component.</td>
        </tr>
        <tr>
          <td>
            whiteSpace: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap"
          </td>
          <td>
            <Code>'normal'</Code>
          </td>
          <td>Specifies the white-space CSS property of the component.</td>
        </tr>
        <tr>
          <td>children: node</td>
          <td></td>
          <td></td>
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
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/typography/code/TypographyCodePage.tsx" />
    </DxcStack>
  );
};

export default TypographyCodePage;

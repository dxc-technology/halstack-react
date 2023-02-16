import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcBulletedList,
  DxcLink,
  DxcParagraph,
  DxcFlex,
  DxcTable,
} from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Font family",
    content: (
      <>
        <DxcParagraph>
          For our sans-serif <Code>font-family</Code>, we use the humanist
          typeface Open Sans, designed by Steve Matteson and licensed under the{" "}
          <DxcLink
            href="https://www.apache.org/licenses/LICENSE-2.0.html"
            newWindow
          >
            Apache License, Version 2.0.
          </DxcLink>
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>font-family</Code>
              </td>
              <td>Default font family sans-serif</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>font-family</Code>
              </td>
              <td>Default font family monospaced</td>
              <td>
                <Code>font-family-mono</Code>
              </td>
              <td>Source Code Pro&#39;, monospace</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Weight",
    content: (
      <>
        <DxcParagraph>
          In order to add contrast between typographic elements in the UI,
          Halstack uses four different and well balanced{" "}
          <Code>font-weight</Code> values.
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Set font weight as light (300)</td>
              <td>
                <Code>font-weight-light</Code>
              </td>
              <td>300</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Set font weight as regular (400)</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Set font weight as semibold (600)</td>
              <td>
                <Code>font-weight-semibold</Code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Set font weight as bold (700)</td>
              <td>
                <Code>font-weight-bold</Code>
              </td>
              <td>700</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Scale",
    content: (
      <>
        <DxcParagraph>
          As we approached the foundational elements with simplification and
          standardization in mind, the typographic scale is one of the most
          important elements to create hierarchy. Our type scale provides eight
          relative values based on a root font size of 16px, making it scalable
          and accessible.
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Core token</th>
              <th>Value (rem)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 12px</td>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>0.75</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 14px</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>0.875</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 16px</td>
              <td>
                <Code>font-scale-03</Code>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 20px</td>
              <td>
                <Code>font-scale-04</Code>
              </td>
              <td>1.25</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 24px</td>
              <td>
                <Code>font-scale-05</Code>
              </td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 32px</td>
              <td>
                <Code>font-scale-06</Code>
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 48px</td>
              <td>
                <Code>font-scale-07</Code>
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Set the font size as 60px</td>
              <td>
                <Code>font-scale-08</Code>
              </td>
              <td>3.75</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Formatting",
    subSections: [
      {
        title: "Style",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Description</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>font-style</Code>
                </td>
                <td>Set font style as italic</td>
                <td>
                  <Code>font-style-italic</Code>
                </td>
                <td>italic</td>
              </tr>
              <tr>
                <td>
                  <Code>font-style</Code>
                </td>
                <td>Set font style as normal</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Letter spacing",
        content: (
          <>
            <DxcParagraph>
              We calibrate our <Code>letter-spacing</Code> at large scales to
              provide a better legibility and readability of our text.
            </DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value(em)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>Set letter spacing as -0.025em</td>
                  <td>
                    <Code>font-tracking-tight-02</Code>
                  </td>
                  <td>-0.025</td>
                </tr>
                <tr>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>Set letter spacing as -0.0125em</td>
                  <td>
                    <Code>font-tracking-tight-01</Code>
                  </td>
                  <td>-0.0125</td>
                </tr>
                <tr>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>Set letter spacing as 0em</td>
                  <td>
                    <Code>font-tracking-normal</Code>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>Set letter spacing as 0.025em</td>
                  <td>
                    <Code>font-tracking-wide-01</Code>
                  </td>
                  <td>0.025</td>
                </tr>
                <tr>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>Set letter spacing as 0.05em</td>
                  <td>
                    <Code>font-tracking-wide-02</Code>
                  </td>
                  <td>0.05</td>
                </tr>
                <tr>
                  <td>
                    <Code>letter-spacing</Code>
                  </td>
                  <td>Set letter spacing as 0.1em</td>
                  <td>
                    <Code>font-tracking-wide-03</Code>
                  </td>
                  <td>0.1</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Leading",
        content: (
          <>
            <DxcParagraph>
              We use a ratio of 1:1.5 as a standard <Code>line-height</Code>{" "}
              value. A body font of 16px (1rem) returns a value of 24px
              (1.5rem), which is the main reference measurement for the vertical
              organization.
            </DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value(em)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>Set line height as 1em</td>
                  <td>
                    <Code>font-leading-compact-03</Code>
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>Set line height as 1.25em</td>
                  <td>
                    <Code>font-leading-compact-02</Code>
                  </td>
                  <td>1.25</td>
                </tr>
                <tr>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>Set line height as 1.365em</td>
                  <td>
                    <Code>font-leading-compact-01</Code>
                  </td>
                  <td>1.365</td>
                </tr>
                <tr>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>Set line height as 1.5em</td>
                  <td>
                    <Code>font-leading-normal</Code>
                  </td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>Set line height as 1.715em</td>
                  <td>
                    <Code>font-leading-loose-01</Code>
                  </td>
                  <td>1.715</td>
                </tr>
                <tr>
                  <td>
                    <Code>line-height</Code>
                  </td>
                  <td>Set line height as 2em</td>
                  <td>
                    <Code>font-leading-loose-02</Code>
                  </td>
                  <td>2</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Capitalization",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>text-transform</Code>
                  </td>
                  <td>Preserve default value</td>
                  <td>
                    <Code>font-transform-initial</Code>
                  </td>
                  <td>initial</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-transform</Code>
                  </td>
                  <td>Transform text to lowercase</td>
                  <td>
                    <Code>font-transform-lowercase</Code>
                  </td>
                  <td>lowercase</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-transform</Code>
                  </td>
                  <td>Transform text to uppercase</td>
                  <td>
                    <Code>font-transform-uppercase</Code>
                  </td>
                  <td>uppercase</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Text decoration",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>text-decoration</Code>
                  </td>
                  <td>Unset all present decorations</td>
                  <td>
                    <Code>font-decoration-no-line</Code>
                  </td>
                  <td>none</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-decoration</Code>
                  </td>
                  <td>Underline the text</td>
                  <td>
                    <Code>font-decoration-underline</Code>
                  </td>
                  <td>underline</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-decoration</Code>
                  </td>
                  <td>Put a strikethrough the text</td>
                  <td>
                    <Code>font-decoration-line-through</Code>
                  </td>
                  <td>line-through</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Text align",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>text-align</Code>
                  </td>
                  <td>Centers the text.</td>
                  <td>
                    <Code>text-align-center</Code>
                  </td>
                  <td>center</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-align</Code>
                  </td>
                  <td>Align the text to the right.</td>
                  <td>
                    <Code>text-align-right</Code>
                  </td>
                  <td>right</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-align</Code>
                  </td>
                  <td>Align the text to the left.</td>
                  <td>
                    <Code>text-align-left</Code>
                  </td>
                  <td>left</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Display",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>display</Code>
                  </td>
                  <td>Displays an element as a block element.</td>
                  <td>
                    <Code>display-block</Code>
                  </td>
                  <td>block</td>
                </tr>
                <tr>
                  <td>
                    <Code>display</Code>
                  </td>
                  <td>Displays an element as an inline element.</td>
                  <td>
                    <Code>display-inline</Code>
                  </td>
                  <td>inline</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Text overflow",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>text-overflow</Code>
                  </td>
                  <td>The text is clipped and not accessible.</td>
                  <td>
                    <Code>text-overflow-clip</Code>
                  </td>
                  <td>clip</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-overflow</Code>
                  </td>
                  <td>
                    Render an ellipsis ("...") to represent the clipped text.
                  </td>
                  <td>
                    <Code>text-overflow-ellipsis</Code>
                  </td>
                  <td>ellipsis</td>
                </tr>
                <tr>
                  <td>
                    <Code>text-overflow</Code>
                  </td>
                  <td>Set the property as unset.</td>
                  <td>
                    <Code>text-overflow-unset</Code>
                  </td>
                  <td>unset</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "White space",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>white-space</Code>
                  </td>
                  <td>
                    Whitespace is preserved by the browser. Text will only wrap
                    on line breaks.
                  </td>
                  <td>
                    <Code>text-whiteSpace-pre</Code>
                  </td>
                  <td>pre</td>
                </tr>
                <tr>
                  <td>
                    <Code>white-space</Code>
                  </td>
                  <td>
                    Sequences of whitespace will collapse into a single
                    whitespace. Text will wrap when necessary.
                  </td>
                  <td>
                    <Code>text-whiteSpace-normal</Code>
                  </td>
                  <td>normal</td>
                </tr>
                <tr>
                  <td>
                    <Code>white-space</Code>
                  </td>
                  <td>
                    Sequences of whitespace will collapse into a single
                    whitespace. Text will never wrap to the next line. The text
                    continues on the same line until a 'br' tag is encountered.
                  </td>
                  <td>
                    <Code>text-whiteSpace-nowrap</Code>
                  </td>
                  <td>nowrap</td>
                </tr>
                <tr>
                  <td>
                    <Code>white-space</Code>
                  </td>
                  <td>
                    Sequences of whitespace will collapse into a single
                    whitespace. Text will wrap when necessary, and on line
                    breaks.
                  </td>
                  <td>
                    <Code>text-whiteSpace-pre-line</Code>
                  </td>
                  <td>pre-line</td>
                </tr>
                <tr>
                  <td>
                    <Code>white-space</Code>
                  </td>
                  <td>
                    Whitespace is preserved by the browser. Text will wrap when
                    necessary, and on line breaks.
                  </td>
                  <td>
                    <Code>text-whiteSpace-pre-wrap</Code>
                  </td>
                  <td>pre-wrap</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html"
                newWindow
              >
                SC 1.4.6: Contrast (Enhanced)
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing"
                newWindow
              >
                SC 1.4.12: Text Spacing
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const TypographySpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/typography/specs/TypographySpecsPage.tsx" />
    </DxcFlex>
  );
};

export default TypographySpecsPage;

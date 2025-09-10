import { DxcHeading, DxcParagraph, DxcFlex, DxcBulletedList, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Image from "@/common/Image";
import fontFamily from "./images/font_family.png";
import heading from "./images/heading.png";
import body from "./images/body.png";
import helperText from "./images/helper_text.png";
import label from "./images/label.png";
import title from "./images/title.png";
import link from "./images/link.png";
import Link from "next/link";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Typography plays a critical role in structuring the user's experience through the visual impact it has on the
          interface content.
        </DxcParagraph>
        <DxcParagraph>
          It <strong>defines what is the first noticeable piece of information or data</strong> based on the font's
          shape, size, color, or type, and it <strong>highlights some pieces of text over others</strong>.
        </DxcParagraph>
        <DxcParagraph>
          Our selected typography helps <strong>organize and prioritize content</strong> in a way that is clear,
          accessible, and visually appealing.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Text styles and tokens",
    content: (
      <>
        <DxcParagraph>
          Text styles and typography tokens consist of certain font properties, such as font family, size or weight. In
          design tools like Figma, text styles are applied visually, while in code, typography tokens serve this
          purpose.
        </DxcParagraph>
        <DxcParagraph>
          Some typographic elements used in the Halstack Design System include{" "}
          <strong>headers, body, helper texts, titles, and labels</strong>. In your designs, make use of those elements.
          These typographic choices are already embedded within the typography tokens and will make it possible to
          enable typography theming in the future.
        </DxcParagraph>
        <DxcParagraph>
          These are the core definitions and tokens that form the base of the typographic system. They should be used
          consistently across all typographic styles.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Font family",
        content: (
          <>
            <DxcParagraph>
              For our sans-serif <Code>font-family</Code> we use <strong>Open Sans;</strong> a modern, humanist
              sans-serif typeface designed by Steve Matteson. It is known for its{" "}
              <strong>clarity, neutrality, and readability</strong> across a wide range of digital and print
              applications.
            </DxcParagraph>
            <DxcParagraph>
              With its{" "}
              <strong>open forms, neutral yet friendly appearance, and optimized legibility at small sizes</strong>,
              Open Sans is optimized for both <strong>web and mobile interfaces</strong>, balancing aesthetic appeal
              with functional clarity. The typeface includes a wide character set that supports{" "}
              <strong>Latin, Greek, and Cyrillic scripts</strong>, making it suitable for internationalization.
            </DxcParagraph>
            <DxcParagraph>
              Open Sans can be accessed via{" "}
              <Link href="https://fonts.google.com/specimen/Open+Sans/about" passHref legacyBehavior>
                <DxcLink newWindow>Google Fonts</DxcLink>
              </Link>{" "}
              and is released under the{" "}
              <Link href="https://openfontlicense.org/open-font-license-official-text/" passHref legacyBehavior>
                <DxcLink newWindow>SIL Open Font License Version 1.1</DxcLink>
              </Link>
              .
            </DxcParagraph>
            <Image src={fontFamily} alt="Font family" />
          </>
        ),
      },
      {
        title: "Font weights",
        content: (
          <>
            <DxcParagraph>Different weights define hierarchy and emphasis in various elements.</DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Weight</th>
                  <th>Token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Light</td>
                  <td>
                    <Code>font/weight/light</Code>
                  </td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>Regular</td>
                  <td>
                    <Code>font/weight/regular</Code>
                  </td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>Semibold</td>
                  <td>
                    <Code>font/weight/semibold</Code>
                  </td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>Bold</td>
                  <td>
                    <Code>font/weight/bold</Code>
                  </td>
                  <td>700</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Font styles",
        content: (
          <>
            <DxcParagraph>
              Font styles provide additional ways to convey meaning and emphasis in text elements. While different
              styles such as italic can be used to highlight certain content, the default style applied is{" "}
              <strong>normal</strong>. This ensures consistency and readability across most text, reserving other styles
              for special cases.{" "}
            </DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Style</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>font/style/normal</Code>
                  </td>
                  <td>normal</td>
                  <td>Default</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/style/lightitalic</Code>
                  </td>
                  <td>italic</td>
                  <td>Applied selectively for helper text where subtle emphasis is needed.</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Font sizes",
        content: (
          <>
            <DxcParagraph>
              Font sizes are assigned based on visual hierarchy needs. Not all sizes apply to every text element.
            </DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Value (px)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>font/size/12</Code>
                  </td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/14</Code>
                  </td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/16</Code>
                  </td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/18</Code>
                  </td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/20</Code>
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/24</Code>
                  </td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/32</Code>
                  </td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/40</Code>
                  </td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/48</Code>
                  </td>
                  <td>48</td>
                </tr>
                <tr>
                  <td>
                    <Code>font/size/60</Code>
                  </td>
                  <td>60</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        Typography usage is categorized by purpose. Each category has predefined size and weight combinations to ensure
        consistency and scalability across interfaces.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Heading",
        content: (
          <>
            <DxcParagraph>
              Use headings for page titles and section introductions. Headings are designed to stand out from regular
              text, creating clear visual hierarchy and making it easier for readers to follow the organization of the
              content.
            </DxcParagraph>
            <DxcParagraph>
              Headings mark the start of new sections. Always use designated heading styles, rather than just bolding
              text or changing the font size, since proper headings are important for accessibility.
            </DxcParagraph>
            <DxcParagraph>
              Appropriate heading levels guide users through the page, especially those using screen readers or other
              assistive devices. Correct use of heading levels also helps organize information, making content easier to
              scan.
            </DxcParagraph>
            <DxcParagraph>
              Heading tags (<Code>&lt;h1&gt;</Code> through <Code>&lt;h6&gt;</Code>) should be applied in order, without
              skipping levels. Each page should have a single h1, typically reserved for the main title, and subsequent
              headings should follow in sequence (for example, use h2 after h1, not h4).
            </DxcParagraph>
            <Image src={heading} alt="Heading" />
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Font size</th>
                  <th>Font weight</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>typography/heading/xs</Code>
                  </td>
                  <td>
                    <Code>font/size/12</Code>
                  </td>
                  <td>Light / Regular / Semibold</td>
                  <td>H6</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/heading/s</Code>
                  </td>
                  <td>
                    <Code>font/size/16</Code>
                  </td>
                  <td>Light / Regular / Semibold</td>
                  <td>H5</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/heading/m</Code>
                  </td>
                  <td>
                    <Code>font/size/20</Code>
                  </td>
                  <td>Light / Regular / Semibold</td>
                  <td>H4</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/heading/l</Code>
                  </td>
                  <td>
                    <Code>font/size/24</Code>
                  </td>
                  <td>Light / Regular / Semibold</td>
                  <td>H3</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/heading/xl</Code>
                  </td>
                  <td>
                    <Code>font/size/32</Code>
                  </td>
                  <td>Light / Regular / Semibold</td>
                  <td>H2</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/heading/xxl</Code>
                  </td>
                  <td>
                    <Code>font/size/40</Code>
                  </td>
                  <td>Light / Regular / Semibold</td>
                  <td>H1</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Body",
        content: (
          <>
            <DxcParagraph>
              Used for paragraphs, long-form content, and general UI copy. It usually follows headings or subheadings,
              providing detailed information or messages. Body text should prioritize readability. Use sizes according
              to density and layout needs.
            </DxcParagraph>
            <Image src={body} alt="Body" />
            <DxcTable>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Font size</th>
                  <th>Font weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>typography/body/xs</Code>
                  </td>
                  <td>
                    <Code>font/size/12</Code>
                  </td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/body/s</Code>
                  </td>
                  <td>
                    <Code>font/size/14</Code>
                  </td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/body/m</Code>
                  </td>
                  <td>
                    <Code>font/size/16</Code>
                  </td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/body/l</Code>
                  </td>
                  <td>
                    <Code>font/size/18</Code>
                  </td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/body/xl</Code>
                  </td>
                  <td>
                    <Code>font/size/20</Code>
                  </td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/body/xxl</Code>
                  </td>
                  <td>
                    <Code>font/size/24</Code>
                  </td>
                  <td>Regular</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Helper text",
        content: (
          <>
            <DxcParagraph>
              Used for inline guidance, validation messages, or tooltips. Helper text is typically small and subtle but
              must remain legible.
            </DxcParagraph>
            <Image src={helperText} alt="Helper text" />
            <DxcTable>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Font size</th>
                  <th>Font weight</th>
                  <th>Font style</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>typography/helper-text/s</Code>
                  </td>
                  <td>
                    <Code>font/size/12</Code>
                  </td>
                  <td>Regular</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/helper-text/m</Code>
                  </td>
                  <td>
                    <Code>font/size/14</Code>
                  </td>
                  <td>Regular / Semibold</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Code>typography/helper-text/l</Code>
                  </td>
                  <td>
                    <Code>font/size/16</Code>
                  </td>
                  <td>Light</td>
                  <td>Italic</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Title",
        content: (
          <>
            <DxcParagraph>
              Used for prominent titles in components such as cards or modals. Use sparingly for component-level titles
              where a strong label is needed.
            </DxcParagraph>
            <Image src={title} alt="Title" />
            <DxcTable>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Font size</th>
                  <th>Font weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>
                    <Code>font/size/14</Code>
                  </td>
                  <td>Bold</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>
                    <Code>font/size/16</Code>
                  </td>
                  <td>Bold</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>
                    <Code>font/size/20</Code>
                  </td>
                  <td>Bold</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>
                    <Code>font/size/24</Code>
                  </td>
                  <td>Bold</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Label",
        content: (
          <>
            <DxcParagraph>
              Used to describe UI elements such as form fields, checkboxes, or sections. Labels should be clear,
              concise, and consistent in weight and size throughout the product.
            </DxcParagraph>
            <Image src={label} alt="Label" />
            <DxcTable>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Font size</th>
                  <th>Font weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>
                    <Code>font/size/12</Code>
                  </td>
                  <td>Regular / Semibold</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>
                    <Code>font/size/14</Code>
                  </td>
                  <td>Regular / Semibold</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>
                    <Code>font/size/16</Code>
                  </td>
                  <td>Regular / Semibold</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>
                    <Code>font/size/20</Code>
                  </td>
                  <td>Regular / Semibold</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Link",
        content: (
          <>
            <DxcParagraph>
              Used for navigational or interactive text elements. Links use clear, recognizable styling and must be
              distinguishable from body text.
            </DxcParagraph>
            <Image src={link} alt="Link" />
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use the defined font family (<Code>font/family/sans</Code>) consistently.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>Apply only the specified weight and size combinations per use case.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Avoid using font sizes smaller than 12px for accessibility reasons.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Maintain a minimum 4.5:1 contrast ratio for standard text.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Do not apply custom typography outside of the predefined system to ensure consistency and scalability.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TypographyPage = () => (
  <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Typography" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/typography/TypographyPage.tsx" />
  </DxcFlex>
);

export default TypographyPage;

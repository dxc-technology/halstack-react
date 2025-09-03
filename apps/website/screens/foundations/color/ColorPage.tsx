import { DxcFlex, DxcLink, DxcParagraph, DxcHeading, DxcBulletedList } from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import neutralColors from "./images/neutral_colors.png";
import alphaColors from "./images/alpha_colors.png";
import primaryColor from "./images/primary_color.png";
import secondaryColor from "./images/secondary_color.png";
import tertiaryColor from "./images/tertiary_color.png";
import semanticColors from "./images/semantic_colors.png";
import PageHeading from "@/common/PageHeading";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Color is a fundamental element of any design system. It{" "}
          <strong>communicates brand identity, guides user interaction, and establishes visual hierarchy</strong>. A
          well-structured color foundation ensures consistency across interfaces, reinforces accessibility, and enhances
          the emotional impact of the product.
        </DxcParagraph>
        <DxcParagraph>
          Halstack defines a <strong>flexible and accessible color foundation</strong> to support brand expression,
          usability, and consistency across all digital products. The color palette is built on a system of design
          tokens that enable scalability, maintainability, and theming.
        </DxcParagraph>
        <DxcParagraph>
          The color system <strong>ensures optimal contrast ratios for readability and accessibility</strong>, aligning
          with{" "}
          <Link href="https://www.w3.org/WAI/perspective-videos/contrast/" passHref legacyBehavior>
            <DxcLink newWindow>WCAG 2.1</DxcLink>
          </Link>
          standards. Token naming follows a semantic structure to promote clarity in implementation and usage.
        </DxcParagraph>
        <DxcParagraph>
          Color is foundational to delivering a coherent user experience and is{" "}
          <strong>tightly integrated with components, typography, and layout strategies</strong> throughout the Halstack
          ecosystem.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Transition from HSL to LCH",
    content: (
      <>
        <DxcParagraph>
          Previously, Halstack used the HSL color space to define and manipulate colors. While HSL offers simplicity, it
          falls short in delivering perceptual consistency; equal steps in saturation or lightness do not translate into
          equal visual changes, often resulting in tonal ramps that feel uneven or unreadable.
        </DxcParagraph>
        <DxcParagraph>
          We now adopt the <strong>LCH (Lightness, Chroma, Hue)</strong> color space as a foundation for our color
          generation and manipulation. LCH is <strong>perceptually uniform</strong>, meaning changes in values
          correspond more closely to how humans actually perceive color differences. This results in:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            More <strong>balanced and predictable</strong> tonal scales
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Improved accessibility</strong> through consistent contrast across tones
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Better <strong>visual harmony</strong> in both light and dark themes
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          By switching to LCH, Halstack ensures a more robust, inclusive, and visually coherent color system that scales
          effectively across all interfaces and user needs.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Core color tokens",
    content: (
      <DxcParagraph>
        Colors are <strong>categorized by purpose</strong> (primary, secondary, neutral and semantic) and are extended
        through tonal ranges to offer clarity, depth, and hierarchy in UI design.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Neutral colors",
        content: (
          <>
            <DxcParagraph>
              Neutral colors in Halstack{" "}
              <strong>provide structure, depth, and hierarchy without drawing attention.</strong> These include a range
              of grays <u>used across surfaces, borders, dividers, and text</u>.
            </DxcParagraph>
            <DxcParagraph>
              They help balance the interface by supporting the primary and semantic colors, and are essential for
              creating clear layout separation and focus without introducing visual noise.
            </DxcParagraph>
            <Figure caption="Neutral colors">
              <Image src={neutralColors} alt="Neutral colors" />
            </Figure>
          </>
        ),
      },
      {
        title: "Alpha colors",
        content: (
          <>
            <DxcParagraph>
              Alpha colors are <strong>translucent overlays derived from base colors.</strong> These tokens are
              typically applied in <u>background overlays, elevation and shadows</u>.
            </DxcParagraph>
            <DxcParagraph>
              Alpha values enhance depth and interactivity while maintaining accessibility and visual consistency.
            </DxcParagraph>
            <Figure caption="Alpha colors">
              <Image src={alphaColors} alt="Alpha colors" />
            </Figure>
          </>
        ),
      },
      {
        title: "Primary color",
        content: (
          <>
            <DxcParagraph>
              Represents <strong>the core identity of DXC</strong> and is used to drive the main interactions across the
              interface. It appears in key components such as <u>primary buttons, active elements and highlights</u>.
            </DxcParagraph>
            <DxcParagraph>
              It is the most prominent color in the system and should be used intentionally to guide attention and
              reinforce brand consistency. Variants in tone are available for hover, active, and disabled states to
              ensure clarity and accessibility.
            </DxcParagraph>
            <Figure caption="Primary color">
              <Image src={primaryColor} alt="Primary color" />
            </Figure>
          </>
        ),
      },
      {
        title: "Secondary color",
        content: (
          <>
            <DxcParagraph>
              <strong>Complements the primary color</strong> and is used to support secondary actions or highlight less
              prominent interface elements. It helps introduce visual variety without overwhelming the user or competing
              with primary actions. Common use cases include{" "}
              <u>secondary buttons, accent elements or supporting visuals</u>.
            </DxcParagraph>
            <Figure caption="Secondary color">
              <Image src={secondaryColor} alt="Secondary color" />
            </Figure>
          </>
        ),
      },
      {
        title: "Tertiary color",
        content: (
          <>
            <DxcParagraph>
              The tertiary color is an identity-supporting color that{" "}
              <strong>complements both the primary and secondary</strong> colors. It reinforces the overall visual
              language and helps highlight less prominent elements without drawing attention away from core actions.
            </DxcParagraph>

            <Figure caption="Tertiary color">
              <Image src={tertiaryColor} alt="Tertiary color" />
            </Figure>
          </>
        ),
      },
      {
        title: "Semantic colors",
        content: (
          <>
            <DxcParagraph>
              Semantic colors are{" "}
              <strong>used to communicate system feedback and status clearly and immediately</strong>. These colors are
              designed to be universally recognizable and accessible, ensuring that users can quickly interpret the
              state of the system.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Green - Success</strong>: Communicates successful operations, confirmations, or valid states. It
                reassures users and reinforces positive outcomes.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Orange - Warning</strong>: Used for cautionary messages or potential risks that don't block
                progress but may require attention.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Red - Error</strong>: Indicates destructive actions, form validation errors, or system failures.
                It draws immediate attention and signals that something needs user correction or caution.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              These colors are <u>used in components such as alerts, form fields and status indicators among others</u>.
            </DxcParagraph>
            <Figure caption="Semantic colors">
              <Image src={semanticColors} alt="Semantic colors" />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcParagraph>
          To ensure color is used effectively, inclusively, and consistently across all user interfaces, follow these
          best practices:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Don't rely solely on color to communicate information</strong>
            <DxcParagraph>
              Use color in combination with text labels, icons, or patterns. Some users may be color-blind, have limited
              color perception, or interpret colors differently based on cultural context. Always pair color with an
              additional visual cue to convey meaning.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Ensure sufficient contrast for accessibility</strong>
            <DxcParagraph>
              Text and interactive elements must meet minimum contrast requirements to remain legible for all users.
              Follow these WCAG 2.1 guidelines:
            </DxcParagraph>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                Use a <strong>contrast ratio of at least 4.5:1</strong> for normal body text.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Use a <strong>contrast ratio of at least 3:1</strong> for large text (18pt or 14pt bold) and essential
                graphical objects (such as icons conveying meaning).
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maintain a limited core palette</strong>
            <DxcParagraph>
              Avoid excessive use of colors. Stick to the defined palette to strengthen visual harmony and brand
              recognition. Introduce neutral tones to balance visual weight and focus user attention appropriately.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use tonal scales for depth and hierarchy</strong>
            <DxcParagraph>Leverage color ramps to create spatial relationships and support elevation.</DxcParagraph>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

export default function ColorPage() {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcHeading level={1} text="Color" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/color/ColorPage.tsx" />
    </DxcFlex>
  );
}

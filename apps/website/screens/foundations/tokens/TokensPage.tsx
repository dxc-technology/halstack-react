import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import PageHeading from "@/common/PageHeading";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcAlert, DxcBulletedList, DxcFlex, DxcHeading, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import Link from "next/link";
import componentTokens from "./images/component_tokens.gif";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Design tokens are the <strong>single source of truth</strong> for all design decisions in the Halstack Design
          System. They create a shared language between design and development, ensuring consistency across products
          while maintaining flexibility where customization is needed.
        </DxcParagraph>
        <DxcParagraph>
          In Halstack, tokens define core attributes like <strong>colors</strong>, <strong>typography</strong>,{" "}
          <strong>spacing</strong>, and more—serving as the foundation for scalable, themeable, and reusable component
          styling.
        </DxcParagraph>
        <DxcParagraph>
          Tokens allow product teams to build faster, with greater consistency and confidence.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "From 2-layer to 3-layer token architecture",
    content: (
      <>
        <DxcAlert
          title="Work in Progress"
          semantic="warning"
          message={{
            text: "The Component layer is still under development. While Core and Alias tokens are already available and in use, the Component tokens will be progressively defined and documented over the coming months.",
          }}
          closable={false}
        />
        <DxcParagraph>
          When Halstack was first established, its token structure followed a two-tier model:{" "}
          <strong>primitive tokens</strong> (the raw foundational values) and <strong>component tokens</strong> (styles
          appliedWIP at the component level.) The intermediate <strong>alias layer</strong>—commonly used to connect
          foundations to components—was missing.
        </DxcParagraph>
        <DxcParagraph>
          Over time, this gap led to inconsistencies. Each component seemed to "speak its own language," with naming
          conventions, color assignments, and styling logic varying wildly between them. Without clear documentation or
          a shared taxonomy, this structure is hard to maintain and harder to scale.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Why change",
        content: (
          <>
            <DxcParagraph>
              The absence of a middle layer and a consistent naming strategy cause several challenges:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Inconsistent styles</strong>: Components with similar behaviors (e.g., hover states) often used
                unrelated token values.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Difficult maintenance</strong>:Without a systematic link between primitives and components,
                updating or theming became unpredictable.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Limited reusability</strong>: Repeated values were not abstracted into tokens, forcing
                duplication and increasing the chance of drift.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Where we're going",
        content: (
          <>
            <DxcParagraph>
              The refactor aims to create a <strong>three-tier token architecture</strong>:
            </DxcParagraph>
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>
                <strong>Core</strong>: The raw values.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Alias</strong>: Contextual tokens that translate foundations into semantic meanings.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Component</strong>: Tokens applied to specific UI components, referencing aliases rather than
                hardcoded values.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              At this stage, the <strong>Core</strong> and <strong>Alias</strong> layers are already in place and
              actively used in both design and development workflows. These two layers give us a solid foundation of
              structured, semantic tokens that ensure consistency and scalability.
            </DxcParagraph>
            <DxcParagraph>
              The next step is to extend this work into the <strong>Component layer</strong>, where tokens will be
              defined specifically for UI components by referencing existing Alias tokens. This will allow us to
              standardize pattern across all Halstack components and give product teams even greater flexibility when
              theming. <u>We expect to begin working on this layer in the coming months.</u>
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Structure",
    subSections: [
      {
        title: "Core",
        content: (
          <>
            <DxcParagraph>
              The <strong>Core</strong> layer contains the fundamental, non-contextual design values that form the base
              of the system. They are not tied to any component or theme; instead, they describe pure design attributes
              such as specific colors or type sizes.
            </DxcParagraph>
            <DxcParagraph>Foundations in Halstack include:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <Link href="/foundations/color" passHref legacyBehavior>
                  <DxcLink>Color</DxcLink>
                </Link>
                - Defines the base color palette, organized and measured using the OKLCH color space for accuracy and
                accessibility.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <Link href="/foundations/typography" passHref legacyBehavior>
                  <DxcLink>Typography</DxcLink>
                </Link>{" "}
                - Sets font families, weights, sizes, and line-heights that serve as the system's typographic
                foundation.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <Link href="/foundations/spacing" passHref legacyBehavior>
                  <DxcLink>Spacing</DxcLink>
                </Link>{" "}
                - A consistent set of spacing values to control layout and component padding/margins.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <Link href="/foundations/border" passHref legacyBehavior>
                  <DxcLink>Border</DxcLink>
                </Link>{" "}
                - Defines border widths, radius, and styles for consistent corner and edge treatment.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <Link href="/foundations/elevation" passHref legacyBehavior>
                  <DxcLink>Elevation</DxcLink>
                </Link>
                - Standardized elevation styles for depth and hierarchy in UI elements.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <Link href="/foundations/height" passHref legacyBehavior>
                  <DxcLink>Height</DxcLink>
                </Link>{" "}
                - Predefined vertical dimensions for components and layouts.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Alias",
        content: (
          <>
            <DxcParagraph>
              The <strong>Alias</strong> layer maps core values to semantic meanings that align with the design language
              and user context.
            </DxcParagraph>
            <DxcParagraph>
              For example: <Code>color/bg/primary/strong</Code> → maps to a core token like{" "}
              <Code>color/primary/700</Code> (<Code>#6F4B97</Code>)
            </DxcParagraph>
            <DxcParagraph>
              By separating raw values from their semantic role, we not only enable easy theming and quick adjustments
              without touching the foundational values, but also establish clear <strong>usage expectations</strong>:
              whether a token should be applied as a <strong>background (bg)</strong>, <strong>foreground (fg)</strong>,
              or <strong>border</strong> element. This reduces ambiguity and ensures that tokens are applied
              consistently across components and interfaces.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Component",
        content: (
          <>
            <DxcParagraph>
              <strong>Component tokens</strong> define the styling for each component in Halstack, referencing{" "}
              <strong>Alias tokens</strong> rather than hardcoded values.
            </DxcParagraph>
            <DxcParagraph>
              Example: A button's hover background might use, which itself maps to an alias token, which then points to
              a core color.
            </DxcParagraph>
            <DxcParagraph>This indirection:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Keeps component styles consistent across the system.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Simplifies global updates.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Allows products to theme components without rewriting every style rule.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Image src={componentTokens} alt="Component tokens" />
          </>
        ),
      },
    ],
  },
  {
    title: "Halstack's theming strategy and token layers",
    content: (
      <>
        <DxcParagraph>
          Until now, Halstack has supported <strong>two theming strategies</strong>—an{" "}
          <strong>opinionated approach</strong> with limited, safe customization, and an{" "}
          <strong>advanced approach</strong> with broader freedom. Several products have already benefited from these
          strategies.
        </DxcParagraph>
        <DxcParagraph>
          With the new token architecture, our goal is to <strong>continue supporting both levels of theming</strong>,{" "}
          even though the underlying structure that makes them possible will change. This ensures that product teams can
          rely on the same flexibility they know today, while also benefiting from a more scalable and consistent
          system.
        </DxcParagraph>
        <DxcParagraph>
          By aligning this strategy with our <strong>token architecture</strong>:
          <DxcBulletedList>
            <DxcBulletedList.Item>
              With the <strong>Core layer</strong>, we can already enable <strong>opinionated theming</strong>, exposing
              tokens like colors, spacing, or typography in a way that is safe and predictable.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              To unlock <strong>Advanced theming</strong>, we will rely on the upcoming <strong>Component layer</strong>
              , which will allow deeper overrides at the component-token level. This work is still in progress and will
              be rolled out in the coming months.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcParagraph>
        <DxcParagraph>
          This structured approach ensures that theming in Halstack is <strong>flexible but safe</strong>—giving teams
          the ability to adapt components to their needs while still protecting those{" "}
          <strong>design decisions that are critical for accessibility</strong> such as maintaining proper{" "}
          <strong>contrast ratios</strong>, minimum font sizes, and spacing values. In this way, we preserve both{" "}
          <strong>brand flexibility</strong> and <strong>usability standards</strong> across all products.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "How tokens move from design to code",
    content: (
      <>
        <DxcParagraph>
          Design tokens in Halstack are created in{" "}
          <Link href="" passHref legacyBehavior>
            <DxcLink>Figma</DxcLink>
          </Link>
          , where they serve as the foundation for all design decisions. From there, they evolve into development-ready
          assets, ensuring a seamless bridge between design and code.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Tokens in Design",
        content: (
          <>
            <DxcParagraph>
              In Halstack, tokens are <strong>defined and maintained as Variables in Figma</strong>. These variables
              represent values like colors, spacing, typography, and more, and are applied directly in the design of{" "}
              <Link href="" passHref legacyBehavior>
                <DxcLink>components</DxcLink>
              </Link>{" "}
              and interface flows.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Tokens in Development",
        content: (
          <>
            <DxcParagraph>Work in Progress.</DxcParagraph>
          </>
        ),
      },
    ],
  },
];

export default function TokensPage() {
  return (
    <>
      <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
        <PageHeading>
          <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
            <DxcHeading level={1} text="Tokens" />
          </DxcFlex>
        </PageHeading>
        <QuickNavContainerLayout>
          <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
        </QuickNavContainerLayout>
        <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/tokens/TokenPage.tsx" />
      </DxcFlex>
    </>
  );
}

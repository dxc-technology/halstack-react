import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcAlert, DxcBulletedList, DxcFlex, DxcHeading, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import Link from "next/link";

const sections = [
  {
    title: "What is a theme in Halstack?",
    content: (
      <>
        <DxcParagraph>
          In Halstack, a theme is a <strong>structured set of properties</strong> that defines how your brand is
          expressed across the design system. These properties allow you to adapt core visual decisions such as colors
          and logos, while preserving the consistency, accessibility, and usability standards defined by Halstack.
        </DxcParagraph>
        <DxcParagraph>
          To understand what a theme is, it is important to recognize that the definition of colors, sizes, shapes, and
          visual foundations is an intrinsic part of any design system. These elements are carefully designed to ensure
          accessibility, usability, and a consistent user experience. For this reason, changing them must be done in a
          controlled and intentional way.
        </DxcParagraph>
        <DxcParagraph>
          Themes provide this controlled flexibility. They allow teams to override specific foundational decisions of
          the Halstack Design System in order to adapt product to different brand identities, while still benefiting
          from the structure and scalability of the system.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Why themes matter?",
    content: (
      <>
        <DxcParagraph>
          Color, branding, and visual identity{" "}
          <strong>play a key role in how users perceive and interact with a product</strong>. A consistent and
          accessible visual language helps guide user behavior, improves readability, and strengthens trust.
        </DxcParagraph>
        <DxcParagraph>
          However, unmanaged customization can quickly lead to fragmentation, accessibility issues, and higher
          maintenance costs. Themes help prevent this by offering a structured way to evolve brand identity without
          breaking the foundations of the design system. They support scalability, maintain accessibility, and enable
          consistency across products, teams, and client implementations.
        </DxcParagraph>
        <DxcParagraph>
          Typically, teams build their applications using the default Halstack foundations. Themes are applied only when
          there is a clear need to adapt the experience to a specific brand, such as in white-label or multi-brand
          environments. In this way, theming remains intentional and aligned with product and business needs.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "How Halstack manages theming",
    content: (
      <>
        <DxcParagraph>
          Halstack approaches theming through <strong>design tokens</strong>. Instead of manually adjusting styles in
          each component, you define a set of core and semantic values that are applied across the system.
        </DxcParagraph>
        <DxcParagraph>The main customizable aspects include:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Core brand colors</strong> such as primary, secondary, tertiary, and neutral
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Semantic colors</strong> such as info, success, warning, and error
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Brand assets</strong> such as logos and favicons
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          This approach ensures that customization remains predictable, accessible, and easy to maintain over time.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Where to manage your themes",
    content: (
      <DxcParagraph>
        To create and manage themes in Halstack, you can use the Theme Generator tool. You can preview how your theme
        behaves across real Halstack components, validate contrast and readability, and export a structured file ready
        to be integrated into your project.
      </DxcParagraph>
    ),
  },
  {
    title: "Introducing Theme Generator",
    content: (
      <>
        <DxcParagraph>
          <Link href="/theme-generator/" passHref legacyBehavior>
            <DxcLink newWindow icon="Link">
              Theme Generator
            </DxcLink>
          </Link>{" "}
          helps you create Halstack themes without manual token configuration. Instead of defining dozens of values, you
          provide your core and semantic colors, and the tool generates a complete, ready-to-use token structure.
        </DxcParagraph>
        <DxcParagraph>
          You can also preview how your theme behaves in real Halstack components and layouts, validate contrast and
          readability, and export a structured file ready to be integrated into your development workflow.
        </DxcParagraph>
        <DxcParagraph>
          This enables designers and developers to collaborate around a shared and repeatable process, ensuring
          consistency across products and brands.
        </DxcParagraph>
        <DxcParagraph>
          For more details about how the tool works, visit the{" "}
          <Link href="/theme-generator/user-guide/" passHref legacyBehavior>
            <DxcLink newWindow icon="link">
              Theme Generator user guide
            </DxcLink>
          </Link>
          .
        </DxcParagraph>
      </>
    ),
  },
];

const ThemesPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Themes" />
        <DxcAlert
          title="Theme generator"
          closable={false}
          message={{
            text: (
              <DxcParagraph>
                You can start configuring your own themes using the{" "}
                <Link href="/theme-generator/" passHref legacyBehavior>
                  <DxcLink newWindow iconPosition="after" icon="arrow_right_alt">
                    Theme Generator
                  </DxcLink>
                </Link>
              </DxcParagraph>
            ),
          }}
        />
      </DxcFlex>
    </PageHeading>
    <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/guidelines/themes/ThemesPage.tsx" />
  </DxcFlex>
);

export default ThemesPage;

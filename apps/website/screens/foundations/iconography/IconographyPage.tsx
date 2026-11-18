import { DxcHeading, DxcParagraph, DxcFlex, DxcBulletedList, DxcGrid, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import iconsHalstack from "./images/icons_halstack.png";
import materialIcons from "./images/material_icons.png";
import customIncorrect from "./images/custom_incorrect.jpg";
import customCorrect from "./images/custom_correct.jpg";
import accessibilityColor from "./images/accessibility_color.jpg";
import iconsContext from "./images/icons_context.jpg";
import Link from "next/link";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Icons are visual elements that can serve different purposes depending on their context. In Halstack, icons are
        used not only to <strong>represent ideas, objects, or actions</strong>, but also to support the user's journey
        through the interface. They <strong>help guide attention</strong>, reinforce meaning, and visually enhance
        actions or sections within an application.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Material Symbols",
        content: (
          <>
            <DxcParagraph>
              At Halstack, we've chosen to adopt the Material Symbols library, specifically the <strong>outline</strong>{" "}
              and <strong>filled</strong> variants, as our standard icon set. While we did not create these icons
              ourselves, there are strong reasons behind this decision that align with the goals of our design system:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Consistency</strong>: Material Symbols offer a comprehensive, visually coherent set of icons
                that cover a wide range of common actions, objects, and concepts. Using a unified library helps us
                maintain consistency across all Halstack-based products.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Scalability</strong>: with hundreds of pre-designed icons available and frequent updates,
                Material Symbols scale easily with product needs: whether we're designing simple interfaces or more
                complex workflows.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Accessibility</strong>: Material Symbols are built with accessibility in mind, supporting clear
                recognition and compatibility with assistive technologies when used correctly.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Design and engineering efficiency</strong>: leveraging a widely adopted icon set reduces the
                effort needed to create and maintain custom icons. This speeds up both design and development workflows,
                allowing teams to focus on building better user experiences.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Cross-platform support</strong>: Material Symbols are optimized for use across web, Android, and
                iOS platforms, helping us build consistent and adaptable experiences regardless of the target platform.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              By adopting Material Symbols, we ensure that our iconography remains modern, flexible, and easy to work
              with, without sacrificing quality or usability.
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Icon Library overview",
    content: (
      <>
        <DxcParagraph>
          Material Symbols are grouped into <strong>functional categories</strong> that help organize their purpose and
          usage. Within Halstack, we follow this categorization to help designers and developers quickly find the right
          icon for each context.
        </DxcParagraph>
        <DxcParagraph>The main categories include:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Navigation</strong>
            <DxcParagraph>
              Icons that help users move through the interface (e.g., <Code>menu</Code>, <Code>arrow_back</Code>,{" "}
              <Code>close</Code>, <Code>more_vert</Code>).
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Actions</strong>
            <DxcParagraph>
              Icons that represent specific user actions (e.g., <Code>edit</Code>, <Code>delete</Code>,{" "}
              <Code>download</Code>, <Code>add</Code>, <Code>check_circle</Code>).
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Feedback / Status</strong>
            <DxcParagraph>
              Icons that indicate the state of a system or user feedback (e.g., <Code>error</Code>, <Code>warning</Code>
              , <Code>info</Code>, <Code>check_circle_outline</Code>).
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Media and Files</strong>
            <DxcParagraph>
              Icons representing media types or file interactions (e.g., <Code>image</Code>, <Code>video_library</Code>,{" "}
              <Code>attach_file</Code>).
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Communication</strong>
            <DxcParagraph>
              Icons used in messaging, comments, or user contact interfaces (e.g., <Code>chat</Code>, <Code>email</Code>
              , <Code>notifications</Code>).
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Content and Layout</strong>
            <DxcParagraph>
              Icons related to formatting, content manipulation, or UI controls (e.g., <Code>filter_list</Code>,{" "}
              <Code>sort</Code>, <Code>grid_view</Code>, <Code>view_list</Code>).
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Device and System</strong>
            <DxcParagraph>
              Icons for hardware or system-level actions (e.g., <Code>battery_full</Code>, <Code>wifi</Code>,{" "}
              <Code>settings</Code>).
            </DxcParagraph>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          In Halstack products, the <strong>outline style</strong> is the default and most widely used for icons. This
          choice reflects our preference for clean, lightweight visual elements that align with our UI aesthetics.
        </DxcParagraph>
        <DxcParagraph>Among all available categories, the following are the most commonly used:</DxcParagraph>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Navigation</strong>
            <DxcParagraph>Used extensively across headers, sidebars, and in-page navigation elements.</DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Actions</strong>
            <DxcParagraph>Found in interactive components like buttons, dropdowns, and toolbars.</DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Feedback / Status</strong>
            <DxcParagraph>
              Integrated into form validation, alerts, snackbars, and system messages to communicate state clearly.
            </DxcParagraph>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Figure caption="Material Symbols in Halstack components">
          <Image src={iconsHalstack} alt="Material Symbols in Halstack components" />
        </Figure>
      </>
    ),
  },
  {
    title: "Available styles",
    content: (
      <>
        <Figure caption="Outline and filled icons from Material Symbols Library">
          <Image src={materialIcons} alt="Outline and filled icons from Material Symbols Library" />
        </Figure>
        <DxcParagraph>
          Halstack supports two visual styles of Material Symbols: <strong>Outline</strong> and <strong>Filled</strong>.
          Both styles are available through the Material Symbols library and can be used across the design system
          depending on the context and visual intent. By offering both outline and filled styles, Halstack ensures
          visual flexibility while maintaining system consistency. Designers can use tone and emphasis intentionally,
          matching icon style to context without compromising clarity or usability.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Outline (default style)",
        content: (
          <>
            <DxcParagraph>
              <strong>Outlined icons</strong> are characterized by their lightweight appearance, thin strokes, and open
              shapes.
            </DxcParagraph>
            <DxcParagraph>
              This is the <strong>default style</strong> in Halstack because it:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Integrates seamlessly into interfaces without overwhelming other UI elements.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Maintains legibility at different sizes.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Provides subtle visual cues without drawing excessive attention.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Harmonizes with Halstack typography, spacing, and component structure.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              Outlined icons are suitable for navigation, secondary actions, and supporting content.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Filled",
        content: (
          <>
            <DxcParagraph>
              <strong>Filled icons</strong> feature solid shapes with strong visual presence. This style creates a sense
              of emphasis and weight, making it suitable for highlighting actions or reinforcing key statuses in the UI.
            </DxcParagraph>
            <DxcParagraph>
              While not the default in Halstack, filled icons are available for <strong>intentional use cases</strong>{" "}
              where stronger visual contrast is needed.
            </DxcParagraph>
            <DxcParagraph>Filled icons are effective when:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Used in <strong>active states</strong>, such as selected tabs or toggled buttons.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Reinforcing <strong>status and feedback</strong>, especially in system messages (e.g., error, success,
                warning).
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Enhancing visibility in <strong>dense interfaces</strong> or darker backgrounds.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              However, because of their bolder visual weight, filled icons should be used carefully to avoid visual
              clutter or drawing attention away from primary content.
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Custom icons",
    content: (
      <>
        <DxcParagraph>
          Custom icons should maintain visual consistency with the existing Material Symbols library. Avoid icons that
          are overly detailed, multicolored, or visually inconsistent with the surrounding interface, as they may
          introduce unnecessary visual noise.
        </DxcParagraph>
        <DxcParagraph>
          Custom icons should only be used when an appropriate icon is not available in the existing Material Symbols
          library.
        </DxcParagraph>
        <DxcParagraph>When creating or using custom icons, consider the following:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Maintain visual consistency with Material Symbols through appropriate proportions, stroke weight, alignment,
            and level of detail.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Default size 24px</strong> for custom SVGs. When a different size is needed, use the available
            Halstack height tokens.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcHeading level={4} text="Technical considerations" />
        <DxcParagraph>When creating custom SVG icons, consider the following technical guidelines:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use a consistent <Code>viewBox</Code> to maintain the icon's proportions when scaling.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Avoid unnecessary whitespace within the SVG to ensure proper alignment.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Preserve the original aspect ratio to prevent distortion when resizing.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Keep SVG paths and shapes as simple as possible to maintain clarity at different sizes.
          </DxcBulletedList.Item>
        </DxcBulletedList>

        <DxcGrid templateColumns={["repeat(2, 1fr)"]} gap="2rem">
          <DxcFlex direction="column" gap="2rem">
            <DxcParagraph>
              Figure 1 shows an example of a custom icon that is overly detailed, multicolored, and visually complex.
              Its appearance differs significantly from the monochromatic and simplified geometry of Material Symbols,
              introducing unnecessary visual noise and reducing consistency across the interface.
            </DxcParagraph>
            <DxcParagraph>
              In contrast, Figure 2 shows a custom icon that follows the visual principles of Material Symbols, using
              consistent proportions, stroke weight, alignment, and level of detail. This allows the custom icon to
              integrate naturally with the existing iconography.
            </DxcParagraph>
          </DxcFlex>
          <DxcFlex direction="column" gap="2rem">
            <Figure caption="Fig. 1: Incorrect use of custom icons">
              <Image src={customIncorrect} alt="Fig. 1: Incorrect use of custom icons" />
            </Figure>
            <Figure caption="Fig. 2: Correct use of custom icons">
              <Image src={customCorrect} alt="Fig. 2: Correct use of custom icons" />
            </Figure>
          </DxcFlex>
        </DxcGrid>
      </>
    ),
  },
  {
    title: "Accessibility considerations",
    content: (
      <>
        <DxcParagraph>
          Icons play an important role in interaction and communication. They should be implemented in a way that
          supports all users, including those using assistive technologies.
        </DxcParagraph>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Provide accessible names for informative icons</strong>
            <DxcParagraph>
              Informative icons that communicate meaning not otherwise available through surrounding content should have
              an accessible name.
            </DxcParagraph>
            <DxcParagraph>
              Use appropriate accessibility attributes, such as <Code>aria-label</Code> or <Code>aria-labelledby</Code>,
              depending on the implementation context. When the icon's meaning is already conveyed through adjacent
              text, avoid providing redundant accessible names.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Hide decorative icons from assistive technologies</strong>
            <DxcParagraph>
              Decorative icons that do not provide additional information should be hidden from screen readers using{" "}
              <Code>aria-hidden="true"</Code> or an appropriate presentation role.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maintain color contrast</strong>
            <DxcGrid templateColumns={["1fr", "1.5fr"]} gap="4rem">
              <DxcFlex direction="column">
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    Icons that convey meaning or represent interface components should have sufficient contrast against
                    adjacent colors.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Follow WCAG contrast requirements where applicable:
                    <DxcBulletedList type="circle">
                      <DxcBulletedList.Item>
                        <strong>3:1</strong> for graphical objects and user interface components.
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        <strong>4.5:1</strong> for normal text labels accompanying icons.
                      </DxcBulletedList.Item>
                    </DxcBulletedList>
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </DxcFlex>
              <DxcFlex direction="column" gap="2rem">
                <Figure caption="Contrast ratios in icons">
                  <Image src={accessibilityColor} alt="Contrast ratios in icons" />
                </Figure>
              </DxcFlex>
            </DxcGrid>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Don't rely on icons alone to convey meaning</strong>
            <DxcGrid templateColumns={["1fr", "1.5fr"]} gap="4rem">
              <DxcFlex direction="column">
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    Always pair critical icons with <strong>text or tooltips</strong> to reinforce meaning, especially
                    in form validation, alerts, and interactive components.
                    <DxcBulletedList type="circle">
                      <DxcBulletedList.Item>
                        This helps users understand information regardless of their familiarity with an icon or their
                        ability to perceive visual cues.
                      </DxcBulletedList.Item>
                    </DxcBulletedList>
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </DxcFlex>
              <DxcFlex>
                <Figure caption="Icons with and without conveying meaning">
                  <Image src={iconsContext} alt="Icons with and without conveying meaning" />
                </Figure>
              </DxcFlex>
            </DxcGrid>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use consistent size and hit areas</strong>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Ensure that interactive elements containing icons, such as buttons and toggles, provide an adequate
                target size and spacing.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                The parent interactive component is responsible for providing the appropriate hit area. A 44 × 44px
                target is a useful accessibility recommendation for improved usability.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Handling icons in frames</strong>
            <DxcParagraph>
              Material Symbols are designed around a <strong>24px × 24px grid</strong>, which provides consistent
              proportions and alignment.
            </DxcParagraph>
            <DxcParagraph>
              Avoid unnecessarily cropping or distorting icons. When using different sizes, preserve the original
              proportions.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keep the default icon names</strong>
            <DxcParagraph>
              Use the original predefined Material Symbol names when referencing icons in Figma or code. This makes
              collaboration between design and development easier and keeps references aligned with the Material Symbols
              library.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Respect spacing and alignment</strong>
            <DxcParagraph>
              Icons should align vertically with adjacent text or content. Follow Halstack spacing tokens when placing
              icons alongside labels or other interface elements.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Choose the right style: outlined vs. filled</strong>
            <DxcParagraph>
              Use <strong>outlined</strong> icons as the <strong>default</strong> style. Use <strong>filled</strong>{" "}
              icons when additional visual emphasis is needed, such as for selected states or important status
              indicators.
            </DxcParagraph>
            <DxcParagraph>
              Avoid mixing styles in the same context unless there is a clear visual or semantic reason.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use custom icons when necessary</strong>
            <DxcParagraph>
              Prefer existing Material Symbols whenever possible. Use custom SVGs when a specific visual representation
              is not available in the existing library, such as product-specific icons.
            </DxcParagraph>
            <DxcParagraph>Ensure custom SVGs have appropriate dimensions, proportions, and colors.</DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Don't use icons without a clear purpose</strong>
            <DxcParagraph>
              Every icon should support comprehension or reinforce an interaction. Avoid using icons purely for
              decoration when they do not add value.
            </DxcParagraph>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Resources and references",
    content: (
      <>
        <DxcParagraph>
          For further reference and documentation about Material Symbols library, please visit the following resources:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Link href="https://fonts.google.com/icons" passHref legacyBehavior>
              <DxcLink newWindow>Material Symbols Library</DxcLink>
            </Link>
            <br />
            Explore the complete set of Material Symbols available for download or use via web fonts. You can search by
            name, category, or keyword, and preview each icon in outline, filled, rounded, sharp, or two-tone styles
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="https://m3.material.io/styles/icons/overview" passHref legacyBehavior>
              <DxcLink newWindow>Icons in Material Design</DxcLink>
            </Link>
            <br />
            Learn about the design principles, structure, and usage guidelines behind Material Symbols. This resource
            explains how icons are built, how to choose between styles, and how to apply them consistently across
            interfaces.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const IconographyPage = () => (
  <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Iconography" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/iconography/IconographyPage.tsx" />
  </DxcFlex>
);

export default IconographyPage;

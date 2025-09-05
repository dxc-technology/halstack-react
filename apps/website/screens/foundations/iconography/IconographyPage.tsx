import { DxcHeading, DxcParagraph, DxcFlex, DxcBulletedList, DxcGrid, DxcLink } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import iconsHalstack from "./images/icons_halstack.jpg";
import materialIcons from "./images/material_icons.png";
import customIncorrect from "./images/custom_incorrect.jpg";
import customCorrect from "./images/custom_correct.jpg";
import iconsSizes from "./images/icons_sizes.jpg";
import accessibilityColor from "./images/accessibility_color.jpg";
import iconsContext from "./images/icons_context.jpg";
import iconsGrid from "./images/icons_grid.jpg";
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
        title: "Material Icons",
        content: (
          <>
            <DxcParagraph>
              At Halstack, we've chosen to adopt the Material Icons library, specifically the <strong>outline</strong>{" "}
              and <strong>filled</strong> variants, as our standard icon set. While we did not create these icons
              ourselves, there are strong reasons behind this decision that align with the goals of our design system:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Consistency</strong>: Material Icons offer a comprehensive, visually coherent set of icons that
                cover a wide range of common actions, objects, and concepts. Using a unified library helps us maintain
                consistency across all Halstack-based products.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Scalability</strong>: with hundreds of pre-designed icons available and frequent updates,
                Material Icons scale easily with product needs: whether we're designing simple interfaces or more
                complex workflows.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Accessibility</strong>: Material Icons are built with accessibility in mind, supporting clear
                recognition and compatibility with assistive technologies when used correctly.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Design and engineering efficiency</strong>: leveraging a widely adopted icon set reduces the
                effort needed to create and maintain custom icons. This speeds up both design and development workflows,
                allowing teams to focus on building better user experiences.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Cross-platform support</strong>: Material Icons are optimized for use across web, Android, and
                iOS platforms, helping us build consistent and adaptable experiences regardless of the target platform.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              By adopting Material Icons, we ensure that our iconography remains modern, flexible, and easy to work
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
          Material Icons are grouped into <strong>functional categories</strong> that help organize their purpose and
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
        <Figure caption="Material icons in Halstack components">
          <Image src={iconsHalstack} alt="Material icons in Halstack components" />
        </Figure>
      </>
    ),
  },
  {
    title: "Available styles",
    content: (
      <>
        <Figure caption="Outline and filled icons from Material Icons Library">
          <Image src={materialIcons} alt="Outline and filled icons from Material Icons Library" />
        </Figure>
        <DxcParagraph>
          Halstack supports two visual styles of Material Icons: <strong>Outline</strong> and <strong>Filled</strong>.
          Both styles are available through the Material Icons library and can be used across the design system
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
              The <strong>outline</strong> icons are characterized by their lightweight, hollow appearance with thin
              strokes and open shapes. They offer a modern, minimalist aesthetic that aligns well with Halstack's clean
              UI philosophy.
            </DxcParagraph>
            <DxcParagraph>
              This variant is our <strong>default style</strong> because it:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Integrates seamlessly into interfaces without overwhelming other UI elements
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Maintains legibility and clarity even at small sizes.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Provides a subtle visual cue without drawing excessive attention.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Harmonizes with our typography, spacing, and component structure, particularly in low-density layouts.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              They are ideal for secondary actions, interface navigation structure (such as back arrows or menus) and
              supporting text-based content without dominating the visual hierarchy.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Filled",
        content: (
          <>
            <DxcParagraph>
              <strong>Filled</strong> icons feature solid shapes with strong visual presence. This style creates a sense
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
          While Material Icons offer a wide range of visual representations, we acknowledge that there may be rare cases
          where a concept, function, or domain-specific idea is not adequately covered.
        </DxcParagraph>
        <DxcParagraph>
          In such cases, teams may need to create a <strong>custom icon</strong>. However, to ensure consistency and
          maintain the integrity of the Halstack visual language, the following guidelines apply:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Responsibility</strong>
            <DxcParagraph>
              The responsibility for designing a custom icon lies with the <strong>team that requires it</strong>. This
              includes:
            </DxcParagraph>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>Defining the icon's intended meaning and use.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Designing or sourcing the visual asset.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Testing the icon within its intended context to ensure clarity and accessibility.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Style consistency</strong>
            <DxcParagraph>
              It is <strong>highly encouraged</strong> that any custom icon:{" "}
            </DxcParagraph>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                Follows the same <strong>visual style</strong> as the Material Icons being used in Halstack (either{" "}
                <i>outline</i> or <i>filled</i>, depending on context).
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Matches the same <strong>stroke weight</strong>, <strong>corner radius</strong>, and{" "}
                <strong>overall proportions</strong>.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Is optimized for the same grid size (typically 24×24 pixels).</DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              Designing with these parameters in mind ensures visual cohesion with the rest of the interface.
            </DxcParagraph>
          </DxcBulletedList.Item>
        </DxcBulletedList>

        <DxcGrid templateColumns={["repeat(2, 1fr)"]} gap="2rem">
          <DxcFlex direction="column" gap="2rem">
            <DxcParagraph>
              In the first figure, we can see how the custom icon is{" "}
              <strong>colorful, highly detailed and visually complex</strong>. This doesn't match the{" "}
              <strong>monochromatic, simplified geometry</strong> of the Material Icons, as you can see on the same
              example. Therefore, this custom icon introduces a visual "noise" that could potentially break the
              consistency of the interface. While it may be visually appealing on its own, this custom icon feels out of
              place when using it alongside the rest of the system, and <strong>should always be avoided</strong>.
            </DxcParagraph>
            <DxcParagraph>
              In contrast, the custom icon in the Figure 2 has been designed to{" "}
              <strong>mimic the look and feel of the Material icons</strong>, as it uses the{" "}
              <strong>same weight, proportions and stroke style</strong>. The level of detail is consistent and
              balanced, and it integrates naturally into the UI, appearing as if it were part of the original set. This
              is the kind of <strong>alignment</strong> we aim for when extending the icon set.
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
          Icons play an important role in user interaction and communication. To ensure that all users (including those
          using assistive technologies) can fully understand and navigate Halstack-based interfaces, the following
          accessibility best practices should be followed when using icons.
        </DxcParagraph>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Provide meaning with labels</strong>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Informative icons</strong> (icons that convey meaning or trigger actions, like a "delete" or
                "download" button) must be <strong>accompanied by accessible labels</strong>.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Use <Code>aria-label</Code>, <Code>aria-labelledby</Code>, or an associated <Code>label</Code> element
                so screen readers can announce the icon's purpose.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Hide decorative icons from Assistive Tech</strong>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Decorative icons</strong> (e.g., a chevron indicating expandable content, or a checkmark in a
                success message) should not be read by screen readers.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Use <Code>aria-hidden="true"</Code> or mark them with <Code>role="presentation"</Code>.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maintain color contrast</strong>
            <DxcGrid templateColumns={["1fr", "1.5fr"]} gap="4rem">
              <DxcFlex direction="column">
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    Icons must have <strong>sufficient contrast</strong> against their background, especially when used
                    as status indicators (error, success, info).{" "}
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Follow WCAG AA or AAA contrast ratios (minimum 3:1 for UI components and 4.5:1 for icons conveying
                    meaning).
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
                        This ensures understanding for users with cognitive disabilities, color blindness, or screen
                        reader usage.
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
                Icons inside clickable areas (e.g., buttons or toggles) must have a minimum{" "}
                <strong>touch target size of 44×44px</strong> to support users with motor impairments.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Ensure icon-only buttons are large enough and padded properly, not just visually aligned.{" "}
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Implementation notes",
    content: (
      <>
        <DxcParagraph>
          Using icons in our components is simple — just set the relevant prop to a Material Symbol name. To display the
          filled version, prefix the icon name with <Code>filled_</Code>.
        </DxcParagraph>
        <DxcParagraph>
          If you need to use icons <strong>outside of our components</strong>, make sure the{" "}
          <strong>font family</strong> is set to <Code>Material Symbols Outlined</Code>. This font is automatically
          loaded when using our components; otherwise, it must be manually imported or installed.
        </DxcParagraph>
        <DxcParagraph>
          To toggle between filled and unfilled icons, use the <Code>font-variation-settings</Code> CSS property:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Code>'FILL' 0</Code> for <strong>outlined</strong>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Code>'FILL' 1</Code> for <strong>filled</strong>
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
              Material Icons are carefully designed and optimized within a <strong>24×24 pixel frame</strong>. This
              frame includes built-in padding and alignment rules that ensure the icon scales correctly and aligns
              visually with text and components.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Avoid resizing or cropping the icon inside its original frame</strong>. Doing so may lead to
              misalignment, uneven spacing, or loss of visual balance.
            </DxcParagraph>
            <Figure caption="Material icons with grid and safe area">
              <Image src={iconsGrid} alt="Material icons with grid and safe area" />
            </Figure>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keep the default icon names</strong>
            <DxcParagraph>
              Each Material Icon comes with a predefined name (e.g., <Code>edit</Code>, <Code>check_circle</Code>,{" "}
              <Code>menu</Code>). We <strong>recommend keeping this name unchanged</strong> when importing or using the
              icon in Figma or code, as it makes collaboration between design and development easier and it aligns with
              the original documentation and Material search.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use consistent sizes</strong>
            <DxcParagraph>Halstack commonly uses icons at these sizes:</DxcParagraph>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                <strong>16x16 px</strong> — for compact UI elements (e.g., small buttons, tags)
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>20x20 px</strong> — for medium-sized interactions
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>24x24 px</strong> — default size, used in most components
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              These sizes map directly to our <strong>height tokens</strong>. Other sizes from the height scale are
              acceptable, but use them <strong>only when necessary</strong>, such as in hero banners or extra-large
              action areas.
            </DxcParagraph>
            <Figure caption="Halstack commonly used sizes for icons">
              <Image src={iconsSizes} alt="Halstack commonly used sizes for icons" />
            </Figure>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Respect spacing and alignment</strong>
            <DxcParagraph>
              Icons should align vertically centered with adjacent text or content, maintain consistent padding when
              placed inside components (e.g., icon + label buttons), and never be stretched or highly cropped. Follow
              spacing tokens for margins and paddings. When paired with text, use a spacing token between the icon and
              label to ensure visual balance.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Choose the right style: outline vs filled</strong>
            <DxcParagraph>
              Use <strong>outline</strong> icons as the <strong>default</strong> style in Halstack. They are clean,
              lightweight, and match the overall tone of our UI. When needing additional visual emphasis, use filled
              icons for active or selected states, important status indicators, or in places with low visual density or
              dark background.
            </DxcParagraph>
            <DxcParagraph>
              Avoid mixing outline and filled styles in the same context unless you are using them to clearly indicate{" "}
              <strong>states</strong> or <strong>semantic differences</strong>.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Don't use icons without clear purpose</strong>
            <DxcParagraph>
              Every icon should add value and support comprehension. Avoid using icons just for decoration: if it
              doesn't clarify, reinforce, or simplify an interaction, it's better to leave it out. Also avoid overly
              abstract or ambiguous icons. Clarity is more important than cleverness.
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
          For further reference and documentation about Material icons library, please visit the following resources:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Link href="https://fonts.google.com/icons" passHref legacyBehavior>
              <DxcLink>Material Icons Library</DxcLink>
            </Link>
            <br />
            Explore the complete set of Material Icons available for download or use via web fonts. You can search by
            name, category, or keyword, and preview each icon in outline, filled, rounded, sharp, or two-tone styles
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="https://m3.material.io/styles/icons/overview" passHref legacyBehavior>
              <DxcLink>Icons in Material Design System</DxcLink>
            </Link>
            <br />
            Learn about the design principles, structure, and usage guidelines behind Material Icons. This resource
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

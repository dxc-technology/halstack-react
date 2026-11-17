import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Image from "@/common/Image";
import materialVariants from "./images/material_variants.png";
import iconSizes from "./images/icon_sizes.png";
import Link from "next/link";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Use the Icon component to visually support actions, communicate information, and reinforce the meaning of
          interface elements.
        </DxcParagraph>
        <DxcParagraph>
          Icons can be used independently for visual representation or alongside text to provide additional context.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "When to use",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Actions:</strong> Represent actions within interactive components, such as edit, delete, search,
              close, and add.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Navigation:</strong> Help users identify navigation destinations and controls.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Feedback:</strong> Communicate statuses such as success, warning, error, and information.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Content:</strong> Represent objects, concepts, and categories.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Communication and media:</strong> Represent messaging, notifications, audio, and video
              functionality.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "When not to use",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Do not use an icon as the only source of information when its meaning is unclear.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Do not use icons as decorative replacements for text when a label is necessary to understand an action.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Do not use an icon as an interactive element on its own. When an action is required, use an appropriate
              interactive component, such as Button, and use the icon to visually represent the action within it.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Resources",
    content: (
      <DxcParagraph>
        Halstack uses{" "}
        <Link href="https://m3.material.io/styles/icons/overview" passHref legacyBehavior>
          <DxcLink newWindow>Material Symbols</DxcLink>
        </Link>{" "}
        as it’s <strong>primary icon resource</strong> and supports
        <strong>custom SVG</strong> icons when an appropriate Material Symbol is <strong>unavailable</strong>.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Material Symbols",
        content: (
          <>
            <DxcParagraph>
              Material Symbols are the primary icon resource used by Halstack. They provide a consistent visual language
              and a predefined collection of commonly used interface icons.
            </DxcParagraph>
            <DxcParagraph>The component supports the following Material Symbols styles:</DxcParagraph>
            <Image src={materialVariants} alt="Material Symbols variants" />
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Outlined:</strong> The default style, suitable for more general-purpose interface scenarios.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Filled:</strong> Used when additional visual emphasis or distinction is needed.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Custom SVG Icons",
        content: (
          <>
            <DxcParagraph>
              The component also supports custom SVG icons when an appropriate Material Symbol is unavailable.
            </DxcParagraph>
            <DxcParagraph>When using custom SVGs:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Use optimized SVG assets.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Follow the same visual proportions and alignment as the existing icon library.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Ensure that the SVG scales correctly and recognizable at different sizes.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Define the SVG's colors within the asset or use <Code>currentColor</Code> when parent color inheritance
                is desired.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              <em>
                <strong>Note:</strong> Custom SVG icons retain their original appearance and are not affected by the
                Material Symbols visual styles. Their colors can be defined directly in the SVG or configured to inherit
                from the parent.
              </em>
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Accessibility",
    content: (
      <DxcParagraph>
        Icons should be accessible to all users, including those using assistive technologies. Their accessibility
        requirements depend on the purpose and context in which they are used.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Decorative icons",
        content: (
          <DxcParagraph>
            Icons that are purely decorative or redundant with nearby text should be hidden from screen readers to avoid
            unnecessary announcements.
          </DxcParagraph>
        ),
      },
      {
        title: "Meaningful icons",
        content: (
          <DxcParagraph>
            Icons that communicate meaningful information should have an accessible name that clearly describes their
            purpose. Avoid relying on an icon alone when additional text or context is necessary to understand its
            meaning.
          </DxcParagraph>
        ),
      },
      {
        title: "Icons within interactive components",
        content: (
          <DxcParagraph>
            When an icon is used inside a Button or Link, the parent component should provide the accessible name and
            interaction semantics. The nested Icon should remain hidden from screen readers to avoid duplicate
            announcements.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Implementation notes",
    content: (
      <DxcParagraph>
        The Icon component provides a consistent interface for displaying Material Symbols and custom SVG icons in
        Halstack.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Icon selection",
        content: (
          <DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Material Symbols should be selected using their predefined Material Symbol names.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>Original Material Symbol names should be preserved.</DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Custom SVGs can be provided when an icon is not available in the existing Material Symbols library.
            </DxcBulletedList.Item>
          </DxcBulletedList.Item>
        ),
      },
      {
        title: "Size",
        content: (
          <>
            <DxcParagraph>
              Use available Halstack height tokens to define icon sizes when an explicit size is required.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Material Symbols:</strong> Inherit their font size from the parent element. When used
                standalone, they inherit the font size of the <Code>{"<body>"}</Code> element.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Custom SVGs:</strong> Do not automatically inherit their size from the parent element. They have
                a default size of <strong>24px</strong> and can use available Halstack height tokens when a different
                size is needed.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>Commonly used sizes include:</DxcParagraph>
            <Image src={iconSizes} alt="Icon sizes" />
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>16px:</strong> For compact UI elements.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>20px:</strong> For medium-sized interactions.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>24px:</strong> Standard Material Symbol size and default custom SVG size.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              <em>
                Commonly used icon sizes include 16px, 20px, and 24px. These are examples and do not limit the available
                Halstack size tokens.
              </em>
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Color",
        content: (
          <>
            <DxcParagraph>
              <strong>Material Symbols</strong> inherit their color from their parent element by default, allowing them
              to remain visually consistent with surrounding text and interface components.
            </DxcParagraph>
            <DxcParagraph>
              For <strong>custom SVG icons</strong>, color inheritance depends on how the SVG is defined. SVGs using
              <Code>currentColor</Code> inherit the color from their parent element, while SVGs with hardcoded{" "}
              <Code>fill</Code> or <Code>stroke</Code> values retain their defined colors.
            </DxcParagraph>
            <DxcParagraph>
              Color should not be the only means of communicating information. Provide additional visual or textual
              context
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Behavior",
        content: (
          <>
            <DxcParagraph>
              The Icon component is primarily visual and does not manage independent interaction states.
            </DxcParagraph>
            <DxcParagraph>
              Parent components are responsible for handling interaction and semantic states, such as hover, focus,
              active, and disabled.
            </DxcParagraph>
            <DxcParagraph>
              This approach keeps the Icon component reusable while allowing it to adapt to the behavior and context of
              its parent component.
            </DxcParagraph>
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
          <strong>Use Material Symbol whenever possible:</strong> Prefer Material Symbol when an appropriate is
          available to maintain consistency across Halstack applications.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Choose the appropriate visual style:</strong> Use Outlined as the default style. Choose Filled when
          additional emphasis or visual distinction is needed.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain visual consistency:</strong> Ensure custom SVG icons follow the proportions, alignment, and
          visual weight of the existing icon library.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use icons purposefully:</strong> Choose icons that clearly support the meaning or function of the
          surrounding content. Avoid using icons without a clear purpose.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Provide accessible context:</strong>Ensure meaningful icons have an accessible name. Pair icons with
          text when their meaning may not be immediately recognizable.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use appropriate interactive components: </strong> When an icon represents an action, place it within
          an appropriate interactive component, such as a Button, button link, or link, rather than treating the icon
          itself as interactive.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const IconOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/icon/overview/IconOverviewPage.tsx" />
  </DxcFlex>
);

export default IconOverviewPage;

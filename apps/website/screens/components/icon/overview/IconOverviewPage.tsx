import { DxcBulletedList, DxcFlex, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import Image from "@/common/Image";
import materialVariants from "./images/material_variants.png";

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
              <strong>Actions:</strong> Represent common actions such as edit, delete, search, close, and add.
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
              Do not use icons as decorative replacements for text when the label is necessary to understand an action.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Do not use icons to represent interactive behavior independently. Use an appropriate interactive
              component, such as Button, when an action is required.
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
        Halstack uses <strong>Material Icons</strong> as it’s <strong>primary icon</strong> resource and supports custom
        SVG icons when an appropriate Material Icon is <strong>unavailable</strong>.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Material Icons",
        content: (
          <>
            <DxcParagraph>
              Material Icons are the primary icon resource used by Halstack. They provide a consistent visual language
              and a predefined collection of commonly used interface icons.
            </DxcParagraph>
            <DxcParagraph>The component supports the following Material Icons styles:</DxcParagraph>
            <Image src={materialVariants} alt="Material Icons variants" />
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
              The component also supports custom SVG icons when an appropriate Material Icon is unavailable.
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
                Define the SVG's colors within the asset or use currentColor when parent color inheritance is desired.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              <em>
                <strong>Note:</strong> Custom SVG icons retain their original appearance and are not affected by the
                Material Icons visual styles. Their colors can be defined directly in the SVG or configured to inherit
                from the parent.
              </em>
            </DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Sizes",
    content: (
      <>
        <DxcParagraph>
          Halstack recommends a standard icon sizing scale to maintain visual consistency across components and
          interfaces.
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Dimension</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Primary</strong>
              </td>
              <td>
                For the principal call to action on the page; primary buttons should only appear once per screen (not
                including the application header or in a modal dialog).
              </td>
            </tr>
            <tr>
              <td>
                <strong>Secondary</strong>
              </td>
              <td>
                For less prominent actions; secondary buttons can be used in isolation or paired with a primary button
                when there are multiple calls to action.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Text</strong>
              </td>
              <td>
                For the least pronounced actions; often used in conjunction with a primary button (e.g. cancel in a
                modal dialog).
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcParagraph>
          These are the recommended sizes, but icons can be resized using any of the available height tokens.
        </DxcParagraph>
        <DxcParagraph>
          <strong>Material Icons</strong> inherit their font size from the surrounding text context by default, while
          <strong>Custom SVG icons default is set to 24px</strong> when no size is specified.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Color",
    content: (
      <>
        <DxcParagraph>
          Material Icons <strong>inherit their color</strong> from their parent component by <strong>default</strong>,
          allowing them to remain visually consistent with surrounding text and interface components.
        </DxcParagraph>
        <DxcParagraph>
          For <strong>custom SVG</strong>, color inheritance depends on the SVG using <Code>currentColor</Code> rather
          than hardcoded fill or stroke values.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Accessibility",
    content: (
      <DxcParagraph>
        Icon should be accessible to all users, including those using assistive technologies. Their accessibility
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
            Icon communicates meaningful information should have an accessible name that clearly describes their
            purpose. Avoid relying on an icon alone when addtional text or context is necessary to understand it’s
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
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use Material Icon whenever possible:</strong> Prefer <strong>Material Icon</strong> when an
          appropriate is available to maintain consistency across Halstack applications.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use Outlined as the default style:</strong> Use the Outlined style for general-purpose icons. Choose
          filled when additional emphasis or visual distinction is needed.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Follow the standard sizing scale:</strong> Use the 16px, 20px and 24px sizes according to the
          surrounding component, content hierachy, and available space.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain visual consistency:</strong> Custom SVG icons should follow proportions, alignment, and
          visual weight of the existing icon library.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use color meaningfully:</strong> Allow icons to inherit color from their surrounding context and avoid
          using color as the only way to communicate information.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Provide accessible context:</strong> Ensure meaningful icons have an accessible name. Pair icons with
          text when their meaning may not be immediately recognizable.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use appropriate interactive components:</strong> When an icon represents an actions, place it within
          an appropriate interactive component, such as Button, button link or link, rather than treating the icon
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

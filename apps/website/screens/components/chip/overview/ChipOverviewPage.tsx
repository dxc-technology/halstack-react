import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import anatomy from "./images/chip-anatomy.png";
import categorization from "./images/chip-categorization.png";
import searchFilter from "./images/chip-faceted-search-filter.png";
import states from "./images/chip-states.png";
import sizeVariants from "./images/chip-size.png";
import spacing from "./images/chip-spacing.png";
import Image from "@/common/Image";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Chips are versatile UI components used to display and manage information in a compact, scannable format. They
          commonly represent selected options, tags, filters, or contextual actions within an interface.
        </DxcParagraph>
        <DxcParagraph>
          Chip component supports multiple sizes, optional leading elements (icon or avatar), and an optional action
          icon, while maintaining a consistent structure and interaction model. Clear states, keyboard accessibility,
          and controlled label length ensure the component remains lightweight, reusable, and adaptable across products
          such as filters, forms, and the chatbot experience.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Chip anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container</strong>: the structural wrapper that holds the chip’s content and defines its visual
            boundaries and spacing. It establishes the chip’s size and layout while remaining informational only.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Left Element</strong> <em>(Optional)</em>: a leading visual element that adds contextual meaning to
            the chip and helps users quickly recognize its purpose.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label</strong>: the text content inside the chip that identifies and describes the associated item
            or value.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Action Icon</strong> <em>(Optional)</em>: a trailing control that enables direct interaction with
            the chip without affecting the container itself.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using chips",
    subSections: [
      {
        title: "Categorization",
        content: (
          <>
            <DxcParagraph>
              Chips are used to organize and summarize related information such as topics, statuses, or attributes in a
              compact and scannable way. They help users quickly understand key metadata without overwhelming the
              interface.
            </DxcParagraph>
            <DxcParagraph>
              With the redesigned Chip component, categorization chips support consistent sizing, optional leading
              icons, and a clear visual structure while remaining informational and non-interactive. When using chips
              for categorization, ensure labels are concise and relevant to the displayed content to maintain clarity
              and usability.
            </DxcParagraph>
            <Image src={categorization} alt="Chip categorization" />
          </>
        ),
      },
      {
        title: "Faceted search filters",
        content: (
          <>
            <DxcParagraph>
              When used alongside selection or filter controls, chips act as filter facets that allow users to review,
              apply, and remove selected attributes. This enables users to refine results efficiently and maintain
              visibility of their current selections.
            </DxcParagraph>
            <DxcParagraph>
              In the redesigned Chip component, faceted filter chips support dismissal through the action icon, which is
              the primary interaction point. Clear visual states (hover, focus, active, disabled) help communicate
              interactivity, while optional leading elements (icons or avatars, depending on size){" "}
            </DxcParagraph>
            <Image src={searchFilter} alt="Chip faceted search filters" />
          </>
        ),
      },
      {
        title: "Chip states",
        content: (
          <>
            <DxcParagraph>
              Chip component, states are applied to the action icon only, including default, hover, focus, active, and
              disabled. The container remains informational, ensuring interactions are clear, intentional, and
              consistent across use cases.
            </DxcParagraph>
            <Image src={states} alt="Chip states" />
          </>
        ),
      },
      {
        title: "Chips vs. Badges",
        content: (
          <>
            <DxcParagraph>
              While{" "}
              <Link href="/components/badge" passHref legacyBehavior>
                <DxcLink>badges</DxcLink>
              </Link>{" "}
              and chips share a similar visual style, they serve different purposes in a user interface:{" "}
              <strong>chips are interactive</strong>, while <strong>badges are static indicators</strong>.
            </DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Use case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Chip</strong>
                  </td>
                  <td>
                    Chips help users categorize, filter, or organize information. They often include keywords or
                    metadata, providing quick access to related content and aiding navigation.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Badge</strong>
                  </td>
                  <td>
                    Badges function as visual indicators, displaying status or contextual information. They are
                    non-interactive and <strong>rely on color and text</strong> to communicate meaning.
                  </td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Size variants",
        content: (
          <>
            <DxcParagraph>
              The Chip component is available in three size variants to support different interface densities and use
              cases. Each size follows the same structural pattern while adjusting spacing and supported elements to
              maintain clarity and usability.
            </DxcParagraph>
            <Image src={sizeVariants} alt="Chip size variants" />
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "Keep labels concise and meaningful",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Labels should be <strong>short and clear</strong>, ideally one or two words.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid long text</strong> that may cause truncation or wrapping issues.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use <strong>sentence case</strong> for readability (e.g., "New York" instead of "NEW YORK").
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Avoid overloading the UI with too many chips",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Use chips <strong>only when necessary</strong> to avoid clutter.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Group related chips logically and consider <strong>collapsible chip groups</strong> if the list becomes
                too long.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Image src={spacing} alt="Chip's spacing" />
          </>
        ),
      },
      {
        title: "Ensure icons are contextually relevant and avoid redundancy",
        content: (
          <>
            <DxcParagraph>
              While the component configuration is flexible enough to allow multiple icons or action icons, it is{" "}
              <strong>not recommended</strong> to use two icons or two action icons within the same chip. Instead, a{" "}
              <strong>balanced approach</strong> should be followed: pairing one <strong>icon</strong> (to provide
              context) with one <strong>action icon</strong> (to enable an interaction).
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Icons should add value</strong> to the chip, not just be decorative.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Ensure that icons are <strong>easy to recognize and understand</strong> within the chip's context. The
                selected icon should accurately represent the chip's purpose, while the action icon should clearly
                indicate the interaction it triggers.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Icons <strong>should not compete for attention</strong> or convey conflicting messages. Instead, they
                should complement each other to enhance usability.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Follow the guideline: <strong>one informational icon + one action icon (if needed)</strong> — avoid
                using two icons of the same type.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Manage chip overflow gracefully",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              If there are too many chips in a row, consider <strong>horizontal scrolling or wrapping</strong>.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              For dynamic content, provide a <strong>"Show more" option</strong> to avoid overwhelming the user.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const ChipOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/chip/overview/ChipOverviewPage.tsx" />
  </DxcFlex>
);
export default ChipOverviewPage;

import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import anatomy from "./images/chip-anatomy.png";
import Example from "@/common/example/Example";
import categorization from "./examples/categorization";
import filter from "./examples/filter";
import spacing from "./images/chip-spacing.png";
import Image from "@/common/Image";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Chips are versatile components that allow users to display and manage information in a compact format. They are
        commonly used to represent selected options, tags, filters, or interactive elements within an interface. Their
        lightweight and flexible design makes them ideal for enhancing user experience by enabling quick and organized
        interactions.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Chip anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Prefix</strong> <em>(Optional)</em>: the prefix can be an icon or an action icon that provides
            additional context or functionality.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> the primary text that conveys the chip's meaning, such as a tag name or a selected
            option. It should be concise, clear, and relevant to the chip's function.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Suffix</strong> <em>(Optional)</em>: the suffix can be an icon or an action icon that enhances
            interactivity.
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
              Chips are commonly used to organize content by grouping related topics, products, or subjects. They often
              serve as a summary of the page's content. When using chips for categorization, ensure that they are
              relevant to the displayed information to maintain clarity and usability.
            </DxcParagraph>
            <Example example={categorization} />
          </>
        ),
      },
      {
        title: "Faceted search filters",
        content: (
          <>
            <DxcParagraph>
              When used alongside the select component, chips serve as effective filter facets, allowing users to refine
              search results by choosing and removing specific attributes. This combination enables users to include or
              exclude preferences directly from their queries. For faceted filtering, chips should be dismissible,
              ensuring effortless adjustments and a more intuitive selection experience.
            </DxcParagraph>
            <Example example={filter} />
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
                Follow the guideline: <strong>one informational icon + one action icon (if needed)</strong> — avoid using
                two icons of the same type.
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
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/chip/overview/ChipOverviewPage.tsx" />
  </DxcFlex>
);
export default ChipOverviewPage;

import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import anatomy from "./images/card_anatomy.png";
import example from "./images/card_example.png";
import Image from "@/common/Image";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Cards are versatile UI components used to group related content and actions within a contained layout. They help
        organize information into digestible sections, making it easier for users to scan, compare, and interact with
        individual items. Cards enhance readability and visual hierarchy and are commonly used in dashboards, product
        listings, user profiles, and content previews to support structured and engaging user experiences.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Card's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the main structural wrapper that ensures padding, spacing, and alignment across
            all card elements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Custom content area:</strong> flexible space where text, icons, buttons, and other UI elements can
            be placed. It adapts to different use cases while maintaining visual consistency.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Image</strong> <em>(Optional)</em>: visual element that enhances the card's content. By default it
            can be placed either on the left or right side of the card depending on layout needs.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Interactive elements</strong> <em>(Optional)</em>: components such as buttons or icons that allow
            users to take actions related to the card's content.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          <em>
            ** Please note that while these elements are not included by default in the component's configuration, they
            are the common components in a card. While cards support optional elements like images and actions, it's
            essential that the overall composition remains visually balanced and aligned with the design system's
            structure.
          </em>
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Placing content in a Card",
    content: (
      <>
        <DxcParagraph>
          Cards are designed to accommodate flexible layouts and diverse content types. You can include any combination
          of media and interactive elements, but it's important to follow consistent design patterns for usability and
          clarity.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Image placement:</strong> cards support placing the image either on the left or the right side of
            the layout. The image should maintain a fixed ratio and size for visual harmony. By default, the component
            provides layout options where the image can appear on the left or right side of the content. However,
            alternative layouts —such as vertical image placements — can be achieved by placing the image directly within
            the custom content area. This allows for more flexibility while still adhering to spacing and alignment
            guidelines.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Text content:</strong> titles, descriptions, metadata, or status labels are typically placed in the
            content area with a clear hierarchy — starting with a bold title, followed by supporting text.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Interactive elements:</strong> place buttons, links, or icons in the lower section of the content
            area or aligned to the end of the card to support related user actions.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid overloading:</strong> keep the content concise to prevent visual clutter. A well-structured
            card should be easy to scan and act upon.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Image src={example} alt="Card's example" />
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Use a consistent layout:</strong> when displaying a collection of cards, maintain the same layout
            and style across all instances. Avoid mixing card variants within the same set.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Support scanning:</strong> structure content so users can quickly identify what the card is about —
            use visual hierarchy, spacing, and clear typography.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use cards as independent units:</strong> each card should contain all the relevant information and
            actions within it. It should make sense on its own, even if removed from the rest of the collection.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Minimize interaction complexity:</strong> don't overload the card with too many clickable areas.
            Define clear action zones, and prioritize the most important interactions.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Respect spacing:</strong> ensure consistent padding and margins within and between cards to maintain
            visual rhythm in the layout.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use of white space:</strong> avoid cramming content. White space improves readability and prevents
            cards from feeling cluttered.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid over-design:</strong> too many effects, decorations, or inconsistent imagery can reduce
            clarity and hurt the overall user experience.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Responsiveness:</strong> cards should adapt gracefully to different screen sizes and grid layouts,
            maintaining structure and readability.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const CardOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/card/overview/CardOverviewPage.tsx" />
  </DxcFlex>
);

export default CardOverviewPage;

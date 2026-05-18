import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import anatomy from "./images/card-anatomy.png";
import configurations from "./images/card-configurations.png";
import variants from "./images/card-variants.png";
import Image from "@/common/Image";
import Example from "@/common/example/Example";
import direction from "./examples/direction";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Cards help users <strong>scan and explore</strong> discrete pieces of information{" "}
          <strong>by grouping all relevant content about a subject into a single, self-contained unit.</strong> They are
          commonly used in grids and lists to display items such as products, articles, profiles, or resources, giving
          each entry its own visual space and making large sets of content easier to browse.
        </DxcParagraph>
        <DxcParagraph>
          They are also designed to work across a wide range of use cases without prescribing what content goes inside
          them.{" "}
          <strong>
            They define the layout and visual treatment of the container, while the content itself is provided by the
            author.
          </strong>{" "}
          This flexibility makes them suitable for scenarios where items vary in content or where each entry deserves
          more visual emphasis than a table row or list item can provide.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Card anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> it's the outermost element that defines the card's boundaries, background, and
            visual treatment. It is the primary interactive target when the card is clickable or selectable.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Image</strong> <em>(Optional)</em>: a media area that provides visual context for the card's
            content. It can be placed before or after the body.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Body</strong> <em>(Optional)</em>: a dedicated slot for descriptive or supporting custom content. At
            least one of body or image must be present.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Component configuration and features",
    content: (
      <>
        <Image src={configurations} alt="Card configurations" />
        <DxcParagraph>
          Cards can be configured across several dimensions to adapt to different content needs and layout contexts. The
          sections below cover the available variants, how content and images can be composed within the card, and the
          states the component supports throughout its lifecycle.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Variants",
        content: (
          <DxcParagraph>
            Cards are available in two variants that define how the container is visually distinguished from the
            surrounding surface:
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Elevated",
            content: (
              <DxcParagraph>
                The elevated card uses a subtle shadow to separate itself from the page surface, giving it a sense of
                depth without a visible border. This variant works well on light or neutral backgrounds where the shadow
                provides clear contrast and reinforces the card as a distinct, interactive object.
              </DxcParagraph>
            ),
          },
          {
            title: "Outlined",
            content: (
              <>
                <DxcParagraph>
                  The outlined card defines its boundaries with a visible border instead of a shadow. It produces a
                  flatter appearance and integrates more naturally into layouts that already carry elevation from
                  surrounding containers, or onto non-white backgrounds where a shadow would lose definition.
                </DxcParagraph>
                <Image src={variants} alt="Card variants" />
              </>
            ),
          },
        ],
      },
      {
        title: "Content and image composition",
        content: (
          <>
            <DxcParagraph>
              A card{" "}
              <strong>must always contain at least one of its two core content elements: an image or a body</strong>.
              Both can coexist, but the card cannot be empty of both. When an image and body are used together, the
              image can be placed <strong>before</strong> the body (at the top in vertical orientation, or to the left
              in horizontal orientation) or <strong>after</strong> it (at the bottom or to the right), allowing authors
              to control the visual hierarchy of the card based on the relative importance of the media and the text.
            </DxcParagraph>
            <DxcParagraph>
              Cards also support two orientations. In <strong>vertical</strong> orientation, content stacks from top to
              bottom. In <strong>horizontal</strong> orientation, the image and body appear side by side, producing a
              more compact layout suited to list-like contexts.
            </DxcParagraph>
            <Example example={direction} defaultIsVisible={false} />
          </>
        ),
      },
      {
        title: "States",
        content: (
          <>
            <DxcParagraph>
              The card component supports a range of states that cover both its interactive and data-loading lifecycle.
              Interactive states such as hover, focus, active, and selected provide consistent visual feedback for
              pointer and keyboard users. Loading and empty states address the moments when content is not yet available
              or does not exist, ensuring the card always communicates something meaningful to the user regardless of
              the underlying data condition.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Use cases:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Hover:</strong> a subtle visual change signals its interactivity when the pointer moves over the
                card.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Focus:</strong> a visible focus indicator is applied when the card receives keyboard focus,
                ensuring accessibility for non-pointer users.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Selected:</strong> for selectable cards, it indicates the user has chosen this card within a
                selection interface. Selected hover, focus and active sub-states are also provided for when the user
                revisits an already-selected card.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Loading:</strong> renders a skeleton layout that mirrors the card's populated structure while
                content is being fetched. This state should be shown as soon as a request is in flight, not as a delayed
                fallback.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Empty:</strong> renders a skeleton layout that mirrors the card's populated structure while
                content is being fetched. This state should be shown as soon as a request is in flight, not as a delayed
                fallback.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Scope each card to a single subject:</strong> A card should represent one thing, whether that is a
            product, a person, a document, or a resource. Mixing unrelated content inside a single card breaks the
            implicit contract the component makes with the user.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Choose orientation based on content hierarchy, not aesthetics:</strong> Vertical orientation works
            well when the image is the primary draw and text plays a supporting role. Horizontal orientation suits
            contexts where text carries most of the meaning and the image is supplementary. Avoid mixing orientations
            within the same grid, as it disrupts scanning rhythm.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keep content concise and scannable:</strong> Cards are designed for quick consumption. Aim for
            content a user can parse in a few seconds. If the information required is more extensive, surface it on a
            detail view reached by interacting with the card.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maintain consistent image ratios across a grid:</strong> Inconsistent image dimensions create an
            uneven layout that makes scanning harder. Standardise on a single aspect ratio per view and ensure images
            are cropped or covered rather than stretched.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Reserve the selected state for genuine selection interactions:</strong> Do not use it to indicate an
            active page or current section; that semantic belongs to navigation components. Use selected cards only in
            contexts where the user is making a discrete choice among a set of options.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Show the loading state immediately:</strong> Render the skeleton as soon as a request is in flight.
            Displaying empty containers or no feedback while waiting for data creates an experience that feels broken
            rather than responsive.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Do not confuse empty and loading:</strong> They communicate different things to the user. Show the
            loading state while a request is in progress and the empty state only once the request has completed and
            returned no results.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const CardOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/card/overview/CardOverviewPage.tsx" />
  </DxcFlex>
);

export default CardOverviewPage;

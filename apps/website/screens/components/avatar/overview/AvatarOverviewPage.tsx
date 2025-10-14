import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcBulletedList, DxcFlex, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import anatomy from "./images/avatar_anatomy.png";
import shape from "./images/avatar_shape.png";
import contentTypes from "./images/avatar_content_types.png";
import colors from "./images/avatar_colors.png";
import sizes from "./images/avatar_sizes.png";

const sections = [
  {
    title: "Overview",
    content: (
      <>
        <DxcParagraph>
          The Avatar component represents users or entities using visual identifiers such as icons, initials, or images.
        </DxcParagraph>
        <DxcParagraph>
          It ensures consistency across the interface and supports various states, color variants, and contextual
          information like user roles or availability.
        </DxcParagraph>
        <DxcParagraph>
          Avatars are typically used in headers, navigation bars, profile cards, chat interfaces, and user lists.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Avatar anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Base Shape:</strong> defines the visual form of the avatar.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Content Area:</strong> displays the main visual content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Status Indicator (optional):</strong> a small color light that communicates user presence or status.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label & Sublabel (optional):</strong> textual information placed next to or below the avatar,
            providing context such as name, role, or email.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          The Avatar component is designed to be highly versatile, adapting to a wide range of use cases and interface
          needs.
        </DxcParagraph>
        <DxcParagraph>
          Through its different <strong>shapes, content types, sizes, and color options</strong>, it can seamlessly
          represent users, temas, or entities across various contexts, from compact tables to rich profile sections.
        </DxcParagraph>
        <DxcParagraph>
          Each variant ensures visual consistency while providing the flexibility to match the tone and hierarchy of the
          experience.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Shape",
    content: (
      <>
        <Image src={shape} alt="Avatar shape" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Round:</strong> the default option, best for personal profiles and chat contexts.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Square:</strong> ideal for products, organizations, or abstract entities.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Content types",
    content: (
      <>
        <Image src={contentTypes} alt="Avatar content types" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Default icon:</strong> generic placeholder when no data is available.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Custom icon:</strong> allows brand-specific or role-specific icons.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Initials:</strong> displays user initials.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Image:</strong> uses a user or entity photo.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          If an image or custom icon fails to load, a fallback (initials or default icon) is automatically displayed.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Colors",
    content: (
      <>
        <Image src={colors} alt="Avatar colors" />
        <DxcParagraph>
          By default, the first avatar uses the <strong>primary brand color</strong> as its background. However, the
          component supports multiple color variants, which is especially useful when{" "}
          <strong>differentiating between several avatars</strong> displayed together on screen, such as in team lists,
          conversation threads, or collaborative views.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Sizes",
    content: (
      <>
        <DxcParagraph>
          The Avatar component is available in six size variants, each designed to fit specific interface contexts, from
          compact data tables to prominent profile headers. Choosing the right size ensures that avatars maintain visual
          balance and hierarchy across different layouts and use cases.
        </DxcParagraph>
        <Image src={sizes} alt="Avatar sizes" />
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Size (px)</th>
              <th>Typical usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>XS</strong>
              </td>
              <td>24px</td>
              <td>Tables, dense lists.</td>
            </tr>
            <tr>
              <td>
                <strong>S</strong>
              </td>
              <td>32px</td>
              <td>Headers, compact cards.</td>
            </tr>
            <tr>
              <td>
                <strong>M</strong>
              </td>
              <td>40px</td>
              <td>Sidenav bars, user previews, chat threads.</td>
            </tr>
            <tr>
              <td>
                <strong>L</strong>
              </td>
              <td>56px</td>
              <td>Medium cards, profile sections..</td>
            </tr>
            <tr>
              <td>
                <strong>XL</strong>
              </td>
              <td>72px</td>
              <td>Modals, profile headers, featured content.</td>
            </tr>
            <tr>
              <td>
                <strong>2XL</strong>
              </td>
              <td>80px</td>
              <td>Large cards or highlight sections.</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use avatars to support recognition, not decoration:</strong> Place avatars where they help users
          identify people, entities, or actions (such as in chat lists, comments, or team overviews) rather than as
          purely decorative elements.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep visual hierarchy clear:</strong> Use avatar sizes consistently according to layout importance
          (e.g., small in lists, large in profile headers). Avoid mixing different sizes in the same view unless
          contextually justified.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain alignment and spacing:</strong> Ensure consistent padding and alignment between avatars,
          labels, and sublabels to preserve visual rhythm and readability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Show status indicators only when relevant:</strong> Use status lights to communicate meaningful
          information (e.g., online/offline) and avoid visual clutter in contexts where status is not needed.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use color purposefully:</strong> Choose avatar background colors that align with brand or semantic
          meaning, and avoid overusing color variants within a single view.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const AvatarOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/avatar/overview/AvatarOverviewPage.tsx" />
  </DxcFlex>
);

export default AvatarOverviewPage;

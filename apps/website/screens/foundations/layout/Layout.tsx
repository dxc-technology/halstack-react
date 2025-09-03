import { DxcHeading, DxcParagraph, DxcFlex, DxcBulletedList, DxcLink, DxcTable } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Link from "next/link";
import layoutStructure from "./images/layoutStructure.png";
import anatomyColumns from "./images/anatomyColumns.jpg";
import anatomyGutter from "./images/anatomyGutter.jpg";
import anatomyMargin from "./images/anatomyMargin.jpg";
import pageStructure from "./images/pageStructure.jpg";
import Code from "@/common/Code";
import Figure from "@/common/Figure";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Layout designates the position and organization of the elements of an interface. Halstack provides multiple
          components to achieve layout consistency and an easy way to arrange elements in the UI. An effective layout
          design is essential for creating seamless, consistent and robust user experiences across products, where
          information is easy to find and users can carry out the intended actions without getting lost in the process.
        </DxcParagraph>
        <DxcParagraph>
          The{" "}
          <Link href={"/components/application-layout"} passHref legacyBehavior>
            <DxcLink>application layout</DxcLink>
          </Link>{" "}
          is the base that wraps any application built with Halstack. In addition, all of the components listed below
          can be used within each other to create a wide variety of standard layouts:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Link href={"/components/bleed"} passHref legacyBehavior>
              <DxcLink>Bleed</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href={"/components/container"} passHref legacyBehavior>
              <DxcLink>Container</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href={"/components/flex"} passHref legacyBehavior>
              <DxcLink>Flex</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href={"/components/grid"} passHref legacyBehavior>
              <DxcLink>Grid</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href={"/components/inset"} passHref legacyBehavior>
              <DxcLink>Inset</DxcLink>
            </Link>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Grid System",
    content: (
      <DxcParagraph>
        Grids provide the foundation for consistently positioning elements onscreen. The <strong>8x Grid</strong> is the
        geometric foundation of all the visual elements of Halstack Design System components and spacing. It provides
        structure and guidance for all creative decision-making. As mention above, our design system provides its own{" "}
        <Link href={"/components/grid"} passHref legacyBehavior>
          <DxcLink>Grid</DxcLink>
        </Link>{" "}
        component to help users place elements within an interface effectively.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Structure",
        content: (
          <>
            <DxcParagraph>
              It is recommended to design based on a <strong>12-column grid</strong> as the base layout structure. This
              approach allows for a wide range of combinations, from single-column layouts to more complex multi-column
              arrangements.
            </DxcParagraph>
            <DxcParagraph>
              Each column is separated by a <strong>gutter</strong>, and the overall layout is framed by{" "}
              <strong>margins</strong> on both sides to ensure content doesn't touch the edges of the viewport.
            </DxcParagraph>
            <Image src={layoutStructure} alt="12-column grid structure" />
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>Margin</DxcBulletedList.Item>
              <DxcBulletedList.Item>Column</DxcBulletedList.Item>
              <DxcBulletedList.Item>Gutter</DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              When working with columns in Halstack, the number in use can change depending on the screen size, but we
              recommend the grid itself to remain based on 12 columns. For example, a sidebar might take 3 columns on
              desktop and stack above the content on smaller viewports.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Grid anatomy",
        subSections: [
          {
            title: "Columns",
            content: (
              <>
                <DxcParagraph>
                  When working with columns in Halstack, the number in use can change depending on the screen size, but
                  we recommend the grid itself to remain based on 12 columns. For example, a sidebar might take 3
                  columns on desktop and stack above the content on smaller viewports.
                </DxcParagraph>
                <Image src={anatomyColumns} alt="Grid columns anatomy" />
              </>
            ),
          },
          {
            title: "Gutters",
            content: (
              <>
                <DxcParagraph>
                  Gutters are the spaces between columns that keep content visually separated and easy to read. In
                  Halstack, their size is defined using our{" "}
                  <Link href={"/foundations/spacing"} passHref legacyBehavior>
                    <DxcLink>spacing tokens</DxcLink>
                  </Link>
                  , ensuring consistent alignment and rhythm across all layouts. Gutters remain fixed within a given
                  breakpoint but adjust proportionally as the layout changes.
                </DxcParagraph>
                <Image src={anatomyGutter} alt="Grid gutter anatomy" />
              </>
            ),
          },
          {
            title: "Margin", // or Padding?
            content: (
              <>
                <DxcParagraph>
                  Margins are the spaces that separate the grid content from the outer edges of the layout. They help
                  maintain a balanced and readable design, especially on larger screens. Margins remain consistent
                  within a given breakpoint and are typically equal to or wider than the gutters, ensuring visual
                  harmony across the layout.
                </DxcParagraph>
                <Image src={anatomyMargin} alt="Grid margin anatomy" />
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Breakpoints and responsiveness",
    content: (
      <>
        <DxcParagraph>
          Breakpoints are specific viewport widths at which the layout adapts to provide an optimal experience across
          devices. They determine how many columns are displayed, how margins and gutters scale, and how content is
          arranged. Breakpoints are chosen to ensure readability, usability, and consistency, allowing designs to
          fluidly adjust from small to large screens.
        </DxcParagraph>
        <DxcParagraph>When defining responsive behavior, consider:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Content-first approach</strong>: let the content guide breakpoint definition, rather than relying on
            arbitrary device sizes.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Column reflow</strong>: as the viewport changes, columns may shrink, expand, or stack to preserve
            usability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Element scaling</strong>: spacing, typography, and component sizes should adjust in harmony with the
            grid changes.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Consistent rhythm</strong>: maintain visual balance by aligning breakpoints with your design
            system's spacing and typography scales.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid device-specific breakpoints</strong>: instead of targeting exact device models, use ranges
            that work well for multiple screen types.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          In the following table, we recommend the best combination of columns, gutters and margins for each breakpoint.
        </DxcParagraph>
        <DxcTable mode="reduced">
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Viewport (px)</th>
              <th>Columns</th>
              <th>Gutters (px)</th>
              <th>Margins (px)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>xss</Code>
              </td>
              <td>320-479</td>
              <td>2</td>
              <td>12</td>
              <td>16</td>
            </tr>
            <tr>
              <td>
                <Code>xs</Code>
              </td>
              <td>480-767</td>
              <td>6</td>
              <td>12</td>
              <td>16</td>
            </tr>
            <tr>
              <td>
                <Code>s</Code>
              </td>
              <td>768-1023</td>
              <td>6</td>
              <td>12</td>
              <td>16</td>
            </tr>
            <tr>
              <td>
                <Code>m</Code>
              </td>
              <td>1024-1439</td>
              <td>12</td>
              <td>12</td>
              <td>32</td>
            </tr>
            <tr>
              <td>
                <Code>l</Code>
              </td>
              <td>1440-1767</td>
              <td>12</td>
              <td>12</td>
              <td>32</td>
            </tr>
            <tr>
              <td>
                <Code>xl</Code>
              </td>
              <td>1768+</td>
              <td>12</td>
              <td>12</td>
              <td>32</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Page structure and regions",
    content: (
      <>
        <DxcParagraph>
          A well-structured page helps users navigate content efficiently, understand hierarchy, and focus on their
          tasks. In Halstack, we encourage a consistent structure across applications so users can quickly orient
          themselves, regardless of the product they are using.
        </DxcParagraph>
        <DxcParagraph>
          Every application should include <strong>at least a header and a footer</strong>. A <strong>sidenav</strong>{" "}
          is highly encouraged for complex applications with multiple navigation levels, but it is not mandatory.
        </DxcParagraph>
        <Figure caption="Halstack page structure">
          <Image src={pageStructure} alt="Halstack page structure" />
        </Figure>
      </>
    ),
    subSections: [
      {
        title: "Header",
        content: (
          <>
            <DxcParagraph>
              The header provides global context and primary navigation. It remains visible across most screens to help
              users quickly access high-level actions and navigate between key sections.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Expected content:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Product or company logo</DxcBulletedList.Item>
              <DxcBulletedList.Item>Primary navigation links or menus</DxcBulletedList.Item>
              <DxcBulletedList.Item>Global actions (search, notifications, profile dropdown)</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Contextual tools (switcher for apps, quick actions relevant to the entire product)
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Sidenav",
        content: (
          <>
            <DxcParagraph>
              The sidenav offers persistent access to main sections of the application. It supports exploration, quick
              switching between areas, and clear orientation within complex products.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Expected content:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Main navigation links (usually grouped into categories)</DxcBulletedList.Item>
              <DxcBulletedList.Item>Icons alongside labels for faster scanning</DxcBulletedList.Item>
              <DxcBulletedList.Item>Optional collapsible groups for secondary navigation</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Body",
        content: (
          <>
            <DxcParagraph>
              The body is where the main content lives. It adapts depending on the specific page and user task, and it
              is the most flexible region of the layout.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Expected content:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Primary task flows (forms, tables, dashboards, content areas)</DxcBulletedList.Item>
              <DxcBulletedList.Item>Inline navigation for subsections</DxcBulletedList.Item>
              <DxcBulletedList.Item>Supporting components such as breadcrumbs, tabs, or filters</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Footer",
        content: (
          <>
            <DxcParagraph>
              The footer anchors the page with supporting information and secondary navigation. It remains consistent
              across pages and serves as the end point of the scroll experience.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Expected content:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Legal links (privacy policy, terms of service)</DxcBulletedList.Item>
              <DxcBulletedList.Item>Secondary navigation (help center, contact, feedback)</DxcBulletedList.Item>
              <DxcBulletedList.Item>Copyright information</DxcBulletedList.Item>
              <DxcBulletedList.Item>Optional language switcher</DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              Our own{" "}
              <Link href={"/components/application-layout"} passHref legacyBehavior>
                <DxcLink>Application layout</DxcLink>
              </Link>{" "}
              comes with a pre-configured page layout specially tailored to help users place content within their
              applications.
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
          <strong>Use the grid consistently</strong>: align all major elements (headers, content areas, components)
          within the defined columns and gutters to ensure visual harmony and layout predictability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Apply margins over padding for layout spacing</strong>: use margins to space components from each
          other and from page edges. Reserve padding for internal component spacing, ensuring separation and layout
          clarity.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain layout breathing room</strong>: keep a clear buffer between your content and the screen
          edges. Avoid layout without margins, which can feel cramped and reduce readability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Adapt to different screen sizes thoughtfully</strong>: test layouts across breakpoints to ensure
          content reflows naturally. Let your design scale fluidly (columns stack, gutters resize, margins adjust) to
          remain both usable and visually balanced.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Design modular and scalable layouts</strong>: structure your layout into reusable sections (e.g.,
          header, body, sidebar). This enables easy updates, extensions without design breaks, and consistent
          experiences across products.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Minimize custom overrides</strong>: avoid manually overriding grid rules or spacing tokens. Custom
          fixes can disrupt consistency and fragment the design system. If a special layout is needed, propose it for
          inclusion in the core standards.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

export default function LayoutPage() {
  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-xxl)">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcHeading level={1} text="Layout" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/layout/LayoutPage.tsx" />
    </DxcFlex>
  );
}

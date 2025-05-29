import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import anatomy from "./images/footer_anatomy.png";
import variants from "./images/footer_variants.png";
import Image from "@/common/Image";
import Figure from "@/common/Figure";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The footer is used as the final section of a page to display utility elements such as legal disclaimers,
        secondary links, copyright information, or the brand logo. Its purpose is to reinforce brand identity and
        provide consistent access across digital experiences without disrupting the main user flow.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Footer's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> The outer wrapper that defines the overall layout, padding, and alignment of all
            footer content. Ensures consistency across screen sizes.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Logo:</strong> Represents the brand identity visually. Positioned on the left side, it helps
            reinforce company recognition across all pages.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Social icons:</strong> A set of clickable icons linking to the company’s social media platforms
            (e.g., LinkedIn, Facebook). Placed on the right side for easy visibility and access.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Copyright:</strong> Text displaying legal ownership of the content. Ensures users know the site is
            officially owned.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Company links:</strong> A horizontal list of navigational hyperlinks such as Privacy Policy, Terms &
            Conditions, etc. Offers users access to important legal or informational resources.
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
          To maintain consistency in layout flexibility and brand presentation, the footer offers three primary
          variants: <strong>Default</strong>, <strong>With Navigation</strong>, and <strong>Small</strong>.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Default:</strong> provides a balanced layout with branding and essential legal links. It offers a
            clean, uncluttered appearance suitable for most standard applications.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>With Navigation:</strong> includes additional navigational sections, enabling users to quickly
            access key areas of the site. This layout is ideal for content-heavy pages or enterprise-level applications
            requiring enhanced footer functionality.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Small:</strong> offers a compact version of the footer, typically limited to branding and minimal
            legal text. It's best suited for lightweight experiences, login pages, or environments with constrained
            vertical space.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          Choosing between these variants helps tailor the footer to a wide range of contexts, whether prioritizing
          simplicity, providing extended navigation, or optimizing for space efficiency.
        </DxcParagraph>
        <Figure caption="Footer variants">
          <Image src={variants} alt="Application layout design specifications" />
        </Figure>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Dock the footer to the bottom of the page:</strong> the footer should remain fixed at the bottom
            edge of the viewport and not scroll with the page content to maintain visibility and separation from dynamic
            areas.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Ensure full-width alignment:</strong> the footer container should always span the full width of the
            screen to create a clean, structured boundary and support responsive behavior across breakpoints.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Display copyright information on the right:</strong> consistently place legal disclaimers or
            copyright text aligned to the right edge of the footer to support predictable user expectations.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use a simplified or alternate logo:</strong> consider using a smaller or alternative version of the
            brand logo (isotype, imagotype, or monochrome variant) rather than duplicating the main header image to
            reduce visual redundancy.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Limit the number of links:</strong> include only the most essential company links (e.g., Terms,
            Privacy, Accessibility) to avoid overwhelming users with excessive options.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Select the most appropriate variant for context:</strong> choose the footer variant that best fits
            the content density and user goals of the page.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const FooterOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/footer/overview/FooterOverviewPage.tsx" />
  </DxcFlex>
);

export default FooterOverviewPage;

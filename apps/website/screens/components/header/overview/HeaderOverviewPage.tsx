import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import anatomy from "./images/header_anatomy.png";
import responsive from "./images/header_responsive.png";
import responsiveDetails from "./images/header_responsive_details.png";
import variants from "./images/header_variants.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The Header serves as the primary navigation and identity element for an application. It includes branding, quick
        access to key sections via navigation links, and a user account menu. Its consistent presence reinforces brand
        recognition and improves usability by offering easy navigation and access to user-related actions.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Header's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> a layout structure that wraps all Header elements, ensuring consistent
            alignment, spacing, and maximum width limits. The container helps keep the header properly aligned across
            different screen sizes.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Brand Image:</strong> a clear, balanced logo that fits well within the header without overpowering
            other elements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Application Name</strong> <em>(Optional)</em>: a short, recognizable application name placed next to
            the logo to reinforce brand identity.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Navigation Links</strong> <em>(Optional)</em>: key links to main sections of the application.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Header Dropdown</strong> <em>(Optional)</em>: a dropdown menu for user-specific actions such as
            profile, settings, or logout, triggered by click or keyboard focus.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Divider</strong> <em>(Optional)</em>: horizontal line that visually separates the Header from the
            page content below, enhancing layout clarity.
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
          To maintain consistency with the way variants are structured across components, the Header offers two primary
          styles: <strong>default</strong> and <strong>underlined</strong>.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The <strong>default</strong> variant features a clean header without a visual separation from the page
            content, ideal for minimalistic or immersive layouts.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The <strong>underlined</strong> variant includes a subtle bottom divider, creating a clear visual boundary
            between the header and the rest of the page content, enhancing structure and clarity.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Figure caption="Header variants">
          <Image src={variants} alt="Header variants" />
        </Figure>
      </>
    ),
  },
  {
    title: "Responsive version",
    content: (
      <>
        <DxcParagraph>
          Since applications are accessed from a variety of devices, including laptops, tablets, and smartphones, it's
          essential to design a Header that adapts fluidly to different screen sizes. The responsive Header should
          maintain the core structure and visual hierarchy of the desktop version, ensuring a consistent and intuitive
          user experience across all devices.
        </DxcParagraph>
        <Image src={responsive} alt="Header menu responsive version" />
        <DxcParagraph>
          The behavior of the more compact header follows the standard expandable menu button with all header links
          displayed once the icon is clicked.
        </DxcParagraph>
        <Figure caption="Header menu responsive version">
          <Image src={responsiveDetails} alt="Header menu responsive version" />
        </Figure>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Keep the Header minimal and functional:</strong> include only essential elements.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Select the correct variant according to visual needs:</strong> Use the <strong>default</strong>{" "}
          variant for simple pages and underlined variant to visually separate the Header from the content when
          necessary.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use dropdowns correctly for complex navigation:</strong> Only use Header dropdowns when necessary to
          organize multiple links logically without overwhelming the top navigation.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid overcrowding the Header:</strong> Limit the number of top-level navigation links. Group
          secondary links inside dropdowns if needed to maintain a clean and user-friendly interface.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Display the application name clearly and concisely:</strong> The application name should be readable,
          short, and not overpower the brand logo. It reinforces brand identity and provides immediate context to users.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Design the Header to respond gracefully to smaller screens:</strong> When adapting the Header to
          mobile or tablet layouts, restructure the content to preserve both visual clarity and functional hierarchy.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const HeaderOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/header/overview/HeaderOverviewPage.tsx" />
  </DxcFlex>
);

export default HeaderOverviewPage;

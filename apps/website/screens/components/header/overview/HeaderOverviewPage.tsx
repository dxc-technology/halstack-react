import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The Header serves as the primary navigation and identity element for an application. It includes branding, quick
        access to key sections via navigation links, and a customizable side content. Its consistent presence reinforces
        brand recognition and improves usability by offering easy navigation and access to quick actions.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        {/* <Image src={anatomy} alt="Header anatomy" /> */}
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
            <strong>Side Content</strong> <em>(Optional)</em>: a customizable area for user-specific actions such as
            profile, settings, or logout, triggered by click or keyboard focus.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Responsive version",
    content: (
      <>
        <DxcParagraph>
          Applications are accessed on a wide range of devices, including laptops, tablets, and smartphones. To support
          this, the header must be designed to scale responsively across screen sizes. The responsive header should
          preserve the structural layout and visual hierarchy of the desktop version, ensuring consistency and usability
          across all platforms.
        </DxcParagraph>
        <DxcParagraph>
          "On smaller screens, the header content is replaced by a button. Triggering this button opens a menu that
          displays navigation links and a bottom section."
        </DxcParagraph>
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
          <strong>Use navigation links correctly:</strong> Only use navigation groups when necessary to organize
          multiple links logically without overwhelming the top navigation.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid overcrowding the Header:</strong> Limit the number of top-level navigation links. Group
          secondary links inside navigation groups if needed to maintain a clean and user-friendly interface.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Display the application name clearly and concisely:</strong> The application name should be readable,
          short, and not overpower the brand logo. It reinforces brand identity and provides immediate context to users.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Design the Header to respond gracefully to smaller screens:</strong> When adapting the Header to
          mobile or tablet layouts, restructure the side content to preserve both visual clarity and functional
          hierarchy.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const HeaderOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/header/overview/HeaderOverviewPage.tsx" />
  </DxcFlex>
);

export default HeaderOverviewPage;

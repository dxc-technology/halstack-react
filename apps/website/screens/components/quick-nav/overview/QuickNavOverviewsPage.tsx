import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import anatomyImage from "./images/quickNav_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Quick Nav is used to improve in-page navigation by listing content sections and subsections based on the heading
        hierarchy. This helps users understand the page structure at a glance and jump directly to the content they're
        interested in. It's especially useful on documentation pages, dashboards and long-form content.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomyImage} alt="Quick nav anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Divider:</strong> a thin vertical line that visually separates the Quick Nav from the main content
            area. Its purpose is to create a clear boundary between navigation and content, improving readability and
            layout organization.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Title</strong> <em>(Optional)</em>: a short descriptive title such as "Contents" or "On this page"
            that provides context for the navigation list.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Links:</strong> the main navigation items, each representing a primary section on the page. These
            are generated from top-level headings and are clickable.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Sublinks</strong> <em>(Optional)</em>: secondary navigation items, generated from subheadings nested
            under the main sections. These allow finer-grain navigation within a specific topic.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Provide a clear title:</strong> use a meaningful title like "On this page" to help users understand
          the context of the links.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Show structure clearly:</strong> use Quick Nav to mirror the hierarchy of your content, making it
          easier to follow and navigate. Keep headings descriptive and consistent so link labels are meaningful when
          rendered.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid clutter:</strong> avoid rendering Quick Nav on pages with very little content; it can feel
          redundant.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Maintain visual separation from main content:</strong> always allow sufficient spacing between the
          Quick Nav and the main content area. This helps users visually distinguish navigation from content and avoids
          overwhelming the layout. Use padding or margins to ensure the Quick Nav doesn't feel cramped or interfere with
          readability, especially on larger screens or dense layouts.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Pair with other navigational tools:</strong> combine Quick Nav with tabs or breadcrumbs for a
          comprehensive navigation experience across and within pages.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const QuickNavOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/quick-nav/overview/QuickNavOverviewPage.tsx" />
  </DxcFlex>
);

export default QuickNavOverviewPage;

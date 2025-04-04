import { DxcLink, DxcBulletedList, DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import Code from "@/common/Code";
import linkAnatomy from "./images/link-anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Links are essential interactive elements that enable users to navigate between pages, access external resources,
        or explore related content. They can be placed within text, used as standalone elements, or positioned after
        sections to provide additional actions or information. Links enhance usability by clearly indicating their
        purpose and destination, ensuring a seamless and intuitive browsing experience. Proper usage of links helps
        maintain accessibility and improves content discoverability across digital products.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={linkAnatomy} alt="Link's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Icon:</strong> an optional visual element that can be used to represent more graphically the purpose
            of the link. It can be placed before or after the link it’s representing.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> displays the textual content of the link, conveying where exactly it’s going to
            navigate the component.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Use clear and descriptive labels:</strong> link labels should clearly indicate what users can expect
            when they click. Avoid generic labels like "click here".
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Indicate external links appropriately:</strong> If a link directs users to an external site or opens
            a new tab, provide an appropiate icon to set expectations.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid excessive linking:</strong> too many links within a paragraph can overwhelm users and make
            content harder to read. Use links strategically.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Prioritize vertical stacking:</strong> for better readability and usability, stack checkboxes
            vertically, especially when dealing with multiple options. Horizontal stacking should be reserved for short
            lists with clear, non-wrapping labels.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use appropriate link placement:</strong> position links logically within content, either integrated
            into sentences or placed at the end of a section for additional navigation.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Differentiate links from buttons:</strong> links are primarily for navigation, while buttons trigger
            actions like form submissions or modal openings. Use each element correctly.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const LinkOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/link/overview/LinkOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default LinkOverviewPage;

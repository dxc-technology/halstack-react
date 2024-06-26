import { DxcParagraph, DxcFlex, DxcBulletedList } from "@repo/ui";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import contextualMenuElements from "./images/contextual_menu_elements.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        This component allows a wide range of possibilities when it comes to placing content cohesively and
        comprehensively. To achieve this, it's important to understand how the items in our Contextual menu behave and
        interact with each other.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Choose icons based on their relevance to the items they represent, ensuring accurate and clear
              descriptions.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Place the Contextual menu aligned to the left or right, but never in the center of the interface. This
              component is a complement to navigate within the page, but it should never obstruct the main content.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use different navigation levels to structure the elements logically.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use our Badge component as a complement to the menu items to show the status of any navigable section.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              We strongly recommend only selecting by default the first option of the menu. Any other option may become
              unintuitive for the user.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use icons on items that don't belong to the first level of navigation. Keep in mind that icons are limited
              to the first level of navigation, as having icons in the subsequent elements can interfere with the user's
              reading of the content.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use an excessive amount of icons. While they can enhance the visual appeal and usability of a menu,
              overusing them can lead to confusion and clutter.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use more than three levels of navigation, as excessive indentation can be confusing and distracting for
              the user.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Elements of the Contextual menu",
    content: (
      <>
        <DxcParagraph>
          The Contextual menu is composed of different elements that allow the user to navigate through the interface.
          Each of these elements has a different criteria and behaviour, and they are as follows:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Sections:</strong> they have a title and are a collection of group and single items within the menu
            that share a certain relationship.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Group items:</strong> they are nests of other group items or individual items that are related to
            each other and show indentation as they are unfolded.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Single items:</strong> they are items that carry on a specific change to the interface and don't
            contain any type of nesting.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Divider:</strong> its purpose is to separate sections within the Contextual menu. They only appear
            at the end of one section and right before the following one.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Scrollbar:</strong> only present when the scrollable function is available.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Figure caption="Every possible element of the Contextual menu">
          <Image src={contextualMenuElements} alt="Every possible element of the Contextual menu" />
        </Figure>
      </>
    ),
  },
  {
    title: "Contextual menu and Sidenav",
    content: (
      <>
        <DxcParagraph>
          Although visually similar, the Sidenav component and the Contextual menu differ significantly in
          functionality. Our Sidenav is designed to provide a consistent and persistent navigation structure throughout
          the application, allowing users to easily switch between different sections or pages within the app.
        </DxcParagraph>
        <DxcParagraph>
          On the other hand, the Contextual menu is more context-sensitive, and appears in response to specific user
          actions, offering a set of relevant options or actions that can be performed on the current page. This means
          that it operates on a page level, so the component may appear or not depending on the specific needs and
          requirements for each screen or interaction.
        </DxcParagraph>
      </>
    ),
  },
];

const ContextualMenuUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/contextual-menu/usage/ContextualMenuUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ContextualMenuUsagePage;

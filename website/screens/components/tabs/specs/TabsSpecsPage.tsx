import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcLink,
  DxcList,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import specsImage from "./images/tabs_specs.png";
import specsFixed from "./images/tabs_fixed_specs.png";
import specsFixed72 from "./images/tabs_fixed_specs72.png";
import specsScrollable from "./images/tabs_scrollable.png";
import specsNotification from "./images/tabs_notification.png";
import statesTabs from "./images/tabs_states_specs.png";
import specsAnatomy from "./images/tabs_anatomy.png";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Min / Max width",
    content: <Image src={specsImage} alt="image" />,
  },
  {
    title: "Fixed tabs",
    content: (
      <>
        <Figure caption="48px height fixed tabs.">
          <Image src={specsFixed} alt="image" />
        </Figure>
        <Figure caption="72px height fixed tabs.">
          <Image src={specsFixed72} alt="image" />
        </Figure>
      </>
    ),
  },
  {
    title: "Scrollable tabs",
    content: (
      <Figure caption="Use a scroll indicator in scrollable tabs.">
        <Image src={specsScrollable} alt="image" />
      </Figure>
    ),
  },
  {
    title: "Notification tabs",
    content: (
      <Figure caption="Notification badges are always positioned aligned with label/icon in 48px tab container and at top right of the 72px tab container.">
        <Image src={specsNotification} alt="image" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          Tabs can get different states based on user interaction. States:{" "}
          <strong>inactive</strong>, <strong>enabled</strong>,{" "}
          <strong>hover</strong>, <strong>pressed</strong>,{" "}
          <strong>focus</strong> and <strong>disabled</strong>.
        </DxcText>
        <Image src={statesTabs} alt="image" />
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={specsAnatomy} alt="image" />
        <DxcList type="number">
          <DxcText>Container</DxcText>
          <DxcText>Active icon (Optional if there&#39;s a label)</DxcText>
          <DxcText>Active text label (Optional if there&#39;s an icon)</DxcText>
          <DxcText>Active tab indicator</DxcText>
          <DxcText>Inactive icon (Optional if there&#39;s a label)</DxcText>
          <DxcText>
            Inactive text label (Optional if there&#39;s an icon)
          </DxcText>
          <DxcText>Tab item</DxcText>
          <DxcText>Divider</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>selectedBackgroundColor</Code>
                </td>
                <td>Tab item</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedBackgroundColor</Code>
                </td>
                <td>Tab item:enabled</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverBackgroundColor</Code>
                </td>
                <td>Tab item:hover</td>
                <td>
                  <Code>color-purple-100</Code>
                </td>
                <td>#f2eafa</td>
              </tr>
              <tr>
                <td>
                  <Code>pressedBackgroundColor</Code>
                </td>
                <td>Tab item:active</td>
                <td>
                  <Code>color-purple-200</Code>
                </td>
                <td>#e5d5f6</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedFontColor</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedFontColor</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledFontColor</Code>
                </td>
                <td>Label:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedIconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedIconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledIconColor</Code>
                </td>
                <td>Icon:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>focusOutline</Code>
                </td>
                <td>Tab item outline</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedUnderlineColor</Code>
                </td>
                <td>Tab item border botton</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>dividerColor</Code>
                </td>
                <td>Separator</td>
                <td>
                  <Code>color-grey-400</Code>
                </td>
                <td>#bfbfbf</td>
              </tr>
              <tr>
                <td>
                  <Code>badgeBackgroundColor</Code>
                </td>
                <td>Badge container</td>
                <td>
                  <Code>color-red-700</Code>
                </td>
                <td>#d0011b</td>
              </tr>
              <tr>
                <td>
                  <Code>badgeFontColor</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Accessibility",
    content: (
      <>
        <DxcText as="p">
          Each tab must have a unique title that clearly describes tab panel
          content. This is particularly helpful for users of assistive
          technologies so they have the necessary information to efficiently
          navigate the content.
        </DxcText>
        <DxcText as="p">
          Content authors need to ensure the content that is added to the tab
          panel is accessible. For example, if you add an image to the panel you
          need to include alternative text to pass accessibility testing.
        </DxcText>
        <DxcText as="p">
          <DxcLink
            href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel"
            newWindow
          >
            W3C WAI-ARIA Tab Design Pattern
          </DxcLink>{" "}
          covers the usage of ARIA names.
        </DxcText>
      </>
    ),
    subSections: [
      {
        title: "Keyboard interactions",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>key</th>
                <HeaderDescriptionCell>Description</HeaderDescriptionCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>Enter or Space</Code>
                </td>
                <td>
                  Activates the tab if it was not activated automatically on
                  focus.
                </td>
              </tr>
              <tr>
                <td>
                  <Code>Tab</Code>
                </td>
                <td>
                  When focus moves into the tab list, places focus on the active
                  tab element. When the tab list contains the focus, moves focus
                  to the next element in the page tab sequence outside the
                  tablist, which is typically either the first focusable element
                  inside the tab panel or the tab panel itself.
                </td>
              </tr>
              <tr>
                <td>
                  <Code>Left-arrow</Code>
                </td>
                <td>
                  Moves focus to the previous tab. If focus is on the first tab,
                  moves focus to the last tab. Optionally, activates the newly
                  focused tab.
                </td>
              </tr>
              <tr>
                <td>
                  <Code>Right-arrow</Code>
                </td>
                <td>
                  Moves focus to the next tab. If focus is on the last tab
                  element, moves focus to the first tab. Optionally, activates
                  the newly focused tab.
                </td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const TabsSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tabs/specs/TabsSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TabsSpecsPage;

import {
  DxcTable,
  DxcParagraph,
  DxcFlex,
  DxcLink,
  DxcBulletedList,
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
    content: (
      <Figure caption="48px height fixed tabs design specifications">
        <Image
          src={specsImage}
          alt="48px height fixed tabs design specifications"
        />
      </Figure>
    ),
  },
  {
    title: "Fixed tabs",
    content: (
      <>
        <Figure caption="48px height fixed tabs design specifications">
          <Image
            src={specsFixed}
            alt="48px height fixed tabs design specifications"
          />
        </Figure>
        <Figure caption="72px height fixed tabs design specifications">
          <Image
            src={specsFixed72}
            alt="72px height fixed tabs design specifications"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Scrollable tabs",
    content: (
      <>
        <DxcParagraph>
          Tabs are horizontally scrollable when they are wider that screen, by
          using the scroll indicator.
        </DxcParagraph>
        <Figure caption="Scrollable tabs">
          <Image src={specsScrollable} alt="Scrollable tabs" />
        </Figure>
      </>
    ),
  },
  {
    title: "Notification tabs",
    content: (
      <>
        <DxcParagraph>
          Notification badges are always positioned aligned with label or icon
          in 48px tab container and at top right of the 72px tab container.
        </DxcParagraph>
        <Figure caption="Notification tabs">
          <Image src={specsNotification} alt="Notification tabs" />
        </Figure>
      </>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcParagraph>
          Tabs can get different states based on user interaction. These states
          are: <strong>inactive</strong>, <strong>enabled</strong>,{" "}
          <strong>hover</strong>, <strong>pressed</strong>,{" "}
          <strong>focus</strong> and <strong>disabled</strong>.
        </DxcParagraph>
        <Figure caption="Tab states">
          <Image src={statesTabs} alt="Tab states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={specsAnatomy} alt="Tabs anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Active icon (Optional if there&#39;s a label)
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Active text label (Optional if there&#39;s an icon)
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Active tab indicator</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Inactive icon (Optional if there&#39;s a label)
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Inactive text label (Optional if there&#39;s an icon)
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Tab item</DxcBulletedList.Item>
          <DxcBulletedList.Item>Divider</DxcBulletedList.Item>
        </DxcBulletedList>
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
    title: "Typography",
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
              <Code>fontFamily</Code>
            </td>
            <td>Title</td>
            <td>
              <Code>font-family-sans</Code>
            </td>
            <td>&#39;Open Sans&#39;, sans-serif;</td>
          </tr>
          <tr>
            <td>
              <Code>fontSize</Code>
            </td>
            <td>Title</td>
            <td>
              <Code>font-scale-03</Code>
            </td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>
              <Code>fontStyle</Code>
            </td>
            <td>Title</td>
            <td>
              <Code>font-style-normal</Code>
            </td>
            <td>normal</td>
          </tr>
          <tr>
            <td>
              <Code>fontWeight</Code>
            </td>
            <td>Title</td>
            <td>
              <Code>font-weight-semibold</Code>
            </td>
            <td>600</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Accessibility",
    content: (
      <>
        <DxcParagraph>
          Each tab must have a unique title that clearly describes tab panel
          content. This is particularly helpful for users of assistive
          technologies so they have the necessary information to efficiently
          navigate the content.
        </DxcParagraph>
        <DxcParagraph>
          Content authors need to ensure the content that is added to the tab
          panel is accessible. For example, if you add an image to the panel you
          need to include alternative text to pass accessibility testing.
        </DxcParagraph>
        <DxcParagraph>
          <DxcLink
            href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel"
            newWindow
          >
            W3C WAI-ARIA Tab Design Pattern
          </DxcLink>{" "}
          covers the usage of ARIA names.
        </DxcParagraph>
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
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tabs/specs/TabsSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default TabsSpecsPage;

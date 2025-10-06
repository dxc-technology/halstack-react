import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import notification from "./examples/notification";
import contextual from "./examples/contextual";
import anatomy from "./images/badge_anatomy.png";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Being a non-clickable UI element, the badge serves the purpose of highlighting status, categories or key
        information within an interface. Designed for clarity and flexibility, the badge seamlessly integrates with
        different layouts while maintaining consistency. It supports various styles to adapt to diverse use cases
        without overwhelming the interface and it can be found in combination with other components, such as navtabs.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Badge anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> it's the area that holds the badge's content, defining its shape, size and
            background while ensuring proper visibility within the interface.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Semantic categorization:</strong> a visual element that complements the label, providing additional
            meaning or enhancing recognition.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> displays the textual content of the badge, conveying status, category or key
            information.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <DxcParagraph>
        The Badge component has two distinct variants, each serving specific purposes within our interface.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Notification badge",
        content: (
          <>
            <DxcParagraph>
              The notification badge is a non-interactive component that serves as an informative indicator, typically
              used to display counts or alerts, such as the number of unread messages or missed notifications.
            </DxcParagraph>
            <Example example={notification} />
            <DxcParagraph>
              This notification badge allows label, though it is not not mandatory to use it. You may want to use the
              label to display the number of notifications missed, or just the empty badge to show that some changes
              have been made to a certain section of the interface.
            </DxcParagraph>
            <DxcParagraph>
              Only one color is allowed for this badge, which is the semantic error (generally red), and cannot be
              changed by any means.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Contextual badge",
        content: (
          <>
            <DxcParagraph>
              Designed mainly for data visualization interfaces, the contextual variant of the Badge component's main
              advantage lies in its ability to categorize content and represent specific information. It is
              intentionally non-interactive and may contain icons strategically chosen to enhance the conveyed
              information.
            </DxcParagraph>
            <Example example={contextual} />
            <DxcParagraph>
              The contextual badge is available in 8 different colors from the Halstack palette. This flexibility allows
              the user to adapt the tag smoothly to diverse contexts:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Non-semantic categorization:</strong> used in instances where the badge does not carry semantic
                meaning, it can be employed in any color from the available palette.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Semantic categorization:</strong> when the badge conveys semantic information, specific semantic
                colors are available:
                <DxcBulletedList type="circle">
                  <DxcBulletedList.Item>
                    Success: positive actions, such as approved, completed, success...
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>Info: informative actions, such as published, in use...</DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Warning: alert actions, such as pending or paused actions...
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Error: negative actions, such as error, rejection, incomplete...
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Use badges to convey key information:</strong> notification badges are ideal for displaying counts,
            such as unread messages or missed notifications, while contextual badges help indicate task statuses or
            progress.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Leverage color for clarity:</strong> contextual badge colors can improve recognition and enhance the
            user experience, especially in data-heavy interfaces with high cognitive load.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keep labels short and meaningful:</strong> badge labels should be concise, ideally no more than
            three words, to ensure quick comprehension.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use badges to categorize content:</strong> contextual badges can help group-related elements, such
            as team names, repositories, or file types, providing additional context.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Ensure consistent placement:</strong> establish clear guidelines for where badges appear in the
            interface to maintain visual coherence and usability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid overuse:</strong> excessive badges can clutter the interface and reduce their effectiveness in
            communicating key information.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Ensure clarity in data visualization:</strong> avoid mixing semantic and non-semantic contextual
            badges within the same format to prevent confusion.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid obstructing key content:</strong> badges should be placed thoughtfully to ensure they do not
            interfere with essential information or interactions.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use positive or neutral indicators:</strong> notification badges should typically display counts or
            statuses without negative symbols to ensure clarity.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const BadgeOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/badge/overview/BadgeOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default BadgeOverviewPage;

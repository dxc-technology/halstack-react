import {
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import notificationVariants from "./images/badge_notification_variants.jpg";
import contextualVariants from "./images/badge_contextual_variants.jpg";

const sections = [
  {
    title: "Usage",
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use a notification badge to display counts, such as the number of
              unread messages or missed notifications.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Showcase the completion or status of tasks by using the contextual
              badge. Its different colors can help the user to identify quickly
              the status of a task and can improve significantly the overall
              user experience in data visualization screens with high cognitive
              load.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Categorize pieces of information using the contextual label and
              its colors. It can provide additional context or information. For
              example, a badge can indicate the type or category of content
              (e.g., names of the teams involved in the task, repositories,
              folders…).
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Keep it concise: comprehensively use badges, only displaying
              essential information that adds value to the user experience.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              The label of the badge component should never contain more than
              three words. Keeping it simple is the key to ensuring users
              understand the categorization quickly.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Establish clear design guidelines within the interface for badges,
              specially when deciding its placement. Consistent use of badges
              enhances visual coherence and aids user comprehension.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use both semantic and non-semantic contextual badges in the same
              data visualization format.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Overuse badges, as an excessive use can saturate the interface and
              fail to communicate important information.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Place badges in locations that may obstruct essential content or
              user interactions.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use excessively long sentences in labels. Remember to keep it
              simple, with a maximum of 3 words.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Place the negative symbol (-) in badges, whether they are
              notification or contextual. Notification badges should typically
              indicate counts or statuses that are positive or neutral to insure
              clarity and comprehension.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <DxcParagraph>
        The Badge component consists has two distinct variants, each serving
        specific purposes within our interface.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Notification badge",
        content: (
          <>
            <DxcParagraph>
              The notification badge is a non-interactive component that serves
              as an informative indicator, typically used to display counts or
              alerts, such as the number of unread messages or missed
              notifications.
            </DxcParagraph>
            <Figure caption="Notification badge variants">
              <Image
                src={notificationVariants}
                alt="Notification badge variants"
              />
            </Figure>
            <DxcParagraph>
              This notification badge allows label, though it is not not
              mandatory to use it. You may want to use the label to display the
              number of notifications missed, or just the empty badge to show
              that some changes have been made to a certain section of the
              interface.
            </DxcParagraph>
            <DxcParagraph>
              Only one color is allowed for this badge, which is red, and cannot
              be changed by all means.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Contextual badge",
        content: (
          <>
            <DxcParagraph>
              Designed mainly for data visualization interfaces, the contextual
              variant of the Badge component’s main advantage lies in its
              ability to categorize content and represent specific information.
              It is intentionally non-interactive and may contain icons
              strategically chosen to enhance the conveyed information.
            </DxcParagraph>
            <Figure caption="Contextual badge variants">
              <Image src={contextualVariants} alt="Contextual badge variants" />
            </Figure>
            <DxcParagraph>
              The contextual badge is available in 8 different colors from the
              Halstack palette. This flexibility allows the user to adapt the
              tag smoothly to diverse contexts:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Non-semantic categorization: used in instances where the badge
                does not carry semantic meaning, it can be employed in any color
                from the available palette.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Semantic categorization: when the badge conveys semantic
                information, spacific semantic colors are available:
                <DxcBulletedList type="circle">
                  <DxcBulletedList.Item>
                    Green: positive actions, such as approved, completed,
                    success…
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Blue: informative actions, such as published, in use...
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Red: negative actions, such as error, rejection,
                    incomplete...
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Orange: alert actions, such as pending or paused actions...
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const BadgeUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/badge/usage/BadgeUsagePage.tsx" />
    </DxcFlex>
  );
};

export default BadgeUsagePage;

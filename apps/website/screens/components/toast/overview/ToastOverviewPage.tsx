import { DxcBulletedList, DxcFlex, DxcParagraph, DxcTable, DxcTypography } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import semanticToasts from "./images/semantic_toasts.png";
import loadingToast from "./images/loading_toast.png";
import toastsPositioning from "./images/toasts_positioning.png";
import anatomy from "./images/toast_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The toast component provides <strong>brief, non-intrusive notifications</strong> to users, appearing{" "}
        <strong>temporarily</strong> on the screen without disrupting their workflow. Typically used for system
        messages, confirmations, or alerts, toasts help communicate important feedback in response to user actions. They
        automatically disappear after a set duration but can also include manual dismissal options. By maintaining
        visibility without demanding immediate interaction, toasts enhance user experience while keeping the interface
        clean and efficient.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Toast's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the structural wrapper that holds all elements of the toast, defining its size,
            background, and layout while ensuring proper visibility within the interface.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> an optional icon indicating the type of message (e.g., success, error, warning,
            info).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Text message:</strong> a short text message providing the main content of the toast.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Action:</strong> an optional button with quick and straightforward action like "Undo" or "View"
            depending on the context.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Close action:</strong> to allow manual dismissal of the toast.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using toasts",
    subSections: [
      {
        title: "Loading status toast",
        content: (
          <>
            <DxcParagraph>
              A loading toast provides users with <strong>real-time feedback during an ongoing process</strong>. Instead
              of a static icon, a spinner is displayed to visually indicate that the process is still in progress. This
              toast remains visible until the process is complete, ensuring users are aware that the system is working.
              Once the task is finished, the loading toast will automatically disappear, and a follow-up toast will
              appear in the queue to confirm the outcome of the process.
            </DxcParagraph>
            <Figure caption="Common loading process represented with toasts">
              <Image src={loadingToast} alt="Common loading process represented with toasts" />
            </Figure>
          </>
        ),
      },

      {
        title: "Position and order on screen",
        content: (
          <>
            <DxcParagraph>
              Toasts should be positioned in a way that ensures they are easily noticeable without obstructing the main
              content or interrupting the user's workflow.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Bottom-Right:</strong> Toasts are aligned to the bottom-right corner of the screen.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Bottom-Center:</strong> On small devices, toasts are positioned in the bottom-center of the
                screen.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              This position allows users to receive notifications without interfering with primary tasks or content.
            </DxcParagraph>
            <Image src={toastsPositioning} alt="Positioning of some example toasts on the screen" />
            <DxcParagraph>
              Toasts should appear and disappear in a specific order to ensure clarity and consistency in user
              notifications:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Order of appearance:</strong> Toasts appear in the order they are triggered. This means the
                newest toast will appear at the bottom of the stack. This ensures users see the most recent notification
                last, making it easier to track the sequence of events.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Order of disappearance:</strong> Toasts disappear in the same order they appeared. This means
                the oldest toast will disappear first, maintaining a First In, First Out (FIFO) system. This order helps
                maintain a logical flow and ensures users have enough time to read each notification.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Managing multiple toasts",
        content: (
          <>
            <DxcParagraph>
              When multiple toasts appear on the screen simultaneously, it's important to manage their display to ensure
              they don't overlap and that each one remains visible and readable.
            </DxcParagraph>
            <DxcParagraph>Key practices to ensure they remain effective and user-friendly:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Stacking:</strong> Toasts are displayed in a vertical stack. New toasts are added to the stack
                in a consistent location (at the bottom).
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Offset spacing:</strong> Small gap between toasts to visually separate them (8px)
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Limit:</strong> Only 5 toast max. should be displayed at the same time.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Sequential display:</strong> Display toasts one after another rather than all at once.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Timing:</strong> Set a uniform duration for each toast to stay visible (3-5 seconds).
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Semantic toasts",
    content: (
      <>
        <DxcParagraph>Toasts can be categorized based on their purpose:</DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Semantic</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DxcTypography color="var(--color-fg-primary-strong)" fontWeight="600">
                  Default
                </DxcTypography>
              </td>
              <td>Used for neutral messages or general notifications. (i.e.. Settings have been updated.)</td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="var(--color-fg-secondary-medium)" fontWeight="600">
                  Info
                </DxcTypography>
              </td>
              <td>
                Displays general information or updates. (i.e. New message received. Check inbox. - New update
                available. Download now.)
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="var(--color-fg-success-medium)" fontWeight="600">
                  Success
                </DxcTypography>
              </td>
              <td>
                Indicates successful completion of an action. (i.e. Operation successful. Changes saved. - Profile
                updated successfully.)
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="var(--color-fg-warning-medium)" fontWeight="600">
                  Warning
                </DxcTypography>
              </td>
              <td>
                Provides cautionary advice without blocking actions. (i.e. Unstable connection. Proceed with caution.)
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <Image src={semanticToasts} alt="Semantic toasts based on their purpose" />
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Keep messages concise and clear:</strong> ensure toasts are easy to read at a glance by using short,
          direct language that conveys the message effectively.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid obstructing main content:</strong> position toasts in the bottom-right corner of the screen to
          keep them visible without interfering with the user's workflow.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Prevent notification overload:</strong> display no more than five toasts at a time to maintain clarity
          and avoid overwhelming users with excessive messages. If additional notifications are needed, consider
          queueing them.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure consistency:</strong> use a uniform visual style, placement, and behavior for all toasts across
          the application to create a seamless user experience.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Prioritize urgency and relevance:</strong> reserve toasts for important, time-sensitive information
          and avoid using them for non-critical updates that could be delivered through other means.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Allow for manual dismissal when necessary:</strong> while toasts should disappear automatically after
          a set duration, providing a close button can improve accessibility and user control.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TextareaOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/toast/overview/TextareaOverviewPage.tsx" />
  </DxcFlex>
);

export default TextareaOverviewPage;

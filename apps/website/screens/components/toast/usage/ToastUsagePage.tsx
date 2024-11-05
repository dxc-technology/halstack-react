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

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>Keep messages concise and clear to ensure quick readability.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Position toasts in the bottom-right to avoid obstructing main content.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Display no more than 5 toasts simultaneously to avoid overwhelming users.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Maintain a consistent visual style and placement for all toasts across the application.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
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
                <DxcTypography color="#5f249f" fontWeight="600">
                  Default
                </DxcTypography>
              </td>
              <td>Used for neutral messages or general notifications. (ie. Settings have been updated.)</td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="#0086e6" fontWeight="600">
                  Info
                </DxcTypography>
              </td>
              <td>
                Displays general information or updates. (ie. New message received. Check inbox. - New update available.
                Download now.)
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="#c26c0a" fontWeight="600">
                  Warning
                </DxcTypography>
              </td>
              <td>
                Indicates successful completion of an action. (ie. Operation successful. Changes saved. - Profile
                updated successfully.)
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="#24a148" fontWeight="600">
                  Success
                </DxcTypography>
              </td>
              <td>
                Provides cautionary advice without blocking actions. (ie. Unstable connection. Proceed with caution.)
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <Image src={semanticToasts} alt="Semantic toasts based on their purpose" />
      </>
    ),
  },
  {
    title: "Loading status toast",
    content: (
      <>
        <DxcParagraph>
          A loading toast provides users with real-time feedback during an ongoing process. Instead of a static icon, a
          spinner is displayed to visually indicate that the process is still in progress. This toast remains visible
          until the process is complete, ensuring users are aware that the system is working. Once the task is finished,
          the loading toast will automatically disappear, and a follow-up toast will appear in the queue to confirm the
          outcome of the process.
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
            <strong>Bottom-Center:</strong> On small devices, toasts are positioned in the bottom-center of the screen.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          This positions allows users to receive notifications without them interfering with primary tasks or content.
        </DxcParagraph>
        <Image src={toastsPositioning} alt="Positioning of some example toasts on the screen" />
        <DxcParagraph>
          Toasts should appear and disappear in a specific order to ensure clarity and consistency in user
          notifications:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Order of appearance:</strong> Toasts appear in the order they are triggered. This means the newest
            toast will appear at the bottom of the stack. This ensures users see the most recent notification last,
            making it easier to track the sequence of events.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Order of disappearance:</strong> Toasts disappear in the same order they appeared. This means the
            oldest toast will disappear first, maintaining a First In, First Out (FIFO) system. This order helps
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
            <strong>Stacking:</strong> Toasts are displayed in a vertical stack. New toasts are added to the stack in a
            consistent location (at the bottom).
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
];

const TextareaUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/toast/usage/ToastUsagePage.tsx" />
    </DxcFlex>
  );
};

export default TextareaUsagePage;

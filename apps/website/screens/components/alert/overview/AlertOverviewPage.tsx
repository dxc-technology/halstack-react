import {
  DxcParagraph,
  DxcBulletedList,
  DxcFlex,
  DxcTable,
  DxcTypography,
  DxcLink,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import Image from "@/common/Image";
import anatomy from "./images/alert_anatomy.png";
import banner from "./examples/banner";
import dialog from "./examples/dialog";
import inline from "./examples/inline";
import Link from "next/link";
import Code from "@/common/Code";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Halstack's Alert component is designed to provide clear and accessible feedback to users, ensuring important
          messages stand out within an interface. It supports different variants—info, success, warning, and
          error—allowing teams to communicate various levels of urgency effectively. With options for dismissibility and
          customizable content, it adapts to different use cases while maintaining consistency. Its structured design
          enhances readability and ensures a non-intrusive yet noticeable presence.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Alert's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the structural wrapper that holds all elements of the alert, defining its size,
            background, and layout while ensuring proper visibility within the interface.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> a visual indicator that reinforces the alert's purpose (e.g., info, success, warning,
            error) and helps users quickly identify the type of message
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Title:</strong> a short, bolded text that provides a concise summary of the alert's content, making
            it easy for users to grasp its importance at a glance.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Description:</strong> the detailed text within the alert that provides context or additional
            information about the message, ensuring clarity for the user.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Divider:</strong> a subtle separator that visually organizes the alert's content, enhancing
            readability and distinguishing the pagination element from the closable action.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Pagination:</strong> a navigation element that allows users to browse multiple alerts within the
            same container, useful for managing sequential or grouped notifications.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Actions:</strong> interactive buttons placed within the alert that enable users to take relevant
            actions in response to the message, such as dismissing, acknowledging, or navigating to further details.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Key interactions and features",
    content: (
      <>
        <DxcParagraph>The key characteristics of our alert component are the following:</DxcParagraph>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Visibility:</strong> alerts should be positioned in a place where it can attract the user's eye
            without too much effort, as it will convey critical messages about the system or important features.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Concise:</strong> alert messages should use clear and straight-to-the-point language that conveys
            the message without unnecessary information, avoiding ambiguity or irrelevant details that could distract or
            confuse the user.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Relevance:</strong> the content displayed on the alert must be directly relevant to the users task
            or system state.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong> Actionability:</strong> the component provides clear and straightforward actions for the user to
            take in response to it, such as retrying, seeing details or dismissing the alert.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong> Persistence:</strong> alerts should remain visible long enough for users to read and understand
            them, but not so long as to become an annoyance. Allow users to dismiss alerts once they have acknowledged
            them.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong> Sequential display:</strong> only one alert must be visible at a time. If multiple alerts are
            triggered, subsequent alerts wait until the current alert is dismissed before appearing. This behavior
            prevents alert stacking and ensures users address each alert individually.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Semantic modes",
    content: (
      <>
        <DxcParagraph>
          Depending on the message that the alert is showcasing, we can find four different semantic meanings of the
          component:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Type</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DxcTypography color="#267fbf" fontWeight="600">
                  Information
                </DxcTypography>
              </td>
              <td>
                Informational messages are used exclusively to assist the user with directional or explanatory text
                about a complex or seldom used process.
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="#d58a35" fontWeight="600">
                  Warning
                </DxcTypography>
              </td>
              <td>
                Alert or warning messages should be displayed when there is a potential obstacle in completing a process
                as intended.
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="#e33248" fontWeight="600">
                  Error
                </DxcTypography>
              </td>
              <td>
                Error messages convey a critical system problem that requires user and/or technical intervention to
                correct.
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="#39884f" fontWeight="600">
                  Success
                </DxcTypography>
              </td>
              <td>
                Success messages should be used to assure user that a system calculation or data submission was
                completed correctly.
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          Alerts can appear in various scenarios within a product, making it crucial to select the most appropriate
          variant for effectively conveying the message. Halstack offers three variants of its Alert component, each
          specifically designed and tailored to address common use cases.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Alert banner",
        content: (
          <>
            <DxcParagraph>
              Displayed always bellow the header of the site, the Alert banner is used for critical system or
              application messages. These alerts are actionable, meaning the user can interact with the message to
              resolve the issue directly from the alert itself. However, closing the message is not considered an action
              and is mandatory, as the message remains visible and cannot be dismissed until addressed. Additionally, if
              there are multiple critical system messages, the Alert banner allows pagination between them, ensuring
              that users can manage and resolve all critical issues systematically.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Use cases:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>System disruption notification:</strong> informing users about a critical system disruption that
                requires immediate attention, with an option to view more details or contact support.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Security breach alert:</strong> warning users of a potential security breach, with actions to
                change passwords or review account activity.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Critical update required:</strong> notifying users that a crucial software update is available
                and needs to be installed to continue using the application safely.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Payment failure notification:</strong> informing users that a recent payment has failed and
                providing options to retry the payment or update billing information.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Example example={banner} />
          </>
        ),
      },
      {
        title: "Alert dialog",
        content: (
          <>
            <DxcParagraph>
              The Alert dialog displays important information that demands immediate user attention. It is presented
              with an overlay that blocks the rest of the interface, ensuring that the user addresses the alert before
              proceeding. Similar to other variants, the Dialog Alert allows up to two actions, excluding the mandatory
              close action. This variant ensures that critical information is not overlooked by requiring the user to
              interact with the dialog to continue using the application.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Use cases:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Data loss warning:</strong> informing users that unsaved changes will be lost if they proceed
                with an action, with options to save changes or discard them.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Permission request:</strong> requesting user permission for access to sensitive data or devide
                features, with actions to grant or deny permission.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Policy renewal reminder:</strong> notifying users that a client's insurance policy is about to
                expire, with options to renew the policy or contact support for assistance.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Important policy update:</strong> alerting users to important changes in the terms of service or
                privacy policy, requiring them to acknowledge the update before continuing.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Example example={dialog} />
          </>
        ),
      },
      {
        title: "Inline alert",
        content: (
          <>
            <DxcParagraph>
              The Inline alert is displayed in a non-modal manner and is typically used within other components (such as
              within a card, table, or container). These alerts Alert provide contextual feedback related to the
              component they are embedded in, informing the user about the status of an action. Like other alert
              variants, Inline alerts can include up to two actions, and the close action is optional. They also support
              pagination for scenarios where multiple related alerts need to be managed.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Use cases:</strong>
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Failed API:</strong> displaying an error message within a table indicating that there was an
                error fetching data from the API.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Pending documents to be uploaded:</strong> informing the user that some documents are pending to
                be uploaded, with action to cancel the upload.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Unsaved policy changes:</strong> warning users that the changes applied to a certain policy will
                be lost if they proceed to the next page, with actions to save changes or continue.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Document upload reminder:</strong> alerting users within a policy details page that required
                documents are missing, with actions to upload the documents or get assistance.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Example example={inline} />
          </>
        ),
      },
    ],
  },
  {
    title: "Responsive behavior",
    content: (
      <>
        <DxcParagraph>
          All types of alerts (banner, dialog, inline) follow the spacing margins of the application.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Be sure to consider content length when designing for smaller screen sizes.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Alerts grow vertically to display the full content.</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Know the type of screen sizes you will be designing for and consider messaging length for these as well (ex.
            be concise when designing for mobile in consideration of limited screen space).
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "Be clear and concise",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Make sure that alert messages are brief and direct. Avoid overloading alert messages with unnecessary
              information for the user, as they should be able to understand the message quickly and directly.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use clear language that is easy for all users to understand. Avoid technical terms unless necessary.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Prioritize alerts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Alerts cannot be displayed in a stacked manner. Make sure to prioritize alerts that compete at the same
              level so the user will assess the most important one first
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Only use alerts for critical messages that requires immediate attention from the user. Overusing the
              component can desensitize users to their importance and increase the cognitive load.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Actionable feedback",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Whenever possible, include actions that users can take to address the alert. This help them resolve issues
              directly from the alert.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Among the actions within an alert, try to give alternatives to solve the problem.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Visit our{" "}
              <Link href="/components/button/overview/#best-practices-for-button-labels" passHref legacyBehavior>
                <DxcLink>Best practices for button labels</DxcLink>
              </Link>{" "}
              section from our Button component to tailor the best label for each button to make labels consistent and
              concise.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Semantic modes",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Select the appropriate alert type (success, error, warning, information) based on the nature and urgency
              of the message. This will help users quickly understand the context and importance of the alert.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Only text in the message",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              The only Halstack component allowed within the text of an alert is the <Code>Link</Code> component, and it
              should be used exclusively to direct users to additional resources or relevant pages.{" "}
              <strong>No other components are permitted within the content of an alert.</strong>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Variant-specific best practices",
        subSections: [
          {
            title: "Alert banner",
            content: (
              <DxcBulletedList>
                <DxcBulletedList.Item>
                  <strong>Position and visibility:</strong> alert banners must always be placed on top of the interface,
                  right below the header of the application. This is particularly important for system-wide alerts that
                  impact the user's ability to interact with the application.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  <strong>Navigation:</strong> if multiple critical alerts exist, enable the option to paginate them so
                  they can assess each message one by one, in priority order.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  <strong>Persistence:</strong> keep the Alert banner visible until the issue is resolved. Users should
                  not be able to dismiss it without taking action. This ensures that critical issues are addressed and
                  not overlooked. The persistent nature of the banner reinforces the importance of the alert.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  <strong>Clarity:</strong> use the description of the alert to briefly explain the issue, but avoid
                  overloading the user with unnecessary descriptions. If further details are needed to fully understand
                  or assess the alert, provide a button to see the details on a separate screen.
                </DxcBulletedList.Item>
              </DxcBulletedList>
            ),
          },
          {
            title: "Alert dialog",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Immediate action:</strong> use Alert dialog for issues that need the user's immediate
                    attention and action. Ensure they cannot proceed without addressing the alert. This prevents users
                    from ignoring critical messages and helps in timely resolution of issues.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Clear actions:</strong> if actions are needed (besides the close action), ensure these
                    actions are accurate to resolve the issue, such as "Save changes" or "View details". Actions should
                    be easy to understand and immediately executable, guiding the user through the necessary steps to
                    resolve the alert.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Accurate focus:</strong> each dialog alert must focus on a single important message to avoid
                    overwhelming the user. Avoid combining multiple issues in one alert, as it can cause confusion and
                    reduce the effectiveness of the alert.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Inline alert",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Placement:</strong> place Inline alerts near the relevant content or component to provide
                    immediate and contextual feedback. This helps users associate the alert with the specific action or
                    data that it relates to, making it more intuitive to understand and act upon.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Non-intrusive:</strong> ensure Inline alerts do not disrupt the user's workflow but are
                    noticeable enough to provide the necessary feedback.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Dismissive alerts:</strong> allow users to close the Inline alert if it is not critical to
                    keep it visible at all times. This gives users control over their interface and prevents frustration
                    from persistent alerts.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Multiple alerts handling:</strong> if multiple Inline Alerts are necessary, allow users to
                    navigate through them. This can be achieved through the navigation option built within the
                    component.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
        ],
      },
    ],
  },
];

const AlertOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/alert/overview/AlertOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default AlertOverviewPage;

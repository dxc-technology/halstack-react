import { DxcParagraph, DxcBulletedList, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import determinateIndeterminate from "./examples/determinateIndeterminate";
import small from "./examples/small";
import anatomy from "./images/spinner_anatomy.png";
import overlay from "./images/spinner_overlay.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The spinner component is a visual indicator that communicates to users that a process is in progress. It is
        commonly used for loading states, where content or data retrieval takes time, indicating that an action is being
        executed. Spinners help maintain a smooth user experience by reducing uncertainty and providing feedback while
        waiting. They can be adapted in size and color to fit different contexts, making them a versatile choice for
        various loading scenarios.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Spinner anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label:</strong> provides a textual description of the loading process, enhancing accessibility and
            helping users understand what is being loaded.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Total circle:</strong> represents the full circumference of the spinner, serving as the stating
            background that defines the complete loading cycle.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Track circle:</strong> the dynamic element that visually indicates progress by filling up according
            to the percentage of completion.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Percentage</strong> <em>(Optional)</em>: displays a numerical value, typically in the center of the
            spinner, showing the exact progress of the loading process.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <DxcParagraph>
        Depending on the size or position, there are three different variants for the spinner component:{" "}
        <strong>default</strong>default, <strong>small</strong> and <strong>overlay</strong>.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Default",
        content: (
          <DxcParagraph>
            The default variant of the spinner is the <strong>standard option</strong>, offering a clear visual
            indication that a process is in progress. It is designed to be noticeable, making it ideal for situations
            where users must wait for content or system responses. As well as the overlay variant, the default version
            of our spinner can be <strong>determinate</strong> (it shows the percentage related to the progress of the
            process) or <strong>indeterminate</strong>.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Use cases",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Page loading:</strong> indicating that a new page or section of an application is being
                    loaded.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Data fetching:</strong> warning users of a potential security breach, with actions to change
                    passwords or review account activity.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Form submission processing:</strong> letting users know that their input is being processed.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <Example example={determinateIndeterminate} />
              </>
            ),
          },
        ],
      },
      {
        title: "Overlay",
        content: (
          <DxcParagraph>
            The overlay variant of the spinner is designed for scenarios where the entire interface is temporarily
            blocked while a process is running. It appears centered on the screen with a semi-transparent background,{" "}
            <strong>preventing user interactions until the task is completed</strong>. This variant ensures users are
            aware that the system is actively processing their requests and helps prevent unintended actions during
            critical operations.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Use cases",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>System-wide loading states:</strong> when an entire page or app is waiting for a response.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Blocking UI interactions:</strong> preventing user input while a critical process is being
                    executed.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Authentication processing:</strong> indicating login or security verification in progress.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Payment processing:</strong> ensuring transactions are completed before allowing further
                    actions.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <Image alt="Spinner overlay variants" src={overlay} />
              </>
            ),
          },
        ],
      },
      {
        title: "Small",
        content: (
          <DxcParagraph>
            The <strong>small variant</strong> of the spinner is a compact loading indicator designed for inline or
            localized loading states. It is ideal for{" "}
            <strong>non-blocking scenarios where users can continue interacting with other elements</strong> while
            waiting for specific content or data to load. This variant seamlessly integrates within UI components
            without overwhelming the interface.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Use cases",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Button loading states:</strong> indicating an action is in progress, such as form
                    submission.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Table or list updates:</strong> showing loading status when fetching additional rows or
                    filtering data.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Inline form validation:</strong> providing feedback when checking input validity.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <Example example={small} />
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Use spinners for real-time feedback:</strong> implement the spinner only when there is a delay in
            content loading or an ongoing process that requires user awareness. Avoid unnecessary use that may lead to
            confusion.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Choose the right variant:</strong>
            <DxcInset vertical="var(--spacing-padding-xs)">
              <DxcBulletedList type="circle">
                <DxcBulletedList.Item>
                  The <strong>default (large) spinner</strong> is ideal for full-page or major loading states that
                  require user attention.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  The <strong>overlay spinner</strong> works well for modal or section-based loading, preventing
                  interaction with specific content while keeping the rest of the UI accessible.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  The <strong>small spinner</strong> is best for inline feedback, such as button actions, table updates,
                  or background data processing.
                </DxcBulletedList.Item>
              </DxcBulletedList>
            </DxcInset>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Prevent indefinite loading states:</strong> always ensure the spinner disappears once the process is
            complete. If an operation takes too long, consider displaying a message or progress indicator with more
            details.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid blocking critical interactions:</strong> if possible, allow users to navigate or interact with
            other elements while waiting. Overlay spinners should be used cautiously to prevent unnecessary disruption.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Combine with descriptive labels when necessary:</strong> if the loading state might be unclear,
            include a short label (e.g., "Loading data..." or "Processing request...") to provide context.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Optimize performance:</strong> if an operation takes longer than expected, consider showing an
            estimated time or an alternative UI state to maintain user engagement.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const SpinnerOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/spinner/overview/SpinnerOverviewPage.tsx" />
  </DxcFlex>
);

export default SpinnerOverviewPage;

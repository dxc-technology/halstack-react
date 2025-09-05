import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import Example from "@/common/example/Example";
import default_overlay from "./images/default_overlay.png";
import anatomy from "./images/progress_bar_anatomy.png";
import determinate_undeterminate from "./examples/determinate_undeterminate";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Progress bars are used to show the progression of a task over time. They provide users with immediate visual
        feedback about the current state of an operation, such as loading content, uploading a file, or completing a
        form.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Progress bar anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional)</em>: text element that describes the purpose or context of the
            progress bar (e.g., "Uploading file...").
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: provides additional information or clarification related
            to the progress, such as status messages or expected duration.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Progress track line:</strong> the filled portion of the bar showing completed progress.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Progress total line:</strong> the background bar representing the total task to be completed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Progress indicator</strong> <em>(Optional)</em>: highlights the current progress value within the
            bar.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>Progress bars come in different styles based on task nature and UI context.</DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Default or overlay",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Default:</strong> displays the progress bar inline, directly within the page or component
                layout. This is the most commonly used style, suitable for non-blocking tasks that allow the user to
                continue interacting with the UI.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Overlay:</strong> displays the progress with a background overlay, temporarily blocking
                interaction with the UI. It's used for tasks that require user attention or when interaction must be
                paused until the task is complete.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Image src={default_overlay} alt="Default mode and overlay mode example" />
          </>
        ),
      },
      {
        title: "Determinate or indeterminate",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Determinate:</strong> are used when the system can calculate the percentage of work completed.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Indeterminate:</strong> are used when the duration of the task is unknown or unpredictable.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <Example example={determinate_undeterminate} />
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
            <strong>Provide clear feedback:</strong> always display a progress bar when the task takes longer than a few
            seconds. This reassures users that the system is processing and gives them a sense of control. If possible,
            include a label or percentage to indicate how much of the task is completed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid overuse:</strong> don't show a progress bar for tasks shorter than 1 second — use a spinner or
            no feedback instead. Don't use a progress bar just for decoration; it should always reflect a real process.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Provide contextual information:</strong> whenever possible, provide additional information like
            "Starting," "Halfway," or "Almost Done" to help users gauge the task status. If applicable, show what the
            task involves, especially when the user is waiting for something critical (e.g., "Updating to the latest
            version...").
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use the right variant:</strong> use determinate when the completion percentage is known (e.g., file
            uploads, task completion). Use indeterminate when the system can't predict the time or progress (e.g.,
            loading content, waiting for server responses).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid blocking the UI:</strong> when progress is happening in the background, place the progress bar
            in a non-intrusive area, like near the top of the page or inside a specific section. Use overlay variant
            only when necessary, as it blocks user interaction. Make sure to include a clear indication of what the user
            is waiting for and an estimated time if possible.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Combine with other feedback:</strong> pair with success, warning, or info toasts or alerts when
            appropriate to give users closure after completion.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const ProgressBarOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/progress-bar/overview/ProgressBarOverviewPage.tsx" />
  </DxcFlex>
);

export default ProgressBarOverviewPage;

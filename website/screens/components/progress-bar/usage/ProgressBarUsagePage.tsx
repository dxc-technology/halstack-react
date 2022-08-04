import {
  DxcParagraph,
  DxcBulletedList,
  DxcStack,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import Example from "@/common/example/Example";
import determinate_indeterminate from "./examples/determinate_undeterminate";
import variants from "./images/progress_variants.png";

const sections = [
  {
    title: "Usage",
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use a progress bar when it needs to give feedback in a
              long-running process with continuous values.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Add additional information to clarify the user about the action it
              is waiting (&quot;Sending documents...&quot;).
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use the determinate type whenever possible, the user can have an
              estimation on how long it is going take.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              For an unknown amount of time/progress, consider using a loading
              spinner instead.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Do not use this type of component in actions that will take less
              than 1 minute of processing.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          The component progress-bar has two variants: <strong>default</strong>{" "}
          and <strong>overlay</strong>.
        </DxcParagraph>
        <Figure caption="Progress bar variants">
          <Image src={variants} alt="Progress bar variants" />
        </Figure>
      </>
    ),
  },
  {
    title: "Determinate or indeterminate",
    content: (
      <>
        <Example example={determinate_indeterminate} />
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Determinate indicators display how long a process will take. They
            should be used in longer processes.
          </DxcBulletedList.Item>
          <DxcStack gutter="xsmall">
            <DxcBulletedList.Item>
              Indeterminate indicators express an unspecified amount of wait
              time. They should be used when:
            </DxcBulletedList.Item>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                The processing time is unknown.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                The wait time is expected to be short enough that it’s not
                necessary to display.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcStack>
        </DxcBulletedList>
      </>
    ),
  },
];

const ProgressBarUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/progress-bar/usage/ProgressBarUsagePage.tsx" />
    </DxcStack>
  );
};

export default ProgressBarUsagePage;

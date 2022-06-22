import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
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
          <DxcList>
            <DxcText>
              Use a progress bar when it needs to give feedback in a
              long-running process with continuous values.
            </DxcText>
            <DxcText>
              Add additional information to clarify the user about the action it
              is waiting (&quot;Sending documents...&quot;).
            </DxcText>
            <DxcText>
              Use the determinate type whenever possible, the user can have an
              estimation on how long it is going take.
            </DxcText>
          </DxcList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcList>
            <DxcText>
              For an unknown amount of time/progress, consider using a loading
              spinner instead.
            </DxcText>
            <DxcText>
              Do not use this type of component in actions that will take less
              than 1 minute of processing.
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcText as="p">
          The component progress-bar has two variants: <strong>default</strong>{" "}
          and <strong>overlay</strong>.
        </DxcText>
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
        <DxcList>
          <DxcText>
            Determinate indicators display how long a process will take. They
            should be used in longer processes.
          </DxcText>
          <DxcStack gutter="xsmall">
            <DxcText>
              Indeterminate indicators express an unspecified amount of wait
              time. They should be used when:
            </DxcText>
            <DxcList type="circle">
              <DxcText>The processing time is unknown.</DxcText>
              <DxcText>
                The wait time is expected to be short enough that it’s not
                necessary to display.
              </DxcText>
            </DxcList>
          </DxcStack>
        </DxcList>
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

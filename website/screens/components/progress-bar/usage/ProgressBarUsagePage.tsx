import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import Figure from "../../../common/Figure";
import determinateImage from "./images/progress_determinate_undeterminate.png";
import variantsImage from "./images/progress_variants.png";
import DocFooter from "../../../common/DocFooter";

const ProgressBarUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <HeadingLink level={3}>Do&#39;s</HeadingLink>
        <DxcList>
          <DxcText>
            Use a progress bar when it will give people feedback in a
            long-running process with continuous values.
          </DxcText>
          <DxcText>
            Add additional information to clarify to the user the action for
            which is waiting (&quot;Sending documents...&quot;).
          </DxcText>
          <DxcText>
            Use the determinate type if it is possible, the user can have an
            estimation on how long it is gonna take.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Don&#39;ts</HeadingLink>
        <DxcList>
          <DxcText>
            For an unknown amount of time/progress, consider using a loading
            spinner instead.
          </DxcText>
          <DxcText>
            Do not use this type of component in actions that will take less
            than 1 minute to the system.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Variants</HeadingLink>
        <DxcText as="p">
          The component progress-bar has two variants: <strong>default</strong>{" "}
          and <strong>overlay</strong>.
        </DxcText>
        <Figure caption="Progress bar variants">
          <Image src={variantsImage} alt="Progress bar variants" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Determinate or indeterminate</HeadingLink>
        <Figure caption="Determinate vs undeterminate progress bar">
          <Image
            src={determinateImage}
            alt="Determinate vs undeterminate progress bar"
          />
        </Figure>
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
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/progress-bar/usage/ProgressBarUsagePage.tsx" />
    </DxcStack>
  );
};

export default ProgressBarUsagePage;

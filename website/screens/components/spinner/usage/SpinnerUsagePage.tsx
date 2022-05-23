import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import determinateImage from "./images/spinner_determinate_indeterminate.png";
import variantsImage from "./images/spinner_variants.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          There should only be a single spinner on a page at one time.
        </DxcText>
        <DxcText>
          Only use the spinner component in a process that takes more than one
          second.
        </DxcText>
        <DxcText>
          The text of the action it is not mandatory but recommendable.
        </DxcText>
        <DxcText>
          If only a portion of a page is displaying new content or being
          updated, use a <Code>medium</Code> or <Code>small</Code> spinner place
          the spinner in that part of the page.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcText as="p">
          There are three different variants for the spinner component due to
          the size or the position: <strong>large</strong>,{" "}
          <strong>small</strong> and <strong>overlay</strong>.
        </DxcText>
        <Figure caption="Spinner component variants">
          <Image src={variantsImage} alt="Spinner component variants" />
        </Figure>
      </>
    ),
  },
  {
    title: "Determinate or indeterminate",
    content: (
      <>
        <Figure caption="Determinate and indeterminate spinners">
          <Image
            src={determinateImage}
            alt="Determinate and indeterminate spinners"
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
                The wait time is expected to be short enough that it&#39;s not
                necessary to display.
              </DxcText>
            </DxcList>
          </DxcStack>
        </DxcList>
      </>
    ),
  },
];

const SpinnerUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/spinner/usage/SpinnerUsagePage.tsx" />
    </DxcStack>
  );
};

export default SpinnerUsagePage;

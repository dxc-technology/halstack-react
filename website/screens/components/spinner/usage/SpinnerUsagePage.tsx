import { DxcText, DxcList, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import determinateIndeterminate from "./examples/determinateIndeterminate";
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
          The text of the action is not mandatory but recommendable.
        </DxcText>
        <DxcText>
          If only a portion of a page is displaying new content or being
          updated, use a <Code>medium</Code> or <Code>small</Code> spinner in
          that part of the page.
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
        <Example example={determinateIndeterminate} defaultIsVisible />
        <DxcList>
          <DxcText>
            Determinate indicators display how long a process will take. They
            should be used in longer processes.
          </DxcText>
          <DxcFlex direction="column" gap="0.5rem">
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
          </DxcFlex>
        </DxcList>
      </>
    ),
  },
];

const SpinnerUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/spinner/usage/SpinnerUsagePage.tsx" />
    </DxcFlex>
  );
};

export default SpinnerUsagePage;

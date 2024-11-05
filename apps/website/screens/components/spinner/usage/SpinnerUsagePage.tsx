import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
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
      <DxcBulletedList>
        <DxcBulletedList.Item>There should only be a single spinner on a page at one time.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Only use the spinner component in a process that takes more than one second.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>The text of the action is not mandatory but recommendable.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          If only a portion of a page is displaying new content or being updated, use a <Code>medium</Code> or{" "}
          <Code>small</Code> spinner in that part of the page.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          There are three different variants for the spinner component due to the size or the position:{" "}
          <strong>large</strong>, <strong>small</strong> and <strong>overlay</strong>.
        </DxcParagraph>
        <Figure caption="Spinner variants">
          <Image src={variantsImage} alt="Spinner variants" />
        </Figure>
      </>
    ),
  },
  {
    title: "Determinate or indeterminate",
    content: (
      <>
        <Example example={determinateIndeterminate} defaultIsVisible />
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Determinate indicators display how long a process will take. They should be used in longer processes.
          </DxcBulletedList.Item>
          <DxcFlex direction="column" gap="0.5rem">
            <DxcBulletedList.Item>
              Indeterminate indicators express an unspecified amount of wait time. They should be used when:
            </DxcBulletedList.Item>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>The processing time is unknown.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                The wait time is expected to be short enough that it&#39;s not necessary to display.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcFlex>
        </DxcBulletedList>
      </>
    ),
  },
];

const SpinnerUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/spinner/usage/SpinnerUsagePage.tsx" />
    </DxcFlex>
  );
};

export default SpinnerUsagePage;

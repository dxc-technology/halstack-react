import {
  DxcStack,
  DxcText,
  DxcLink,
  DxcList,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import numberSpecs from "./images/number_specs.png";
import numberInputSpecs from "./images/number_input_states.png";
import numberInputStates from "./images/number_action_states.png";
import numberAnatomy from "./images/number_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Design specifications of the number input component">
          <Image
            src={numberSpecs}
            alt="Design specifications of the number input component"
          />
        </Figure>
        <DxcText as="p">
          The number input <Code>color</Code>, <Code>typography</Code>,{" "}
          <Code>border</Code>, <Code>spacing</Code>, <Code>width</Code> and{" "}
          <Code>margin</Code> specifications are inherited from the text input,
          for reference{" "}
          <DxcLink>
            <Link href="/components/text-input/specifications">
              <a>check the text input component documentation</a>
            </Link>
          </DxcLink>
          .
        </DxcText>
      </>
    ),
  },
  {
    title: "States",
    subSections: [
      {
        title: "Input",
        content: (
          <>
            <DxcText as="p">
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>error</strong> and{" "}
              <strong>disabled</strong>.
            </DxcText>
            <Figure caption="Input states example">
              <Image src={numberInputSpecs} alt="Input states example" />
            </Figure>
          </>
        ),
      },
      {
        title: "Spin button",
        content: (
          <>
            <DxcText as="p">
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>active</strong> and{" "}
              <strong>disabled</strong>.
            </DxcText>
            <Figure caption="Spin button states example">
              <Image src={numberInputStates} alt="Spin button states example" />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image
          src={numberAnatomy}
          alt="Anatomy of the number input component"
        />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>
            Helper text <em>(Optional)</em>
          </DxcText>
          <DxcText>
            Suffix <em>(Optional)</em>
          </DxcText>
          <DxcText>Container</DxcText>
          <DxcText>Spin button increase</DxcText>
          <DxcText>Spin button decrease</DxcText>
          <DxcText>Error indicator</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Value</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WAI-ARIA",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton"
                newWindow
              >
                3.21 Spinbutton
              </DxcLink>
            </DxcText>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/spinbutton/datepicker-spinbuttons.html"
                newWindow
              >
                "Date Picker Spin Button" design pattern
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const NumberInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/number-input/specs/NumberInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default NumberInputSpecsPage;

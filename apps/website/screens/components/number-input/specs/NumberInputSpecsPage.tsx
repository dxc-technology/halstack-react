import { DxcParagraph, DxcFlex, DxcLink, DxcBulletedList } from "@dxc-technology/halstack-react";
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
        <Figure caption="Number input design specifications">
          <Image src={numberSpecs} alt="Number input design specifications" />
        </Figure>
        <DxcParagraph>
          The number input <Code>color</Code>, <Code>typography</Code>, <Code>border</Code>, <Code>spacing</Code>,{" "}
          <Code>width</Code> and <Code>margin</Code> specifications are inherited from the text input, for reference
          check the{" "}
          <Link href="/components/text-input/specifications" passHref legacyBehavior>
            <DxcLink>text input</DxcLink>
          </Link>{" "}
          component documentation.
        </DxcParagraph>
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
            <DxcParagraph>
              States: <strong>enabled</strong>, <strong>hover</strong>, <strong>focus</strong>, <strong>error</strong>{" "}
              and <strong>disabled</strong>.
            </DxcParagraph>
            <Figure caption="Number input states">
              <Image src={numberInputSpecs} alt="Number input states" />
            </Figure>
          </>
        ),
      },
      {
        title: "Spin button",
        content: (
          <>
            <DxcParagraph>
              States: <strong>enabled</strong>, <strong>hover</strong>, <strong>focus</strong>, <strong>active</strong>{" "}
              and <strong>disabled</strong>.
            </DxcParagraph>
            <Figure caption="Spin button states">
              <Image src={numberInputStates} alt="Spin button states" />
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
        <Image src={numberAnatomy} alt="Number input anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Helper text <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Suffix <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Spin button increase</DxcBulletedList.Item>
          <DxcBulletedList.Item>Spin button decrease</DxcBulletedList.Item>
          <DxcBulletedList.Item>Error indicator</DxcBulletedList.Item>
          <DxcBulletedList.Item>Error message</DxcBulletedList.Item>
          <DxcBulletedList.Item>Value</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WAI-ARIA",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton" newWindow>
                3.21 Spinbutton
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/spinbutton/datepicker-spinbuttons.html"
                newWindow
              >
                "Date Picker Spin Button" design pattern
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const NumberInputSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/number-input/specs/NumberInputSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default NumberInputSpecsPage;

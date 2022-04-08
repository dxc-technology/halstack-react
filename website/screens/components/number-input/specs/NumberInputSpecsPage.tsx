import Image from "@/common/Image";
import numberSpecs from "./images/number_specs.png";
import numberInputSpecs from "./images/number_input_states.png";
import numberInputStates from "./images/number_action_states.png";
import numberAnatomy from "./images/number_anatomy.png";
import HeadingLink from "../../../common/HeadingLink";
import {
  DxcStack,
  DxcText,
  DxcLink,
  DxcList,
} from "@dxc-technology/halstack-react";
import Figure from "../../../common/Figure";
import Code from "../../../common/Code";
import DocFooter from "../../../common/DocFooter";

const NumberInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
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
          <DxcLink
            href="/components/text-input/specifications"
            text="check the text input component documentation"
          />
          .
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <HeadingLink level={4}>Input</HeadingLink>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Input states example">
          <Image src={numberInputSpecs} alt="Input states example" />
        </Figure>
        <HeadingLink level={4}>Spin button</HeadingLink>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>active</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Spin button states example">
          <Image src={numberInputStates} alt="Spin button states example" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WAI-ARIA</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton"
              text="3.21 Spinbutton"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/spinbutton/datepicker-spinbuttons.html"
              text='"Date Picker Spin Button" design pattern'
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/number-input/specs/NumberInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default NumberInputSpecsPage;

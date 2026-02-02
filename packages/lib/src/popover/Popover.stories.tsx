import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcPopover from "./Popover";
import DxcParagraph from "../paragraph/Paragraph";
import DxcContainer from "../container/Container";
import DxcButton from "../button/Button";
import DxcTextInput from "../text-input/TextInput";
import { useEffect } from "react";
import DxcFlex from "../flex/Flex";

export default {
  title: "Popover",
  component: DxcPopover,
  decorators: [
    (Story) => {
      useEffect(() => {
        document.body.style.background = "var(--color-bg-neutral-light) ";
      }, []);

      return <Story />;
    },
  ],
} satisfies Meta<typeof DxcPopover>;

const popoverContent = (
  <DxcContainer width="300px" height="200px" overflow="auto">
    <DxcParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
      nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu dignissim,
      fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam efficitur semper
      pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit, elementum metus eu, ornare
      risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo. Curabitur blandit iaculis pretium.
      Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum, et varius massa condimentum eget.
      Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis lacinia nisl. Suspendisse sed quam
      tincidunt, commodo dolor vel, tincidunt nisl.
    </DxcParagraph>
  </DxcContainer>
);

const Paragraph = () => {
  return (
    <>
      <ExampleContainer expanded>
        <Title title="Default Popover" level={4} />
        <DxcPopover isOpen popoverContent={popoverContent}>
          <DxcTextInput />
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <Title title="Popover with tip" level={4} />
        <DxcPopover isOpen hasTip popoverContent={popoverContent}>
          <DxcTextInput />
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen hasTip popoverContent={popoverContent} side="right" align="start">
          <DxcTextInput />
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <Title title="Side Popover" level={4} />
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="right" popoverContent={popoverContent}>
            <DxcButton label="right" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="right" popoverContent={popoverContent} align="start">
            <DxcButton label="right" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="right" popoverContent={popoverContent} align="end">
            <DxcButton label="right" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="left" popoverContent={popoverContent}>
            <DxcButton label="left" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="left" popoverContent={popoverContent} align="start">
            <DxcButton label="left" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="left" popoverContent={popoverContent} align="end">
            <DxcButton label="left" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="top" popoverContent={popoverContent}>
            <DxcButton label="top" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="top" popoverContent={popoverContent} align="start">
            <DxcButton label="top" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="top" popoverContent={popoverContent} align="end">
            <DxcButton label="top" />
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen side="left" popoverContent={popoverContent}>
          <DxcButton label="left" />
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen side="left" popoverContent={popoverContent} align="start">
          <DxcButton label="left" />
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen side="left" popoverContent={popoverContent} align="end">
          <DxcButton label="left" />
        </DxcPopover>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcPopover>;

export const Chromatic: Story = {
  render: Paragraph,
};

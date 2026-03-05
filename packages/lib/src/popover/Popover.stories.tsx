import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcPopover from "./Popover";
import DxcParagraph from "../paragraph/Paragraph";
import DxcContainer from "../container/Container";
import DxcButton from "../button/Button";
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
    <DxcButton label="Example button" />
  </DxcContainer>
);

const Popover = () => {
  return (
    <>
      <ExampleContainer expanded>
        <Title title="Default Popover" level={4} />
        <DxcPopover isOpen popoverContent={popoverContent}>
          <DxcParagraph>Hover or click to open the popover</DxcParagraph>
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <Title title="Popover with tip" level={4} />
        <DxcPopover isOpen hasTip popoverContent={popoverContent}>
          <DxcParagraph>Hover or click to open the popover</DxcParagraph>
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen hasTip popoverContent={popoverContent} side="right" align="start">
          <DxcParagraph>Hover or click to open the popover</DxcParagraph>
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <Title title="Side Popover" level={4} />
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="right" popoverContent={popoverContent} asChild>
            <button>right</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="right" popoverContent={popoverContent} align="start" asChild>
            <button>right</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="right" popoverContent={popoverContent} align="end" asChild>
            <button>right</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="left" popoverContent={popoverContent} asChild>
            <button>left</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="left" popoverContent={popoverContent} align="start" asChild>
            <button>left</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="left" popoverContent={popoverContent} align="end" asChild>
            <button>left</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="top" popoverContent={popoverContent} asChild>
            <button>top</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="top" popoverContent={popoverContent} align="start" asChild>
            <button>top</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcFlex alignItems="center" justifyContent="center">
          <DxcPopover isOpen side="top" popoverContent={popoverContent} align="end" asChild>
            <button>top</button>
          </DxcPopover>
        </DxcFlex>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen side="left" popoverContent={popoverContent} asChild>
          <button>left</button>
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen side="left" popoverContent={popoverContent} align="start" asChild>
          <button>left</button>
        </DxcPopover>
      </ExampleContainer>
      <ExampleContainer expanded>
        <DxcPopover isOpen side="left" popoverContent={popoverContent} align="end" asChild>
          <button>left</button>
        </DxcPopover>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcPopover>;

export const Chromatic: Story = {
  render: Popover,
};

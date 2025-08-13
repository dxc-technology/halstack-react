import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcParagraph from "./Paragraph";

export default {
  title: "Paragraph",
  component: DxcParagraph,
} satisfies Meta<typeof DxcParagraph>;

const Paragraph = () => (
  <>
    <ExampleContainer>
      <Title title="Default Paragraph" level={4} />
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
        nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
        dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a pharetra magna euismod. Nullam efficitur
        semper pellentesque. Nulla eget arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit, elementum metus
        eu, ornare risus. Aenean neque nibh, vestibulum vitae elit vel, imperdiet suscipit leo. Curabitur blandit
        iaculis pretium. Fusce id imperdiet dui, ut laoreet justo. Sed maximus sollicitudin ipsum, et varius massa
        condimentum eget. Vivamus id mauris et nisl mattis consequat et id lectus. Quisque mollis lacinia nisl.
        Suspendisse sed quam tincidunt, commodo dolor vel, tincidunt nisl.
      </DxcParagraph>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcParagraph>;

export const Chromatic: Story = {
  render: Paragraph,
};

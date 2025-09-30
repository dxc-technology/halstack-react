import { Meta, StoryObj } from "@storybook/react-vite";
import DxcIcon from "./Icon";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcTypography from "../typography/Typography";

export default {
  title: "Icon",
  component: DxcIcon,
} satisfies Meta<typeof DxcIcon>;

const Icon = () => (
  <>
    <Title title="Icon component" theme="light" level={2} />
    <ExampleContainer>
      <DxcTypography as="p" fontSize="1.5rem">
        <DxcIcon icon="home" />
        <DxcIcon icon="filled_home" />
      </DxcTypography>
    </ExampleContainer>
    <ExampleContainer>
      <DxcTypography as="p" fontSize="1.5rem" color="#b182e3">
        <DxcIcon icon="home" />
        <DxcIcon icon="filled_home" />
      </DxcTypography>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcIcon>;

export const Chromatic: Story = {
  render: Icon,
};

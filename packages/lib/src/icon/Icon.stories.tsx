import { Meta, StoryObj } from "@storybook/react-vite";
import DxcIcon from "./Icon";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcTypography from "../typography/Typography";

export default {
  title: "Icon",
  component: DxcIcon,
} satisfies Meta<typeof DxcIcon>;

const icon = (
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="40" fill="currentColor" />
    <path
      d="M140.192 118.205L187.848 64H176.556L135.158 111.056L102.117 64H64L113.975 135.163L64 192H75.2914L118.982 142.296L153.883 192H192L140.192 118.205ZM124.722 135.787L119.65 128.697L79.3634 72.3294H96.7094L129.232 117.837L134.282 124.927L176.551 184.076H159.205L124.722 135.787Z"
      fill="white"
    />
  </svg>
);

const Icon = () => (
  <>
    <Title title="Icon component" theme="light" level={2} />

    <Title title="Material Symbols icons" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <ExampleContainer>
      <DxcIcon icon="home" />
      <DxcIcon icon="filled_home" />
    </ExampleContainer>
    <Title title="Inside a typography" theme="light" level={4} />
    <ExampleContainer>
      <DxcTypography as="p" fontSize="1.5rem">
        <DxcIcon icon="home" />
        <DxcIcon icon="filled_home" />
      </DxcTypography>
    </ExampleContainer>
    <Title title="Size and color" theme="light" level={4} />
    <ExampleContainer>
      <DxcIcon icon="home" size="var(--height-m)" />
      <DxcIcon icon="filled_home" size="var(--height-xl)" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcIcon icon="home" size="var(--height-m)" color="var(--color-fg-primary-light)" />
      <DxcIcon icon="filled_home" size="var(--height-xl)" color="var(--color-fg-primary-light)" />
    </ExampleContainer>

    <Title title="Custom SVG icons" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <ExampleContainer>
      <DxcIcon icon={icon} />
    </ExampleContainer>
    <Title title="Size" theme="light" level={4} />
    <ExampleContainer>
      <DxcIcon icon={icon} size="var(--height-xl)" />
    </ExampleContainer>
    <Title title="Color" theme="light" level={4} />
    <ExampleContainer>
      <DxcIcon icon={icon} color="var(--color-fg-primary-strongest)" />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcIcon>;

export const Chromatic: Story = {
  render: Icon,
};

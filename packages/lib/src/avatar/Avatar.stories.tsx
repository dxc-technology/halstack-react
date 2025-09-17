import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcAvatar from "./Avatar";
import DxcFlex from "../flex/Flex";
import AvatarPropsType from "./types";

export default {
  title: "Avatar",
  component: DxcAvatar,
} as Meta<typeof DxcAvatar>;

const AvatarStatusLine = ({
  shape,
  size,
  color,
  disabled,
  label,
  imageSrc,
}: {
  shape: AvatarPropsType["shape"];
  size: AvatarPropsType["size"];
  color: AvatarPropsType["color"];
  disabled?: AvatarPropsType["disabled"];
  label?: AvatarPropsType["label"];
  imageSrc?: AvatarPropsType["imageSrc"];
}) => (
  <DxcFlex gap="var(--spacing-gap-l)">
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "default", position: "top" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "info", position: "top" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "success", position: "top" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "warning", position: "top" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "error", position: "top" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "default", position: "bottom" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "info", position: "bottom" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "success", position: "bottom" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "warning", position: "bottom" }}
      disabled={disabled}
    />
    <DxcAvatar
      label={label}
      imageSrc={imageSrc}
      size={size}
      shape={shape}
      color={color}
      onClick={() => console.log("")}
      status={{ mode: "error", position: "bottom" }}
      disabled={disabled}
    />
  </DxcFlex>
);

const AvatarStatesContainer = ({
  shape,
  size,
  color,
  label,
  imageSrc,
}: {
  shape: AvatarPropsType["shape"];
  size: AvatarPropsType["size"];
  color?: AvatarPropsType["color"];
  label?: AvatarPropsType["label"];
  imageSrc?: AvatarPropsType["imageSrc"];
}) => (
  <DxcFlex direction="column">
    <ExampleContainer>
      <AvatarStatusLine imageSrc={imageSrc} label={label} size={size} shape={shape} color={color} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <AvatarStatusLine imageSrc={imageSrc} label={label} size={size} shape={shape} color={color} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <AvatarStatusLine imageSrc={imageSrc} label={label} size={size} shape={shape} color={color} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <AvatarStatusLine imageSrc={imageSrc} label={label} size={size} shape={shape} color={color} />
    </ExampleContainer>
    <ExampleContainer>
      <AvatarStatusLine imageSrc={imageSrc} label={label} size={size} shape={shape} color={color} disabled />
    </ExampleContainer>
  </DxcFlex>
);

const AvatarColorsContainer = ({
  size,
  shape,
  label,
}: {
  shape?: AvatarPropsType["shape"];
  size: AvatarPropsType["size"];
  label?: AvatarPropsType["label"];
}) => (
  <>
    <Title title="Grey" theme="light" level={3} />
    <AvatarStatesContainer label={label} size={size} shape={shape} color="grey" />
    <Title title="Blue" theme="light" level={3} />
    <AvatarStatesContainer label={label} size={size} shape={shape} color="blue" />
    <Title title="Green" theme="light" level={3} />
    <AvatarStatesContainer label={label} size={size} shape={shape} color="green" />
    <Title title="Orange" theme="light" level={3} />
    <AvatarStatesContainer label={label} size={size} shape={shape} color="orange" />
    <Title title="Red" theme="light" level={3} />
    <AvatarStatesContainer label={label} size={size} shape={shape} color="red" />
    <Title title="Yellow" theme="light" level={3} />
    <AvatarStatesContainer label={label} size={size} shape={shape} color="yellow" />
    <Title title="Purple" theme="light" level={3} />
    <AvatarStatesContainer label={label} size={size} shape={shape} color="purple" />
  </>
);

const AvatarImageContainer = ({ size, shape }: { size: AvatarPropsType["size"]; shape?: AvatarPropsType["shape"] }) => (
  <AvatarStatesContainer size={size} shape={shape} imageSrc="https://picsum.photos/id/1022/200/300" />
);

const AvatarShapeContainer = ({ shape }: { shape?: AvatarPropsType["shape"] }) => (
  <>
    <>
      <Title title="Xsmall" theme="light" level={2} />
      <AvatarColorsContainer size="xsmall" shape={shape} />
      <Title title="Label" theme="light" level={3} />
      <AvatarColorsContainer label="Avatar Component" size="xsmall" shape={shape} />
      <Title title="Image" theme="light" level={3} />
      <AvatarImageContainer size="xsmall" shape={shape} />
    </>
    <>
      <Title title="Small" theme="light" level={2} />
      <AvatarColorsContainer size="small" />
      <Title title="Label" theme="light" level={3} />
      <AvatarColorsContainer label="Avatar Component" size="small" shape={shape} />
      <Title title="Image" theme="light" level={3} />
      <AvatarImageContainer size="small" shape={shape} />
    </>
    <>
      <Title title="Medium" theme="light" level={2} />
      <AvatarColorsContainer size="medium" shape={shape} />
      <Title title="Label" theme="light" level={3} />
      <AvatarColorsContainer label="Avatar Component" size="medium" shape={shape} />
      <Title title="Image" theme="light" level={3} />
      <AvatarImageContainer size="medium" shape={shape} />
    </>
    <>
      <Title title="Large" theme="light" level={2} />
      <AvatarColorsContainer size="large" shape={shape} />
      <Title title="Label" theme="light" level={3} />
      <AvatarColorsContainer label="Avatar Component" size="large" shape={shape} />
      <Title title="Image" theme="light" level={3} />
      <AvatarImageContainer size="large" shape={shape} />
    </>
    <>
      <Title title="Xlarge" theme="light" level={2} />
      <AvatarColorsContainer size="xlarge" shape={shape} />
      <Title title="Label" theme="light" level={3} />
      <AvatarColorsContainer label="Avatar Component" size="xlarge" shape={shape} />
      <Title title="Image" theme="light" level={3} />
      <AvatarImageContainer size="xlarge" shape={shape} />
    </>
    <>
      <Title title="XXlarge" theme="light" level={2} />
      <AvatarColorsContainer size="xxlarge" shape={shape} />
      <Title title="Label" theme="light" level={3} />
      <AvatarColorsContainer label="Avatar Component" size="xxlarge" shape={shape} />
      <Title title="Image" theme="light" level={3} />
      <AvatarImageContainer size="xxlarge" shape={shape} />
    </>
  </>
);

const Avatar = () => (
  <>
    <Title title="Default" theme="light" level={2} />
    <AvatarShapeContainer shape="circle" />
    <Title title="Square" theme="light" level={2} />
    <AvatarShapeContainer shape="square" />
    <Title title="Tooltip" theme="light" level={2} />
    <DxcAvatar
      size="xlarge"
      onClick={() => console.log("")}
      title="Avatar tooltip"
    />
  </>
);

type Story = StoryObj<typeof DxcAvatar>;

export const Chromatic: Story = {
  render: Avatar,
};

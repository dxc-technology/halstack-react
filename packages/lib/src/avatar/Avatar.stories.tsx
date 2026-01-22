import { Meta, StoryObj } from "@storybook/react-vite";
import DxcAvatar from "./Avatar";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcFlex from "../flex/Flex";

export default {
  title: "Avatar",
  component: DxcAvatar,
} satisfies Meta<typeof DxcAvatar>;

type Story = StoryObj<typeof DxcAvatar>;

export const Chromatic: Story = {
  render: () => (
    <>
      <>
        <Title title="Label" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>

      <>
        <Title title="Image" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>

      <>
        <Title title="Icon(custom)" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>

      <>
        <Title title="Icon(default)" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>
    </>
  ),
};

export const Statuses: Story = {
  render: () => (
    <>
      <Title title="Statuses" theme="light" level={2} />
      {(["top", "bottom"] as const).map((position) => (
        <div key={position}>
          <Title title={`${position}`} theme="light" level={3} />
          {(["default", "info", "success", "warning", "error"] as const).map((mode) => (
            <div key={`${position}-${mode}`}>
              <Title title={`${mode}`} theme="light" level={4} />
              {(["xsmall", "small", "medium", "large", "xlarge", "xxlarge"] as const).map((size) => (
                <div key={`${position}-${mode}-${size}`}>
                  <Title title={`${size}`} theme="light" level={5} />
                  <ExampleContainer>
                    <DxcFlex gap="var(--spacing-gap-l)" wrap="wrap">
                      {(
                        ["primary", "secondary", "tertiary", "success", "info", "neutral", "warning", "error"] as const
                      ).map((color) => (
                        <DxcAvatar
                          key={`${position}-${mode}-${size}-${color}`}
                          label="Michael Ramirez"
                          color={color}
                          size={size}
                          status={{ mode, position }}
                        />
                      ))}
                    </DxcFlex>
                  </ExampleContainer>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  ),
};

export const PseudoStates: Story = {
  render: () => (
    <>
      <Title title="PseudoStates" theme="light" level={2} />
      {(["pseudo-hover", "pseudo-focus", "pseudo-active", "disabled"] as const).map((state) => (
        <div key={state}>
          <Title title={`${state}`} theme="light" level={3} />
          {(["primary", "secondary", "tertiary", "success", "info", "neutral", "warning", "error"] as const).map(
            (color) => (
              <div key={`${state}-${color}`}>
                <Title title={`${color}`} theme="light" level={4} />
                <ExampleContainer pseudoState={state !== "disabled" ? state : undefined}>
                  <DxcFlex gap="var(--spacing-gap-l)">
                    {(["xsmall", "small", "medium", "large", "xlarge", "xxlarge"] as const).map((size) => (
                      <DxcAvatar
                        key={`${state}-${color}-${size}`}
                        label="Michael Ramirez"
                        color={color}
                        size={size}
                        onClick={() => {}}
                        disabled={state === "disabled"}
                      />
                    ))}
                  </DxcFlex>
                </ExampleContainer>
              </div>
            )
          )}
        </div>
      ))}
    </>
  ),
};

export const Labels: Story = {
  render: () => (
    <>
      <Title title="Label & sublabel" theme="light" level={2} />
      <ExampleContainer>
        <DxcAvatar primaryText="John Doe" secondaryText="Software Engineer" />
      </ExampleContainer>
      <Title title="Label" theme="light" level={2} />
      <ExampleContainer>
        <DxcAvatar primaryText="John Doe" />
      </ExampleContainer>
      <Title title="Sublabel" theme="light" level={2} />
      <ExampleContainer>
        <DxcAvatar secondaryText="Software Engineer" />
      </ExampleContainer>
    </>
  ),
};

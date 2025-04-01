import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcContainer from "./Container";
import DxcTypography from "../typography/Typography";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Container",
  component: DxcContainer,
} as Meta<typeof DxcContainer>;

const Listbox = ({ suggestions = [] }: { suggestions: string[] }): JSX.Element => (
  <DxcContainer
    boxSizing="border-box"
    boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    border={{
      width: "var(--border-width-s)",
      style: "var(--border-style-default)",
      color: "var(--border-color-neutral-medium)",
    }}
    borderRadius="var(--border-radius-s)"
    background={{ color: "var(--color-bg-neutral-lightest)" }}
    padding={{ top: "xxsmall", bottom: "xxsmall" }}
    maxHeight="304px"
    width="250px"
    overflow={{ x: "hidden", y: "auto" }}
  >
    {suggestions.map((suggestion, index) => (
      <DxcContainer padding={{ left: "xsmall", right: "xsmall" }}>
        <DxcContainer
          border={
            index !== suggestions.length - 1
              ? {
                  bottom: {
                    width: "var(--border-width-s)",
                    style: "var(--border-style-default)",
                    color: "var(--border-color-neutral-lighter)",
                  },
                }
              : undefined
          }
          padding={{
            top: "xxsmall",
            bottom: "xxsmall",
            left: "xxsmall",
            right: "xxsmall",
          }}
          overflow="hidden"
        >
          <DxcTypography whiteSpace="nowrap" textOverflow="ellipsis" lineHeight="1.715em">
            {suggestion}
          </DxcTypography>
        </DxcContainer>
      </DxcContainer>
    ))}
  </DxcContainer>
);

const Container = () => (
  <>
    <Title title="Box sizing border box" level={4} />
    <ExampleContainer>
      <DxcContainer
        boxSizing="border-box"
        width="200px"
        height="200px"
        background={{ color: "var(--color-bg-primary-medium)" }}
        border={{
          top: {
            width: "var(--border-width-m)",
            color: "var(--border-color-secondary-strong)",
            style: "var(--border-style-default)",
          },
          bottom: {
            width: "var(--border-width-l)",
            color: "var(--border-color-primary-strong)",
            style: "var(--border-style-default)",
          },
        }}
        borderRadius="var(--border-radius-none) var(--border-radius-none) var(--border-radius-s) var(--border-radius-s)"
        padding="medium"
        margin="large"
      >
        <b>Example text</b>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Background image" level={4} />
    <ExampleContainer>
      <DxcContainer
        background={{
          image:
            "url(https://dxc.com/content/dam/dxc/projects/dxc-com/common/images/landscape-1050x650/logos/we_are_dxc-1050x650.jpg)",
          size: "500px 500px",
        }}
        width="500px"
        height="500px"
      >
        <p>Example text</p>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Positioning of boxes" level={4} />
    <ExampleContainer>
      <DxcContainer
        position="relative"
        width="fit-content"
        border={{
          color: "var(--border-color-neutral-medium)",
          width: "var(--border-width-m)",
          style: "var(--border-style-dashed)",
        }}
        borderRadius="var(--border-radius-s)"
        margin={{ bottom: "xxlarge" }}
      >
        <DxcContainer
          display="inline-block"
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="50px"
          height="50px"
        >
          <b>1</b>
        </DxcContainer>
        <DxcContainer
          display="inline-block"
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="50px"
          height="50px"
        >
          <b>2</b>
        </DxcContainer>
        <DxcContainer
          display="inline-block"
          position="absolute"
          inset={{ top: "25px", left: "0" }}
          background={{ color: "var(--color-bg-secondary-strong)" }}
          width="50px"
          height="50px"
          zIndex={1}
        >
          <b>3</b>
        </DxcContainer>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Margin collapse" level={4} />
    <ExampleContainer>
      <DxcContainer
        width="fit-content"
        border={{
          color: "var(--border-color-primary-light)",
          width: "var(--border-width-m)",
          style: "var(--border-style-dashed)",
        }}
        borderRadius="0.25rem"
      >
        <DxcContainer
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="50px"
          height="50px"
          margin={{ bottom: "medium" }}
        >
          <b>1</b>
        </DxcContainer>
        <DxcContainer
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="50px"
          height="50px"
          margin={{ top: "large" }}
        >
          <b>2</b>
        </DxcContainer>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Overflow" level={4} />
    <ExampleContainer>
      <DxcContainer overflow={{ x: "auto" }} maxHeight="100px" width="fit-content">
        <DxcContainer
          border={{ width: "var(--border-width-s)", style: "var(--border-style-default)", color: "var(--border-color-neutral-strongest)" }}
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="50px"
          height="50px"
        >
          <b tabIndex={0}>1</b>
        </DxcContainer>
        <DxcContainer
          border={{
            width: "var(--border-width-s)",
            style: "var(--border-style-default)",
            color: "var(--border-color-neutral-strongest)",
          }}
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="50px"
          height="50px"
        >
          <b tabIndex={0}>2</b>
        </DxcContainer>
        <DxcContainer
          border={{ width: "var(--border-width-s)", style: "var(--border-style-default)", color: "var(--border-color-neutral-strongest)" }}
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="50px"
          height="50px"
        >
          <b tabIndex={0}>3</b>
        </DxcContainer>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Float" level={4} />
    <ExampleContainer>
      <DxcContainer padding="medium" border={{ width: "var(--border-width-s)", style: "var(--border-style-default)", color: "var(--border-color-neutral-strongest)" }}>
        <DxcContainer float="right" background={{ color: "var(--color-bg-primary-medium)" }} width="100px" height="100px">
          <b>Floating text</b>
        </DxcContainer>
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, sapien vitae aliquam lacinia, nisl
          quam tincidunt ligula, eget aliquam eros quam quis nunc. Donec euismod, nisl eget ultricies aliquam, nisl
          velit aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit
          aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam
          nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam nunc,
          quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam nunc, quis
          aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam nunc, quis aliquam
          nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam nunc, quis aliquam nisl.
        </p>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Box shadow and opacity" level={4} />
    <ExampleContainer>
      <DxcContainer
        padding="medium"
        outline={{ width: "var(--border-width-s)", style: "var(--border-style-default)", color: "var(--border-color-neutral-strongest)" }}
        boxShadow="10px 5px 5px #fe0123"
      >
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, sapien vitae aliquam lacinia, nisl
          quam tincidunt ligula, eget aliquam eros quam quis nunc. Donec euismod, nisl eget ultricies aliquam, nisl
          velit aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit
          aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam
          nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam nunc,
          quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam nunc, quis
          aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit aliquam nunc, quis aliquam
          nisl.
        </p>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Building a listbox component" level={4} />
    <ExampleContainer>
      <Listbox suggestions={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]} />
    </ExampleContainer>
    <Title title="Border and outline" level={4} />
    <ExampleContainer>
      <DxcContainer
        outline={{ color: "var(--border-color-secondary-medium)", style: "var(--border-style-default)", offset: "var(--spacing-padding-xxxs)" }}
        border={{ top: { style: "var(--border-style-default)" } }}
      >
        Example text
      </DxcContainer>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcContainer>;

export const Chromatic: Story = {
  render: Container,
};

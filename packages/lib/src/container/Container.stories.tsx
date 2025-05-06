import { Meta, StoryObj } from "@storybook/react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcContainer from "./Container";
import DxcTypography from "../typography/Typography";

export default {
  title: "Container",
  component: DxcContainer,
} as Meta<typeof DxcContainer>;

const Listbox = ({ suggestions = [] }: { suggestions: string[] }): JSX.Element => (
  <DxcContainer
    background={{ color: "var(--border-color-neutral-brighter)" }}
    border={{
      color: "var(--border-color-neutral-medium)",
      width: "var(--border-width-s)",
      style: "var(--border-style-default)",
    }}
    borderRadius="var(--border-radius-s)"
    boxShadow="var(--shadow-mid-x-position) var(--shadow-mid-y-position) var(--shadow-mid-blur) var(--shadow-mid-spread) var(--shadow-light)"
    boxSizing="border-box"
    maxHeight="304px"
    overflow={{ x: "hidden", y: "auto" }}
    padding={{ bottom: "var(--spacing-padding-xxs)", top: "var(--spacing-padding-xxs)" }}
    width="250px"
  >
    {suggestions.map((suggestion, index) => (
      <DxcContainer
        padding={{ left: "var(--spacing-padding-xs)", right: "var(--spacing-padding-xs)" }}
        key={`suggestion_${index}`}
      >
        <DxcContainer
          border={
            index !== suggestions.length - 1
              ? {
                  bottom: {
                    color: "var(--border-color-neutral-lighter)",
                    style: "var(--border-style-default)",
                    width: "var(--border-width-s)",
                  },
                }
              : undefined
          }
          overflow="hidden"
          padding="var(--spacing-padding-xxs)"
        >
          <DxcTypography lineHeight="1.715em" textOverflow="ellipsis" whiteSpace="nowrap">
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
        padding="var(--spacing-padding-m)"
        margin="var(--spacing-padding-l)"
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
        margin={{ bottom: "var(--spacing-padding-xxl)" }}
      >
        <DxcContainer
          display="inline-block"
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="56px"
          height="var(--height-xxxl)"
        >
          <b>1</b>
        </DxcContainer>
        <DxcContainer
          display="inline-block"
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="56px"
          height="var(--height-xxxl)"
        >
          <b>2</b>
        </DxcContainer>
        <DxcContainer
          display="inline-block"
          position="absolute"
          inset={{ top: "25px", left: "0" }}
          background={{ color: "var(--color-bg-secondary-strong)" }}
          width="56px"
          height="var(--height-xxxl)"
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
          margin={{ bottom: "var(--spacing-padding-m)" }}
        >
          <b>1</b>
        </DxcContainer>
        <DxcContainer
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="56px"
          height="var(--height-xxxl)"
          margin={{ top: "var(--spacing-padding-l)" }}
        >
          <b>2</b>
        </DxcContainer>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Overflow" level={4} />
    <ExampleContainer>
      <DxcContainer overflow={{ x: "auto" }} maxHeight="100px" width="fit-content">
        <DxcContainer
          border={{
            width: "var(--border-width-s)",
            style: "var(--border-style-default)",
            color: "var(--border-color-neutral-strongest)",
          }}
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="56px"
          height="var(--height-xxxl)"
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
          width="56px"
          height="var(--height-xxxl)"
        >
          <b tabIndex={0}>2</b>
        </DxcContainer>
        <DxcContainer
          border={{
            width: "var(--border-width-s)",
            style: "var(--border-style-default)",
            color: "var(--border-color-neutral-strongest)",
          }}
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="56px"
          height="var(--height-xxxl)"
        >
          <b tabIndex={0}>3</b>
        </DxcContainer>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Float" level={4} />
    <ExampleContainer>
      <DxcContainer
        padding="var(--spacing-padding-m)"
        border={{
          width: "var(--border-width-s)",
          style: "var(--border-style-default)",
          color: "var(--border-color-neutral-strongest)",
        }}
      >
        <DxcContainer
          float="right"
          background={{ color: "var(--color-bg-primary-medium)" }}
          width="100px"
          height="100px"
        >
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
        padding="var(--spacing-padding-m)"
        outline={{
          width: "var(--border-width-s)",
          style: "var(--border-style-default)",
          color: "var(--border-color-neutral-strongest)",
        }}
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
        outline={{
          color: "var(--border-color-secondary-medium)",
          style: "var(--border-style-default)",
          offset: "var(--spacing-padding-xxxs)",
        }}
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

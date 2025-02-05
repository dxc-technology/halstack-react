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
    border={{ width: "1px", style: "solid", color: "color_grey_400" }}
    borderRadius="0.25rem"
    background={{ color: "color_white" }}
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
                    width: "1px",
                    style: "solid",
                    color: "color_grey_200",
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
        background={{ color: "color_purple_400" }}
        border={{
          top: {
            width: "2px",
            color: "color_blue_600",
            style: "solid",
          },
          bottom: {
            width: "thick",
            color: "color_purple_600",
            style: "solid",
          },
        }}
        borderRadius="0 0 0.25rem 0.25rem"
        padding="medium"
        margin="large"
      >
        <b>Example text</b>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Background image" level={4} />
    <ExampleContainer>
      <DxcContainer
        borderRadius="0.25rem"
        background={{
          image:
            "url(https://dxc.com/content/dam/dxc/projects/dxc-com/common/images/landscape-1050x650/logos/we_are_dxc-1050x650.jpg)",
          color: "color_purple_100",
          size: "cover",
          attachment: "fixed",
          repeat: "no-repeat",
        }}
        minWidth="100vw"
        height="100vh"
        maxHeight="100vh"
        width="100vw"
      >
        <p>Example text</p>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Positioning of boxes" level={4} />
    <ExampleContainer>
      <DxcContainer
        position="relative"
        width="fit-content"
        border={{ color: "color_purple_400", width: "2px", style: "dashed" }}
        borderRadius="0.25rem"
        margin={{ bottom: "xxlarge" }}
      >
        <DxcContainer display="inline-block" background={{ color: "color_purple_400" }} width="50px" height="50px">
          <b>1</b>
        </DxcContainer>
        <DxcContainer display="inline-block" background={{ color: "color_purple_400" }} width="50px" height="50px">
          <b>2</b>
        </DxcContainer>
        <DxcContainer
          display="inline-block"
          position="absolute"
          inset={{ top: "25px", left: "0" }}
          background={{ color: "color_blue_500" }}
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
        border={{ color: "color_purple_400", width: "2px", style: "dashed" }}
        borderRadius="0.25rem"
      >
        <DxcContainer
          background={{ color: "color_purple_400" }}
          width="50px"
          height="50px"
          margin={{ bottom: "medium" }}
        >
          <b>1</b>
        </DxcContainer>
        <DxcContainer background={{ color: "color_purple_400" }} width="50px" height="50px" margin={{ top: "large" }}>
          <b>2</b>
        </DxcContainer>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Overflow" level={4} />
    <ExampleContainer>
      <DxcContainer overflow={{ x: "auto" }} maxHeight="100px" width="fit-content">
        <DxcContainer
          border={{ width: "1px", style: "solid", color: "color_black" }}
          background={{ color: "color_purple_400" }}
          width="50px"
          height="50px"
        >
          <b tabIndex={0}>1</b>
        </DxcContainer>
        <DxcContainer
          border={{ width: "1px", style: "solid", color: "color_black" }}
          background={{ color: "color_purple_400" }}
          width="50px"
          height="50px"
        >
          <b tabIndex={0}>2</b>
        </DxcContainer>
        <DxcContainer
          border={{ width: "1px", style: "solid", color: "color_black" }}
          background={{ color: "color_purple_400" }}
          width="50px"
          height="50px"
        >
          <b tabIndex={0}>3</b>
        </DxcContainer>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Float" level={4} />
    <ExampleContainer>
      <DxcContainer padding="medium" border={{ width: "1px", style: "solid", color: "color_black" }}>
        <DxcContainer float="right" background={{ color: "color_purple_400" }} width="100px" height="100px">
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
        outline={{ width: "1px", style: "solid", color: "color_black" }}
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
        outline={{ color: "color_blue_400", style: "solid", offset: "2px" }}
        border={{ top: { style: "solid" } }}
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

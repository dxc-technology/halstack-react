import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcContainer from "./Container";

export default {
  title: "Container",
  component: DxcContainer,
};

export const Chromatic = () => (
  <>
    <Title title="Box sizing border box" level={4} />
    <ExampleContainer>
      <DxcContainer
        boxSizing="border-box"
        width="200px"
        height="200px"
        background={{ color: "color_purple_400" }}
        border={{ width: "thick", color: "color_purple_600", style:"solid", radius: "4px" }}
        padding="medium"
      >
        <b>Example text</b>
      </DxcContainer>
    </ExampleContainer>
    <Title title="Background image" level={4} />
    <ExampleContainer>
      <DxcContainer
        background={{
          image: "url(https://www.laecuaciondigital.com/wp-content/uploads/2023/10/DXC-Technology.png)",
          position: "50%",
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
        border={{ color: "color_purple_400", width: "2px", style: "dashed", radius: "4px" }}
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
        border={{ color: "color_purple_400", width: "2px", style: "dashed", radius: "4px" }}
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
          <b>1</b>
        </DxcContainer>
        <DxcContainer
          border={{ width: "1px", style: "solid", color: "color_black" }}
          background={{ color: "color_purple_400" }}
          width="50px"
          height="50px"
        >
          <b>2</b>
        </DxcContainer>
        <DxcContainer
          border={{ width: "1px", style: "solid", color: "color_black" }}
          background={{ color: "color_purple_400" }}
          width="50px"
          height="50px"
        >
          <b>3</b>
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
      <Title title="Box shadow and opacity" level={4} />
      <ExampleContainer>
        <DxcContainer
          padding="medium"
          outline={{ width: "1px", style: "solid", color: "color_black" }}
          boxShadow="10px 5px 5px #fe0123"
          opacity="0.75"
        >
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, sapien vitae aliquam lacinia, nisl
            quam tincidunt ligula, eget aliquam eros quam quis nunc. Donec euismod, nisl eget ultricies aliquam, nisl
            velit aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit
            aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit
            aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit
            aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit
            aliquam nunc, quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget ultricies aliquam, nisl velit
            aliquam nunc, quis aliquam nisl.
          </p>
        </DxcContainer>
      </ExampleContainer>
    </ExampleContainer>
  </>
);

import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBox from "./Box";
import DxcInset from "../inset/Inset";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Box ",
  component: DxcBox
};

const opinionatedTheme = {
  box: {
    baseColor: "#ffffff"
  }
};

export const Chromatic = () => (
  <>
    <Title title="Display flex" theme="light" level={2} />
    <ExampleContainer>
      <DxcBox display="flex">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <Title title="ShadowDepth" theme="light" level={2} />
    <ExampleContainer>
      <Title title="ShadowDepth 0" theme="light" level={4} />
      <DxcBox shadowDepth={0} margin="medium">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="ShadowDepth 1" theme="light" level={4} />
      <DxcBox shadowDepth={1} margin="medium">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="ShadowDepth 2" theme="light" level={4} />
      <DxcBox shadowDepth={2} margin="medium">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcBox margin="xxsmall">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcBox margin="xsmall">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcBox margin="small">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcBox margin="medium">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcBox margin="large">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcBox margin="xlarge">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcBox margin="xxlarge">
        <DxcInset space="2rem">Box</DxcInset>
      </DxcBox>
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcBox size="small">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcBox size="medium">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcBox size="large">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcBox size="fillParent">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FitContent" theme="light" level={4} />
      <DxcBox size="fitContent">Box</DxcBox>
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <HalstackProvider theme={opinionatedTheme}>
        <DxcBox display="flex">
          <DxcInset space="2rem">Box</DxcInset>
        </DxcBox>
      </HalstackProvider>
    </ExampleContainer>
  </>
);

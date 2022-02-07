import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBox from "./Box";

export default {
  title: "Box ",
  component: DxcBox,
};

export const Chromatic = () => (
  <>
    <Title title="Display flex" theme="light" level={2} />
    <ExampleContainer>
      <DxcBox display="flex" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <Title title="ShadowDepth" theme="light" level={2} />
    <ExampleContainer>
      <Title title="ShadowDepth 0" theme="light" level={4} />
      <DxcBox shadowDepth={0} margin="medium" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="ShadowDepth 1" theme="light" level={4} />
      <DxcBox shadowDepth={1} margin="medium" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="ShadowDepth 2" theme="light" level={4} />
      <DxcBox shadowDepth={2} margin="medium" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <Title title="Paddings" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall padding" theme="light" level={4} />
      <DxcBox padding="xxsmall">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall padding" theme="light" level={4} />
      <DxcBox padding="xsmall">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small padding" theme="light" level={4} />
      <DxcBox padding="small">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium padding" theme="light" level={4} />
      <DxcBox padding="medium">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large padding" theme="light" level={4} />
      <DxcBox padding="large">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge padding" theme="light" level={4} />
      <DxcBox padding="xlarge">Box</DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge padding" theme="light" level={4} />
      <DxcBox padding="xxlarge">Box</DxcBox>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcBox margin="xxsmall" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcBox margin="xsmall" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcBox margin="small" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcBox margin="medium" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcBox margin="large" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcBox margin="xlarge" padding="medium">
        Box
      </DxcBox>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcBox margin="xxlarge" padding="medium">
        Box
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
  </>
);

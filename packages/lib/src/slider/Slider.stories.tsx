import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcSlider from "./Slider";

export default {
  title: "Slider",
  component: DxcSlider,
} as Meta<typeof DxcSlider>;

const labelFormat = (value: number) => `${value}E100000000000000000000000`;

const Slider = () => (
  <>
    <Title title="Thumb states" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcSlider label="Slider" helperText="Help message" showLimitsValues />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcSlider label="Slider" helperText="Help message" showLimitsValues />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcSlider label="Slider" helperText="Help message" showLimitsValues />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcSlider label="Slider" helperText="Help message" disabled showLimitsValues />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled discrete slider with input" theme="light" level={4} />
      <DxcSlider
        label="Slider"
        helperText="Help message"
        disabled
        defaultValue={40}
        minValue={0}
        maxValue={50}
        showLimitsValues
        showInput
        marks
        step={10}
      />
    </ExampleContainer>
    <Title title="Variants" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Continuous slider" theme="light" level={4} />
      <DxcSlider defaultValue={65} label="Slider" helperText="Help message" showLimitsValues />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Discrete slider" theme="light" level={4} />
      <DxcSlider defaultValue={20} label="Slider" helperText="Help message" showLimitsValues marks step={5} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Discrete slider with input" theme="light" level={4} />
      <DxcSlider
        defaultValue={20}
        minValue={10}
        maxValue={50}
        label="Slider"
        helperText="Help message"
        showLimitsValues
        showInput
        marks
        step={20}
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcSlider label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcSlider label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcSlider label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcSlider label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcSlider label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcSlider label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcSlider label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcSlider label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcSlider label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent" theme="light" level={4} />
      <DxcSlider label="FillParent" size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large limit values labels" theme="light" level={4} />
      <DxcSlider
        label="Slider"
        helperText="Help message"
        showLimitsValues
        labelFormatCallback={labelFormat}
        size="large"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Rounded up slider" theme="light" level={4} />
      <DxcSlider label="Slider" helperText="Help message" showLimitsValues showInput value={15} step={10} marks />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcSlider>;

export const Chromatic: Story = {
  render: Slider,
};

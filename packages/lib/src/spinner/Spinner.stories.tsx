import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcSpinner from "./Spinner";
import DxcButton from "../button/Button";
import { useState } from "react";

export default {
  title: "Spinner",
  component: DxcSpinner,
} as Meta<typeof DxcSpinner>;

const SpinnerStory = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const showOverlay = () => {
    setOverlayVisible(true);
    setTimeout(() => {
      setOverlayVisible(false);
    }, 3000);
  };

  const incrementProgress = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
  };

  return (
    <>
      <ExampleContainer>
        <Title title="Small indeterminate spinner" theme="light" level={4} />
        <DxcSpinner size="small" />
      </ExampleContainer>

      <ExampleContainer>
        <Title title="Medium indeterminate spinner" theme="light" level={4} />
        <DxcSpinner size="medium" />
      </ExampleContainer>

      <ExampleContainer>
        <Title title="Large indeterminate spinner" theme="light" level={4} />
        <DxcSpinner size="large" />
      </ExampleContainer>

      <ExampleContainer>
        <Title title="Medium determinate spinner" theme="light" level={4} />
        <DxcSpinner size="medium" value={progress} showValue />
        <br />
        <DxcButton label="Increment Progress" onClick={incrementProgress} />
      </ExampleContainer>

      <ExampleContainer>
        <Title title="Determinate spinner with custom label" theme="light" level={4} />
        <DxcSpinner 
          size="medium" 
          value={75} 
          showValue 
          label="Processing..." 
        />
      </ExampleContainer>

      <ExampleContainer>
        <Title title="Different progress values" theme="light" level={4} />
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <DxcSpinner size="medium" value={0} showValue label="Starting" />
          <DxcSpinner size="medium" value={25} showValue label="Quarter" />
          <DxcSpinner size="medium" value={50} showValue label="Half" />
          <DxcSpinner size="medium" value={75} showValue label="Almost" />
          <DxcSpinner size="medium" value={100} showValue label="Complete" />
        </div>
      </ExampleContainer>

      <ExampleContainer>
        <Title title="Overlay spinner" theme="light" level={4} />
        <DxcButton label="Show Overlay Spinner" onClick={showOverlay} />
        {overlayVisible && (
          <DxcSpinner 
            overlay 
            size="medium" 
            label="Loading..." 
          />
        )}
      </ExampleContainer>

      <ExampleContainer>
        <Title title="Overlay with progress" theme="light" level={4} />
        <DxcButton label="Show Overlay with Progress" onClick={showOverlay} />
        {overlayVisible && (
          <DxcSpinner 
            overlay 
            size="medium" 
            value={progress} 
            showValue 
            label="Processing..." 
          />
        )}
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcSpinner>;

export const Chromatic: Story = {
  render: SpinnerStory,
};

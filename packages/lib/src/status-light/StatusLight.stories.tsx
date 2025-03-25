import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcStatusLight from "./StatusLight";
import DxcContainer from "../container/Container";

export default {
  title: "Status Light",
  component: DxcStatusLight,
} as Meta<typeof DxcStatusLight>;

const StatusLight = () => (
  <>
    <ExampleContainer>
      <Title title="Default light small" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Default light medium" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Default light large" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info light small" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="info" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info light medium" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="info" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info light large" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="info" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success light small" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="success" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success lights medium" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="success" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success lights large" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="success" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning light small" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="warning" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning light medium" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="warning" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning light large" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="warning" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error light small" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="error" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error lights medium" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="error" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error lights large" theme="light" level={4} />
      <DxcStatusLight label="StatusLight" mode="error" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Long label ellipsis" theme="light" level={4} />
      <DxcContainer width="200px">
        <DxcStatusLight label="Very long label to try to force ellipsis" />
      </DxcContainer>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcStatusLight>;

export const Chromatic: Story = {
  render: StatusLight,
};

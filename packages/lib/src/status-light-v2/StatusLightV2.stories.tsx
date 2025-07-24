import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcStatusLightV2 from "./StatusLightV2";
import DxcContainer from "../container/Container";

export default {
  title: "Status Light V2",
  component: DxcStatusLightV2,
} as Meta<typeof DxcStatusLightV2>;

const StatusLightV2 = () => (
  <>
    <ExampleContainer>
      <Title title="Default light small" theme="light" level={4} />
      <DxcStatusLightV2 label="Default" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Default light medium" theme="light" level={4} />
      <DxcStatusLightV2 label="Default" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Default light large" theme="light" level={4} />
      <DxcStatusLightV2 label="Default" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info light small" theme="light" level={4} />
      <DxcStatusLightV2 label="Info" mode="info" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info light medium" theme="light" level={4} />
      <DxcStatusLightV2 label="Info" mode="info" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Info light large" theme="light" level={4} />
      <DxcStatusLightV2 label="Info" mode="info" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success light small" theme="light" level={4} />
      <DxcStatusLightV2 label="Success" mode="success" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success light medium" theme="light" level={4} />
      <DxcStatusLightV2 label="Success" mode="success" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Success light large" theme="light" level={4} />
      <DxcStatusLightV2 label="Success" mode="success" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning light small" theme="light" level={4} />
      <DxcStatusLightV2 label="Warning" mode="warning" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning light medium" theme="light" level={4} />
      <DxcStatusLightV2 label="Warning" mode="warning" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Warning light large" theme="light" level={4} />
      <DxcStatusLightV2 label="Warning" mode="warning" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error light small" theme="light" level={4} />
      <DxcStatusLightV2 label="Error" mode="error" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error light medium" theme="light" level={4} />
      <DxcStatusLightV2 label="Error" mode="error" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error light large" theme="light" level={4} />
      <DxcStatusLightV2 label="Error" mode="error" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Long label ellipsis" theme="light" level={4} />
      <DxcContainer width="200px">
        <DxcStatusLightV2 label="Very long label to try to force ellipsis" />
      </DxcContainer>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcStatusLightV2>;

export const Chromatic: Story = {
  render: StatusLightV2,
};

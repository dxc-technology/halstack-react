import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcStatusLight from "./StatusLight";

export default {
  title: "Status Light",
  component: DxcStatusLight,
};

export const Chromatic = () => (
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
  </>
);

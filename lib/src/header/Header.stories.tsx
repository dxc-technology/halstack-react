import React from "react";
import DxcHeader from "./Header";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { userEvent, waitFor, within } from "@storybook/testing-library";

export default {
  title: "Header",
  component: DxcHeader,
};

const options: any = [
  {
    value: 1,
    label: "Amazon",
  },
];

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcHeader content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Underlined" theme="light" level={4} />
      <DxcHeader content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />} underlined />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Responsive" theme="light" level={4} />
      <div style={{ width: "400px" }}>
        <DxcHeader
          responsiveContent={(closeHandler) => <DxcHeader.Dropdown options={options} label="Default Dropdown" />}
          underlined
        />
      </div>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        margin="xxsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        margin="xsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        margin="small"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        margin="medium"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        margin="large"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        margin="xlarge"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        margin="xxlarge"
      />
    </ExampleContainer>

    <Title title="Paddings" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall padding" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        padding="xxsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall padding" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        padding="xsmall"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small padding" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        padding="small"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium padding" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        padding="medium"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large padding" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        padding="large"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge padding" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        padding="xlarge"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge padding" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
        padding="xxlarge"
      />
    </ExampleContainer>
  </>
);

const RespHeader = () => (
  <ExampleContainer>
    <Title title="Responsive" theme="light" level={4} />
    <div style={{ maxWidth: "400px" }}>
      <DxcHeader
        responsiveContent={(closeHandler) => <DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
      />
    </div>
  </ExampleContainer>
);

const RespHeaderFocus = () => (
  <ExampleContainer pseudoState="pseudo-focus">
    <Title title="Responsive" theme="light" level={4} />
    <div style={{ maxWidth: "400px" }}>
      <DxcHeader
        responsiveContent={(closeHandler) => <DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
      />
    </div>
  </ExampleContainer>
);

const RespHeaderHover = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Responsive" theme="light" level={4} />
    <div style={{ maxWidth: "400px" }}>
      <DxcHeader
        responsiveContent={(closeHandler) => <DxcHeader.Dropdown options={options} label="Default Dropdown" />}
        underlined
      />
    </div>
  </ExampleContainer>
);

export const ResponsiveHeader = RespHeader.bind({});
ResponsiveHeader.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.click(canvas.getByText("Menu"));
};

export const ResponsiveHeaderFocus = RespHeaderFocus.bind({});
ResponsiveHeaderFocus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.click(canvas.getByText("Menu"));
};

export const ResponsiveHeaderHover = RespHeaderHover.bind({});
ResponsiveHeaderHover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.click(canvas.getByText("Menu"));
};

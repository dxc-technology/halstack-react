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
      <Title title="Default with dropdown" theme="light" level={4} />
      <DxcHeader content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Underlined with text" theme="light" level={4} />
      <DxcHeader underlined content={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>} />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcHeader underlined margin="xxsmall" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcHeader underlined margin="xsmall" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcHeader underlined margin="small" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcHeader underlined margin="medium" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcHeader underlined margin="large" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcHeader underlined margin="xlarge" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcHeader underlined margin="xxlarge" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>
    </ExampleContainer>

    <Title title="Paddings" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall padding" theme="light" level={4} />
      <DxcHeader underlined padding="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall padding" theme="light" level={4} />
      <DxcHeader underlined padding="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small padding" theme="light" level={4} />
      <DxcHeader underlined padding="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium padding" theme="light" level={4} />
      <DxcHeader underlined padding="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large padding" theme="light" level={4} />
      <DxcHeader underlined padding="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge padding" theme="light" level={4} />
      <DxcHeader underlined padding="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge padding" theme="light" level={4} />
      <DxcHeader underlined padding="xxlarge" />
    </ExampleContainer>
  </>
);

export const ResponsiveHeader = () => (
  <ExampleContainer>
    <Title title="Responsive" theme="light" level={4} />
    <DxcHeader
      content={<DxcHeader.Dropdown options={options} label="Default Dropdown" />}
      responsiveContent={(closeHandler) => <DxcHeader.Dropdown options={options} label="Default Dropdown" />}
      underlined
    />
  </ExampleContainer>
);

const RespHeaderFocus = () => (
  <ExampleContainer pseudoState="pseudo-focus">
    <Title title="Responsive focus" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

export const ResponsiveHeaderHover = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Responsive hover" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

const RespHeaderMenu = () => (
  <ExampleContainer>
    <Title title="Responsive menu" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

ResponsiveHeader.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [720] },
};

export const ResponsiveHeaderFocus = RespHeaderFocus.bind({});
ResponsiveHeaderFocus.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [720] },
};
ResponsiveHeaderFocus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.tab();
};

ResponsiveHeaderHover.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375] },
};

export const ResponsiveHeaderMenu = RespHeaderMenu.bind({});
ResponsiveHeaderMenu.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [720] },
};
ResponsiveHeaderMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(() => canvas.findByText("Menu"));
  await userEvent.click(canvas.getByText("Menu"));
};

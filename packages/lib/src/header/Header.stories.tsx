import { userEvent, waitFor, within } from "storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import preview from "../../.storybook/preview";
import { disabledRules } from "../../test/accessibility/rules/specific/header/disabledRules";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcLink from "../link/Link";
import DxcHeader from "./Header";
import { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Header",
  component: DxcHeader,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...preview?.parameters?.a11y?.config?.rules,
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcHeader>;

const options: any = [
  {
    value: 1,
    label: "Amazon",
  },
];

const options2: any = [
  {
    value: 1,
    label: "Home",
  },
  {
    value: 2,
    label: "Release notes",
  },
  {
    value: 3,
    label: "Sign out",
  },
];

const Header = () => (
  <>
    <ExampleContainer>
      <Title title="Default with dropdown" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" onSelectOption={() => {}} />}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Underlined with text" theme="light" level={4} />
      <DxcHeader underlined content={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.</p>} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Underlined, dropdown and links" theme="light" level={4} />
      <DxcHeader
        content={
          <DxcFlex alignItems="center" gap="4rem">
            <DxcLink>Link 1</DxcLink>
            <DxcLink>Link 2</DxcLink>
            <DxcLink>Link 3</DxcLink>
            <DxcHeader.Dropdown options={options2} label="Label" onSelectOption={() => {}} />
          </DxcFlex>
        }
        underlined
      />
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
  </>
);

const HeaderCustomLogo = () => (
  <>
    <ExampleContainer>
      <Title title="Default with dropdown" theme="light" level={4} />
      <DxcHeader
        content={<DxcHeader.Dropdown options={options} label="Default Dropdown" onSelectOption={() => {}} />}
        logo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
          title: "Custom Logo",
          href: "#test",
        }}
      />
    </ExampleContainer>
  </>
);

const Responsive = () => (
  <ExampleContainer>
    <Title title="Responsive" theme="light" level={4} />
    <DxcHeader
      content={<DxcHeader.Dropdown options={options} label="Default Dropdown" onSelectOption={() => {}} />}
      responsiveContent={(closeHandler) => (
        <DxcHeader.Dropdown options={options} label="Default Dropdown" onSelectOption={() => {}} />
      )}
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

const RespHeaderHover = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Responsive hover" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

const RespHeaderMenuMobile = () => (
  <ExampleContainer>
    <Title title="Responsive menu" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

const RespHeaderMenuTablet = () => (
  <ExampleContainer>
    <Title title="Responsive menu" theme="light" level={4} />
    <DxcHeader responsiveContent={(closeHandler) => <p>Lorem ipsum dolor sit amet.</p>} underlined />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcHeader>;

export const Chromatic: Story = {
  render: Header,
};

export const CustomLogo: Story = {
  render: HeaderCustomLogo,
};

export const ResponsiveHeader: Story = {
  render: Responsive,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
};

export const ResponsiveHeaderFocus: Story = {
  render: RespHeaderFocus,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => canvas.findByText("Menu"));
  },
};

export const ResponsiveHeaderHover: Story = {
  render: RespHeaderHover,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => canvas.findByText("Menu"));
  },
};

export const ResponsiveHeaderMenuMobile: Story = {
  render: RespHeaderMenuMobile,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => canvas.findByText("Menu"));
    await userEvent.click(await canvas.findByText("Menu"));
  },
};

export const ResponsiveHeaderMenuTablet: Story = {
  render: RespHeaderMenuTablet,
  parameters: {
    chromatic: { viewports: [720] },
  },
  globals: {
    viewport: { value: "pixelxl", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => canvas.findByText("Menu"));
    await userEvent.click(await canvas.findByText("Menu"));
  },
};

export const ResponsiveHeaderTooltip: Story = {
  render: RespHeaderMenuMobile,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => canvas.findByText("Menu"));
    await userEvent.click(await canvas.findByText("Menu"));
    const closeButton = (await canvas.findAllByRole("button"))[1];
    closeButton != null && (await userEvent.hover(closeButton));
  },
};

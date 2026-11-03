import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";

import DxcButtonLink from "./ButtonLink";
import type ButtonLinkProps from "./types";
import DxcFlex from "../flex/Flex";
import DxcInset from "../inset/Inset";
import DxcTooltip from "../tooltip/Tooltip";

export default {
  title: "Button Link",
  component: DxcButtonLink,
} satisfies Meta<typeof DxcButtonLink>;

const facebookIcon = (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width="438.536px"
    height="438.536px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
  C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
  h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
  C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
  c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
  c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
      />
    </g>
  </svg>
);

const StatesColumn = (props: ButtonLinkProps) => (
  <DxcFlex direction="column">
    <ExampleContainer>
      <DxcButtonLink {...props} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcButtonLink {...props} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcButtonLink {...props} />
    </ExampleContainer>
    <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
      <DxcButtonLink {...props} />
    </ExampleContainer>
    <ExampleContainer>
      <DxcButtonLink {...props} disabled />
    </ExampleContainer>
  </DxcFlex>
);

const ButtonLink = () => (
  <>
    <Title title="Small" theme="light" level={2} />
    <Title title="Primary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="primary"
        size={{ height: "small" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
    </DxcFlex>
    <DxcFlex>
      <DxcFlex direction="column">
        <Title title="Width" theme="light" level={4} />
        <DxcFlex>
          <ExampleContainer>
            <DxcButtonLink
              href="#not-visited"
              icon={facebookIcon}
              mode="primary"
              size={{ height: "small", width: "small" }}
              title="Facebook"
            />
          </ExampleContainer>
          <ExampleContainer>
            <DxcButtonLink
              href="#not-visited"
              label="Medium"
              mode="primary"
              size={{ height: "small", width: "medium" }}
            />
          </ExampleContainer>
          <ExampleContainer>
            <DxcButtonLink
              href="#not-visited"
              label="Large"
              mode="primary"
              size={{ height: "small", width: "large" }}
            />
          </ExampleContainer>
          <ExampleContainer>
            <DxcButtonLink
              href="#not-visited"
              label="Fit content"
              mode="primary"
              size={{ height: "small", width: "fitContent" }}
            />
          </ExampleContainer>
        </DxcFlex>
      </DxcFlex>
    </DxcFlex>
    <ExampleContainer>
      <DxcButtonLink
        href="#not-visited"
        label="Fill parent"
        mode="primary"
        size={{ height: "small", width: "fillParent" }}
      />
    </ExampleContainer>
    <Title title="Secondary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="secondary" size={{ height: "small" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="secondary"
        size={{ height: "small" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
    </DxcFlex>
    <Title title="Tertiary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="tertiary"
        size={{ height: "small" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
    </DxcFlex>
    <Title title="Medium" theme="light" level={2} />
    <Title title="Primary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="primary"
        size={{ height: "medium" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
    </DxcFlex>
    <Title title="Secondary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="secondary" size={{ height: "medium" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="secondary"
        size={{ height: "medium" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
    </DxcFlex>
    <Title title="Tertiary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "medium" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="tertiary"
        size={{ height: "medium" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
    </DxcFlex>
    <Title title="Large" theme="light" level={2} />
    <Title title="Primary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="primary"
        size={{ height: "large" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
    </DxcFlex>
    <Title title="Secondary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="secondary" size={{ height: "large" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="secondary"
        size={{ height: "large" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
    </DxcFlex>
    <Title title="Tertiary" theme="light" level={3} />
    <DxcFlex>
      <StatesColumn href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      <StatesColumn href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      <StatesColumn
        href="#not-visited"
        label="Button Link"
        icon="home"
        iconPosition="after"
        mode="tertiary"
        size={{ height: "large" }}
      />
      <StatesColumn href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
    </DxcFlex>
  </>
);

const Tooltip = () => (
  <>
    <Title title="Default tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcButtonLink label="Button Link" href="#not-visited" title="Button Link" />
    </ExampleContainer>
  </>
);

const NestedTooltip = () => (
  <>
    <Title title="Nested tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcInset top="var(--spacing-padding-xxl)">
        <DxcTooltip label="Button Link" position="top">
          <DxcButtonLink label="Button Link" href="#not-visited" title="Button Link" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcButtonLink>;
export const Chromatic: Story = {
  render: ButtonLink,
};

export const ButtonLinkTooltip: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonLink = await canvas.findByRole("link");
    await userEvent.hover(buttonLink);
  },
};

export const NestedButtonLinkTooltip: Story = {
  render: NestedTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonLink = await canvas.findByRole("link");
    await userEvent.hover(buttonLink);
  },
};

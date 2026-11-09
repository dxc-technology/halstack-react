import { Fragment } from "react";
import type { ComponentProps } from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";

import DxcButtonLink from "./ButtonLink";
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

type Mode = "primary" | "secondary" | "tertiary";
type Height = "small" | "medium" | "large";
type PseudoState = ComponentProps<typeof ExampleContainer>["pseudoState"];
type Width = "small" | "medium" | "large" | "fitContent" | "fillParent";

const modes: { mode: Mode; title: string }[] = [
  { mode: "primary", title: "Primary" },
  { mode: "secondary", title: "Secondary" },
  { mode: "tertiary", title: "Tertiary" },
];

const sizeGroups: { title: string; height: Height }[] = [
  { title: "Small", height: "small" },
  { title: "Medium", height: "medium" },
  { title: "Large", height: "large" },
];

const pseudoStates: { title: string; pseudoState?: PseudoState }[] = [
  { title: "Default" },
  { title: "Hover", pseudoState: "pseudo-hover" },
  { title: "Focus", pseudoState: "pseudo-focus" },
  { title: "Active", pseudoState: ["pseudo-active", "pseudo-focus"] },
  { title: "Visited", pseudoState: "pseudo-visited" },
  { title: "Visited and hover", pseudoState: ["pseudo-visited", "pseudo-hover"] },
  { title: "Visited and focus", pseudoState: ["pseudo-visited", "pseudo-focus"] },
  { title: "Visited and active", pseudoState: ["pseudo-visited", "pseudo-active", "pseudo-focus"] },
];

type ButtonsOptions = {
  size?: ComponentProps<typeof DxcButtonLink>["size"];
  pseudoState?: PseudoState;
  disabled?: boolean;
};

const getButtons = (mode: Mode, { size, pseudoState, disabled }: ButtonsOptions = {}) => {
  const buttonProps = { href: "#example", mode, size, disabled };
  return [
    <ExampleContainer key="label" pseudoState={pseudoState}>
      <DxcButtonLink {...buttonProps} label="Button Link" />
    </ExampleContainer>,
    <ExampleContainer key="label-icon" pseudoState={pseudoState}>
      <DxcButtonLink {...buttonProps} label="Button Link" icon="home" />
    </ExampleContainer>,
    <ExampleContainer key="label-icon-after" pseudoState={pseudoState}>
      <DxcButtonLink {...buttonProps} label="Button Link" icon="home" iconPosition="after" />
    </ExampleContainer>,
    <ExampleContainer key="icon-home" pseudoState={pseudoState}>
      <DxcButtonLink {...buttonProps} icon="home" title="Home" />
    </ExampleContainer>,
    <ExampleContainer key="icon-facebook" pseudoState={pseudoState}>
      <DxcButtonLink {...buttonProps} icon={facebookIcon} title="Facebook" />
    </ExampleContainer>,
  ];
};

const getWidthButtons = (height: Height) => {
  const size = (width: Width) => ({ height, width });
  return {
    buttons: [
      <ExampleContainer key="facebook">
        <DxcButtonLink href="#example" icon={facebookIcon} mode="primary" size={size("small")} title="Facebook" />
      </ExampleContainer>,
      <ExampleContainer key="medium">
        <DxcButtonLink href="#example" label="Medium" mode="primary" size={size("medium")} />
      </ExampleContainer>,
      <ExampleContainer key="large">
        <DxcButtonLink href="#example" label="Large" mode="primary" size={size("large")} />
      </ExampleContainer>,
      <ExampleContainer key="fit-content">
        <DxcButtonLink href="#example" label="Fit content" mode="primary" size={size("fitContent")} />
      </ExampleContainer>,
    ],
    fillParent: (
      <ExampleContainer>
        <DxcButtonLink href="#example" label="Fill parent" mode="primary" size={size("fillParent")} />
      </ExampleContainer>
    ),
  };
};

const ButtonLink = () => (
  <>
    {sizeGroups.map(({ title, height }) => {
      const size = { height };
      const widthButtons = getWidthButtons(height);
      return (
        <Fragment key={title}>
          <Title title={title} theme="light" level={2} />
          {modes.map(({ mode, title: modeTitle }) => (
            <Fragment key={mode}>
              <Title title={modeTitle} theme="light" level={3} />
              {pseudoStates.map(({ title: stateTitle, pseudoState }) => (
                <Fragment key={stateTitle}>
                  <Title title={stateTitle} theme="light" level={4} />
                  <DxcFlex>{getButtons(mode, { size, pseudoState })}</DxcFlex>
                </Fragment>
              ))}
              <Title title="Disabled" theme="light" level={4} />
              <DxcFlex>{getButtons(mode, { size, disabled: true })}</DxcFlex>
              {mode === "primary" && (
                <>
                  <Title title="Width" theme="light" level={4} />
                  <DxcFlex>{widthButtons.buttons}</DxcFlex>
                  {widthButtons.fillParent}
                </>
              )}
            </Fragment>
          ))}
        </Fragment>
      );
    })}
  </>
);

const Tooltip = () => (
  <>
    <Title title="Default tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcButtonLink label="Button Link" href="#example" title="Button Link" />
    </ExampleContainer>
  </>
);

const NestedTooltip = () => (
  <>
    <Title title="Nested tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcInset top="var(--spacing-padding-xxl)">
        <DxcTooltip label="Button Link" position="top">
          <DxcButtonLink label="Button Link" href="#example" title="Button Link" />
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

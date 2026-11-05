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

const ButtonLink = () => (
  <>
    <Title title="Default size" theme="light" level={2} />
    <Title title="Primary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" ariaLabel="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="primary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" title="Home" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="primary" title="Facebook" disabled />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Secondary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="secondary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="secondary" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" title="Home" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="secondary" title="Facebook" disabled />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Tertiary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" iconPosition="after" mode="tertiary" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" title="Home" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon={facebookIcon} mode="tertiary" title="Facebook" disabled />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Small" theme="light" level={2} />
    <Title title="Primary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "small" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="primary"
          size={{ height: "small" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "small" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="primary"
          size={{ height: "small" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "small" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
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
        <DxcButtonLink href="#not-visited" label="Medium" mode="primary" size={{ height: "small", width: "medium" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Large" mode="primary" size={{ height: "small", width: "large" }} />
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
    <ExampleContainer>
      <DxcButtonLink
        href="#not-visited"
        label="Fill parent"
        mode="primary"
        size={{ height: "small", width: "fillParent" }}
      />
    </ExampleContainer>
    <Title title="Secondary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "small" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "small" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="secondary"
          size={{ height: "small" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "small" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Tertiary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "small" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "small" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "small" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "small" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "small" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="tertiary"
          size={{ height: "small" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "small" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Medium" theme="light" level={2} />
    <Title title="Primary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "medium" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="primary"
          size={{ height: "medium" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "medium" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="primary"
          size={{ height: "medium" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Width" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "medium", width: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Medium" mode="primary" size={{ height: "medium", width: "medium" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Large" mode="primary" size={{ height: "medium", width: "large" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Fit content"
          mode="primary"
          size={{ height: "medium", width: "fitContent" }}
        />
      </ExampleContainer>
    </DxcFlex>
    <ExampleContainer>
      <DxcButtonLink
        href="#not-visited"
        label="Fill parent"
        mode="primary"
        size={{ height: "medium", width: "fillParent" }}
      />
    </ExampleContainer>
    <Title title="Secondary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "medium" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "medium" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="secondary"
          size={{ height: "medium" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "medium" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Tertiary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "medium" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "medium" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "medium" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="tertiary"
          size={{ height: "medium" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "medium" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Large" theme="light" level={2} />
    <Title title="Primary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="primary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="primary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="primary" size={{ height: "large" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="primary"
          size={{ height: "large" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="primary"
          size={{ height: "large" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="primary"
          size={{ height: "large" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Width" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="primary"
          size={{ height: "large", width: "small" }}
          title="Facebook"
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Medium" mode="primary" size={{ height: "large", width: "medium" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Large" mode="primary" size={{ height: "large", width: "large" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Fit content"
          mode="primary"
          size={{ height: "large", width: "fitContent" }}
        />
      </ExampleContainer>
    </DxcFlex>
    <ExampleContainer>
      <DxcButtonLink
        href="#not-visited"
        label="Fill parent"
        mode="primary"
        size={{ height: "large", width: "fillParent" }}
      />
    </ExampleContainer>
    <Title title="Secondary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="secondary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="secondary" size={{ height: "large" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="secondary"
          size={{ height: "large" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="secondary"
          size={{ height: "large" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="secondary"
          size={{ height: "large" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Tertiary" theme="light" level={3} />
    <Title title="Default" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-visited">
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and hover" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-hover"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and focus" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Visited and active" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" label="Button Link" icon="home" mode="tertiary" size={{ height: "large" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
        />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink href="#not-visited" icon="home" mode="tertiary" size={{ height: "large" }} title="Home" />
      </ExampleContainer>
      <ExampleContainer pseudoState={["pseudo-visited", "pseudo-active", "pseudo-focus"]}>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
        />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Disabled" theme="light" level={4} />
    <DxcFlex>
      <ExampleContainer>
        <DxcButtonLink href="#not-visited" label="Button Link" mode="tertiary" size={{ height: "large" }} disabled />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          mode="tertiary"
          size={{ height: "large" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          label="Button Link"
          icon="home"
          iconPosition="after"
          mode="tertiary"
          size={{ height: "large" }}
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon="home"
          mode="tertiary"
          size={{ height: "large" }}
          title="Home"
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <DxcButtonLink
          href="#not-visited"
          icon={facebookIcon}
          mode="tertiary"
          size={{ height: "large" }}
          title="Facebook"
          disabled
        />
      </ExampleContainer>
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

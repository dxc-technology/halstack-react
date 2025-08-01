import DxcButton from "./Button";
import DxcFlex from "../flex/Flex";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcInset from "../inset/Inset";
import DxcTooltip from "../tooltip/Tooltip";
import { userEvent, within } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Button",
  component: DxcButton,
} as Meta<typeof DxcButton>;

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

const Button = () => {
  const [newTheme, setNewTheme] = useState<Record<string, string | number>>({
    "--color-primary-50": "#d3f0b4",
    "--color-primary-100": "#a2df5e",
    "--color-primary-200": "#77c81f",
    "--color-primary-300": "#68ad1b",
    "--color-primary-400": "#579317",
    "--color-primary-500": "#487813",
    "--color-primary-600": "#39600f",
    "--color-primary-700": "#2b470b",
    "--color-primary-800": "#1c2f07",
    "--color-primary-900": "#0d1503",
    "--color-secondary-50": "#d0ebff",
    "--color-secondary-100": "#98d4ff",
    "--color-secondary-200": "#5fbcff",
    "--color-secondary-300": "#31a2f4",
    "--color-secondary-400": "#2989ce",
    "--color-secondary-500": "#2271a9",
    "--color-secondary-600": "#1b5986",
    "--color-secondary-700": "#144364",
    "--color-secondary-800": "#0d2c43",
    "--color-secondary-900": "#06141f",
    "--color-tertiary-50": "#fbe796",
    "--color-tertiary-100": "#f1ca2a",
    "--color-tertiary-200": "#d3b125",
    "--color-tertiary-300": "#b79a20",
    "--color-tertiary-400": "#9a811b",
    "--color-tertiary-500": "#7f6a16",
    "--color-tertiary-600": "#655412",
    "--color-tertiary-700": "#4b3f0d",
    "--color-tertiary-800": "#322909",
    "--color-tertiary-900": "#161304",
    "--color-success-50": "#c5f2d2",
    "--color-success-100": "#7ee29a",
    "--color-success-200": "#53ca75",
    "--color-success-300": "#48af65",
    "--color-success-400": "#3d9455",
    "--color-success-500": "#327a46",
    "--color-success-600": "#286138",
    "--color-success-700": "#1d4729",
    "--color-success-800": "#132f1b",
    "--color-success-900": "#09150c",
    "--color-error-50": "#ffdfe3",
    "--color-error-100": "#ffbcc5",
    "--color-error-200": "#fe96a4",
    "--color-error-300": "#fe6b7f",
    "--color-error-400": "#f8334d",
    "--color-error-500": "#cd2a40",
    "--color-error-600": "#a32133",
    "--color-error-700": "#7b1926",
    "--color-error-800": "#52111a",
    "--color-error-900": "#28080c",
    "--color-warning-50": "#fce4c9",
    "--color-warning-100": "#f9c386",
    "--color-warning-200": "#f5a242",
    "--color-warning-300": "#d68b35",
    "--color-warning-400": "#b5752d",
    "--color-warning-500": "#956025",
    "--color-warning-600": "#764c1d",
    "--color-warning-700": "#573916",
    "--color-warning-800": "#3a250e",
    "--color-warning-900": "#1b1107",
    "--color-neutral-50": "#e7e7e7",
    "--color-neutral-100": "#cdcdcd",
    "--color-neutral-200": "#b4b4b4",
    "--color-neutral-300": "#9c9c9c",
    "--color-neutral-400": "#838383",
    "--color-neutral-500": "#6c6c6c",
    "--color-neutral-600": "#555555",
    "--color-neutral-700": "#404040",
    "--color-neutral-800": "#292929",
    "--color-neutral-900": "#131313",
    "--color-alpha-100-a": "#cdcdcd1a",
    "--color-alpha-200-a": "#b4b4b433",
    "--color-alpha-300-a": "#9c9c9c4d",
    "--color-alpha-400-a": "#83838366",
    "--color-alpha-500-a": "#6c6c6c80",
    "--color-alpha-600-a": "#55555599",
    "--color-alpha-700-a": "#404040b2",
    "--color-alpha-800-a": "#292929cc",
    "--color-alpha-900-a": "#131313e5",
    "--color-black": "#000000",
    "--color-white": "#ffffff",
  });
  return (
    <>
      <>
        <Title title="Default" theme="light" level={2} />
        <HalstackProvider newTheme={newTheme}>
          <Title title="Small" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="default"
                  onClick={() => setNewTheme({ "--color-primary-700": "#fabada" })}
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" disabled icon="home" iconPosition="after" size={{ height: "small" }} />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" size={{ height: "small" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton icon={facebookIcon} size={{ height: "small", width: "small" }} title="Facebook" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" size={{ height: "small", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" size={{ height: "small", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" size={{ height: "small", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" size={{ height: "small", width: "fillParent" }} />
          </ExampleContainer>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Margin" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton label="xxsmall" size={{ height: "small" }} margin="xxsmall" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xsmall" size={{ height: "small" }} margin="xsmall" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="small" size={{ height: "small" }} margin="small" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="medium" size={{ height: "small" }} margin="medium" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="large" size={{ height: "small" }} margin="large" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xlarge" size={{ height: "small" }} margin="xlarge" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xxlarge" size={{ height: "small" }} margin="xxlarge" />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" icon="home" size={{ height: "small" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" icon="home" size={{ height: "small" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </HalstackProvider>
        <>
          <Title title="Medium" theme="light" level={2} />
          <Title title="Primary" theme="light" level={2} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" iconPosition="after" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" size={{ height: "medium" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton label="Small Small" size={{ height: "medium", width: "small" }} title="Facebook" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium Medium Medium" size={{ height: "medium", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large Large Large Large Large Large" size={{ height: "medium", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" size={{ height: "medium", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" size={{ height: "medium", width: "fillParent" }} />
          </ExampleContainer>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Margin" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton label="xxsmall" size={{ height: "medium" }} margin="xxsmall" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xsmall" size={{ height: "medium" }} margin="xsmall" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="small" size={{ height: "medium" }} margin="small" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="medium" size={{ height: "medium" }} margin="medium" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="large" size={{ height: "medium" }} margin="large" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xlarge" size={{ height: "medium" }} margin="xlarge" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xxlarge" size={{ height: "medium" }} margin="xxlarge" />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" icon="home" size={{ height: "medium" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" icon="home" size={{ height: "medium" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Large" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" icon="home" iconPosition="after" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton icon={facebookIcon} size={{ height: "large", width: "small" }} title="Facebook" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" size={{ height: "large", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" size={{ height: "large", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" size={{ height: "large", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" size={{ height: "large", width: "fillParent" }} />
          </ExampleContainer>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Margin" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton label="xxsmall" size={{ height: "large" }} margin="xxsmall" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xsmall" size={{ height: "large" }} margin="xsmall" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="small" size={{ height: "large" }} margin="small" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="medium" size={{ height: "large" }} margin="medium" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="large" size={{ height: "large" }} margin="large" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xlarge" size={{ height: "large" }} margin="xlarge" />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="xxlarge" size={{ height: "large" }} margin="xxlarge" />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" label="Secondary" icon="home" iconPosition="after" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" label="Tertiary" icon="home" iconPosition="after" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
      </>
      <>
        <Title title="Error" theme="light" level={2} />
        <>
          <Title title="Small" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="error" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="error" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="error" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="error" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="error" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="error" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="error" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="error" size={{ height: "small" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="error"
                    size={{ height: "small", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="error" size={{ height: "small", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="error" size={{ height: "small", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="error" size={{ height: "small", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="error" size={{ height: "small", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Medium" theme="light" level={2} />
          <Title title="Primary" theme="light" level={2} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="error" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="error" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="error" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="error"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="error" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="error" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="error" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="error" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="error" size={{ height: "medium" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="error"
                    size={{ height: "medium", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="error" size={{ height: "medium", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="error" size={{ height: "medium", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="error" size={{ height: "medium", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="error" size={{ height: "medium", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Large" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="error" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="error" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="error" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="error" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="error" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="error" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="error" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="error" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="error" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="error" icon="home" iconPosition="after" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="error" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="error" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="error" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="error" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="error" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="error"
                    size={{ height: "large", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="error" size={{ height: "large", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="error" size={{ height: "large", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="error" size={{ height: "large", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="error" size={{ height: "large", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" disabled icon="home" />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="error"
                  label="Secondary"
                  disabled
                  icon="home"
                  iconPosition="after"
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="error" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" disabled icon="home" />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="error"
                  label="Tertiary"
                  disabled
                  icon="home"
                  iconPosition="after"
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="error" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="error" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
      </>
      <>
        <Title title="Warning" theme="light" level={2} />
        <>
          <Title title="Small" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="warning" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="warning" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="warning" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" disabled icon="home" size={{ height: "small" }} />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  disabled
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="warning" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="warning" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="warning" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="warning" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="warning" size={{ height: "small" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="warning"
                    size={{ height: "small", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="warning" size={{ height: "small", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="warning" size={{ height: "small", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="warning" size={{ height: "small", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="warning" size={{ height: "small", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  disabled
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  disabled
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  disabled
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  disabled
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Medium" theme="light" level={2} />
          <Title title="Primary" theme="light" level={2} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="warning" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="warning" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="warning" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="warning" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" disabled icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="warning"
                  disabled
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="warning" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="warning" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="warning" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="warning" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="warning" size={{ height: "medium" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="warning"
                    size={{ height: "medium", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="warning" size={{ height: "medium", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="warning" size={{ height: "medium", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="warning" size={{ height: "medium", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="warning" size={{ height: "medium", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  disabled
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  disabled
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Large" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="warning" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="warning" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="warning" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="warning" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="warning" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="warning" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" disabled icon="home" />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="warning" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="warning" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="warning" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="warning" disabled icon="home" iconPosition="after" />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="warning" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="warning" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="warning" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="warning" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="warning" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="warning"
                    size={{ height: "large", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="warning" size={{ height: "large", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="warning" size={{ height: "large", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="warning" size={{ height: "large", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="warning" size={{ height: "large", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" disabled icon="home" />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="warning"
                  label="Secondary"
                  disabled
                  icon="home"
                  iconPosition="after"
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="warning" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" disabled icon="home" />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="warning"
                  label="Tertiary"
                  disabled
                  icon="home"
                  iconPosition="after"
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="warning" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="warning" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
      </>
      <>
        <Title title="Success" theme="light" level={2} />
        <>
          <Title title="Small" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="success" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="success" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="success" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" disabled icon="home" size={{ height: "small" }} />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="success"
                  disabled
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="success" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="success" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="success" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="success" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="success" size={{ height: "small" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="success"
                    size={{ height: "small", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="success" size={{ height: "small", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="success" size={{ height: "small", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="success" size={{ height: "small", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="success" size={{ height: "small", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  disabled
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  disabled
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  disabled
                  icon="home"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  disabled
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Medium" theme="light" level={2} />
          <Title title="Primary" theme="light" level={2} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="success" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="success" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="success" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" icon="home" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="success"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="success" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="success" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="success" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="success" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="success" size={{ height: "medium" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="success"
                    size={{ height: "medium", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="success" size={{ height: "medium", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="success" size={{ height: "medium", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="success" size={{ height: "medium", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="success" size={{ height: "medium", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Large" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="success" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="success" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="success" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="success" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="success" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="success" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="success" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="success" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="success" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="success" icon="home" iconPosition="after" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="success" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="success" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="success" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="success" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="success" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="success"
                    size={{ height: "large", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="success" size={{ height: "large", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="success" size={{ height: "large", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="success" size={{ height: "large", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="success" size={{ height: "large", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="success"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="success" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="success"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="success" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="success" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
      </>
      <>
        <Title title="Info" theme="light" level={2} />
        <>
          <Title title="Small" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="info" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="info" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="info" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="info" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="info" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="info" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="info" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="info" size={{ height: "small" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="info"
                    size={{ height: "small", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="info" size={{ height: "small", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="info" size={{ height: "small", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="info" size={{ height: "small", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="info" size={{ height: "small", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "small" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "small" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "small" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "small" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  icon="home"
                  size={{ height: "small" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Medium" theme="light" level={2} />
          <Title title="Primary" theme="light" level={2} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="info" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="info" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="info" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  label="Primary"
                  semantic="info"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="info" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="info" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="info" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="info" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="info" size={{ height: "medium" }} disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="info"
                    size={{ height: "medium", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="info" size={{ height: "medium", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="info" size={{ height: "medium", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="info" size={{ height: "medium", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="info" size={{ height: "medium", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" size={{ height: "medium" }} disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" size={{ height: "medium" }} />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  label="Tertiary"
                  icon="home"
                  iconPosition="after"
                  size={{ height: "medium" }}
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" icon="home" size={{ height: "medium" }} title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="tertiary"
                  semantic="info"
                  icon="home"
                  size={{ height: "medium" }}
                  disabled
                  title="Home"
                />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
        <>
          <Title title="Large" theme="light" level={2} />
          <Title title="Primary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="info" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="info" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="info" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="info" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="info" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="info" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton label="Primary" semantic="info" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton label="Primary" semantic="info" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton label="Primary" semantic="info" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Primary" semantic="info" icon="home" iconPosition="after" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton icon="home" semantic="info" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton icon="home" semantic="info" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton icon="home" semantic="info" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton icon="home" semantic="info" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton icon="home" semantic="info" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <DxcFlex>
            <DxcFlex direction="column">
              <Title title="Width" theme="light" level={4} />
              <DxcFlex>
                <ExampleContainer>
                  <DxcButton
                    icon={facebookIcon}
                    semantic="info"
                    size={{ height: "large", width: "small" }}
                    title="Facebook"
                  />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Medium" semantic="info" size={{ height: "large", width: "medium" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Large" semantic="info" size={{ height: "large", width: "large" }} />
                </ExampleContainer>
                <ExampleContainer>
                  <DxcButton label="Fit content" semantic="info" size={{ height: "large", width: "fitContent" }} />
                </ExampleContainer>
              </DxcFlex>
            </DxcFlex>
          </DxcFlex>
          <ExampleContainer>
            <DxcButton label="Fill parent" semantic="info" size={{ height: "large", width: "fillParent" }} />
          </ExampleContainer>
          <Title title="Secondary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" label="Secondary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" label="Secondary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton
                  mode="secondary"
                  semantic="info"
                  label="Secondary"
                  icon="home"
                  iconPosition="after"
                  disabled
                />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="secondary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="secondary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="secondary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="secondary" semantic="info" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
          <Title title="Tertiary" theme="light" level={3} />
          <DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" iconPosition="after" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="home" iconPosition="after" disabled />
              </ExampleContainer>
            </DxcFlex>
            <DxcFlex direction="column">
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-hover">
                <DxcButton mode="tertiary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState="pseudo-focus">
                <DxcButton mode="tertiary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
                <DxcButton mode="tertiary" semantic="info" icon="home" title="Home" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton mode="tertiary" semantic="info" icon="home" disabled title="Home" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </>
      </>
    </>
  );
};

const Tooltip = () => (
  <>
    <Title title="Default tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcButton label="Button" title="Button" />
    </ExampleContainer>
  </>
);

const NestedTooltip = () => (
  <>
    <Title title="Nested tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcInset top="var(--spacing-padding-xxl)">
        <DxcTooltip label="Button" position="top">
          <DxcButton label="Button" title="Button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcButton>;

export const Chromatic: Story = {
  render: Button,
};

export const ButtonTooltip: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

export const NestedButtonTooltip: Story = {
  render: NestedTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

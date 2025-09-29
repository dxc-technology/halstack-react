import ExampleContainer from "./../.storybook/components/ExampleContainer";
import Title from "./../.storybook/components/Title";
import { Meta, StoryObj } from "@storybook/react";
import { HalstackProvider } from "./HalstackContext";
import { useState } from "react";
import DxcButton from "./button/Button";

export default {
  title: "HalstackContext",
  component: HalstackProvider,
} as Meta<typeof HalstackProvider>;

const Provider = () => {
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
  });
  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <HalstackProvider opinionatedTheme={newTheme}>
          <DxcButton
            label="Primary"
            semantic="default"
            onClick={() =>
              setNewTheme({
                "--color-primary-50": "#ffd6e7",
                "--color-primary-100": "#ff99c2",
                "--color-primary-200": "#ff66a3",
                "--color-primary-300": "#e05584",
                "--color-primary-400": "#c5446d",
                "--color-primary-500": "#a83659",
                "--color-primary-600": "#872b47",
                "--color-primary-700": "#661f35",
                "--color-primary-800": "#441423",
                "--color-primary-900": "#220a12",
              })
            }
            size={{ height: "small" }}
          />
        </HalstackProvider>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof HalstackProvider>;

export const Chromatic: Story = {
  render: Provider,
};

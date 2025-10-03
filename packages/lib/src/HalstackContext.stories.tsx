import ExampleContainer from "./../.storybook/components/ExampleContainer";
import Title from "./../.storybook/components/Title";
import { Meta, StoryObj } from "@storybook/react-vite";
import { HalstackProvider } from "./HalstackContext";
import { useState } from "react";
import DxcButton from "./button/Button";
import DxcDateInput from "./date-input/DateInput";
import DxcFlex from "./flex/Flex";
import DxcSelect from "./select/Select";
import DxcDialog from "./dialog/Dialog";
import DxcInset from "./inset/Inset";
import DxcAlert from "./alert/Alert";

export default {
  title: "HalstackContext",
  component: HalstackProvider,
} as Meta<typeof HalstackProvider>;

const Provider = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const handleClickDialog = () => {
    setDialogVisible(!isDialogVisible);
  };
  const handleClickAlert = () => {
    setAlertVisible(!isAlertVisible);
  };
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
    "--color-secondary-50": "#fff9d6",
    "--color-secondary-100": "#ffed99",
    "--color-secondary-200": "#ffe066",
    "--color-secondary-300": "#e6c84d",
    "--color-secondary-400": "#ccad33",
    "--color-secondary-500": "#b39426",
    "--color-secondary-600": "#8f741f",
    "--color-secondary-700": "#6b5517",
    "--color-secondary-800": "#47370f",
    "--color-secondary-900": "#241b08",
    "--color-alpha-800-a": "#9a2257cc",
  });
  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];
  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <HalstackProvider opinionatedTheme={newTheme}>
          <DxcFlex gap="var(--spacing-padding-l)" direction="column" alignItems="baseline">
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
                  "--color-brown-50": "#f3e6db",
                  "--color-secondary-100": "#e2c7a9",
                  "--color-secondary-200": "#d1a577",
                  "--color-secondary-300": "#b88252",
                  "--color-secondary-400": "#99673f",
                  "--color-secondary-500": "#7a5232",
                  "--color-secondary-600": "#5c3f26",
                  "--color-secondary-700": "#3e2b19",
                  "--color-secondary-800": "#21170d",
                  "--color-secondary-900": "#100b06",
                  "--color-alpha-800-a": "#fabadacc",
                })
              }
              size={{ height: "small" }}
            />
            <DxcButton
              label="Show Dialog"
              semantic="default"
              mode="secondary"
              size={{ height: "small" }}
              onClick={handleClickDialog}
            />
            {isDialogVisible && (
              <DxcDialog onCloseClick={handleClickDialog}>
                <DxcInset space="var(--spacing-padding-l)">
                  <DxcButton label="Primary" semantic="default" mode="tertiary" size={{ height: "small" }} />
                  <DxcButton label="Primary" semantic="info" size={{ height: "small" }} />
                  <DxcButton label="Primary" semantic="info" mode="secondary" size={{ height: "small" }} />
                  <DxcDateInput />
                  <DxcSelect options={options} />
                </DxcInset>
              </DxcDialog>
            )}
            <DxcButton
              label="Alert visibility"
              semantic="default"
              mode="tertiary"
              size={{ height: "small" }}
              onClick={handleClickAlert}
            />
            <DxcButton label="Primary" semantic="info" size={{ height: "small" }} />
            <DxcButton label="Primary" semantic="info" mode="secondary" size={{ height: "small" }} />
            <DxcDateInput />
            <DxcSelect options={options} />

            {isAlertVisible && (
              <DxcAlert
                title="Information"
                mode="modal"
                message={{ text: "Your document has been auto-saved.", onClose: handleClickAlert }}
              />
            )}
          </DxcFlex>
        </HalstackProvider>
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof HalstackProvider>;

export const Chromatic: Story = {
  render: Provider,
};

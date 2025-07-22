import { userEvent, within } from "storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcToast from "./Toast";
import DxcToastsQueue from "./ToastsQueue";
import useToast from "./useToast";
import { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Toast",
  component: DxcToast,
} satisfies Meta<typeof DxcToast>;

const action = {
  label: "Action",
  onClick: () => {
    console.log("Action clicked");
  },
};
const actionIcon = {
  label: "Action",
  onClick: () => {
    console.log("Action clicked");
  },
  icon: "restart_alt",
};
const onClear = () => {};

const Toast = () => (
  <>
    <Title title="Default" level={2} />
    <ExampleContainer>
      <Title title="Simple" />
      <DxcToast semantic="default" duration={2147483647} message="This is a toast." onClear={onClear} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With material icon" />
      <DxcToast semantic="default" duration={2147483647} message="This is a toast." onClear={onClear} icon="rocket" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With custom icon" />
      <DxcToast
        semantic="default"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="currentColor"
          >
            <path d="M120-566q0-90 40-165t107-125l36 48q-56 42-89.5 104.5T180-566h-60Zm660 0q0-75-33.5-137.5T657-808l36-48q67 50 107 125t40 165h-60ZM160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z" />
          </svg>
        }
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action" />
      <DxcToast
        semantic="default"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={action}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action icon" />
      <DxcToast
        semantic="default"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={actionIcon}
      />
    </ExampleContainer>
    <Title title="Info" level={2} />
    <ExampleContainer>
      <Title title="Simple" />
      <DxcToast semantic="info" duration={2147483647} message="This is a toast." onClear={onClear} hideSemanticIcon />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon" />
      <DxcToast semantic="info" duration={2147483647} message="This is a toast." onClear={onClear} icon="rocket" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action" />
      <DxcToast
        semantic="info"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={action}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action icon" />
      <DxcToast
        semantic="info"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={actionIcon}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With loading indicator" />
      <DxcToast
        semantic="info"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        action={actionIcon}
        loading
      />
    </ExampleContainer>
    <Title title="Success" level={2} />
    <ExampleContainer>
      <Title title="Simple" />
      <DxcToast
        semantic="success"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        hideSemanticIcon
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon" />
      <DxcToast semantic="success" duration={2147483647} message="This is a toast." onClear={onClear} icon="rocket" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action" />
      <DxcToast
        semantic="success"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={action}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action icon" />
      <DxcToast
        semantic="success"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={actionIcon}
      />
    </ExampleContainer>
    <Title title="Warning" level={2} />
    <ExampleContainer>
      <Title title="Simple" />
      <DxcToast
        semantic="warning"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        hideSemanticIcon
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon" />
      <DxcToast semantic="warning" duration={2147483647} message="This is a toast." onClear={onClear} icon="rocket" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action" />
      <DxcToast
        semantic="warning"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={action}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With action icon" />
      <DxcToast
        semantic="warning"
        duration={2147483647}
        message="This is a toast."
        onClear={onClear}
        icon="rocket"
        action={actionIcon}
      />
    </ExampleContainer>
    <Title title="Extra scenarios" level={2} />
    <ExampleContainer>
      <Title title="Ellipsis" />
      <DxcToast
        semantic="default"
        duration={2147483647}
        message="This is a very long label for a Toast. Please, always try to avoid this king of messages, be brief and concise."
        onClear={onClear}
        icon="rocket"
        action={actionIcon}
      />
    </ExampleContainer>
  </>
);

const Screens = () => {
  const toast = useToast();

  return (
    <ExampleContainer>
      <Title title="Screen placement" />
      <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
        <DxcButton
          label="Show default toast"
          onClick={() => {
            toast.default({ message: "This is a simple placed toast." });
          }}
        />
        <DxcButton
          label="Show info toast"
          onClick={() => {
            toast.info({
              message:
                "This is a very long label for a Toast. Please, always try to avoid this king of messages, be brief and concise.",
              action: actionIcon,
            });
          }}
        />
        <DxcButton
          label="Show success toast"
          onClick={() => {
            toast.success({
              message:
                "This is another very long label for a Toast. Please, always try to avoid this king of messages, be brief and concise.",
              action: action,
            });
          }}
        />
      </DxcFlex>
    </ExampleContainer>
  );
};

const ToastsQueue = () => (
  <DxcToastsQueue>
    <Screens />
  </DxcToastsQueue>
);

const playFunc = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(await canvas.findByText("Show default toast"));
  await userEvent.click(await canvas.findByText("Show info toast"));
  await userEvent.click(await canvas.findByText("Show success toast"));
};

type Story = StoryObj<typeof DxcToast>;

export const Chromatic: Story = {
  render: Toast,
};

export const FullScreenToast: Story = {
  render: ToastsQueue,
  play: playFunc,
};

export const MobileScreenToast: Story = {
  render: ToastsQueue,
  play: playFunc,
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
};

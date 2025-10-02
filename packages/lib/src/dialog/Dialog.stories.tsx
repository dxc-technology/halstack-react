import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcHeading from "../heading/Heading";
import DxcInset from "../inset/Inset";
import DxcParagraph from "../paragraph/Paragraph";
import DxcAlert from "../alert/Alert";
import DxcTextInput from "../text-input/TextInput";
import DxcDialog from "./Dialog";
import DxcSelect from "../select/Select";
import DxcDateInput from "../date-input/DateInput";
import DxcDropdown from "../dropdown/Dropdown";
import DxcTooltip from "../tooltip/Tooltip";
import { Meta, StoryObj } from "@storybook/react-vite";
import { screen, userEvent } from "storybook/internal/test";
import disabledRules from "../../test/accessibility/rules/specific/dialog/disabledRules";
import preview from "../../.storybook/preview";

export default {
  title: "Dialog",
  component: DxcDialog,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({
            id: ruleId,
            reviewOnFail: true,
          })),
          ...(preview?.parameters?.a11y?.config?.rules || []),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcDialog>;

const customViewports = {
  resizedScreen: {
    name: "Custom viewport",
    styles: {
      width: "720px",
      height: "900px",
    },
  },
};

const Dialog = () => (
  <ExampleContainer expanded>
    <Title title="Default dialog" theme="light" level={4} />
    <DxcDialog>
      <DxcInset space="var(--spacing-padding-l)">
        <DxcFlex direction="column" gap="var(--spacing-padding-m)">
          <DxcHeading level={4} text="Example title" />
          <DxcParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
            placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
            tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
            eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue
            gravida enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare,
            malesuada urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam
            sit amet maximus augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo.
            Praesent quis nunc dignissim, pharetra neque molestie, molestie lectus.
          </DxcParagraph>
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const DialogInput = () => (
  <ExampleContainer expanded>
    <Title title="Dialog with inputs" theme="light" level={4} />
    <DxcDialog>
      <DxcInset space="var(--spacing-padding-l)">
        <DxcFlex gap="var(--spacing-padding-xl)" direction="column">
          <DxcHeading level={4} text="Example form" />
          <DxcFlex gap="var(--spacing-padding-m)" direction="column">
            <DxcTextInput size="fillParent" label="Name" />
            <DxcTextInput size="fillParent" label="Surname" />
          </DxcFlex>
          <DxcAlert
            semantic="error"
            title="Error"
            message={{
              text: "User: arn:aws:xxx::xxxxxxxxxxxx:assumed-role/assure-sandbox-xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx/sandbox-xxxx-xxxxxxxxxxxxxxxxxx is not authorized to perform: lambda:xxxxxxxxxxxxxx on resource: arn:aws:lambda:us-east-1:xxxxxxxxxxxx:function:sandbox-xxxx-xx-xxxxxxx-xxxxxxx-lambda because no identity-based policy allows the lambda:xxxxxxxxxxxxxx action",
            }}
          />
          <DxcFlex justifyContent="flex-end" gap="var(--spacing-padding-xs)">
            <DxcButton label="Cancel" mode="tertiary" />
            <DxcButton label="Save" />
          </DxcFlex>
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const DialogNoOverlay = () => (
  <ExampleContainer expanded>
    <Title title="Dialog Without Overlay" theme="light" level={4} />
    <DxcDialog overlay={false}>
      <DxcInset space="var(--spacing-padding-l)">
        <DxcFlex direction="column" gap="var(--spacing-padding-m)">
          <DxcHeading level={4} text="Example title" />
          <DxcParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
            placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
            tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
            eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue
            gravida enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare,
            malesuada urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam
            sit amet maximus augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo.
            Praesent quis nunc dignissim, pharetra neque molestie, molestie lectus.
          </DxcParagraph>
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const DialogCloseNoVisible = () => (
  <ExampleContainer expanded>
    <Title title="Dialog Close Visible" theme="dark" level={4} />
    <DxcDialog closable={false}>
      <DxcInset space="var(--spacing-padding-l)">
        <DxcParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
          placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
          tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
          eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
          enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
          fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
          augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
          dignissim, pharetra neque molestie, molestie lectus.
        </DxcParagraph>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const RespDialog = () => (
  <ExampleContainer expanded>
    <Title title="Responsive dialog" theme="light" level={4} />
    <DxcDialog>
      <DxcInset space="var(--spacing-padding-l)">
        <DxcFlex gap="var(--spacing-padding-xl)" direction="column">
          <DxcHeading level={4} text="Example form" />
          <DxcFlex gap="var(--spacing-padding-m)" direction="column">
            <DxcTextInput size="fillParent" label="Name" />
            <DxcTextInput size="fillParent" label="Surname" />
          </DxcFlex>
          <DxcFlex justifyContent="flex-end" gap="var(--spacing-padding-xs)">
            <DxcButton label="Cancel" mode="tertiary" />
            <DxcButton label="Save" />
          </DxcFlex>
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const ScrollingDialog = () => (
  <ExampleContainer expanded>
    <Title title="Default dialog" theme="light" level={4} />
    <>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DxcParagraph>
    </>
    <DxcDialog>
      <DxcInset space="var(--spacing-padding-l)">
        <DxcFlex direction="column" gap="var(--spacing-padding-m)">
          <DxcHeading level={4} text="Example title" />
          <DxcParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
            placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
            tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
            eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue
            gravida enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare,
            malesuada urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam
            sit amet maximus augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo.
            Praesent quis nunc dignissim, pharetra neque molestie, molestie lectus.
          </DxcParagraph>
          <DxcButton label="Test" />
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const DialogWithDateInput = () => (
  <ExampleContainer expanded>
    <DxcDialog>
      <DxcDateInput defaultValue="03-12-1995" label="Date input" />
    </DxcDialog>
  </ExampleContainer>
);

const DialogWithDropdown = () => (
  <ExampleContainer expanded>
    <DxcDialog>
      <DxcDropdown
        label="Default"
        options={[
          { label: "Option 01", value: "1" },
          { label: "Option 02", value: "2" },
          { label: "Option 03", value: "3" },
          { label: "Option 04", value: "4" },
        ]}
        onSelectOption={() => {}}
      />
    </DxcDialog>
  </ExampleContainer>
);

const DialogWithSelect = () => (
  <ExampleContainer expanded>
    <DxcDialog>
      <DxcSelect
        label="Select an option"
        options={[
          { label: "Option 01", value: "1" },
          { label: "Option 02", value: "2" },
          { label: "Option 03", value: "3" },
          { label: "Option 04", value: "4" },
        ]}
      />
    </DxcDialog>
  </ExampleContainer>
);

const DialogWithTooltip = () => (
  <ExampleContainer expanded>
    <DxcDialog>
      <DxcTooltip label="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    </DxcDialog>
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcDialog>;

export const DefaultDialog: Story = {
  render: Dialog,
};

export const DialogWithInputs: Story = {
  render: DialogInput,
};

export const DialogWithoutOverlay: Story = {
  render: DialogNoOverlay,
};

export const DialogCloseVisibleFalse: Story = {
  render: DialogCloseNoVisible,
};

export const ResponsiveDialog: Story = {
  render: Dialog,
  parameters: {
    viewport: {
      options: customViewports,
    },
    chromatic: { viewports: [720] },
  },
  globals: {
    viewport: { value: "resizedScreen", isRotated: false },
  },
};

export const MobileResponsiveDialog: Story = {
  render: RespDialog,
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: "iphonex", isRotated: false },
  },
};

export const ScrollDialog: Story = {
  render: ScrollingDialog,
  play: async () => {
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
  },
};

export const DateInputDialog: Story = {
  render: DialogWithDateInput,
  play: async () => {
    const combobox = await screen.findByRole("combobox");
    await userEvent.click(combobox);
  },
};

export const DropdownDialog: Story = {
  render: DialogWithDropdown,
  play: async () => {
    const buttons = await screen.findAllByRole("button");
    if (buttons[0]) {
      await userEvent.click(buttons[0]);
    }
  },
};

export const SelectDialog: Story = {
  render: DialogWithSelect,
  play: async () => {
    const combobox = await screen.findByRole("combobox");
    await userEvent.click(combobox);
  },
};

export const TooltipDialog: Story = {
  render: DialogWithTooltip,
  play: async () => {
    const buttons = await screen.findAllByRole("button");
    if (buttons[0]) {
      await userEvent.hover(buttons[0]);
    }
  },
};

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { userEvent } from "@storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcAlert from "../alert/Alert";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import { HalstackProvider } from "../HalstackContext";
import DxcHeading from "../heading/Heading";
import DxcInset from "../inset/Inset";
import DxcParagraph from "../paragraph/Paragraph";
import DxcTextInput from "../text-input/TextInput";
import DxcDialog from "./Dialog";
import { Meta, StoryObj } from "@storybook/react";
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
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta<typeof DxcDialog>;

const customViewports = {
  resizedScreen: {
    name: "Custom viewport",
    styles: {
      width: "720px",
      height: "900px",
    },
  },
};

const opinionatedTheme = {
  dialog: {
    baseColor: "#ffffff",
    closeIconColor: "#000000",
    overlayColor: "#000000b3",
  },
};

const Dialog = () => (
  <ExampleContainer expanded={true}>
    <Title title="Default dialog" theme="light" level={4} />
    <DxcDialog>
      <DxcInset space="1.5rem">
        <DxcFlex direction="column" gap="1rem">
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

const DialogOpinionated = () => (
  <ExampleContainer expanded={true}>
    <Title title="Default dialog" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcDialog>
        <DxcInset space="1.5rem">
          <DxcFlex direction="column" gap="1rem">
            <DxcHeading level={4} text="Example title" />
            <DxcParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa
              magna, placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo
              sed dapibus tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis
              Jia Le, risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor
              ut, congue gravida enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit
              ornare, malesuada urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit
              amet. Etiam sit amet maximus augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum
              blandit justo. Praesent quis nunc dignissim, pharetra neque molestie, molestie lectus.
            </DxcParagraph>
          </DxcFlex>
        </DxcInset>
      </DxcDialog>
    </HalstackProvider>
  </ExampleContainer>
);

const DialogInput = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog with inputs" theme="light" level={4} />
    <DxcDialog>
      <DxcInset space="1.5rem">
        <DxcFlex gap="2rem" direction="column">
          <DxcHeading level={4} text="Example form" />
          <DxcFlex gap="1rem" direction="column">
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
          <DxcFlex justifyContent="flex-end" gap="0.5rem">
            <DxcButton label="Cancel" mode="tertiary" />
            <DxcButton label="Save" />
          </DxcFlex>
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const DialogNoOverlay = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog Without Overlay" theme="light" level={4} />
    <DxcDialog overlay={false}>
      <DxcInset space="1.5rem">
        <DxcFlex direction="column" gap="1rem">
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
  <ExampleContainer expanded={true}>
    <Title title="Dialog Close Visible" theme="dark" level={4} />
    <DxcDialog closable={false}>
      <DxcInset space="1.5rem">
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
  <ExampleContainer expanded={true}>
    <Title title="Responsive dialog" theme="light" level={4} />
    <DxcDialog>
      <DxcInset space="1.5rem">
        <DxcFlex gap="2rem" direction="column">
          <DxcHeading level={4} text="Example form" />
          <DxcFlex gap="1rem" direction="column">
            <DxcTextInput size="fillParent" label="Name" />
            <DxcTextInput size="fillParent" label="Surname" />
          </DxcFlex>
          <DxcFlex justifyContent="flex-end" gap="0.5rem">
            <DxcButton label="Cancel" mode="tertiary" />
            <DxcButton label="Save" />
          </DxcFlex>
        </DxcFlex>
      </DxcInset>
    </DxcDialog>
  </ExampleContainer>
);

const ScrollingDialog = () => (
  <ExampleContainer expanded={true}>
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
      <DxcInset space="1.5rem">
        <DxcFlex direction="column" gap="1rem">
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

type Story = StoryObj<typeof DxcDialog>;

export const DefaultDialog: Story = {
  render: Dialog,
};

export const DefaultDialogOpinionated: Story = {
  render: DialogOpinionated,
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
      viewports: customViewports,
      defaultViewport: "resizedScreen",
    },
    chromatic: { viewports: [720] },
  },
};

export const MobileResponsiveDialog: Story = {
  render: RespDialog,
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
    chromatic: { viewports: [375] },
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

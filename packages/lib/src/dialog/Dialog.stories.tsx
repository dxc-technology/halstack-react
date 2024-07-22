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

export default {
  title: "Dialog",
  component: DxcDialog,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
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

export const DefaultDialog = () => (
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

export const DefaultDialogOpinionated = () => (
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

export const DialogWithInputs = () => (
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
            type="error"
            inlineText="User: arn:aws:xxx::xxxxxxxxxxxx:assumed-role/assure-sandbox-xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx/sandbox-xxxx-xxxxxxxxxxxxxxxxxx is not authorized to perform: lambda:xxxxxxxxxxxxxx on resource: arn:aws:lambda:us-east-1:xxxxxxxxxxxx:function:sandbox-xxxx-xx-xxxxxxx-xxxxxxx-lambda because no identity-based policy allows the lambda:xxxxxxxxxxxxxx action"
            size="fillParent"
            margin={{ bottom: "xsmall" }}
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

export const DialogWithoutOverlay = () => (
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

export const DialogCloseVisibleFalse = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog Close Visible" theme="dark" level={4} />
    <DxcDialog isCloseVisible={false}>
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

const customViewports = {
  resizedScreen: {
    name: "Custom viewport",
    styles: {
      width: "720px",
      height: "900px",
    },
  },
};

export const ResponsiveDialog = DefaultDialog.bind({});
ResponsiveDialog.parameters = {
  viewport: {
    viewports: customViewports,
    defaultViewport: "resizedScreen",
  },
  chromatic: { viewports: [720] },
};

export const MobileResponsiveDialog = RespDialog.bind({});
MobileResponsiveDialog.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375] },
};

export const ScrollDialog = ScrollingDialog.bind({});
ScrollDialog.play = async () => {
  await userEvent.tab();
  await userEvent.tab();
  await userEvent.tab();
};

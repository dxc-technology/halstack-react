import React from "react";
import DxcDialog from "./Dialog";
import DxcTextInput from "../text-input/TextInput";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcInset from "../inset/Inset";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Dialog ",
  component: DxcDialog,
};

const opinionatedTheme = {
  dialog: {
    baseColor: "#ffffff",
    closeIconColor: "#000000",
    overlayColor: "#000000b3",
  },
};

export const DefaultDialog = () => (
  <>
    <ExampleContainer expanded={true}>
      <Title title="Default dialog" theme="light" level={4} />
      <DxcDialog>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
          placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
          tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
          eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
          enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
          fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
          augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
          dignissim, pharetra neque molestie, molestie lectus.
        </p>
      </DxcDialog>
    </ExampleContainer>
  </>
);

export const DefaultDialogOpinionated = () => (
  <>
    <ExampleContainer expanded={true}>
      <Title title="Default dialog" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcDialog>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
            placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
            tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
            eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue
            gravida enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare,
            malesuada urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam
            sit amet maximus augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo.
            Praesent quis nunc dignissim, pharetra neque molestie, molestie lectus.
          </p>
        </DxcDialog>
      </HalstackProvider>
    </ExampleContainer>
  </>
);

export const DialogWithInputs = () => (
  <>
    <ExampleContainer expanded={true}>
      <Title title="Dialog with inputs" theme="light" level={4} />
      <DxcDialog>
        <DxcInset bottom="1rem">
          <DxcFlex gap="2rem" direction="column">
            <DxcFlex gap="1rem" direction="column">
              <DxcTextInput size="fillParent" label="Name"></DxcTextInput>
              <DxcTextInput size="fillParent" label="Surname"></DxcTextInput>
            </DxcFlex>
            <DxcFlex justifyContent="flex-end" gap="1rem">
              <DxcButton label="Save"></DxcButton>
              <DxcButton label="Cancel" mode="secondary"></DxcButton>
            </DxcFlex>
          </DxcFlex>
        </DxcInset>
      </DxcDialog>
    </ExampleContainer>
  </>
);

const RespDialog = () => (
  <>
    <ExampleContainer expanded={true}>
      <Title title="Responsive dialog" theme="light" level={4} />
      <DxcDialog>
        <DxcInset bottom="1rem">
          <DxcFlex gap="2rem" direction="column">
            <DxcFlex gap="1rem" direction="column">
              <DxcTextInput size="fillParent" label="Name"></DxcTextInput>
              <DxcTextInput size="fillParent" label="Surname"></DxcTextInput>
            </DxcFlex>
            <DxcFlex justifyContent="flex-end" gap="1rem">
              <DxcButton label="Save"></DxcButton>
              <DxcButton label="Cancel" mode="secondary"></DxcButton>
            </DxcFlex>
          </DxcFlex>
        </DxcInset>
      </DxcDialog>
    </ExampleContainer>
  </>
);

export const DialogWithoutOverlay = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog Without Overlay" theme="light" level={4} />
    <DxcDialog overlay={false}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogCloseVisibleFalse = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog Close Visible" theme="dark" level={4} />
    <DxcDialog isCloseVisible={false}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXxsmallPadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xxsmall Padding" theme="light" level={4} />
    <DxcDialog padding={"xxsmall"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXsmallPadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xsmall Padding" theme="light" level={4} />
    <DxcDialog padding={"xsmall"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithSmallPadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Small Padding" theme="light" level={4} />
    <DxcDialog padding={"small"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithMediumPadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Medium Padding" theme="light" level={4} />
    <DxcDialog padding={"medium"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithLargePadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Large Padding" theme="light" level={4} />
    <DxcDialog padding={"large"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXlargePadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xlarge Padding" theme="light" level={4} />
    <DxcDialog padding={"xlarge"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXxlargePadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xxlarge Padding" theme="light" level={4} />
    <DxcDialog padding={"xxlarge"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
        placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
        tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
        eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida
        enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu,
        fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus
        augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc
        dignissim, pharetra neque molestie, molestie lectus.
      </p>
    </DxcDialog>
  </ExampleContainer>
);

export const ResponsiveDialog = RespDialog.bind({});
ResponsiveDialog.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  chromatic: { viewports: [375] },
};

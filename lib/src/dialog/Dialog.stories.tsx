import React from "react";
import DxcDialog from "./Dialog";
import DxcTextInput from "../text-input/TextInput";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcInset from "../inset/Inset";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";
import DxcHeading from "../heading/Heading";
import DxcParagraph from "../paragraph/Paragraph";
import DxcAlert from "../alert/Alert";

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
  <ExampleContainer expanded={true}>
    <Title title="Default dialog" theme="light" level={4} />
    <DxcDialog>
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
    </DxcDialog>
  </ExampleContainer>
);

export const DefaultDialogOpinionated = () => (
  <ExampleContainer expanded={true}>
    <Title title="Default dialog" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcDialog>
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
      </DxcDialog>
    </HalstackProvider>
  </ExampleContainer>
);

export const DialogWithInputs = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog with inputs" theme="light" level={4} />
    <DxcDialog>
      <DxcInset bottom="1rem">
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
            <DxcButton label="Cancel" mode="text" />
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
      <DxcInset bottom="1rem">
        <DxcFlex gap="2rem" direction="column">
          <DxcHeading level={4} text="Example form" />
          <DxcFlex gap="1rem" direction="column">
            <DxcTextInput size="fillParent" label="Name" />
            <DxcTextInput size="fillParent" label="Surname" />
          </DxcFlex>
          <DxcFlex justifyContent="flex-end" gap="0.5rem">
            <DxcButton label="Cancel" mode="text" />
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
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogCloseVisibleFalse = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog Close Visible" theme="dark" level={4} />
    <DxcDialog isCloseVisible={false}>
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
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXxsmallPadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xxsmall Padding" theme="light" level={4} />
    <DxcDialog padding="xxsmall">
      <DxcFlex direction="column" gap="0.25rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXsmallPadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xsmall Padding" theme="light" level={4} />
    <DxcDialog padding={"xsmall"}>
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithMediumPadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Medium Padding" theme="light" level={4} />
    <DxcDialog padding="medium">
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithLargePadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Large Padding" theme="light" level={4} />
    <DxcDialog padding="large">
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXlargePadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xlarge Padding" theme="light" level={4} />
    <DxcDialog padding="xlarge">
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithXxlargePadding = () => (
  <ExampleContainer expanded={true}>
    <Title title="Dialog With Xxlarge Padding" theme="light" level={4} />
    <DxcDialog padding="xxlarge">
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={4} text="Example title" />
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
      </DxcFlex>
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

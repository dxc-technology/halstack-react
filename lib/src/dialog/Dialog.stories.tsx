import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcDialog from "./Dialog.jsx";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Dialog ",
  component: DxcDialog,
};

export const DefaultDialog = () => (
  <>
    <ExampleContainer>
      <Title title="Default dialog" theme="light" level={4} />
      <DxcDialog>
        {" "}
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
        </p>{" "}
      </DxcDialog>
    </ExampleContainer>
  </>
);

export const DialogWithoutOverlay = () => (
  <ExampleContainer>
    <Title title="Dialog Without Overlay" theme="light" level={4} />
    <DxcDialog overlay={false}>
      {" "}
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
      </p>{" "}
    </DxcDialog>
  </ExampleContainer>
);

export const DialogCloseVisibleFalse = () => (
  <ExampleContainer>
    <Title title="Dialog Close Visible" theme="dark" level={4} />
    <DxcDialog isCloseVisible={false}>
      {" "}
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
      </p>{" "}
    </DxcDialog>
  </ExampleContainer>
);

export const WithoutOverlay = () => (
  <ExampleContainer>
    <Title title="Dialog Without Overlay" theme="light" level={4} />
    <DxcDialog overlay={false}>
      {" "}
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
      </p>{" "}
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithPadding = () => (
  <ExampleContainer>
    <Title title="Dialog With Padding" theme="light" level={4} />
    <DxcDialog padding={{top: "xlarge", left: "large", bottom: "medium", right: "small"}}>
      {" "}
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
      </p>{" "}
    </DxcDialog>
  </ExampleContainer>
);

export const DialogWithDifferentPadding = () => (
  <ExampleContainer>
    <Title title="Dialog With Different Padding" theme="light" level={4} />
    <DxcDialog padding={{top: "xxlarge", left: "small", bottom: "xsmall", right: "xlarge"}}>
      {" "}
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
      </p>{" "}
    </DxcDialog>
  </ExampleContainer>
);
import React from "react";
import styled from "styled-components";
import DxcSidenav from "./Sidenav";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Sidenav",
  component: DxcSidenav,
};

const linkClick = () => {
  console.log("click");
};

const StyledContainer = styled["div"]`
  display: flex;
  flex-direction: row;
  height: 500px;
`;

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Deafult sidenav" theme="light" level={4} />
      <DxcSidenav>
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with xxsmall padding" theme="light" level={4} />
      <DxcSidenav padding="xxsmall">
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with xsmall padding" theme="light" level={4} />
      <DxcSidenav padding="xsmall">
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with small padding" theme="light" level={4} />
      <DxcSidenav padding="small">
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with medium padding" theme="light" level={4} />
      <DxcSidenav padding="medium">
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with large padding" theme="light" level={4} />
      <DxcSidenav padding="large">
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with xlarge padding" theme="light" level={4} />
      <DxcSidenav padding="xlarge">
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with xxlarge padding" theme="light" level={4} />
      <DxcSidenav padding="xxlarge">
        {" "}
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>{" "}
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav compound components" theme="light" level={4} />
      <DxcSidenav>
        <DxcSidenav.Title>My sidenav</DxcSidenav.Title>
        <DxcSidenav.Subtitle>Components</DxcSidenav.Subtitle>
        <DxcSidenav.Link href="#">Button</DxcSidenav.Link>
        <DxcSidenav.Link href="#">Date</DxcSidenav.Link>
        <DxcSidenav.Subtitle>Guidelines</DxcSidenav.Subtitle>
        <DxcSidenav.Link onClick={linkClick}>Layout</DxcSidenav.Link>
        <DxcSidenav.Link onClick={linkClick}>Footer</DxcSidenav.Link>
      </DxcSidenav>
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Sidenav with scroll" theme="light" level={4} />
      <StyledContainer>
        <DxcSidenav>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna,
            placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec congue laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus
            tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus
            eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue
            gravida enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare,
            malesuada urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam
            sit amet maximus augue. Vivamus erat sapien, ultricies fringilla tellus id, condimentum blandit justo.
            Praesent quis nunc dignissim, pharetra neque molestie, molestie lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi egestas luctus porttitor. Donec massa magna, placerat sit amet felis
            eget, venenatis fringilla ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue
            laoreet orci, nec elementum dolor consequat quis. Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum
            cursus ut risus sit amet congue. Nunc luctus, urna ullamcorper facilisis Jia Le, risus eros aliquam erat, ut
            efficitur ante neque id odio. Nam orci leo, dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus
            aliquam nisl, ac cursus enim bibendum vitae. Nunc sit amet elit ornare, malesuada urna eu, fringilla mauris.
            Vivamus bibendum turpis est, id elementum purus euismod sit amet. Etiam sit amet maximus augue. Vivamus erat
            sapien, ultricies fringilla tellus id, condimentum blandit justo. Praesent quis nunc dignissim, pharetra
            neque molestie, molestie lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
            luctus porttitor. Donec massa magna, placerat sit amet felis eget, venenatis fringilla ipsum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec congue laoreet orci, nec elementum dolor consequat quis.
            Curabitur rhoncus justo sed dapibus tincidunt. Vestibulum cursus ut risus sit amet congue. Nunc luctus, urna
            ullamcorper facilisis Jia Le, risus eros aliquam erat, ut efficitur ante neque id odio. Nam orci leo,
            dignissim sit amet dolor ut, congue gravida enim. Donec rhoncus aliquam nisl, ac cursus enim bibendum vitae.
            Nunc sit amet elit ornare, malesuada urna eu, fringilla mauris. Vivamus bibendum turpis est, id elementum
            purus euismod sit amet. Etiam sit amet maximus augue. Vivamus erat sapien, ultricies fringilla tellus id,
            condimentum blandit justo. Praesent quis nunc dignissim, pharetra neque molestie, molestie lectus.
          </p>
        </DxcSidenav>
      </StyledContainer>
    </ExampleContainer>

    <ExampleContainer pseudoState="pseudo-focus-visible">
      <Title title="Focused" theme="light" level={4} />
      <DxcSidenav>
        <DxcSidenav.Title>My sidenav</DxcSidenav.Title>
        <DxcSidenav.Subtitle>Components</DxcSidenav.Subtitle>
        <DxcSidenav.Link href="#">Button</DxcSidenav.Link>
        <DxcSidenav.Link href="#">Date</DxcSidenav.Link>
        <DxcSidenav.Subtitle>Guidelines</DxcSidenav.Subtitle>
        <DxcSidenav.Link onClick={linkClick}>Layout</DxcSidenav.Link>
        <DxcSidenav.Link onClick={linkClick}>Footer</DxcSidenav.Link>
      </DxcSidenav>
    </ExampleContainer>
  </>
);

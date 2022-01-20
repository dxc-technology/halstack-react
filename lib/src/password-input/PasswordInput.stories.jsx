import React from "react";
import styled from "styled-components";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import DxcPasswordInput from "./PasswordInput";

export default {
  title: "Password input ",
  component: DxcPasswordInput,
};

export const Chromatic = () => (
  <>
    <Container>
      <ContainerTitle>Without label</ContainerTitle>
      <DxcPasswordInput />
    </Container>
    <Container>
      <ContainerTitle>With label</ContainerTitle>
      <DxcPasswordInput label="Password input" clearable />
    </Container>
    <Container>
      <ContainerTitle>Clearable</ContainerTitle>
      <DxcPasswordInput label="Password input" clearable value="password" />
    </Container>
    <Container>
      <ContainerTitle>Non clearable</ContainerTitle>
      <DxcPasswordInput label="Non clearable password input" value="password" />
    </Container>
    <Container>
      <ContainerTitle>Helper text</ContainerTitle>
      <DxcPasswordInput label="Help password input" helperText="Help message" />
    </Container>
    <Container>
      <ContainerTitle>Invalid</ContainerTitle>
      <DxcPasswordInput label="Error password input" error="Error message." />
    </Container>
    <MainTitle>Margin</MainTitle>
    <Container>
      <DxcPasswordInput label="Xxsmmall" margin="xxsmall" />
    </Container>
    <Container>
      <DxcPasswordInput label="Xsmall" margin="xsmall" />
    </Container>
    <Container>
      <DxcPasswordInput label="Small" margin="small" />
    </Container>
    <Container>
      <DxcPasswordInput label="Medium" margin="medium" />
    </Container>
    <Container>
      <DxcPasswordInput label="Large" margin="large" />
    </Container>
    <Container>
      <DxcPasswordInput label="Xlarge" margin="xlarge" />
    </Container>
    <Container>
      <DxcPasswordInput label="Xxlarge" margin="xxlarge" />
    </Container>
    <MainTitle>Sizes</MainTitle>
    <Container>
      <DxcPasswordInput label="Small" size="small" />
    </Container>
    <Container>
      <DxcPasswordInput label="Medium" size="medium" />
    </Container>
    <Container>
      <DxcPasswordInput label="Large" size="large" />
    </Container>
    <Container>
      <DxcPasswordInput label="FillParent" size="fillParent" />
    </Container>
  </>
);

const PasswordTooltip = () => (
  <Container>
    <ContainerTitle>Show tooltip</ContainerTitle>
    <DxcPasswordInput label="Password input" value="Password" />
  </Container>
);

const PasswordShown = () => (
  <Container>
    <ContainerTitle>Show password</ContainerTitle>
    <DxcPasswordInput label="Password input" value="Password" />
  </Container>
);

export const ShowTooltip = PasswordTooltip.bind({});
ShowTooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const passwordBtn = canvas.getByRole("button");
  await waitFor(async () => {
    await userEvent.hover(passwordBtn);
  });
};

export const ShowPassword = PasswordShown.bind({});
ShowPassword.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const passwordBtn = canvas.getByRole("button");
  await userEvent.click(passwordBtn);
};

const MainTitle = styled.h2`
  font-family: Open Sans, sans-serif;
`;

const ContainerTitle = styled.h4`
  font-family: Open Sans, sans-serif;
`;

const Container = styled.div`
  margin: 15px;
`;

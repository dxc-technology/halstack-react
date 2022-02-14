import React from "react";
import { userEvent, within, waitFor } from "@storybook/testing-library";
import { fireEvent } from "@testing-library/react";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";
import DxcTextInput from "./TextInput";

export default {
  title: "Text input",
  component: DxcTextInput,
};

const action = {
  onClick: () => {
    console.log("Copy that!");
  },
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  ),
};

const country = ["Afghanistan"];
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra Andorra Andorra Andorra Andorra Andorra Andorra Andorra",
  "Angola",
  "Antigua and Barbuda Antigua and Barbuda Antigua and Barbuda",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands, The",
  "Central African Republic",
  "Chad",
  "Democratic Republic of the Congo",
  "Dominican Republic",
  "Dominica",
  "Denmark",
  "Djibouti",
];

export const Chromatic = () => (
  <>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered input" theme="light" level={4} />
      <DxcTextInput label="Text input" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus-within">
      <Title title="Focused input" theme="light" level={4} />
      <DxcTextInput label="Text input" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered action" theme="light" level={4} />
      <DxcTextInput label="Text input" value="Text" clearable />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcTextInput />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label and placeholder" theme="light" level={4} />
      <DxcTextInput label="Text input" placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Helper text, optional, and clearable" theme="light" level={4} />
      <DxcTextInput label="Text input" clearable value="Text" helperText="Help message" optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Clearable and action" theme="light" level={4} />
      <DxcTextInput
        label="Text input"
        value="Text text text text text text text text text text"
        clearable
        action={action}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled and placeholder" theme="light" level={4} />
      <DxcTextInput label="Disabled text input" disabled placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled, helper text, optional, value and action" theme="light" level={4} />
      <DxcTextInput
        label="Disabled text input"
        helperText="Help message"
        disabled
        optional
        value="Text"
        action={action}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Prefix" theme="light" level={4} />
      <DxcTextInput label="With prefix" prefix="+34" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Suffix and action" theme="light" level={4} />
      <DxcTextInput label="With suffix" suffix="USD" action={action} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <DxcTextInput
        label="Error text input"
        helperText="Help message"
        error="Error message."
        value="Text"
        clearable
        optional
        action={action}
      />
    </ExampleContainer>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <Title title="Dark" theme="dark" level={2} />
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered" theme="dark" level={4} />
          <DxcTextInput label="Text input" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-focus-within">
          <Title title="Focused" theme="dark" level={4} />
          <DxcTextInput label="Text input" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered action" theme="dark" level={4} />
          <DxcTextInput label="Text input" value="Text" clearable />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Helper text, placeholder, optional and action" theme="dark" level={4} />
          <DxcTextInput
            label="Text input"
            helperText="Help message"
            placeholder="Placeholder"
            clearable
            optional
            action={action}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Helper text, clearable value, error and action" theme="dark" level={4} />
          <DxcTextInput
            label="Text input"
            helperText="Help message"
            error="Error message."
            value="Text"
            clearable
            action={action}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled and placeholder" theme="dark" level={4} />
          <DxcTextInput label="Disabled text input" disabled placeholder="Placeholder" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled, helper text, optional, value and action" theme="dark" level={4} />
          <DxcTextInput
            label="Disabled text input"
            helperText="Help message"
            disabled
            optional
            value="Text"
            action={action}
          />
        </ExampleContainer>
      </DarkContainer>
    </BackgroundColorProvider>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcTextInput label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcTextInput label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcTextInput label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcTextInput label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcTextInput label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcTextInput label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcTextInput label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcTextInput label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcTextInput label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcTextInput label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcTextInput label="FillParent" size="fillParent" />
    </ExampleContainer>
  </>
);

const ActionFocusedTextInput = () => (
  <ExampleContainer>
    <Title title="Focused action" theme="light" level={4} />
    <DxcTextInput label="Focused action" action={action} clearable />
  </ExampleContainer>
);

const ActionActivedTextInput = () => (
  <ExampleContainer pseudoState="pseudo-active">
    <Title title="Focused action" theme="light" level={4} />
    <DxcTextInput label="Focused action" action={action} clearable />
  </ExampleContainer>
);

const ShowOptionsAutosuggest = () => (
  <ExampleContainer expanded>
    <Title title="Hovered option" theme="light" level={4} />
    <DxcTextInput label="Hovered option" suggestions={countries} clearable />
  </ExampleContainer>
);

const OptionHoveredAutosuggest = () => (
  <ExampleContainer expanded pseudoState="pseudo-hover">
    <Title title="Hovered option" theme="light" level={4} />
    <DxcTextInput label="Hovered option" suggestions={country} clearable />
  </ExampleContainer>
);

const OptionFocusedAutosuggest = () => (
  <ExampleContainer expanded>
    <Title title="Focused option" theme="dark" level={4} />
    <DxcTextInput label="Focused option" suggestions={country} clearable />
  </ExampleContainer>
);

const OptionActivedAutosuggest = () => (
  <ExampleContainer expanded pseudoState="pseudo-active">
    <Title title="Hovered option" theme="light" level={4} />
    <DxcTextInput label="Hovered option" suggestions={country} clearable />
  </ExampleContainer>
);

const ActionFocusedTextInputOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer>
        <Title title="Focused action" theme="dark" level={4} />
        <DxcTextInput label="Focused action" action={action} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const ActionActivedTextInputOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Title title="Focused action" theme="dark" level={4} />
        <DxcTextInput label="Focused action" action={action} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const ShowOptionsAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded>
        <Title title="Hovered option" theme="dark" level={4} />
        <DxcTextInput label="Hovered option" suggestions={countries} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const OptionHoveredAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded pseudoState="pseudo-hover">
        <Title title="Hovered option" theme="dark" level={4} />
        <DxcTextInput label="Hovered option" suggestions={country} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const OptionFocusedAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded>
        <Title title="Focused option" theme="light" level={4} />
        <DxcTextInput label="Focused option" suggestions={country} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const OptionActivedAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded pseudoState="pseudo-active">
        <Title title="Hovered option" theme="dark" level={4} />
        <DxcTextInput label="Hovered option" suggestions={country} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

export const ActionFocused = ActionFocusedTextInput.bind({});
ActionFocused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const action = canvas.getByRole("button");
  await action.focus();
};

export const ActionActived = ActionActivedTextInput.bind({});
ActionActived.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const action = canvas.getByRole("button");
  await userEvent.click(action);
};

export const ShowOptions = ShowOptionsAutosuggest.bind({});
ShowOptions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const OptionHovered = OptionHoveredAutosuggest.bind({});
OptionHovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const OptionFocused = OptionFocusedAutosuggest.bind({});
OptionFocused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
  fireEvent.keyDown(autosuggest, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
};

export const OptionActived = OptionActivedAutosuggest.bind({});
OptionActived.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const ActionFocusedOnDark = ActionFocusedTextInputOnDark.bind({});
ActionFocusedOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const action = canvas.getByRole("button");
  await action.focus();
};

export const ActionActivedOnDark = ActionActivedTextInputOnDark.bind({});
ActionActivedOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const action = canvas.getByRole("button");
  await userEvent.click(action);
};

export const ShowOptionsOnDark = ShowOptionsAutosuggestOnDark.bind({});
ShowOptionsOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const OptionHoveredOnDark = OptionHoveredAutosuggestOnDark.bind({});
OptionHoveredOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const OptionFocusedOnDark = OptionFocusedAutosuggestOnDark.bind({});
OptionFocusedOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
  fireEvent.keyDown(autosuggest, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
};

export const OptionActivedOnDark = OptionActivedAutosuggestOnDark.bind({});
OptionActivedOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

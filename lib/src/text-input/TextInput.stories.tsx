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
  onClick: () => {},
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  ),
};

const actionLargeIcon = {
  onClick: () => {},
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
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
      <Title title="Clearable and large icon action" theme="light" level={4} />
      <DxcTextInput
        label="Text input"
        value="Text text text text text text text text text text"
        clearable
        action={actionLargeIcon}
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
      <Title title="Disabled with prefix and suffix" theme="light" level={4} />
      <DxcTextInput
        label="Disabled text input"
        helperText="Help message"
        disabled
        optional
        prefix="+34"
        suffix="USD"
        value="Text"
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
          <Title title="Prefix and suffix" theme="dark" level={4} />
          <DxcTextInput label="With prefix and suffix" prefix="+34" suffix="USD" />
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
        <ExampleContainer>
          <Title title="Disabled with prefix and suffix" theme="dark" level={4} />
          <DxcTextInput
            label="Disabled text input"
            helperText="Help message"
            disabled
            optional
            prefix="+34"
            suffix="USD"
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

const FocusedActionTextInput = () => (
  <ExampleContainer>
    <Title title="Focused action" theme="light" level={4} />
    <DxcTextInput label="Text input" action={action} clearable />
  </ExampleContainer>
);

const ActivedActionTextInput = () => (
  <ExampleContainer pseudoState="pseudo-active">
    <Title title="Actived action" theme="light" level={4} />
    <DxcTextInput label="Text input" action={action} clearable />
  </ExampleContainer>
);

const ShowOptionsAutosuggest = () => (
  <ExampleContainer expanded>
    <Title title="Show options" theme="light" level={4} />
    <DxcTextInput label="Text input" suggestions={countries} clearable />
  </ExampleContainer>
);

const HoveredOptionAutosuggest = () => (
  <ExampleContainer expanded pseudoState="pseudo-hover">
    <Title title="Hovered option" theme="light" level={4} />
    <DxcTextInput label="Text input" suggestions={country} clearable />
  </ExampleContainer>
);

const FocusedOptionAutosuggest = () => (
  <ExampleContainer expanded>
    <Title title="Focused option" theme="light" level={4} />
    <DxcTextInput label="Text input" suggestions={country} clearable />
  </ExampleContainer>
);

const ActivedOptionAutosuggest = () => (
  <ExampleContainer expanded pseudoState="pseudo-active">
    <Title title="Actived option" theme="light" level={4} />
    <DxcTextInput label="Text input" suggestions={country} clearable />
  </ExampleContainer>
);

const FocusedActionTextInputOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer>
        <Title title="Focused action" theme="dark" level={4} />
        <DxcTextInput label="Text input" action={action} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const ActivedActionTextInputOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Title title="Actived action" theme="dark" level={4} />
        <DxcTextInput label="Text input" action={action} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const ShowOptionsAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded>
        <Title title="Show options" theme="dark" level={4} />
        <DxcTextInput label="Text input" suggestions={countries} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const HoveredActionAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded pseudoState="pseudo-hover">
        <Title title="Hovered option" theme="dark" level={4} />
        <DxcTextInput label="Text input" suggestions={country} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const FocusedOptionAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded>
        <Title title="Focused option" theme="dark" level={4} />
        <DxcTextInput label="Text input" suggestions={country} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

const ActivedOptionAutosuggestOnDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer expanded pseudoState="pseudo-active">
        <Title title="Actived option" theme="dark" level={4} />
        <DxcTextInput label="Text input" suggestions={country} clearable />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

export const FocusedAction = FocusedActionTextInput.bind({});
FocusedAction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const action = canvas.getByRole("button");
  await action.focus();
};

export const ActivedAction = ActivedActionTextInput.bind({});
ActivedAction.play = async ({ canvasElement }) => {
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

export const HoveredOption = HoveredOptionAutosuggest.bind({});
HoveredOption.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const FocusedOption = FocusedOptionAutosuggest.bind({});
FocusedOption.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
  fireEvent.keyDown(autosuggest, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
};

export const ActivedOption = ActivedOptionAutosuggest.bind({});
ActivedOption.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const FocusedActionOnDark = FocusedActionTextInputOnDark.bind({});
FocusedActionOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const action = canvas.getByRole("button");
  await action.focus();
};

export const ActivedActionOnDark = ActivedActionTextInputOnDark.bind({});
ActivedActionOnDark.play = async ({ canvasElement }) => {
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

export const HoveredActionOnDark = HoveredActionAutosuggestOnDark.bind({});
HoveredActionOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

export const FocusedOptionOnDark = FocusedOptionAutosuggestOnDark.bind({});
FocusedOptionOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
  fireEvent.keyDown(autosuggest, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
};

export const ActivedOptionOnDark = ActivedOptionAutosuggestOnDark.bind({});
ActivedOptionOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const autosuggest = canvas.getByRole("combobox");
  await userEvent.click(autosuggest);
};

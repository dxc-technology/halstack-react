import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";
import DxcTextInput from "./TextInput";
import DxcButton from "../button/Button";
import DxcCheckbox from "../checkbox/Checkbox";
import DxcFlex from "../flex/Flex";
import Suggestions from "./Suggestions";
import { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";

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
      <DxcTextInput label="Text input" defaultValue="Text" clearable />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived action" theme="light" level={4} />
      <DxcTextInput label="Text input" action={action} clearable />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused action" theme="light" level={4} />
      <DxcTextInput label="Text input" action={action} clearable />
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
      <DxcTextInput label="Text input" clearable defaultValue="Text" helperText="Help message" optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Clearable and large icon action" theme="light" level={4} />
      <DxcTextInput
        label="Text input"
        defaultValue="Text text text text text text text text text text"
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
        defaultValue="Text"
        clearable
        optional
        action={action}
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Invalid and hovered" theme="light" level={4} />
      <DxcTextInput
        label="Error text input"
        helperText="Help message"
        placeholder="Placeholder"
        error="Error message."
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
        defaultValue="Text"
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
        defaultValue="Text"
        action={action}
      />
    </ExampleContainer>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <Title title="Dark theme" theme="dark" level={2} />
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
          <DxcTextInput label="Text input" defaultValue="Text" clearable />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Actived action" theme="dark" level={4} />
          <DxcTextInput label="Text input" action={action} clearable />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Focused action" theme="dark" level={4} />
          <DxcTextInput label="Text input" action={action} clearable />
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
          <Title title="Invalid" theme="dark" level={4} />
          <DxcTextInput
            label="Error text input"
            helperText="Help message"
            error="Error message."
            defaultValue="Text"
            clearable
            action={action}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Invalid and hovered" theme="dark" level={4} />
          <DxcTextInput
            label="Error text input"
            helperText="Help message"
            placeholder="Placeholder"
            error="Error message."
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
            defaultValue="Text"
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
            defaultValue="Text"
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

const AutosuggestListbox = () => {
  const colorsTheme: any = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.textInput}>
      <ExampleContainer>
        <Title title="Autosuggest listbox" theme="light" level={2} />
        <ExampleContainer>
          <Title title="List dialog uses a Radix Popover to appear over elements with a certain z-index" theme="light" level={3} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "150px",
              width: "500px",
              marginBottom: "250px",
              padding: "20px",
              border: "1px solid black",
              borderRadius: "4px",
              overflow: "auto",
              zIndex: "1300",
            }}
          >
            <DxcTextInput
              label="Label"
              suggestions={countries}
              optional
              placeholder="Choose an option"
              size="fillParent"
            />
            <button style={{ zIndex: "1", width: "100px" }}>Submit</button>
          </div>
        </ExampleContainer>
        <Title title="Listbox suggestion states" theme="light" level={3} />
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered suggestion" theme="light" level={4} />
          <Suggestions
            id="x"
            value=""
            suggestions={country}
            visualFocusIndex={-1}
            highlightedSuggestions={false}
            searchHasErrors={false}
            isSearching={false}
            suggestionOnClick={() => {}}
            getTextInputWidth={() => 350}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Active suggestion" theme="light" level={4} />
          <Suggestions
            id="x"
            value=""
            suggestions={country}
            visualFocusIndex={-1}
            highlightedSuggestions={false}
            searchHasErrors={false}
            isSearching={false}
            suggestionOnClick={(suggestion) => {}}
            getTextInputWidth={() => 350}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Focused suggestion" theme="light" level={4} />
          <Suggestions
            id="x"
            value=""
            suggestions={country}
            visualFocusIndex={0}
            highlightedSuggestions={false}
            searchHasErrors={false}
            isSearching={false}
            suggestionOnClick={(suggestion) => {}}
            getTextInputWidth={() => 350}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Highlighted suggestion" theme="light" level={4} />
          <Suggestions
            id="x"
            value="Afgh"
            suggestions={country}
            visualFocusIndex={-1}
            highlightedSuggestions={true}
            searchHasErrors={false}
            isSearching={false}
            suggestionOnClick={(suggestion) => {}}
            getTextInputWidth={() => 350}
          />
        </ExampleContainer>
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Autosuggest Error" theme="light" level={3} />
        <Suggestions
          id="x"
          value=""
          suggestions={country}
          visualFocusIndex={-1}
          highlightedSuggestions={false}
          searchHasErrors={true}
          isSearching={false}
          suggestionOnClick={(suggestion) => {}}
          getTextInputWidth={() => 350}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Autosuggest Searching message" theme="light" level={3} />
        <Suggestions
          id="x"
          value=""
          suggestions={country}
          visualFocusIndex={-1}
          highlightedSuggestions={false}
          searchHasErrors={false}
          isSearching={true}
          suggestionOnClick={(suggestion) => {}}
          getTextInputWidth={() => 350}
        />
      </ExampleContainer>
    </ThemeProvider>
  );
};

const DarkAutosuggestListbox = () => {
  const colorsTheme: any = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.textInput}>
      <BackgroundColorProvider color="#333333">
        <DarkContainer>
          <Title title="Dark theme" theme="dark" level={2} />
          <ExampleContainer>
            <Title title="Default with opened suggestions" theme="dark" level={3} />
            <DxcFlex direction="column" gap="80px">
              <DxcTextInput label="Label" suggestions={countries} optional placeholder="Choose an option" />
              <DxcCheckbox
                label="You understand the selection and give your consent"
                onChange={() => {}}
                labelPosition="after"
              />
              <DxcButton label="Submit" onClick={() => {}} size="medium" margin={{ bottom: "xxlarge" }} />
            </DxcFlex>
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Autosuggest Error" theme="dark" level={3} />
            <div style={{ height: "100px" }}>
              <Suggestions
                id="x"
                value=""
                suggestions={country}
                visualFocusIndex={-1}
                highlightedSuggestions={false}
                searchHasErrors={true}
                isSearching={false}
                suggestionOnClick={(suggestion) => {}}
                getTextInputWidth={() => 350}
              />
            </div>
          </ExampleContainer>
        </DarkContainer>
      </BackgroundColorProvider>
    </ThemeProvider>
  );
};

export const AutosuggestListboxStates = AutosuggestListbox.bind({});
AutosuggestListboxStates.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const AutosuggestListboxOnDark = DarkAutosuggestListbox.bind({});
AutosuggestListboxOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

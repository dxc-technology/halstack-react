import React, { useRef, useState } from "react";
import {
  DxcButton,
  DxcTextInput,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../images/delete-24px.svg";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
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

function App() {
  const ref = useRef(null);
  const [value, setValue] = useState("Example text");
  const [suggestionsValue, setSuggestionsValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ value, error }) => {
    setValue(value);
    console.log(error);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Custom error.") : setErrorMessage(null);
  };

  const onChangeSuggestions = ({ value }) => {
    setSuggestionsValue(value);
  };

  const action = {
    onClick: () => {
      console.log("Copy that!");
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    ),
    title: "Copy",
  };

  const actionTrashSVG = {
    onClick: () => {
      console.log("Delete that!");
    },
    icon: <TrashIcon></TrashIcon>,
  };

  const [suggestionsFValue, setSuggestionsFValue] = useState("");

  const onChangeFSuggestions = ({ value }) => {
    setSuggestionsFValue(value);
  };

  const callbackFunc = (newValue) => {
    const result = new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          newValue
            ? countries.filter((option) =>
                option.toUpperCase().includes(newValue.toUpperCase())
              )
            : countries
        );
      }, 1500)
    );
    return result;
  };
  const errorCallbackFunc = () => {
    const result = new Promise((resolve, reject) =>
      setTimeout(() => {
        reject("err");
      }, 3000)
    );
    return result;
  };

  return (
    <>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Controlled</h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Sizes</h4>
        <DxcTextInput
          label="Small"
          margin={{ left: "medium", right: "medium" }}
          size="small"
          clearable
        />
        <DxcTextInput
          label="Medium"
          margin={{ left: "medium", right: "medium" }}
          clearable
        />
        <DxcTextInput
          label="Large"
          margin={{ left: "medium", right: "medium" }}
          size="large"
          clearable
        />
        <DxcTextInput
          label="Fill parent"
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
          clearable
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Uncontrolled</h4>
        <DxcTextInput margin={{ left: "medium", right: "medium" }} clearable />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Clearable</h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          margin={{ left: "medium", right: "medium" }}
          clearable
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character)
        </h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With min length 5 and max length 10
        </h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          minLength={5}
          maxLength={10}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) and minimum length 5 and maximum length 10
        </h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          minLength={5}
          maxLength={10}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) - Custom error message
        </h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With min length 5 and max length 10 - Custom error message
        </h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          minLength={5}
          maxLength={10}
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) and minimum length 5 and maximum length 10 - Custom error
          message
        </h4>
        <DxcTextInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          minLength={5}
          maxLength={10}
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          Autosuggest - With pattern (At least one letter, one number and one
          special character)
        </h4>
        <DxcTextInput
          value={suggestionsValue}
          label="Autosuggest"
          onChange={onChangeSuggestions}
          suggestions={countries}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          Autosuggest - With min length 5 and max length 10
        </h4>
        <DxcTextInput
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={countries}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          minLength={5}
          maxLength={10}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          Autosuggest - With pattern (At least one letter, one number and one
          special character) and minimum length 5 and maximum length 10
        </h4>
        <DxcTextInput
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={countries}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          minLength={5}
          maxLength={10}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          Autosuggest - With pattern (At least one letter, one number and one
          special character) - Custom error messages
        </h4>
        <DxcTextInput
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={countries}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          Autosuggest - With min length 5 and max length 10 - Custom error
          messages
        </h4>
        <DxcTextInput
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={countries}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          minLength={5}
          maxLength={10}
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          Autosuggest - With pattern (At least one letter, one number and one
          special character) and minimum length 5 and maximum length 10 - Custom
          error messages
        </h4>
        <DxcTextInput
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={countries}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          clearable
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          minLength={5}
          maxLength={10}
          error={errorMessage}
        />
      </p>
      <p>
        <DxcTextInput
          label="Prefix and suffix text input"
          optional
          prefix="+34"
          suffix="USD"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
        />
      </p>
      <p>
        <DxcTextInput
          label="Prefix icon text input"
          prefix={
            <svg
              version="1.1"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
            >
              <g id="Bounding_Box">
                <rect fill="none" width="24" height="24" />
              </g>
              <g id="Master">
                <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
              </g>
            </svg>
          }
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
        />
      </p>
      <p>
        <DxcTextInput
          label="Action text input with a SVG"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          action={actionTrashSVG}
        />
      </p>
      <p>
        <DxcTextInput
          label="Action text input with a URL"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          action={{
            onClick: () => console.log("Take a pic!"),
            icon: "https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png",
          }}
        />
      </p>
      <p>
        <DxcTextInput
          prefix="😀"
          label="Error text input"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ left: "medium", bottom: "small", right: "medium" }}
          error="Error message."
          suffix="😠"
          action={action}
          clearable
        />
      </p>
      <p>
        <DxcTextInput
          label="With 'on' autocomplete"
          autocomplete="on"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcTextInput
          label="Disabled text input"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          disabled
        />
      </p>
      <p>
        <DxcTextInput
          label="Disabled text input with prefix and suffix"
          helperText="Example of helper text"
          value="Example text"
          prefix="+34"
          suffix="USD"
          margin="medium"
          disabled
        />
      </p>
      <p>
        <DxcTextInput
          label="Disabled text input with action"
          helperText="Example of helper text"
          placeholder="Placeholder"
          action={action}
          margin="medium"
          disabled
        />
      </p>
      <p>
        <DxcTextInput
          label="Text input with suggestions"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={countries}
          clearable
        />
      </p>
      <p>
        <DxcTextInput
          label="Suggestions + action"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          action={action}
          suggestions={countries}
          clearable
        />
      </p>
      <p>
        <DxcTextInput
          label="Uncontrolled suggestions"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          suggestions={[
            "Suggestion 1",
            "Suggestion 2",
            "Suggestion 3",
            "Suggestion 4",
          ]}
          clearable
        />
      </p>
      <p>
        <DxcTextInput
          label="Text input with suggestions function"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          value={suggestionsFValue}
          onChange={onChangeFSuggestions}
          suggestions={callbackFunc}
          clearable
        />
      </p>
      <p>
        <DxcTextInput
          label="Text input with suggestions error function"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="medium"
          suggestions={errorCallbackFunc}
          clearable
        />
      </p>
      <p>
        <DxcTextInput
          label="Text input with ref"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
          clearable
        />
        <DxcButton
          onClick={() => {
            const input = ref.current.getElementsByTagName("input")[0];
            input.focus();
          }}
          label="Focus!"
          margin={{ left: "medium" }}
        ></DxcButton>
      </p>
    </>
  );
}

const Mode = ({ mode, children }) => {
  return (
    <ModeContainer mode={mode}>
      <PreviewsContainer>{children}</PreviewsContainer>
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "transparent"};

  display: flex;
  flex-flow: row wrap;
`;

const PreviewsContainer = styled.div`
  flex: 100%;
`;

export default App;

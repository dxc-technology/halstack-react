import React, { useState } from "react";
import { DxcInput, ThemeContext } from "@dxc-technology/halstack-react";
import icon from "../images/home.svg";

const colors = {
  inputText: {
    selectedOptionBackgroundColor: "#fabada",
  },
};

const countries = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "The Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

function App() {
  const [inputValue, changeInput] = useState("");
  const [autocompleteValue, changeAutocompleteValue] = useState("");
  const [
    asynchronousAutocompleteValue,
    changeAsynchronousAutocompleteValue,
  ] = useState("");

  const onChange = (newValue) => {
    changeInput(newValue);
  };
  const onSuffixClick = () => {
    changeInput("suffix Clicked");
  };

  const onPrefixClick = () => {
    changeInput("prefix Clicked");
  };
  const onChangeAutocomplete = (newValue) => {
    changeAutocompleteValue(newValue);
  };
  const onChangeAutocompleteUncontrolled = (newValue) => {
    console.log("onChange called");
  };
  const onChangeAsynchronousAutocomplete = (newValue) => {
    changeAsynchronousAutocompleteValue(newValue);
  };
  const onBlurAutocomplete = () => {
    console.log("onBlur called");
  };

  function callbackFunc(newValue) {
    const result = new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          newValue
            ? countries.filter((option) =>
                option.toUpperCase().includes(newValue.toUpperCase())
              )
            : countries
        );
      }, 3000)
    );
    return result;
  }
  function callbackFuncRejected(newValue) {
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error!");
      }, 3000);
    });
    return result;
  }

  return (
    <div>
      <div className="test-case" id="prefix-suffix-icon-input">
        <h4>With prefix and suffix icons</h4>
        <DxcInput
          label="Input label"
          suffixIconSrc={icon}
          prefixIconSrc={icon}
          value={inputValue}
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="prefix-icon-input">
        <h4>With prefix icon</h4>
        <DxcInput
          label="Input label"
          prefixIconSrc={icon}
          value={inputValue}
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="suffix-icon-input">
        <h4>With suffix icon</h4>
        <DxcInput
          label="Input label"
          suffixIconSrc={icon}
          value={inputValue}
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="assistive-text-input">
        <h4>With assistive text</h4>
        <DxcInput
          label="Input label"
          value={inputValue}
          assistiveText="assistive text"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="invalid-text-input">
        <h4>Invalid input text</h4>
        <DxcInput
          label="Input label"
          value={inputValue}
          assistiveText="assistive text"
          onChange={onChange}
          invalid={true}
        />
      </div>

      <div className="test-case" id="without-label-input">
        <h4>Without label</h4>
        <DxcInput
          value={inputValue}
          assistiveText="assistive text"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="without-assistive-text-label-input">
        <h4>Without assistive text and label</h4>
        <DxcInput value={inputValue} onChange={onChange} />
      </div>

      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcInput
          label="Input label"
          value={inputValue}
          assistiveText="assistive text"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="disabled-input">
        <h4>Disabled input text</h4>
        <DxcInput
          label="Input label"
          value={inputValue}
          disabled={true}
          assistiveText="assistive text"
          onChange={onChange}
        />
      </div>

      <div className="test-case" id="required-input">
        <h4>Required input text</h4>
        <DxcInput
          label="Input label"
          value={inputValue}
          required={true}
          assistiveText="assistive text"
          onChange={onChange}
          margin="medium"
        />
      </div>

      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-single-line-label-text">
          <h5>Small size - Label and assistive text max size single line</h5>
          <DxcInput
            label="Label "
            value={inputValue}
            assistiveText="assistive"
            onChange={onChange}
            size="small"
          />
        </div>
        <div className="test-case" id="small-single-line-label-text-value">
          <h5>
            Small size - Label, assistive text and value max size single line
          </h5>
          <DxcInput
            label="Label"
            value="Input"
            assistiveText="assistive"
            onChange={onChange}
            size="small"
          />
        </div>
        <div className="test-case" id="small-single-line-min-size">
          <h5>
            Small size - Label, assistive text and value min size single line
          </h5>
          <DxcInput
            label="Label i"
            value="Input i"
            assistiveText="assistive t"
            onChange={onChange}
            size="small"
          />
        </div>

        <div className="test-case" id="small-max-size-prefix">
          <h5>Small size - Value max size single line with prefix</h5>
          <DxcInput
            value="I"
            prefix="pre"
            onClickPrefix={onPrefixClick}
            onChange={onChange}
            size="small"
          />
        </div>
        <div className="test-case" id="small-max-size-suffix">
          <h5>Small size - Value max size single line with suffix</h5>
          <DxcInput
            value="I"
            suffix="suf"
            onClickSuffix={onSuffixClick}
            onChange={onChange}
            size="small"
          />
        </div>
        <div className="test-case" id="small-max-size-prefix-suffix">
          <h5>
            Small size - Value max size single line with prefix and suffix
          </h5>
          <DxcInput
            value=""
            prefix="pre"
            suffix="suf"
            onClickSuffix={onSuffixClick}
            onClickPrefix={onPrefixClick}
            onChange={onChange}
            size="small"
          />
        </div>
        <div className="test-case" id="medium-single-line-label-text">
          <h5>Medium size - Label and assistive text max size single line</h5>
          <DxcInput
            label="Input label input label input lab"
            value={inputValue}
            assistiveText="assistive text assistive text assistive text"
            onChange={onChange}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-single-line-label-text-value">
          <h5>
            Medium size - Label, assistive text and value max size single line
          </h5>
          <DxcInput
            label="Input label input label input lab"
            value="Input value input value input val"
            assistiveText="assistive text assistive text assistive text"
            onChange={onChange}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-single-line-min-size">
          <h5>
            Medium size - Label, assistive text and value min size single line
          </h5>
          <DxcInput
            label="Input label input label input labe"
            value="Input value input value input valu"
            assistiveText="assistive text assistive text assistive text a"
            onChange={onChange}
            size="medium"
          />
        </div>

        <div className="test-case" id="medium-max-size-prefix">
          <h5>Medium size - Value max size single line with prefix</h5>
          <DxcInput
            value="Input value input value inp"
            prefix="pre"
            onClickPrefix={onPrefixClick}
            onChange={onChange}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-max-size-suffix">
          <h5>Medium size - Value max size single line with suffix</h5>
          <DxcInput
            value="Input value input value inp"
            suffix="suf"
            onClickSuffix={onSuffixClick}
            onChange={onChange}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-max-size-preffix-suffix">
          <h5>
            Medium size - Value max size single line with prefix and suffix
          </h5>
          <DxcInput
            value="Input value input valu"
            prefix="pre"
            suffix="suf"
            onClickPrefix={onPrefixClick}
            onClickSuffix={onSuffixClick}
            onChange={onChange}
            size="medium"
          />
        </div>
        <div className="test-case" id="large-single-line-label-text">
          <h5>Large size - Label and assistive text max size single line</h5>
          <DxcInput
            label="Input label input label input label input label input label input l"
            value={inputValue}
            assistiveText="assistive text assistive text assistive text assistive text assistive text assistive tex"
            onChange={onChange}
            size="large"
          />
        </div>
        <div className="test-case" id="large-single-line-label-text-value">
          <h5>
            Large size - Label, assistive text and value max size single line
          </h5>
          <DxcInput
            label="Input label input label input label input label input label input l"
            value="Input value input value input value input value input value input"
            assistiveText="assistive text assistive text assistive text assistive text assistive text assistive tex"
            onChange={onChange}
            size="large"
          />
        </div>
        <div className="test-case" id="large-single-line-min-size">
          <h5>
            Large size - Label, assistive text and value min size single line
          </h5>
          <DxcInput
            label="Input label input label input label input label input label input la"
            value="Input value input value input value input value input value input v"
            assistiveText="assistive text assistive text assistive text assistive text assistive text assistive text"
            onChange={onChange}
            size="large"
          />
        </div>

        <div className="test-case" id="large-max-size-prefix">
          <h5>Large size - Value max size single line with prefix</h5>
          <DxcInput
            value="Input value input value input value input value input value i"
            prefix="pre"
            onClickPrefix={onPrefixClick}
            onChange={onChange}
            size="large"
          />
        </div>
        <div className="test-case" id="large-max-size-suffix">
          <h5>Large size - Value max size single line with suffix</h5>
          <DxcInput
            value="Input value input value input value input value input value i"
            suffix="suf"
            onClickSuffix={onSuffixClick}
            onChange={onChange}
            size="large"
          />
        </div>
        <div className="test-case" id="large-max-size-prefix-suffix">
          <h5>
            Large size - Value max size single line with prefix and suffix
          </h5>
          <DxcInput
            value="Input value input value input value input value input v"
            prefix="pre"
            suffix="suf"
            onClickSuffix={onSuffixClick}
            onClickPrefix={onPrefixClick}
            onChange={onChange}
            size="large"
          />
        </div>
        <div className="test-case" id="fillParent-single-line-label-text">
          <h5>
            FillParent size - Label and assistive text max size single line
          </h5>
          <DxcInput
            label="Input label example input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input i"
            value={inputValue}
            assistiveText="assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistiv"
            onChange={onChange}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-single-line-label-text-value">
          <h5>
            FillParent size - Label, assistive text and value max size single
            line
          </h5>
          <DxcInput
            label="Input label example input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input i"
            value="Input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value i"
            assistiveText="assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistiv"
            onChange={onChange}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-single-line-min-size">
          <h5>
            FillParent size - Label, assistive text and value min size single
            line
          </h5>
          <DxcInput
            label="Input label example input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input input in"
            value="Input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value in"
            assistiveText="assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive"
            onChange={onChange}
            size="fillParent"
          />
        </div>

        <div className="test-case" id="fillParent-max-size-prefix">
          <h5>FillParent size - Value max size single line with prefix</h5>
          <DxcInput
            value="Input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input va"
            prefix="pre"
            onClickPrefix={onPrefixClick}
            onChange={onChange}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-max-size-suffix">
          <h5>FillParent size - Value max size single line with suffix</h5>
          <DxcInput
            value="Input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input v"
            suffix="suf"
            onClickSuffix={onSuffixClick}
            onChange={onChange}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-max-size-prefix-suffix">
          <h5>
            FillParent size - Value max size single line with prefix and suffix
          </h5>
          <DxcInput
            value="Input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value input value in"
            prefix="pre"
            suffix="suf"
            onClickSuffix={onSuffixClick}
            onClickPrefix={onPrefixClick}
            onChange={onChange}
            size="fillParent"
          />
        </div>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcInput
            label="Input label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xxsmall"
          />
        </div>

        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcInput
            label="Input label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xsmall"
          />
        </div>

        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcInput
            label="Input label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="small"
          />
        </div>

        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcInput
            label="Input label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="large"
          />
        </div>

        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcInput
            label="Input label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xlarge"
          />
        </div>

        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcInput
            label="Input label"
            value={inputValue}
            assistiveText={"assistive text"}
            onChange={onChange}
            margin="xxlarge"
          />
        </div>
      </div>

      <div className="test-case" id="async-autocomplete">
        <h4>Asynchronous Autocomplete</h4>
        <DxcInput
          label="Asynchronous Autocomplete"
          value={asynchronousAutocompleteValue}
          onChange={onChangeAsynchronousAutocomplete}
          onBlur={onBlurAutocomplete}
          autocompleteOptions={callbackFunc}
        />
      </div>
      <div className="test-case" id="sync-autocomplete">
        <h4>Synchronous Autocomplete</h4>
        <DxcInput
          label="Synchronous Autocomplete"
          value={autocompleteValue}
          onChange={onChangeAutocomplete}
          onBlur={onBlurAutocomplete}
          autocompleteOptions={countries}
        />
      </div>

      <div className="test-case" id="custom-colors">
        <h4>Custom Autocomplete</h4>
        <ThemeContext.Provider value={colors}>
          <DxcInput
            label="Asynchronous Autocomplete"
            value={asynchronousAutocompleteValue}
            onChange={onChangeAsynchronousAutocomplete}
            onBlur={onBlurAutocomplete}
            autocompleteOptions={callbackFunc}
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;

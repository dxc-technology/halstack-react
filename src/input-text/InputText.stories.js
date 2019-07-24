import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import logo from "../../.storybook/public/amazon.svg";

import inputTextMD from "./readme.md";
import InputText from "./InputText";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

const onBlur = action("onBlur");
onBlur.toString = () => "onBlurHandler";

const onClickIcon = action("onClickIcon");
onClickIcon.toString = () => "onClickIconHandler";

storiesOf("Form Components|Text", module).add(
  "Component",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <InputText
          disabled={true}
          label="Normal Input"
          error={false}
          value="Test Value"
          onChange={onChange}
          onBlur={onBlur}
          required={true}
          assistiveText="Assistive Text Here"
        />
        <InputText
          disabled={false}
          label="With Assistive Text"
          assistiveText="Assistive Text Here"
          error={true}
          onChange={onChange}
          onBlur={onBlur}
          required={true}
        />
        <InputText
          disabled={true}
          label="With Prefix text"
          prefix="Kg"
          onChange={onChange}
          onBlur={onBlur}
          assistiveText="Assistive Text Here"
        />
        <InputText disabled={true} label="With Sufix text" sufix="€" onChange={onChange} onBlur={onBlur} />
        <InputText
          disabled={true}
          label="With Prefix icon"
          prefixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={true}
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
      </div>
      {/* <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <InputText
          disabled={false}
          theme="dark"
          label="Normal Input"
          error={false}
          value="Test Value"
          onChange={onChange}
          onBlur={onBlur}
          required={true}
          assistiveText="Assistive Text Here"
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Assistive Text"
          assistiveText="Assistive Text Here"
          error={true}
          onChange={onChange}
          onBlur={onBlur}
          required={true}
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Prefix text"
          prefix="Kg"
          onChange={onChange}
          onBlur={onBlur}
          assistiveText="Assistive Text Here"
        />
        <InputText disabled={true} label="With Sufix text" sufix="€" theme="dark" onChange={onChange} onBlur={onBlur} />
        <InputText
          disabled={false}
          theme="dark"
          label="With Prefix icon"
          prefixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
      </div> */}
    </div>
  ),
  {
    notes: { markdown: inputTextMD }
  }
);
storiesOf("Form Components|Text", module).add("Controlled Component", () => {
  class ControlledStory extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: []
      };
    }

    onInputBlur = value => this.setState({ value });
    onValueChange = value => this.setState({ value });

    render() {
      const props = {
        ...this.props,
        onBlur: this.onInputBlur,
        onChange: this.onValueChange,
        value: this.state.value
      };

      return <InputText {...props} />;
    }
  }

  const props = {
    disabled: false,
    theme: "light",
    name: "inputText_name",
    assistiveText: "Helper text",
    label: "Test label"
  };

  return <ControlledStory {...props} />;
});

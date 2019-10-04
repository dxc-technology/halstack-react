import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import amazon from "../../.storybook/public/amazon.svg";

import DxcToggle from "./Toggle.jsx";

import toggleMD from "./readme.md";

const onClick = action("onClick");
onClick.toString = () => "onClickHandler";

storiesOf("Form Components|Toggle", module).add(
  "Types",
  () => {
    const ControlledStory = ({}) => {
      const [selected, setSelected] = useState(false);
      const [selected1, setSelected1] = useState(false);
      const [selected2, setSelected2] = useState(false);

      const click = value => {
        setSelected(!value);
        if (!value) {
          setSelected2(false);
        }
      };

      const click1 = value => {
        setSelected1(!value);
        if (!value) {
          setSelected2(false);
        }
      };

      const click2 = value => {
        setSelected2(!value);
        if (!value) {
          setSelected(false);
          setSelected1(false);
        }
      };

      return (
        <div>
          <h3>Light</h3>
          <div style={{ width: "100%", display: "inline-flex", alignItems: "center" }}>
            <DxcToggle iconSrc={amazon} label="Toggle 1" selected={selected} onClick={click}></DxcToggle>
            <DxcToggle label="Toggle 2" selected={selected1} disabled={true} onClick={click1}></DxcToggle>
            <DxcToggle iconSrc={amazon} selected={selected2} onClick={click2}></DxcToggle>
            <DxcToggle
              label="Disabled Ripple"
              disableRipple={true}
              iconSrc={amazon}
              selected={selected2}
              onClick={click2}
            ></DxcToggle>

            <DxcToggle
              iconSrc={amazon}
              label="Toggle 1"
              mode="outlined"
              selected={selected}
              disabled={true}
              onClick={click}
            ></DxcToggle>
            <DxcToggle label="Toggle 2" mode="outlined" selected={selected1} onClick={click1}></DxcToggle>
            <DxcToggle iconSrc={amazon} mode="outlined" selected={selected2} onClick={click2}></DxcToggle>
            <DxcToggle
              label="Disabled Ripple"
              disableRipple={true}
              iconSrc={amazon}
              mode="outlined"
              selected={selected2}
              onClick={click2}
            ></DxcToggle>
          </div>

          <h3>Dark</h3>
          <div style={{ width: "100%", display: "inline-flex", background: "black", alignItems: "center" }}>
            <DxcToggle theme="dark" iconSrc={amazon} label="Toggle 1" selected={selected} onClick={click}></DxcToggle>
            <DxcToggle theme="dark" label="Toggle 2" selected={selected1} disabled={true} onClick={click1}></DxcToggle>
            <DxcToggle theme="dark" iconSrc={amazon} selected={selected2} onClick={click2}></DxcToggle>
            <DxcToggle
              label="Disabled Ripple"
              disableRipple={true}
              theme="dark"
              iconSrc={amazon}
              selected={selected2}
              onClick={click2}
            ></DxcToggle>

            <DxcToggle
              theme="dark"
              iconSrc={amazon}
              label="Toggle 1"
              mode="outlined"
              selected={selected}
              disabled={true}
              onClick={click}
            ></DxcToggle>
            <DxcToggle theme="dark" label="Toggle 2" mode="outlined" selected={selected1} onClick={click1}></DxcToggle>
            <DxcToggle theme="dark" iconSrc={amazon} mode="outlined" selected={selected2} onClick={click2}></DxcToggle>
            <DxcToggle
              label="Disabled Ripple"
              disableRipple={true}
              theme="dark"
              iconSrc={amazon}
              mode="outlined"
              selected={selected2}
              onClick={click2}
            ></DxcToggle>
          </div>
        </div>
      );
    };

    return <ControlledStory />;
  },
  {
    notes: { markdown: toggleMD }
  }
);

const knobProps = () => ({
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  iconPosition: select("Icon Position", { after: "after", before: "before" }, "before"),
  mode: select("Mode", { default: "basic", alternative: "outlined" }, "basic"),
  disabled: boolean("Disabled", false),
  disableRipple: boolean("Disable ripple", false),
  selected: boolean("Selected", false),
  label: text("Label", "label")
});

storiesOf("Form Components|Toggle", module).add(
  "Knobs example",
  () => {
    const props = knobProps();

    return (
      <div
        style={{
          background: (props.theme === "dark" && "black") || "transparent",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <DxcToggle {...props} iconSrc={amazon}></DxcToggle>
      </div>
    );
  },
  {
    notes: { markdown: toggleMD }
  }
);

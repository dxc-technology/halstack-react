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
      const [selected1, setselected1] = useState(false);
      const [selected2, setselected2] = useState(false);
      const [selected3, setselected3] = useState(false);
      const [selected4, setselected4] = useState(false);
      const [selected5, setselected5] = useState(false);

      const [selected6, setSelected6] = useState(false);
      const [selected7, setselected7] = useState(false);
      const [selected8, setselected8] = useState(false);
      const [selected9, setselected9] = useState(false);
      const [selected10, setselected10] = useState(false);
      const [selected11, setselected11] = useState(false);

      const click = value => {
        setSelected(!value);
      };

      const click1 = value => {
        setselected1(!value);
      };

      const click2 = value => {
        setselected2(!value);
      };

      const click3 = value => {
        setselected3(!value);
      };
      const click4 = value => {
        setselected4(!value);
      };
      const click5 = value => {
        setselected5(!value);
      };

      const click6 = value => {
        setSelected6(!value);
      };

      const click7 = value => {
        setselected7(!value);
      };

      const click8 = value => {
        setselected8(!value);
      };

      const click9 = value => {
        setselected9(!value);
      };
      const click10 = value => {
        setselected10(!value);
      };
      const click11 = value => {
        setselected11(!value);
      };

      return (
        <div>
          <h3>Light</h3>
          <div style={{ width: "100%", display: "inline-flex", alignItems: "center" }}>
            <DxcToggle iconSrc={amazon} label="Toggle 1" selected={selected} onClick={click}></DxcToggle>
            <DxcToggle label="Toggle 2" selected={true} disabled={true}></DxcToggle>
            <DxcToggle iconSrc={amazon} selected={selected1} onClick={click1}></DxcToggle>
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
              selected={false}
              disabled={true}
            ></DxcToggle>
            <DxcToggle label="Toggle 2" mode="outlined" selected={selected3} onClick={click3}></DxcToggle>
            <DxcToggle iconSrc={amazon} mode="outlined" selected={selected4} onClick={click4}></DxcToggle>
            <DxcToggle
              label="Disabled Ripple"
              disableRipple={true}
              iconSrc={amazon}
              mode="outlined"
              selected={selected5}
              onClick={click5}
            ></DxcToggle>
          </div>

          <h3>Dark</h3>
          <div style={{ width: "100%", display: "inline-flex", background: "black", alignItems: "center" }}>
            <DxcToggle theme="dark" iconSrc={amazon} label="Toggle 1" selected={selected6} onClick={click6}></DxcToggle>
            <DxcToggle theme="dark" label="Toggle 2" selected={false} disabled={true}></DxcToggle>
            <DxcToggle theme="dark" iconSrc={amazon} selected={selected7} onClick={click7}></DxcToggle>
            <DxcToggle
              label="Disabled Ripple"
              disableRipple={true}
              theme="dark"
              iconSrc={amazon}
              selected={selected8}
              onClick={click8}
            ></DxcToggle>

            <DxcToggle
              theme="dark"
              iconSrc={amazon}
              label="Toggle 1"
              mode="outlined"
              selected={true}
              disabled={true}
            ></DxcToggle>
            <DxcToggle theme="dark" label="Toggle 2" mode="outlined" selected={selected9} onClick={click9}></DxcToggle>
            <DxcToggle theme="dark" iconSrc={amazon} mode="outlined" selected={selected10} onClick={click10}></DxcToggle>
            <DxcToggle
              label="Disabled Ripple"
              disableRipple={true}
              theme="dark"
              iconSrc={amazon}
              mode="outlined"
              selected={selected11}
              onClick={click11}
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

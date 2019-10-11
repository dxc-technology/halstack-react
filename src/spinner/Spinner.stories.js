/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, number } from "@storybook/addon-knobs";
import spinnerMD from "./readme.md";
import Spinner from "./Spinner";

storiesOf("Form Components|Spinner", module).add(
  "Types",
  () => (
    <div>
      <h3>Undertermined spinner</h3>
      <div style={{ display: "flex", width: "1440px", height: "204px" }}>
        <Spinner theme="light" label="Processing..." overlay={false} />
        <Spinner theme="light" label="Loading..." overlay={false} />
        <Spinner theme="light" label="Loading..." overlay={false} />
        <Spinner theme="light" label="Loading..." overlay={false} />
      </div>
      <h3>Dark</h3>
      <div style={{ display: "flex", backgroundColor: "black", width: "1440px", height: "204px" }}>
        <Spinner theme="dark" label="Processing..." overlay={false} showValue value={52} />
        <Spinner theme="dark" label="Loading..." overlay={false} />
        <Spinner theme="dark" label="Loading..." overlay={false} />
        <Spinner theme="dark" label="Loading..." overlay={false} />
      </div>
      <h3>No overlay</h3>
      <div style={{ display: "flex", backgroundColor: "white", width: "1440px", height: "204px" }}>
        <Spinner theme="light" label="Processing..." overlay={false} />
        <Spinner theme="light" label="Loading..." overlay={false} />
        <Spinner theme="light" label="Loading..." overlay={false} showValue value={30} />
        <Spinner theme="light" label="Loading..." overlay={false} />
      </div>{" "}
      <div style={{ display: "flex", backgroundColor: "black", width: "1440px", height: "204px" }}>
        <Spinner theme="dark" label="Processing..." overlay={false} />
        <Spinner theme="dark" label="Loading..." overlay={false} showValue value={20} />
        <Spinner theme="dark" label="Loading..." overlay={false} />
        <Spinner theme="dark" label="Loading..." overlay={false} />
      </div>
      <h3>Overlay</h3>
      <div style={{ display: "flex" }}>
        <Spinner theme="dark" label="Loading..." overlay />
      </div>
    </div>
  ),
  {
    notes: { markdown: spinnerMD }
  }
);

const knobProps = () => ({
  label: text("label", "Loading..."),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  value: number("value", ""),
  overlay: boolean("overlay", false),
  showValue: boolean("show value", false)
});

storiesOf("Form Components|Spinner", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Spinner {...props} />
      </div>
    );
  },
  {
    notes: { markdown: spinnerMD }
  }
);

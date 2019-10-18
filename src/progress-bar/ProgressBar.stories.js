import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, number } from "@storybook/addon-knobs";
import progressBarMD from "./readme.md";
import ProgressBar from "./ProgressBar";

storiesOf("Form Components|Progress Bar", module).add(
  "Types",
  () => (
    <div>
      <div>
        <h3>Determined and undetermined progress bar</h3>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
              <ProgressBar label="Loading..." theme="light" overlay={false} showValue value={0} />
              <ProgressBar label="Loading..." theme="light" overlay={false} showValue value={15} />
              <ProgressBar label="Loading..." theme="light" overlay={false} showValue value={52} />
              <ProgressBar label="Loading..." theme="light" overlay={false} showValue value={80} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
              <ProgressBar label="Loading..." theme="light" overlay={false} value={0} />
              <ProgressBar label="Loading..." theme="light" overlay={false} value={15} />
              <ProgressBar label="Loading..." theme="light" overlay={false} value={52} />
              <ProgressBar label="Loading..." theme="light" overlay={false} value={80} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Dark</h3>
        <div style={{ display: "flex", flexDirection: "row", background: "black" }}>
          <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
            <ProgressBar label="Loading..." theme="dark" overlay={false} showValue value={0} />
            <ProgressBar label="Loading..." theme="dark" overlay={false} showValue value={15} />
            <ProgressBar label="Loading..." theme="dark" overlay={false} showValue value={52} />
            <ProgressBar label="Loading..." theme="dark" overlay={false} showValue value={80} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
            <ProgressBar label="Loading..." theme="dark" overlay={false} value={0} />
            <ProgressBar label="Loading..." theme="dark" overlay={false} value={15} />
            <ProgressBar label="Loading..." theme="dark" overlay={false} value={52} />
            <ProgressBar label="Loading..." theme="dark" overlay={false} value={80} />
          </div>
        </div>
      </div>
      <div>
        <h3>Simplified</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
            <ProgressBar theme="light" overlay={false} />
            <ProgressBar theme="light" overlay={false} />
            <ProgressBar theme="light" overlay={false} />
            <ProgressBar theme="light" overlay={false} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
            <ProgressBar theme="light" overlay={false} showValue value={0} />
            <ProgressBar theme="light" overlay={false} showValue value={20} />
            <ProgressBar theme="light" overlay={false} showValue value={30} />
            <ProgressBar theme="light" overlay={false} showValue value={50} />
          </div>
        </div>
      </div>
      <div>
        <h3>Overlay</h3>
        <div style={{ display: "flex" }}>
          <ProgressBar theme="dark" label="Loading..." overlay showValue value={33} />
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: progressBarMD }
  }
);

const knobProps = () => ({
  label: text("label", "Loading..."),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  value: number("value", ""),
  overlay: boolean("overlay", false),
  showValue: boolean("showValue", false)
});

storiesOf("Form Components|Progress Bar", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <ProgressBar {...props} />
      </div>
    );
  },
  {
    notes: { markdown: progressBarMD }
  }
);

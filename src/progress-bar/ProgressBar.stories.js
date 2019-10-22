import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, number } from "@storybook/addon-knobs";
import progressBarMD from "./readme.md";
import ProgressBar from "./ProgressBar";
import Button from "../button/Button";

storiesOf("Form Components|Progress Bar", module).add(
  "Types",
  () => {
    class ControlledStory extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          isVisible: false
        };
      }
      openProgressBar = () => {
        this.setState({ isVisible: !this.state.isVisible });
      };

      render() {
        return (
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
              <div>
                <Button mode="basic" theme="light" label="Overlay Progress Bar" onClick={this.openProgressBar} />
                {this.state.isVisible && (
                  <div
                    onClick={this.openProgressBar}
                    style={{
                      position: "fixed",
                      backgroundColor: "#000000B3",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 1000
                    }}
                  >
                    <ProgressBar theme="light" label="Loading..." overlay showValue value={33} />
                  </div>
                )}
              </div>     
            </div>
          </div>
        );
      }
    }
    return <ControlledStory />;
  },
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

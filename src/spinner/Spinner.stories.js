import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, number } from "@storybook/addon-knobs";
import spinnerMD from "./readme.md";
import Spinner from "./Spinner";
import Button from "../button/Button";

storiesOf("Form Components|Spinner", module).add(
  "Types",
  () => {
    class ControlledStory extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          isVisible: false
        };
      }
      openSpinner = () => {
        this.setState({ isVisible: !this.state.isVisible });
      };

      render() {
        return (
          <div>
            <h3>Undetermined spinner</h3>
            <div
              style={{
                display: "flex",
                width: "1440px",
                height: "204px",
                justifyContent: "space-around"
              }}
            >
              <div
                style={{
                  marginTop: "34px",
                  display: "flex",
                  width: "1440px",
                  height: "170px",
                  justifyContent: "space-around"
                }}
              >
                <Spinner theme="light" />
                <Spinner theme="light" label="Loading..." />
                <Spinner theme="light" showValue value={12} />
                <Spinner theme="light" label="Loading..." showValue value={34} />
                <div
                  style={{
                    marginTop: "46px"
                  }}
                >
                  <Spinner theme="light" mode="small" />
                </div>
              </div>
            </div>
            <h3>Dark</h3>
            <div
              style={{
                display: "flex",
                backgroundColor: "black",
                width: "1440px",
                height: "204px",
                justifyContent: "space-around"
              }}
            >
              <div
                style={{
                  marginTop: "34px",
                  display: "flex",
                  backgroundColor: "black",
                  width: "1440px",
                  height: "170px",
                  justifyContent: "space-around"
                }}
              >
                <Spinner theme="dark" label="" />
                <Spinner theme="dark" label="Loading..." />
                <Spinner theme="dark" showValue value={32} />
                <Spinner theme="dark" label="Loading..." showValue value={34} />
                <div
                  style={{
                    marginTop: "46px"
                  }}
                >
                  <Spinner theme="dark" mode="small" />
                </div>
              </div>
            </div>
            <h3>Overlay</h3>
            <div>
              <Button mode="basic" theme="light" label="Overlay Spinner" onClick={this.openSpinner} />
              {this.state.isVisible && (
                <div onClick={this.openSpinner}>
                  <Spinner theme="light" label="Loading..." mode="overlay" />
                </div>
              )}
            </div>
          </div>
        );
      }
    }
    return <ControlledStory />;
  },
  {
    notes: { markdown: spinnerMD }
  }
);

const knobProps = () => ({
  label: text("label", "Loading..."),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  mode: select("mode", { large: "large", small: "small", overlay: "overlay" }, "large"),
  value: number("value", ""),
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

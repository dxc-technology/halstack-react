import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import alertMD from "./readme.md";
import Alert from "./Alert";
import Button from "../button/Button";
import { func } from "prop-types";

storiesOf("Form Components|Alert", module).add(
  "Types",
  () => {
    class ControlledStory extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          isVisibleInfoAlert: true,
          isVisibleWarningAlert: true,
          isVisibleSuccessAlert: true,
          isVisibleErrorAlert: true,
          isVisibleModalAlert: false
        };
      }

      setVisibleInfoAlert = () => {
        this.setState({ isVisibleInfoAlert: !this.state.isVisibleInfoAlert });
      };

      setVisibleWarningAlert = () => {
        this.setState({ isVisibleWarningAlert: !this.state.isVisibleWarningAlert });
      };

      setVisibleSuccessAlert = () => {
        this.setState({ isVisibleSuccessAlert: !this.state.isVisibleSuccessAlert });
      };

      setVisibleErrorAlert = () => {
        this.setState({ isVisibleErrorAlert: !this.state.isVisibleErrorAlert });
      };

      setVisibleModalAlert = () => {
        this.setState({ isVisibleModalAlert: !this.state.isVisibleModalAlert });
      };

      render() {
        return (
          <div>
            <div style={{ display: "flex", flexDirection: "column", position: "static" }}>
              {this.state.isVisibleInfoAlert && (
                <Alert
                  type="info"
                  mode="inline"
                  inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget."
                />
              )}
              {this.state.isVisibleWarningAlert && (
                <Alert
                  type="warning"
                  mode="inline"
                  inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget."
                  onClose={this.setVisibleWarningAlert}
                />
              )}
              {this.state.isVisibleSuccessAlert && (
                <Alert
                  type="confirm"
                  mode="inline"
                  inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget."
                >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </div>
                </Alert>
              )}
              {this.state.isVisibleErrorAlert && (
                <Alert
                  type="error"
                  mode="inline"
                  inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget."
                  onClose={this.setVisibleErrorAlert}
                >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </div>
                </Alert>
              )}
            </div>
            <div style={{ marginLeft: "33px" }}>
              <Button mode="basic" theme="light" label="Overlay Alert" onClick={this.setVisibleModalAlert} />
            </div>
            <div onClick={this.setVisibleModalAlert}>
              {this.state.isVisibleModalAlert && (
                <Alert
                  type="info"
                  mode="modal"
                  inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget."
                  onClose={this.setVisibleModalAlert}
                >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </div>
                </Alert>
              )}
            </div>
          </div>
        );
      }
    }
    return <ControlledStory />;
  },
  {
    notes: { markdown: alertMD }
  }
);

const knobProps = () => ({
  type: select("type", { info: "info", confirm: "confirm", warning: "warning", error: "error" }, "info"),
  mode: select("mode", { inline: "inline", modal: "modal" }, "inline"),
  inlineText: text(
    "inlineText",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  )
});

storiesOf("Form Components|Alert", module).add(
  "Knobs example",
  () => {
    const props = knobProps();

    return (
      <div>
        <Alert {...props}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </Alert>
      </div>
    );
  },
  {
    notes: { markdown: alertMD }
  }
);

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../common/OpenSans.css";
import { text, boolean, select } from "@storybook/addon-knobs";

import dialogMD from "./readme.md";
import "../common/OpenSans.css";

import DxcDialog from "./Dialog";
import DxcButton from "../button/Button";
import DxcSwitch from "../switch/Switch";
import DxcDate from "../date/Date";
import DxcText from "../input-text/InputText";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

storiesOf("Form Components|Dialog", module).add(
  "Component",
  () => {
    class ControlledStory extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          opened: false,
          opened1: false,
          opened2: false,
          content: false
        };
      }

      dialogHandler = () => {
        this.setState({ opened: !this.state.opened });
      };

      dialogHandler1 = () => {
        this.setState({ opened1: !this.state.opened1 });
      };

      dialogHandler2 = () => {
        this.setState({ opened2: !this.state.opened2 });
      };

      contentHandler = () => {
        this.setState({ content: !this.state.content });
      };

      render() {
        return (
          <div>
            <DxcDialog isVisible={this.state.opened} isCloseVisible={true} onClose={this.dialogHandler} overlay={true}>
              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <DxcSwitch label={"Content"} checked={false} onChange={this.contentHandler}></DxcSwitch>
              </div>
              {this.state.content && (
                <div style={{ fontFamily: "Open Sans, sans serif" }}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam class orci, est lectus eros praesent
                    rhoncus dui etiam nascetur a mauris, luctus bibendum facilisis senectus sodales lobortis condimentum
                    porta posuere. Massa varius ac imperdiet mauris quis rhoncus, nisl interdum gravida ullamcorper
                    aliquam aptent pellentesque, consequat leo quam nec montes. Ridiculus mollis augue nam erat volutpat
                    nibh congue, nostra habitasse dignissim pulvinar libero iaculis taciti et, bibendum morbi potenti
                    lobortis purus laoreet.
                  </p>
                  <p>
                    Netus justo auctor consequat enim potenti et luctus dis, felis facilisi varius conubia mollis
                    gravida neque integer, phasellus tempus congue eu donec egestas metus. Volutpat blandit vehicula
                    posuere montes purus leo inceptos magnis, molestie justo sodales massa laoreet pharetra cum lacus,
                    nulla curabitur cursus per maecenas auctor iaculis. Aliquet ultricies litora lectus integer molestie
                    sociosqu dictum sagittis vel erat porttitor quam vitae, class ultrices vestibulum fusce potenti
                    natoque nam feugiat sapien eleifend eros nisl. Laoreet facilisi fusce est massa fames pellentesque
                    magnis sem, eros pharetra montes ornare volutpat conubia vestibulum quisque, nisl taciti malesuada
                    enim ridiculus venenatis sagittis.
                  </p>
                </div>
              )}
            </DxcDialog>
            <DxcButton onClick={this.dialogHandler} label="Click me" />

            <DxcDialog
              isVisible={this.state.opened1}
              isCloseVisible={true}
              onClose={this.dialogHandler1}
              overlay={false}
            >
              <div style={{ fontFamily: "Open Sans, sans serif" }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam class orci, est lectus eros praesent
                  rhoncus dui etiam nascetur a mauris, luctus bibendum facilisis senectus sodales lobortis condimentum
                  porta posuere. Massa varius ac imperdiet mauris quis rhoncus, nisl interdum gravida ullamcorper
                  aliquam aptent pellentesque, consequat leo quam nec montes. Ridiculus mollis augue nam erat volutpat
                  nibh congue, nostra habitasse dignissim pulvinar libero iaculis taciti et, bibendum morbi potenti
                  lobortis purus laoreet.
                </p>
                <p>
                  Netus justo auctor consequat enim potenti et luctus dis, felis facilisi varius conubia mollis gravida
                  neque integer, phasellus tempus congue eu donec egestas metus. Volutpat blandit vehicula posuere
                  montes purus leo inceptos magnis, molestie justo sodales massa laoreet pharetra cum lacus, nulla
                  curabitur cursus per maecenas auctor iaculis. Aliquet ultricies litora lectus integer molestie
                  sociosqu dictum sagittis vel erat porttitor quam vitae, class ultrices vestibulum fusce potenti
                  natoque nam feugiat sapien eleifend eros nisl. Laoreet facilisi fusce est massa fames pellentesque
                  magnis sem, eros pharetra montes ornare volutpat conubia vestibulum quisque, nisl taciti malesuada
                  enim ridiculus venenatis sagittis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam class orci, est lectus eros praesent
                  rhoncus dui etiam nascetur a mauris, luctus bibendum facilisis senectus sodales lobortis condimentum
                  porta posuere. Massa varius ac imperdiet mauris quis rhoncus, nisl interdum gravida ullamcorper
                  aliquam aptent pellentesque, consequat leo quam nec montes. Ridiculus mollis augue nam erat volutpat
                  nibh congue, nostra habitasse dignissim pulvinar libero iaculis taciti et, bibendum morbi potenti
                  lobortis purus laoreet.
                </p>
                <p>
                  Netus justo auctor consequat enim potenti et luctus dis, felis facilisi varius conubia mollis gravida
                  neque integer, phasellus tempus congue eu donec egestas metus. Volutpat blandit vehicula posuere
                  montes purus leo inceptos magnis, molestie justo sodales massa laoreet pharetra cum lacus, nulla
                  curabitur cursus per maecenas auctor iaculis. Aliquet ultricies litora lectus integer molestie
                  sociosqu dictum sagittis vel erat porttitor quam vitae, class ultrices vestibulum fusce potenti
                  natoque nam feugiat sapien eleifend eros nisl. Laoreet facilisi fusce est massa fames pellentesque
                  magnis sem, eros pharetra montes ornare volutpat conubia vestibulum quisque, nisl taciti malesuada
                  enim ridiculus venenatis sagittis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam class orci, est lectus eros praesent
                  rhoncus dui etiam nascetur a mauris, luctus bibendum facilisis senectus sodales lobortis condimentum
                  porta posuere. Massa varius ac imperdiet mauris quis rhoncus, nisl interdum gravida ullamcorper
                  aliquam aptent pellentesque, consequat leo quam nec montes. Ridiculus mollis augue nam erat volutpat
                  nibh congue, nostra habitasse dignissim pulvinar libero iaculis taciti et, bibendum morbi potenti
                  lobortis purus laoreet.
                </p>
                <p>
                  Netus justo auctor consequat enim potenti et luctus dis, felis facilisi varius conubia mollis gravida
                  neque integer, phasellus tempus congue eu donec egestas metus. Volutpat blandit vehicula posuere
                  montes purus leo inceptos magnis, molestie justo sodales massa laoreet pharetra cum lacus, nulla
                  curabitur cursus per maecenas auctor iaculis. Aliquet ultricies litora lectus integer molestie
                  sociosqu dictum sagittis vel erat porttitor quam vitae, class ultrices vestibulum fusce potenti
                  natoque nam feugiat sapien eleifend eros nisl. Laoreet facilisi fusce est massa fames pellentesque
                  magnis sem, eros pharetra montes ornare volutpat conubia vestibulum quisque, nisl taciti malesuada
                  enim ridiculus venenatis sagittis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam class orci, est lectus eros praesent
                  rhoncus dui etiam nascetur a mauris, luctus bibendum facilisis senectus sodales lobortis condimentum
                  porta posuere. Massa varius ac imperdiet mauris quis rhoncus, nisl interdum gravida ullamcorper
                  aliquam aptent pellentesque, consequat leo quam nec montes. Ridiculus mollis augue nam erat volutpat
                  nibh congue, nostra habitasse dignissim pulvinar libero iaculis taciti et, bibendum morbi potenti
                  lobortis purus laoreet.
                </p>
                <p>
                  Netus justo auctor consequat enim potenti et luctus dis, felis facilisi varius conubia mollis gravida
                  neque integer, phasellus tempus congue eu donec egestas metus. Volutpat blandit vehicula posuere
                  montes purus leo inceptos magnis, molestie justo sodales massa laoreet pharetra cum lacus, nulla
                  curabitur cursus per maecenas auctor iaculis. Aliquet ultricies litora lectus integer molestie
                  sociosqu dictum sagittis vel erat porttitor quam vitae, class ultrices vestibulum fusce potenti
                  natoque nam feugiat sapien eleifend eros nisl. Laoreet facilisi fusce est massa fames pellentesque
                  magnis sem, eros pharetra montes ornare volutpat conubia vestibulum quisque, nisl taciti malesuada
                  enim ridiculus venenatis sagittis.
                </p>

              </div>
              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <DxcButton mode="raised" theme="light" label="OK" onClick={this.dialogHandler1} />
                <DxcButton mode="flat" theme="light" label="CANCEL" onClick={this.dialogHandler1} />
              </div>
            </DxcDialog>
            <DxcButton onClick={this.dialogHandler1} label="Click me" />

            <DxcDialog
              isVisible={this.state.opened2}
              isCloseVisible={false}
              onClose={this.dialogHandler2}
              overlay={true}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <DxcDate
                  name="date"
                  format="dd/MM/yyyy"
                  label="BirthDate"
                  theme="light"
                  assistiveText="Assistive Text Here"
                  onInputChange={event => console.log(event)}
                />
                <DxcText
                  disabled={false}
                  label="Amount"
                  multiline={false}
                  sufix="K"
                  prefix="€"
                  theme="light"
                  assistiveText="Assistive Text Here"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <DxcButton onClick={this.dialogHandler2} label="Close" />
              </div>
            </DxcDialog>
            <DxcButton onClick={this.dialogHandler2} label="Click me" />
          </div>
        );
      }
    }
    return <ControlledStory />;
  },
  {
    notes: { markdown: dialogMD }
  }
);

const knobProps = () => ({
  isVisible: boolean("Visible", false),
  isCloseVisible: boolean("Close Visible", false),
  overlay: boolean("Overlay", false)
});

storiesOf("Form Components|Dialog", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div>
        <p style={{ fontFamily: "Open Sans, sans serif" }}>Check visible</p>
        <DxcDialog onClose={close} {...props}>
          This is a knobs example
        </DxcDialog>
      </div>
    );
  },
  {
    notes: { markdown: dialogMD }
  }
);

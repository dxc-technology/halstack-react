import React from "react";
import { DxcSwitch } from "@diaas/dxc-react-cdk";
import styled from "styled-components";
class SwitchExamples extends React.Component {
  state = {
    toggled: true,
    toggled1: true
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({
      toggled: checked
    });
  }
  render() {
    return (
      <div>
        <h1>Switch Component</h1>
        <h2>Basic Example</h2>
        <SwicthExamplesContainer>
          <DxcSwitch
            checked={this.state.toggled}
            value="value1"
            label="value1"
            labelPosition="after"
            theme="light"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcSwitch
            checked={this.state.toggled}
            value="value2"
            label="value2"
            labelPosition="after"
            theme="light"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcSwitch
            checked={this.state.toggled}
            value="value3"
            label="value3"
            labelPosition="before"
            theme="light"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcSwitch
            checked={this.state.toggled}
            value="value4"
            label="value4"
            labelPosition="before"
            theme="light"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
        </SwicthExamplesContainer>
        <div style={{ display: "inline-flex", background: "black" }}>
        <DxcSwitch
            checked={this.state.toggled}
            value="value1"
            label="value1"
            labelPosition="after"
            theme="dark"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcSwitch
            checked={this.state.toggled}
            value="value2"
            label="value2"
            labelPosition="after"
            theme="dark"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcSwitch
            checked={this.state.toggled}
            value="value3"
            label="value3"
            labelPosition="before"
            theme="dark"
            name="Checkbox"
            disabled={false}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
          <DxcSwitch
            checked={this.state.toggled}
            value="value4"
            label="value4"
            labelPosition="before"
            theme="dark"
            name="Checkbox"
            disabled={true}
            disableRipple={false}
            onChange={event => this.handleChange(event)}
          />
        </div>
      </div>
    );
  }
}

const SwicthExamplesContainer = styled.div`
  display: flex;
`;
export default SwitchExamples;

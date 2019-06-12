import React from "react";
import styled from "styled-components";

import { DxcSlider } from "@diaas/dxc-react-cdk";

class App extends React.Component {
  state = { value: 0 };

  handleChange = value => {
    this.setState({ value });
  };

  handleDragEnd = value => {
    console.log("Mouse released");
  };

  render() {
    return (
      <div>
        <SliderDiv>
          <DxcSlider
            minValue={0}
            maxValue={100}
            value={this.state.value}
            onChange={this.handleChange}
            onDragEnd={this.handleDragEnd}
            showLimitsValues={true}
            showInput={true}
            name="input"
            onChangeInput={this.handleChangeInput}
            disabled={false}
            required={true}
            theme="light"
          />
        </SliderDiv>
        <SliderDivDark>
          <DxcSlider
            minValue={0}
            maxValue={100}
            value={this.state.value}
            onChange={this.handleChange}
            onDragEnd={this.handleDragEnd}
            showLimitsValues={true}
            showInput={true}
            name="input"
            onChangeInput={this.handleChangeInput}
            disabled={false}
            required={true}
            theme="dark"
          />
        </SliderDivDark> 
      </div>
    );
  }
}

const SliderDiv = styled.div`
  width: 100%;
`;
const SliderDivDark = styled.div`
  background-color: black;
`;

export default App;

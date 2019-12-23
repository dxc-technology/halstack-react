import React from "react";
import { DxcDialog, DxcButton } from "@diaas/dxc-react-cdk";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDialog1Visible: false,
      isDialog2Visible: false,
      isDialog3Visible: false
    };
  }
  setDialog1Visible = () => {
    this.setState({ isDialog1Visible: !this.state.isDialog1Visible });
  };
  setDialog2Visible = () => {
    this.setState({ isDialog2Visible: !this.state.isDialog2Visible });
  };
  setDialog3Visible = () => {
    this.setState({ isDialog3Visible: !this.state.isDialog3Visible });
  };

  render() {
    return (
      <div>
        <DxcButton
          label="Dialog 1"
          onClick={this.setDialog1Visible}
        ></DxcButton>
        {this.state.isDialog1Visible && (
          <DxcDialog isCloseVisible={true} onClose={this.setDialog1Visible}>
            Close Icon
          </DxcDialog>
        )}

        <DxcButton
          label="Dialog 2"
          onClick={this.setDialog2Visible}
        ></DxcButton>
        {this.state.isDialog2Visible && (
          <DxcDialog onBackgroundClick={this.setDialog2Visible}>
            Overlay close
          </DxcDialog>
        )}

        <DxcButton
          label="Dialog 3"
          onClick={this.setDialog3Visible}
        ></DxcButton>
        {this.state.isDialog3Visible && (
          <DxcDialog>
            <DxcButton
              label="Close"
              onClick={this.setDialog3Visible}
            ></DxcButton>
          </DxcDialog>
        )}
      </div>
    );
  }
}

export default App;

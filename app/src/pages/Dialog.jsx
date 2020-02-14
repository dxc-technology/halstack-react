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
          margin="medium"
        ></DxcButton>
        {this.state.isDialog1Visible && (
          <DxcDialog
            isCloseVisible={true}
            onCloseClick={this.setDialog1Visible}
          >
            Close Icon
          </DxcDialog>
        )}

        <DxcButton
          label="Dialog 2"
          onClick={this.setDialog2Visible}
          margin="medium"
        ></DxcButton>
        {this.state.isDialog2Visible && (
          <DxcDialog
            padding="xxlarge"
            onBackgroundClick={this.setDialog2Visible}
            isCloseVisible={false}
          >
            Overlay close
          </DxcDialog>
        )}

        <DxcButton
          label="Dialog 3"
          onClick={this.setDialog3Visible}
          margin="medium"
        ></DxcButton>
        {this.state.isDialog3Visible && (
          <DxcDialog padding="xxlarge" isCloseVisible={false}>
            <DxcButton
              label="Close"
              onClick={this.setDialog3Visible}
              margin="small"
            ></DxcButton>
          </DxcDialog>
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
import { DxcAlert, DxcButton } from "@diaas/dxc-react-cdk";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisibleInfoAlert: true,
      isVisibleWarningAlert: true,
      isVisibleSuccessAlert: true,
      isVisibleErrorAlert: true,
      isVisibleOverlayAlert: false
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

  setVisibleOverlayAlert = () => {
    this.setState({ isVisibleOverlayAlert: !this.state.isVisibleOverlayAlert });
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <DxcAlert
            type="info"
            mode="inline"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                leo lobortis eget."
            isVisible={this.state.isVisibleInfoAlert}
          />
          <DxcAlert
            type="warning"
            mode="inline"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                leo lobortis eget."
            isVisible={this.state.isVisibleWarningAlert}
            onClose={this.setVisibleWarningAlert}
          />
          <DxcAlert
            type="confirm"
            mode="inline"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                leo lobortis eget."
            isVisible={this.state.isVisibleSuccessAlert}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAlert>
          <DxcAlert
            type="error"
            mode="inline"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                leo lobortis eget."
            isVisible={this.state.isVisibleErrorAlert}
            onClose={this.setVisibleErrorAlert}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAlert>
        </div>
        <DxcButton
          mode="basic"
          theme="light"
          label="Overlay Alert"
          onClick={this.setVisibleOverlayAlert}
        />
        <div onClick={this.setVisibleOverlayAlert}>
          <DxcAlert
            type="info"
            mode="modal"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                leo lobortis eget."
            isVisible={this.state.isVisibleOverlayAlert}
            onClose={this.setVisibleOverlayAlert}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000
            }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAlert>
        </div>
      </div>
    );
  }
}

export default App;

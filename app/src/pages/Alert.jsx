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
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {this.state.isVisibleInfoAlert && (
            <DxcAlert
              type="info"
              mode="inline"
              inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
            />
          )}
          {this.state.isVisibleWarningAlert && (
            <DxcAlert
              type="warning"
              mode="inline"
              inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
              onClose={this.setVisibleWarningAlert}
            />
          )}
          {this.state.isVisibleSuccessAlert && (
            <DxcAlert
              type="confirm"
              mode="inline"
              inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAlert>
          )}
          {this.state.isVisibleErrorAlert && (
            <DxcAlert
              type="error"
              mode="inline"
              inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
              onClose={this.setVisibleErrorAlert}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAlert>
          )}
        </div>
        <div>
          <DxcButton
            mode="basic"
            theme="light"
            label="Overlay Alert"
            onClick={this.setVisibleModalAlert}
          />
        </div>
        {this.state.isVisibleModalAlert && (
          <DxcAlert
            type="info"
            mode="modal"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
            onClose={this.setVisibleModalAlert}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAlert>
        )}
      </div>
    );
  }
}

export default App;

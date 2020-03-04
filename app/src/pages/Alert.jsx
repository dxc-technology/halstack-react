import React from "react";
import { useState } from "react";
import { DxcAlert, DxcButton } from "@diaas/dxc-react-cdk";

function App() {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };

  return (
    <div>
      <div>
        <h4>Mode</h4>
        <div className="test-case" id="inline-alert">
          <h5>Inline alert</h5>
          <DxcAlert
            margin="xxsmall"
            type="info"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="modal-alert">
          <h5>Modal alert</h5>
          <div>
            <DxcButton
              mode="basic"
              theme="light"
              label="Modal Alert"
              onClick={handleVisibility}
              margin="medium"
            />
          </div>
          {isVisible && (
            <DxcAlert
              type="info"
              mode="modal"
              onClose={handleVisibility}
              inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
              margin="medium"
            ></DxcAlert>
          )}
        </div>
      </div>

      <div>
        <h4>Types</h4>
        <div className="test-case" id="info-type">
          <h5>Info</h5>
          <DxcAlert
            margin="xxsmall"
            type="info"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="confirm-type">
          <h5>Confirm</h5>
          <DxcAlert
            margin="xxsmall"
            type="confirm"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="warning-type">
          <h5>Warning</h5>
          <DxcAlert
            margin="xxsmall"
            type="warning"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="error-type">
          <h5>Error</h5>
          <DxcAlert
            margin="xxsmall"
            type="error"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
      </div>

      <div className="test-case" id="max-label-size-single-line">
        <h4>Max label size single line</h4>
        <DxcAlert
          margin="xxsmall"
          type="info"
          inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobo."
        />
      </div>

      <div className="test-case" id="min-label-size-ellipsis">
        <h4>Min label size ellipsis</h4>
        <DxcAlert
          margin="xxsmall"
          type="info"
          inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobor."
        />
      </div>

      <div>
        <h4>Closable inline alert</h4>
        <div className="test-case" id="closable-alert">
          <DxcAlert
            margin="xxsmall"
            type="confirm"
            mode="inline"
            onClose={handleVisibility}
            inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
        </div>
      </div>

      <div>
        <h4>With children</h4>
        <div className="test-case" id="children-alert">
          <DxcAlert
            type="warning"
            mode="inline"
            inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            margin="xxsmall"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAlert>
        </div>
      </div>

      <div>
        <h4>With children - Max label size</h4>
        <div className="test-case" id="max-label-size-children">
          <DxcAlert
            type="warning"
            mode="inline"
            inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuad."
            margin="xxsmall"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit a.
            </div>
          </DxcAlert>
        </div>
      </div>

      <div>
        <h4>With children - Min label size ellipsis</h4>
        <div className="test-case" id="min-label-size-ellipsis-children">
          <DxcAlert
            type="warning"
            mode="inline"
            inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada."
            margin="xxsmall"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit am.
            </div>
          </DxcAlert>
        </div>
      </div>
      <div>
        <h4>With children - Max content size single line</h4>
        <div className="test-case" id="max-content-size-single-line">
          <DxcAlert
            type="warning"
            mode="inline"
            inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            margin="xxsmall"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit a.
            </div>
          </DxcAlert>
        </div>
      </div>

      <div>
        <h4>With children - Min content size multiline</h4>
        <div className="test-case" id="min-content-size-multiline">
          <DxcAlert
            type="warning"
            mode="inline"
            inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            margin="xxsmall"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit am.
            </div>
          </DxcAlert>
        </div>
      </div>

      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="large-size">
          <h5>Large size</h5>
          <DxcAlert
            margin="xxsmall"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
            size="large"
          />
        </div>
        <div className="test-case" id="fitContent-size">
          <h5>FitContent size</h5>
          <DxcAlert
            margin="xxsmall"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
            size="fitContent"
          />
        </div>
        <div className="test-case" id="fillParent-size">
          <h5>FillParent size</h5>
          <DxcAlert
            margin="xxsmall"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
            size="fillParent"
          />
        </div>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcAlert
            margin="xxsmall"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcAlert
            margin="xsmall"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcAlert
            margin="small"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcAlert
            margin="medium"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcAlert
            margin="large"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcAlert
            margin="xlarge"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcAlert
            margin="xxlarge"
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo lobortis eget."
          />
        </div>
      </div>
    </div>
  );
}

export default App;

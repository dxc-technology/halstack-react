import React from "react";
import { DxcBox } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <DxcBox size="small" margin="small">
            Small Box
          </DxcBox>
        </div>
        <div className="test-case" id="medium-size">
          <DxcBox size="medium" margin="small">
            Medium Box
          </DxcBox>
        </div>
        <div className="test-case" id="large-size">
          <DxcBox size="large" margin="small">
            Large Box
          </DxcBox>
        </div>
        <div className="test-case" id="fillParent-size">
          <DxcBox size="fillParent" margin="small">
            fillParent Box
          </DxcBox>
        </div>
        <div className="test-case" id="fitcontent-size">
          <DxcBox size="fitContent" margin="small">
            fitcontent Box
          </DxcBox>
        </div>
        <h4>Margins</h4>
        <div className="test-case" id="margin-xxsmall">
          <DxcBox size="medium" display="flex" margin="xxsmall">
            xxSmall margin box
          </DxcBox>
        </div>
        <div className="test-case" id="margin-xsmall">
          <DxcBox size="medium" margin="xsmall">
            xSmall margin box
          </DxcBox>
        </div>
        <div className="test-case" id="margin-small">
          <DxcBox size="medium" margin="small">
            Small margin box
          </DxcBox>
        </div>
        <div className="test-case" id="margin-medium">
          <DxcBox size="medium" margin="medium">
            Medium margin box
          </DxcBox>
        </div>
        <div className="test-case" id="margin-large">
          <DxcBox size="medium" margin="large">
            Large margin box
          </DxcBox>
        </div>
        <div className="test-case" id="margin-xlarge">
          <DxcBox size="medium" margin="xlarge">
            xLarge margin box
          </DxcBox>
        </div>
        <div className="test-case" id="margin-xxlarge">
          <DxcBox size="medium" margin="xxlarge">
            xxLarge margin box
          </DxcBox>
        </div>
        <h4>Paddings</h4>
        <div className="test-case" id="padding-xxsmall">
          <DxcBox size="medium" padding="xxsmall">
            xxSmall padding box
          </DxcBox>
        </div>
        <div className="test-case" id="padding-xsmall">
          <DxcBox size="medium" padding="xsmall">
            xSmall padding box
          </DxcBox>
        </div>
        <div className="test-case" id="padding-small">
          <DxcBox size="medium" padding="small">
            Small padding box
          </DxcBox>
        </div>
        <div className="test-case" id="padding-medium">
          <DxcBox size="medium" padding="medium">
            Medium padding box
          </DxcBox>
        </div>
        <div className="test-case" id="padding-large">
          <DxcBox size="medium" padding="large">
            Large padding box
          </DxcBox>
        </div>
        <div className="test-case" id="padding-xlarge">
          <DxcBox size="medium" padding="xlarge">
            xLarge padding box
          </DxcBox>
        </div>
        <div className="test-case" id="padding-xxlarge">
          <DxcBox size="medium" padding="xxlarge">
            xxLarge padding box
          </DxcBox>
        </div>
        <h4>Shadow Depth</h4>
        <div className="test-case" id="shadowDepth-0">
          <DxcBox size="medium" margin="medium" shadowDepth={0}>
            Shadow Depth 0
          </DxcBox>
        </div>
        <div className="test-case" id="shadowDepth-1">
          <DxcBox size="medium" margin="medium" shadowDepth={1}>
            Shadow Depth 1
          </DxcBox>
        </div>
        <div className="test-case" id="shadowDepth-2">
          <DxcBox size="medium" margin="medium" shadowDepth={2}>
            Shadow Depth 2
          </DxcBox>
        </div>
        <h4>Examples</h4>
        <DxcBox
          margin="medium"
          padding="medium"
          shadowDepth={1}
          display="block"
          size="medium"
        >
          Hola que tal
        </DxcBox>
        <DxcBox
          margin="medium"
          padding="medium"
          shadowDepth={1}
          display="block"
          size="large"
        >
          Hola que tal
        </DxcBox>
        <DxcBox
          margin="medium"
          padding="medium"
          shadowDepth={1}
          display="block"
          size="small"
        >
          Hola que tal
        </DxcBox>
        <div style={{ width: "250px" }}>
          <DxcBox
            margin="medium"
            padding="medium"
            shadowDepth={1}
            display="block"
            size="fillParent"
          >
            Hola que tal
          </DxcBox>
        </div>
      </div>
    </div>
  );
}

export default App;

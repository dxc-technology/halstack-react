import React from "react";
import { DxcTag } from "@diaas/dxc-react-cdk";

import twitterIcon from "../images/twitter.svg";
import fbIcon from "../images/facebook.svg";
import liIcon from "../images/linkedin.svg";
import inIcon from "../images/dxcassure_logo_wht.png"

function App() {
  return (
    <div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <DxcTag
            margin="medium"
            label=""
            iconSrc={inIcon}
            size="small"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="fitcontent-size">
          <DxcTag
            margin="medium"
            label="asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf"
            iconSrc={inIcon}
            size="fitcontent"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="medium-size">
          <DxcTag
            margin="medium"
            label="Size medium"
            iconSrc={inIcon}
            size="medium"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="large-size">
          <DxcTag
            margin="medium"
            label="Size large"
            iconSrc={inIcon}
            size="large"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="fillParent-size">
          <DxcTag
            margin="medium"
            label="Fill parent"
            iconSrc={twitterIcon}
            size="fillParent"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <DxcTag
            margin="xxsmall"
            label="xxsmall margin"
            iconSrc={twitterIcon}
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcTag
            margin="xsmall"
            label="xsmall margin"
            iconSrc={twitterIcon}
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="small-margin">
          <DxcTag
            margin="small"
            label="small margin"
            iconSrc={twitterIcon}
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="medium-margin">
          <DxcTag
            margin="medium"
            label="medium margin"
            iconSrc={twitterIcon}
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="large-margin">
          <DxcTag
            margin="large"
            label="large margin"
            iconSrc={twitterIcon}
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcTag
            margin="xlarge"
            label="xlarge margin"
            iconSrc={twitterIcon}
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <div className="test-case" id="xxlarge-margin">
          <DxcTag
            margin="xxlarge"
            label="xxlarge margin"
            iconSrc={twitterIcon}
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Max label size oneline - medium Tag</h4>
        <div className="test-case" id="max-label-size-oneline-medium-tag">
          <DxcTag
            iconSrc={twitterIcon}
            size="medium"
            label="large 12345678"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Min label size multiline - medium Tag</h4>
        <div className="test-case" id="min-label-size-multiline-medium-tag">
          <DxcTag
            iconSrc={twitterIcon}
            size="medium"
            label="large 123456789"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Max label size oneline - large Tag</h4>
        <div className="test-case" id="max-label-size-oneline-large-tag">
          <DxcTag
            iconSrc={twitterIcon}
            size="large"
            label="large 12345678901234567890123456789012345"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Min label size multiline - large Tag</h4>
        <div className="test-case" id="min-label-size-multiline-large-tag">
          <DxcTag
            iconSrc={twitterIcon}
            size="large"
            label="large 123456789012345678901234567890123456"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Max label size oneline - medium Tag(Icon after)</h4>
        <div
          className="test-case"
          id="max-label-size-oneline-medium-tag-icon-after"
        >
          <DxcTag
            iconSrc={twitterIcon}
            size="medium"
            label="large 12345678"
            labelPosition="before"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Min label size multiline - medium Tag(Icon after)</h4>
        <div
          className="test-case"
          id="min-label-size-multiline-medium-tag-icon-after"
        >
          <DxcTag
            iconSrc={twitterIcon}
            size="medium"
            label="large 123456789"
            labelPosition="before"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Max label size oneline - large Tag(Icon after)</h4>
        <div
          className="test-case"
          id="max-label-size-oneline-large-tag-icon-after"
        >
          <DxcTag
            iconSrc={twitterIcon}
            size="large"
            label="large tag with text safsd asdfasdf asdsdd asdsdd asdsdd"
            labelPosition="before"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <h4>Min label size multiline - large Tag(Icon after)</h4>
        <div
          className="test-case"
          id="min-label-size-multiline-large-tag-icon-after"
        >
          <DxcTag
            iconSrc={twitterIcon}
            size="large"
            label="large 123456789012345678901234567890123456"
            labelPosition="before"
            iconBgColor="#50ABF1"
          ></DxcTag>
        </div>
        <DxcTag
          margin="medium"
          linkHref="http://www.google.com"
          iconSrc={twitterIcon}
          label="Twitter"
          iconBgColor="#50ABF1"
        ></DxcTag>
        <DxcTag
          margin="medium"
          onClick={() => {
            console.log("click");
          }}
          iconSrc={fbIcon}
          iconBgColor="#4267b2"
          label="Facebook"
        ></DxcTag>
        <DxcTag
          margin="medium"
          iconSrc={liIcon}
          iconBgColor="#007BB5"
          label="LinkedIn"
          labelPosition="before"
        ></DxcTag>
      </div>
    </div>
  );
}

export default App;

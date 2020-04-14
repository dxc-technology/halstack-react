import React from "react";
import { DxcCard } from "@diaas/dxc-react-cdk";

import iceCream from "../images/ice-cream.jpg";
import twitterIcon from "../images/twitter.svg";

function App() {
  return (
    <div>
      <div className="img-test-case" id="imageCover">
        <h4>Image Background Cover</h4>
        <DxcCard imageSrc={iceCream} imageCover></DxcCard>
      </div>
      <div className="img-test-case" id="imagePosition-after">
        <h4>Image Position After</h4>
        <DxcCard imageSrc={iceCream} imageCover imagePosition="after"></DxcCard>
      </div>
      <div className="img-test-case" id="content-overflow">
        <h4>Content Overflow</h4>
        <DxcCard imageSrc={iceCream} imageCover>
          Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum
        </DxcCard>
      </div>

      <h4>Themes</h4>
      <div className="img-test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcCard theme="light" imageSrc={iceCream} imageCover>
          Lorem Ipsum
        </DxcCard>
      </div>
      <div className="img-test-case" id="medium-theme">
        <h4>Medium theme</h4>
        <DxcCard theme="medium" imageSrc={iceCream} imageCover>
          Lorem Ipsum
        </DxcCard>
      </div>
      <div className="img-test-case" id="dark-theme">
        <h4>Dark theme</h4>
        <DxcCard theme="dark" imageSrc={iceCream} imageCover>
          Lorem Ipsum
        </DxcCard>
      </div>
      <h4>Outlined Themes</h4>
      <div className="img-test-case" id="outlined-light-theme">
        <h4>Outlined Light theme</h4>
        <DxcCard
          theme="light"
          imageSrc={iceCream}
          imageCover
          outlined
        ></DxcCard>
      </div>
      <div className="img-test-case" id="outlined-medium-theme">
        <h4>Outlined Medium theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCard
            theme="medium"
            imageSrc={iceCream}
            imageCover
            outlined
            margin="xxlarge"
          ></DxcCard>
        </div>
      </div>
      <div className="img-test-case" id="outlined-dark-theme">
        <h4>Outlined Dark theme</h4>
        <div
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcCard
            theme="dark"
            imageSrc={iceCream}
            imageCover
            outlined
            margin="xxlarge"
          ></DxcCard>
        </div>
      </div>
      <div className="test-case" id="imageBgColor">
        <h4>Image Background Color</h4>
        <DxcCard
          imageBgColor="#6B4187"
          imageSrc={twitterIcon}
          imagePadding="xxlarge"
        ></DxcCard>
      </div>
      <h4>Image Paddings</h4>
      <div className="test-case" id="xxsmall-imagePadding">
        <h4>xxsmall imagePadding</h4>
        <DxcCard imageSrc={twitterIcon} imagePadding="xxsmall"></DxcCard>
      </div>
      <div className="test-case" id="xsmall-imagePadding">
        <h4>xsmall imagePadding</h4>
        <DxcCard imageSrc={twitterIcon} imagePadding="xsmall"></DxcCard>
      </div>
      <div className="test-case" id="small-imagePadding">
        <h4>small imagePadding</h4>
        <DxcCard imageSrc={twitterIcon} imagePadding="small"></DxcCard>
      </div>
      <div className="test-case" id="medium-imagePadding">
        <h4>medium imagePadding</h4>
        <DxcCard imageSrc={twitterIcon} imagePadding="medium"></DxcCard>
      </div>
      <div className="test-case" id="large-imagePadding">
        <h4>large imagePadding</h4>
        <DxcCard imageSrc={twitterIcon} imagePadding="large"></DxcCard>
      </div>
      <div className="test-case" id="xlarge-imagePadding">
        <h4>xlarge imagePadding</h4>
        <DxcCard imageSrc={twitterIcon} imagePadding="xlarge"></DxcCard>
      </div>
      <div className="test-case" id="xxlarge-imagePadding">
        <h4>xxlarge imagePadding</h4>
        <DxcCard imageSrc={twitterIcon} imagePadding="xxlarge"></DxcCard>
      </div>

      <h4>Margins</h4>
      <div className="test-case" id="xxsmall-margin">
        <h4>xxsmall margin</h4>
        <DxcCard margin="xxsmall"></DxcCard>
      </div>
      <div className="test-case" id="xsmall-margin">
        <h4>xsmall margin</h4>
        <DxcCard margin="xsmall"></DxcCard>
      </div>
      <div className="test-case" id="small-margin">
        <h4>small margin</h4>
        <DxcCard margin="small"></DxcCard>
      </div>
      <div className="test-case" id="medium-margin">
        <h4>medium margin</h4>
        <DxcCard margin="medium"></DxcCard>
      </div>
      <div className="test-case" id="large-margin">
        <h4>large margin</h4>
        <DxcCard margin="large"></DxcCard>
      </div>
      <div className="test-case" id="xlarge-margin">
        <h4>xlarge margin</h4>
        <DxcCard margin="xlarge"></DxcCard>
      </div>
      <div className="test-case" id="xxlarge-margin">
        <h4>xxlarge margin</h4>
        <DxcCard margin="xxlarge"></DxcCard>
      </div>
    </div>
  );
}

export default App;

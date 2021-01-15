import React from "react";
import { DxcCard, ThemeContext } from "@dxc-technology/halstack-react";

import iceCream from "../images/ice-cream.jpg";
import twitterIcon from "../images/twitter.svg";

function App() {
  return (
    <div>
      <div className="img-test-case" id="imageCover">
        <h4>Image Background Cover</h4>
        <DxcCard image={<img src={iceCream}></img>} imageCover />
      </div>
      <div className="img-test-case" id="imagePosition-after">
        <h4>Image Position After</h4>
        <DxcCard
          image={<img src={iceCream}></img>}
          imageCover
          imagePosition="after"
        />
      </div>
      <div className="img-test-case" id="content-overflow">
        <h4>Content Overflow</h4>
        <DxcCard image={<img src={iceCream}></img>} imageCover>
          Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum
        </DxcCard>
      </div>
      <div className="test-case" id="imageBgColor">
        <h4>Image Background Color</h4>
        <DxcCard
          imageBgColor="#6B4187"
          image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          }
          imagePadding="xxlarge"
        />
      </div>
      <h4>Image Paddings</h4>
      <div className="test-case" id="xxsmall-imagePadding">
        <h4>xxsmall imagePadding</h4>
        <DxcCard
          image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          }
          imagePadding="xxsmall"
        />
      </div>
      <div className="test-case" id="xsmall-imagePadding">
        <h4>xsmall imagePadding</h4>
        <DxcCard image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          } imagePadding="xsmall" />
      </div>
      <div className="test-case" id="small-imagePadding">
        <h4>small imagePadding</h4>
        <DxcCard image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          } imagePadding="small" />
      </div>
      <div className="test-case" id="medium-imagePadding">
        <h4>medium imagePadding</h4>
        <DxcCard image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          } imagePadding="medium" />
      </div>
      <div className="test-case" id="large-imagePadding">
        <h4>large imagePadding</h4>
        <DxcCard image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          } imagePadding="large" />
      </div>
      <div className="test-case" id="xlarge-imagePadding">
        <h4>xlarge imagePadding</h4>
        <DxcCard image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          } imagePadding="xlarge" />
      </div>
      <div className="test-case" id="xxlarge-imagePadding">
        <h4>xxlarge imagePadding</h4>
        <DxcCard image={
            <svg
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  fill="#FFFFFF"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
            </svg>
          } imagePadding="xxlarge" />
      </div>

      <h4>Margins</h4>
      <div className="test-case" id="xxsmall-margin">
        <h4>xxsmall margin</h4>
        <DxcCard margin="xxsmall" />
      </div>
      <div className="test-case" id="xsmall-margin">
        <h4>xsmall margin</h4>
        <DxcCard margin="xsmall" />
      </div>
      <div className="test-case" id="small-margin">
        <h4>small margin</h4>
        <DxcCard margin="small" />
      </div>
      <div className="test-case" id="medium-margin">
        <h4>medium margin</h4>
        <DxcCard margin="medium" />
      </div>
      <div className="test-case" id="large-margin">
        <h4>large margin</h4>
        <DxcCard margin="large" />
      </div>
      <div className="test-case" id="xlarge-margin">
        <h4>xlarge margin</h4>
        <DxcCard margin="xlarge" />
      </div>
      <div className="test-case" id="xxlarge-margin">
        <h4>xxlarge margin</h4>
        <DxcCard margin="xxlarge" />
      </div>
    </div>
  );
}

export default App;

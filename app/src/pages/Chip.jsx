import React, { useState } from "react";
import { DxcChip, ThemeProvider } from "@dxc-technology/halstack-react";
import avatar from "../images/avatar.svg";

const colors = {
  chip: {
    outlinedColor: "#FABADA",
    backgroundColor: "#FABADA",
    fontColor: "red",
  },
};

const deleteSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

function App() {
  const [isExpanded, changeIsExpanded] = useState(true);
  const onClickSuffix = (chip) => {
    console.log("Suffix CLICKED");
  };
  const onClickPrefix = (chip) => {
    console.log("Prefix CLICKED");
  };
  return (
    <div>
      <div className="test-case" id="default">
        <h4>Chip1 </h4>
        <DxcChip label="Chip 1" />
      </div>
      <div className="test-case" id="default-disabled">
        <h4>Chip1 DISABLED</h4>
        <DxcChip label="Chip 1" disabled={true} />
      </div>
      <div className="test-case" id="with-prefix-icon">
        <h4>Chip5 with prefixIcon</h4>
        <DxcChip
          label="Chip 5"
          prefixIcon={<p>This is a test</p>}
          onClickPrefix={onClickPrefix}
        />
      </div>
      <div className="test-case" id="with-suffix-icon">
        <h4>Chip6 with suffixIconSrc</h4>
        <DxcChip
          label="Chip 6"
          suffixIcon={deleteSVG}
          onClickSuffix={onClickSuffix}
        />
      </div>
      <div className="test-case" id="with-suffix-and-prefix">
        <h4>Chip7 with suffix and prefix</h4>
        <DxcChip
          label="Chip 7"
          suffixIcon={deleteSVG}
          onClickSuffix={onClickSuffix}
          onClickPrefix={onClickPrefix}
          prefixIcon={<img src={avatar}></img>}
        />
      </div>
      <div className="test-case" id="only-icon">
        <h4>Chip8 only icon</h4>
        <DxcChip
          suffixIcon={<img src={avatar}></img>}
          onClickSuffix={onClickSuffix}
        />
      </div>
      <div className="test-case" id="icons-and-disabled">
        <h4>Chip9 with icons and disabled</h4>
        <DxcChip
          label="Chip 9"
          disabled={true}
          prefixIcon={<img src={avatar}></img>}
          onClickPrefix={onClickPrefix}
        />
      </div>
      <div className="test-case" id="text-max-length">
        <h4>Large text</h4>
        <DxcChip
          label="Chip 5 asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fg sssssssssss"
          onClickPrefix={onClickPrefix}
          suffixIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          }
          margin="small"
        />
      </div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <DxcChip label="xxSmall margin" margin="xxsmall" />
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcChip label="xSmall margin" margin="xsmall" />
        </div>
        <div className="test-case" id="small-margin">
          <DxcChip label="Small margin" margin="small" />
        </div>
        <div className="test-case" id="medium-margin">
          <DxcChip label="Medium margin" margin="medium" />
        </div>
        <div className="test-case" id="large-margin">
          <DxcChip label="Large margin" margin="large" />
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcChip label="xLarge margin" margin="xlarge" />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <DxcChip label="xxLarge margin" margin="xxlarge" />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Chip</h4>
        <ThemeProvider theme={colors}>
          <DxcChip label="Chip with borders" margin="xxlarge" />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { DxcChip, ThemeContext } from "@dxc-technology/halstack-react";
import deleteIcon from "../images/delete-24px.svg";
import avatar from "../images/avatar.svg";

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
        <h4>Chip5 with prefixIconSrc</h4>
        <DxcChip
          label="Chip 5"
          prefixIconSrc={avatar}
          onClickPrefix={onClickPrefix}
        />
      </div>
      <div className="test-case" id="with-suffix-icon">
        <h4>Chip6 with suffixIconSrc</h4>
        <DxcChip
          label="Chip 6"
          suffixIconSrc={deleteIcon}
          onClickSuffix={onClickSuffix}
        />
      </div>
      <div className="test-case" id="with-suffix-and-prefix">
        <h4>Chip7 with suffix and prefix</h4>
        <DxcChip
          label="Chip 7"
          suffixIconSrc={deleteIcon}
          onClickSuffix={onClickSuffix}
          onClickPrefix={onClickPrefix}
          prefixIconSrc={avatar}
        />
      </div>
      <div className="test-case" id="only-icon">
        <h4>Chip8 only icon</h4>
        <DxcChip suffixIconSrc={avatar} onClickSuffix={onClickSuffix} />
      </div>
      <div className="test-case" id="icons-and-disabled">
        <h4>Chip9 with icons and disabled</h4>
        <DxcChip
          label="Chip 9"
          disabled={true}
          prefixIconSrc={avatar}
          onClickPrefix={onClickPrefix}
        />
      </div>
      <div className="test-case" id="text-max-length">
        <h4>Large text</h4>
        <DxcChip
          label="Chip 5 asdfasdf asdf asdfasdf asdf asdfasdf asdfasdf asdf asdf adfasrfasf afsdg afgasfg asdf asdf asdf asdf asdf asdf asdf  afdg asfg asdfg asdf asdf asdf asdfasdf asd fas df asd asdf asdf asdfasd fg sssssssssss"
          onClickPrefix={onClickPrefix}
          suffixIconSrc={deleteIcon}
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
    </div>
  );
}

export default App;

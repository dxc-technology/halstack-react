import React from "react";
import { DxcToggle } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import icon from "../images/favorite.svg";

function App() {
  const [selected, changeSelected] = useState(true);

  const onClick = newValue => {
    changeSelected(newValue);
  };

  return (
    <div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcToggle label="Toggle" selected={selected} onClick={onClick} />
      </div>

      <div>
        <h4>Dark theme</h4>
        <div
          style={{ background: "#000000" }}
          className="test-case"
          id="dark-theme"
        >
          <DxcToggle
            label="Toggle"
            selected={selected}
            theme="dark"
            onClick={onClick}
          />
        </div>
      </div>

      <div className="test-case" id="basic-toggle">
        <h4>Basic toggle</h4>
        <DxcToggle label="Basic toggle" selected={selected} onClick={onClick} />
      </div>

      <div className="test-case" id="outlined-toggle">
        <h4>Outlined toggle</h4>
        <DxcToggle
          label="Outlined toggle"
          mode="outlined"
          selected={selected}
          onClick={onClick}
        />
      </div>
      <div className="test-case" id="icon-toggle">
        <h4>Toggle with icon</h4>
        <DxcToggle iconSrc={icon} selected={selected} onClick={onClick} />
      </div>
      <div className="test-case" id="disabled-toggle">
        <h4>Disabled toggle</h4>
        <DxcToggle
          label="Toggle"
          disabled={true}
          selected={selected}
          onClick={onClick}
        />
      </div>

      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size-single-line">
          <h5>Small size - Icon</h5>
          <DxcToggle
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="small"
          />
        </div>
        <div className="test-case" id="small-size-multi-line">
          <h5>Small size - Label</h5>
          <DxcToggle
            label="T"
            selected={selected}
            onClick={onClick}
            size="small"
          />
        </div>

        <div className="test-case" id="medium-size-single-line">
          <h5>Medium size - Label max size single line</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-size-multiline">
          <h5>Medium size - Label min size multiline</h5>
          <DxcToggle
            label="Toggle e"
            selected={selected}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-size-single-line-icon-before">
          <h5>Medium size - Label max size single line icon before</h5>
          <DxcToggle
            label="Toggle"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-size-multiline-icon-before">
          <h5>Medium size - Label min size multiline icon before</h5>
          <DxcToggle
            label="Toggle e"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-size-single-line-icon-after">
          <h5>Medium size - Label max size single line icon after</h5>
          <DxcToggle
            label="Toggle"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case" id="medium-size-multiline-icon-after">
          <h5>Medium size - Label min size multiline icon after</h5>
          <DxcToggle
            label="Toggle e"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="medium"
          />
        </div>

        <div className="test-case" id="large-size-single-line">
          <h5>Large size - Label max size single line</h5>
          <DxcToggle
            label="Toggle example toggl"
            selected={selected}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case" id="large-size-multiline">
          <h5>Large size - Label min size multiline</h5>
          <DxcToggle
            label="Toggle example toggle"
            selected={selected}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case" id="large-size-single-line-icon-before">
          <h5>Large size - Label max size single line icon before</h5>
          <DxcToggle
            label="Toggle example to"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case" id="large-size-multiline-icon-before">
          <h5>Large size - Label min size multiline icon before</h5>
          <DxcToggle
            label="Toggle example tog"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case" id="large-size-single-line-icon-after">
          <h5>Large size - Label max size single line icon after</h5>
          <DxcToggle
            label="Toggle example to"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case" id="large-size-multiline-icon-after">
          <h5>Large size - Label min size multiline icon after</h5>
          <DxcToggle
            label="Toggle example tog"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="large"
          />
        </div>

        <div className="test-case" id="fitContent-size-single-line">
          <h5>FitContent size - Label max size single line</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle exam"
            selected={selected}
            onClick={onClick}
            size="fitContent"
          />
        </div>

        <div className="test-case" id="fitContent-size-multiline">
          <h5>FitContent size - Label min size multiline</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle examp"
            selected={selected}
            onClick={onClick}
            size="fitContent"
          />
        </div>

        <div className="test-case" id="fitContent-size-single-line-icon-before">
          <h5>FitContent size - Label max size single line icon before</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle e"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="fitContent"
          />
        </div>
        <div class="test-case" id="fitContent-size-multiline-icon-before">
          <h5>FitContent size - Label min size multiline icon before</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle ex"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="fitContent"
          />
        </div>
        <div className="test-case" id="fitContent-size-single-line-icon-after">
          <h5>FitContent size - Label max size single line icon after</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle e"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="fitContent"
          />
        </div>
        <div className="test-case" id="fitContent-size-multiline-icon-after">
          <h5>FitContent size - Label min size multiline icon after</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle ex"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="fitContent"
          />
        </div>

        <div className="test-case" id="fillParent-size-single-line">
          <h5>FillParent size - Label max size single line</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle exam"
            selected={selected}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-size-multiline">
          <h5>FillParent size - Label min size multiline</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle examp"
            selected={selected}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-size-single-line-icon-before">
          <h5>FillParent size - Label max size single line icon before</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle e"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-size-multiline-icon-before">
          <h5>FillParent size - Label min size multiline icon before</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle ex"
            iconSrc={icon}
            selected={selected}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-size-single-line-icon-after">
          <h5>FillParent size - Label max size single line icon after</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle e"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case" id="fillParent-size-multiline-icon-after">
          <h5>FillParent size - Label min size multiline icon after</h5>
          <DxcToggle
            label="Toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle example toggle ex"
            iconSrc={icon}
            iconPosition="after"
            selected={selected}
            onClick={onClick}
            size="fillParent"
          />
        </div>
      </div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
            margin="xxlarge"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

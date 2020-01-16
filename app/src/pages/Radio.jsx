import React, { useState } from "react";
import { DxcRadio } from "@diaas/dxc-react-cdk";

function App() {
  const [checked, changeChecked] = useState(false);

  const onClick = newValue => {
    changeChecked(newValue);
  };

  return (
    <div>
      <div className="test-case">
        <h4>Label before</h4>
        <DxcRadio
          label="Radio"
          labelPosition="before"
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div className="test-case">
        <h4>Label after</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>
      <div className="test-case">
        <h4>Light theme</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>

      <div>
        <h4>Dark theme</h4>
        <div
          className="test-case"
          style={{
            backgroundColor: "black"
          }}
        >
          <DxcRadio
            checked={checked}
            theme="dark"
            label="Radio"
            onClick={onClick}
          />
        </div>
      </div>

      <div className="test-case">
        <h4>Color checked checkbox</h4>
        <DxcRadio label="Radio" checked={true} onClick={onClick} />
      </div>

      <div className="test-case">
        <h4>Color unchecked checkbox</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>

      <div className="test-case">
        <h4>Disabled checkbox</h4>
        <DxcRadio
          label="Radio"
          disabled={true}
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div className="test-case">
        <h4>Required checkbox</h4>
        <DxcRadio
          label="Radio"
          required={true}
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div>
        <h4>Sizes</h4>
        <div className="test-case">
          <h5>Small size - Label max size single line</h5>
          <DxcRadio
            label="Radio b"
            required={true}
            checked={checked}
            onClick={onClick}
            size="small"
          />
        </div>
        <div className="test-case">
          <h5>Small size - Label min size multi line</h5>
          <DxcRadio
            label="Radio bu"
            required={true}
            checked={checked}
            onClick={onClick}
            size="small"
          />
        </div>
        <div className="test-case">
          <h5>Medium size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label siz"
            required={true}
            checked={checked}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case">
          <h5>Medium size - Label min size multi line</h5>
          <DxcRadio
            label="Radio button label size"
            required={true}
            checked={checked}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div className="test-case">
          <h5>Large size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio r"
            required={true}
            checked={checked}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case">
          <h5>Large size - Label min size multi line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio ra"
            required={true}
            checked={checked}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className="test-case">
          <h5>FillParent size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radi"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case">
          <h5>FillParent size - Label min size multi line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div className="test-case">
          <h5>FillContent size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radi"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillContent"
          />
        </div>
        <div className="test-case">
          <h5>FillContent size - Label min size multi line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillContent"
          />
        </div>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case">
          <h5>xxsmall margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxsmall"
          />
        </div>
        <div className="test-case">
          <h5>xsmall margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxsmall"
          />
        </div>
        <div className="test-case">
          <h5>Small margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="small"
          />
        </div>
        <div className="test-case">
          <h5>Medium margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="medium"
          />
        </div>
        <div className="test-case">
          <h5>Large margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="large"
          />
        </div>
        <div className="test-case">
          <h5>xlarge margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xlarge"
          />
        </div>
        <div className="test-case">
          <h5>xxlarge margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxlarge"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

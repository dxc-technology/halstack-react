import React, { useState } from "react";
import { DxcRadio } from "@diaas/dxc-react-cdk";

function App() {
  const [checked, changeChecked] = useState(false);
  const [checked1, changeCheckedOption1] = useState(true);
  const [checked2, changeCheckedOption2] = useState(false);
  const [checked3, changeCheckedOption3] = useState(false);

  const onClick = newValue => {
    changeChecked(newValue);
  };
  const onClickUncontrolled = newValue => {
    console.log("Uncontrolled Checked");
  };

  const onSelect = selectFunction => {
    changeCheckedOption1(false);
    changeCheckedOption2(false);
    changeCheckedOption3(false);
    selectFunction(true);
  };

  return (
    // <div>
    //   <div
    //     style={{ width: "100%", display: "inline-flex", alignItems: "center" }}
    //   >
    //     <DxcRadio
    //       margin="medium"
    //       checked={checked}
    //       label="Controlled"
    //       onClick={onClick}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       label="Uncontrolled"
    //       onClick={onClickUncontrolled}
    //     />
    //     <DxcRadio margin="medium" label="Disabled Radio" disabled={true} />
    //     <DxcRadio
    //       margin="medium"
    //       label="Required Radio"
    //       checked={checked}
    //       required={true}
    //       onClick={onClick}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       label="Label before"
    //       checked={checked}
    //       labelPosition="before"
    //       onClick={onClick}
    //     />
    //   </div>
    //   <div>
    //     <h4>Radio Group</h4>
    //     <DxcRadio
    //       margin="medium"
    //       checked={checked1}
    //       label="Option1"
    //       onClick={() => {
    //         onSelect(changeCheckedOption1);
    //       }}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       checked={checked2}
    //       label="Option2"
    //       onClick={() => {
    //         onSelect(changeCheckedOption2);
    //       }}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       checked={checked3}
    //       label="Option3"
    //       onClick={() => {
    //         onSelect(changeCheckedOption3);
    //       }}
    //     />
    //   </div>
    //   <h3>Dark</h3>
    //   <div style={{ background: "black" }}>
    //     <DxcRadio
    //       margin="medium"
    //       checked={checked}
    //       theme="dark"
    //       label="Controlled"
    //       onClick={onClick}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       label="Uncontrolled"
    //       theme="dark"
    //       onClick={onClickUncontrolled}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       label="Disabled Radio"
    //       theme="dark"
    //       disabled={true}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       label="Required Radio"
    //       checked={checked}
    //       required={true}
    //       theme="dark"
    //       onClick={onClick}
    //     />
    //     <DxcRadio
    //       margin="medium"
    //       label="Label before"
    //       checked={checked}
    //       labelPosition="before"
    //       theme="dark"
    //       onClick={onClick}
    //     />
    //   </div>
    //   <div style={{width: "150px"}}>
    //     <DxcRadio
    //       margin="medium"
    //       checked={checked}
    //       label="parent filled"
    //       onClick={onClick}
    //       size="fillParent"
    //     />
    //   </div>
    // </div>

    <div>
      <div>
        <h4>Label before</h4>
        <DxcRadio
          label="Radio"
          labelPosition="before"
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div>
        <h4>Label after</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>
      <div>
        <h4>Light theme</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>

      <div>
        <h4>Dark theme</h4>
        <div
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

      <div>
        <h4>Color checked checkbox</h4>
        <DxcRadio label="Radio" checked={true} onClick={onClick} />
      </div>

      <div>
        <h4>Color unchecked checkbox</h4>
        <DxcRadio label="Radio" checked={checked} onClick={onClick} />
      </div>

      <div>
        <h4>Disabled checkbox</h4>
        <DxcRadio
          label="Radio"
          disabled={true}
          checked={checked}
          onClick={onClick}
        />
      </div>

      <div>
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
        <div>
          <h5>Small size - Label max size single line</h5>
          <DxcRadio
            label="Radio b"
            required={true}
            checked={checked}
            onClick={onClick}
            size="small"
          />
        </div>
        <div>
          <h5>Small size - Label min size multi line</h5>
          <DxcRadio
            label="Radio bu"
            required={true}
            checked={checked}
            onClick={onClick}
            size="small"
          />
        </div>
        <div>
          <h5>Medium size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label siz"
            required={true}
            checked={checked}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div>
          <h5>Medium size - Label min size multi line</h5>
          <DxcRadio
            label="Radio button label size"
            required={true}
            checked={checked}
            onClick={onClick}
            size="medium"
          />
        </div>
        <div>
          <h5>Large size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio r"
            required={true}
            checked={checked}
            onClick={onClick}
            size="large"
          />
        </div>
        <div>
          <h5>Large size - Label min size multi line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio ra"
            required={true}
            checked={checked}
            onClick={onClick}
            size="large"
          />
        </div>
        <div>
          <h5>FillParent size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radi"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div>
          <h5>FillParent size - Label min size multi line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillParent"
          />
        </div>
        <div>
          <h5>FillContent size - Label max size single line</h5>
          <DxcRadio
            label="Radio button label size example single line radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radio radi"
            required={true}
            checked={checked}
            onClick={onClick}
            size="fillContent"
          />
        </div>
        <div>
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
        <div>
          <h5>xxsmall margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxsmall"
          />
        </div>
        <div>
          <h5>xsmall margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xxsmall"
          />
        </div>
        <div>
          <h5>Small margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="small"
          />
        </div>
        <div>
          <h5>Medium margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="medium"
          />
        </div>
        <div>
          <h5>Large margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="large"
          />
        </div>
        <div>
          <h5>xlarge margin</h5>
          <DxcRadio
            label="Radio"
            required={true}
            checked={checked}
            onClick={onClick}
            margin="xlarge"
          />
        </div>
        <div>
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

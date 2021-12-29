import { DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";
import prefixPath from "./images/text_fields-24px.svg";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <div>
      <DxcInputText
        label="Input label"
        suffixIcon={
          <svg x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
            <g id="Bounding_Box">
              <rect fill="none" width="24" height="24"/>
            </g>
            <g id="Master">
              <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"/>
            </g>
          </svg>
        }
        prefixIcon={<img src={prefixPath} />}
        assistiveText={"assistive text"}
        value={value}
        onChange={onChange}
        margin="medium"
      />
      <DxcInputText
        label="Input label"
        suffix={"suf"}
        prefix={"pre"}
        assistiveText={"assistive text"}
        value={value}
        onChange={onChange}
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcInputText,
  useState,
  prefixPath,
};

export default { code, scope };

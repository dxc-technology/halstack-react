import { DxcDateInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    const [value, setValue] = useState("");
    const [error, setError] = useState();
    const onChange = ({ value }) => {
    setValue(value);
    };
    const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
    };

    return (
      <DxcInset space="large">
        <DxcDateInput
            label="Formatted"
            helperText="If the typed date doesn't match the defined format, an error will be displayed"
            format="MM/dd/yyyy"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error == undefined ? "" : error}
            clearable
            placeholder
            size="large"
        />
      </DxcInset>
    );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
  useState,
};

export default { code, scope };

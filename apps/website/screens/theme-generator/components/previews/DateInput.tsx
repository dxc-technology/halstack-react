import { DxcDateInput } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const DateInput = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcDateInput label="Format" helperText="Example of helper text" format="MM/dd/yyyy" placeholder clearable />
    </Mode>
  </PreviewContainer>
);

export default DateInput;

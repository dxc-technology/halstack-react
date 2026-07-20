import { DxcMessageInput, DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
        <DxcMessageInput
          placeholder="Type your message..."
          defaultValue="Hello, how can I help you?"
        />
    </DxcInset>
  );
}`;

const scope = {
  DxcMessageInput,
  DxcButton,
  DxcFlex,
  DxcInset,
  useRef,
};

export default { code, scope };

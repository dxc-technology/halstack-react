import { DxcAlert, DxcButton, DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    const [isVisible, changeIsVisible] = useState(false);
    const handleVisibility = () => {
      changeIsVisible(!isVisible);
    };

    return (
        <DxcInset space="large">
            <DxcStack gutter="large">
                <DxcButton
                    label="Overlay Alert"
                    onClick={handleVisibility}
                    size="large"
                />
                {isVisible && (
                    <DxcAlert
                        type="info"
                        mode="modal"
                        onClose={handleVisibility}
                        inlineText=" Lorem ipsum dolor sit amet."
                    />
                )}
            </DxcStack>
        </DxcInset>
      );
}`;

const scope = {
    DxcAlert,
    DxcButton,
    DxcInset, 
    DxcStack, 
    useState,
  };
  
  export default { code, scope };
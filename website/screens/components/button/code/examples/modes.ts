import { DxcButton, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() =>{
    return (
        <DxcInset space="large">
            <DxcStack gutter="large" align="center">
                <DxcButton
                    mode="primary"
                    size="large"
                    label="Primary Button"
                    onClick={()=>{}}
                />
                <DxcButton
                    mode="secondary"
                    size="large"
                    label="Secondary Button"
                    onClick={()=>{}}
                />
                <DxcButton
                    mode="text"
                    size="large"
                    label="Text Button"
                    onClick={()=>{}}
                />
            </DxcStack>
        </DxcInset>
      );
}`;

const scope = {
    DxcButton,
    DxcStack,
    DxcInset,
};

export default {code, scope}
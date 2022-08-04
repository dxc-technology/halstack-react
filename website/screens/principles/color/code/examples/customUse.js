import {
  BackgroundColorProvider,
  DxcTextInput,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <>
        <DxcInset space="2rem">
          <DxcStack gutter="medium">
            <BackgroundColorProvider color="#000000">
              <div style={{ backgroundColor: "#000000" }}>
                <DxcInset space="2rem">
                  <DxcTextInput
                    label="Enter your surname"
                    defaultValue="Harris"
                  />
                </DxcInset>
              </div>
            </BackgroundColorProvider>
            <div>
              <DxcTextInput label="Enter your surname" defaultValue="Harris" />
            </div>
          </DxcStack>
        </DxcInset>
      </>
    );
  }`;

const scope = {
  BackgroundColorProvider,
  DxcTextInput,
  DxcInset,
  DxcStack,
};

export default { code, scope };

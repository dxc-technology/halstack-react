import {
  BackgroundColorProvider,
  DxcTextInput,
  DxcInset,
  DxcFlex,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1.5rem">
        <BackgroundColorProvider color="#000000">
          <div style={{ backgroundColor: "#000000" }}>
            <DxcInset space="2rem">
              <DxcTextInput label="Enter your surname" defaultValue="Harris" />
            </DxcInset>
          </div>
        </BackgroundColorProvider>
        <div>
          <DxcTextInput label="Enter your surname" defaultValue="Harris" />
        </div>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  BackgroundColorProvider,
  DxcTextInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };

import { DxcContainer, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem">
        <DxcContainer
          width="100%"
          height="40px"
          background={{color: "#DDC9F3"}}
         />
        <DxcContainer
          width="100%"
          height="40px"
          background={{color: "#6F4B97"}}
         />
        <DxcContainer
          width="100%"
          height="40px"
          background={{color: "#DDC9F3"}}
         />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcFlex,
  DxcInset,
  DxcContainer,
};

export default { code, scope };

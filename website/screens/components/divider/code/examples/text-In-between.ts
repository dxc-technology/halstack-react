import {
  DxcDivider,
  DxcFlex,
  DxcInset,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
const code = `() => {
    return (
     <DxcInset space="2rem">
        <DxcFlex gap="1rem" direction="row" alignItems="center">
          <DxcDivider />
           <DxcParagraph> or </DxcParagraph>
          <DxcDivider />
        </DxcFlex>
      </DxcInset>
    );
  }`;

const scope = {
  DxcDivider,
  DxcFlex,
  DxcInset,
  DxcParagraph,
};

export default { code, scope };

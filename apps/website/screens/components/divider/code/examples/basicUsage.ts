import { DxcDivider, DxcFlex, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";
const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcFlex gap="1rem" direction="column">
          <DxcParagraph>
            Lorem i psum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcParagraph>
          <DxcDivider />
          <DxcParagraph>
            Lorem i psum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcParagraph>
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

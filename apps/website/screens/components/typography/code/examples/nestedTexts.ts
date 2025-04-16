import { DxcTypography, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcTypography fontFamily="Open Sans, sans-serif">
        This DxcTypography component has some children with different styles;
        parent has a fontFamily 'Open Sans, sans-serif' and{" "}
        <DxcTypography
          fontSize="0.75rem"
          color="#049afd"
          fontFamily="Source Code Pro, monospace"
        >
          one of the children has 'Open Sans, mono-space' and different color
          and size,
        </DxcTypography>{" "}
        <DxcTypography>the other child gets parent's styles.</DxcTypography>
      </DxcTypography>
    </DxcInset>
  );
}`;

const scope = { DxcTypography, DxcInset };

export default { code, scope };

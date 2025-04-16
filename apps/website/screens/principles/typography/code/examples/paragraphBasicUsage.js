import { DxcParagraph, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor
        sit amet velit auctor cursus id eget nisl. Vivamus luctus egestas eros,
        at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
        dignissim, fringilla turpis. Nullam luctus odio quis magna finibus, a
        pharetra magna euismod. Nullam efficitur semper pellentesque. Nulla eget
        arcu ac diam fringilla vehicula. In imperdiet nisl hendrerit, elementum
        metus eu, ornare risus. 
      </DxcParagraph>
    </DxcInset>
  );
}`;

const scope = { DxcParagraph, DxcInset };

export default { code, scope };

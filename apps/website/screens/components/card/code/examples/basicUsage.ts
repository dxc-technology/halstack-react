import { DxcInset, DxcCard, DxcParagraph } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300">
        <DxcInset space="var(--spacing-padding-m)">
          <DxcParagraph>Personal information</DxcParagraph>
        </DxcInset>
      </DxcCard>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcInset,
  DxcParagraph,
};

export default { code, scope };

import { DxcInset, DxcCard } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300">
        <DxcInset space="var(--spacing-padding-m)">
          Personal information
        </DxcInset>
      </DxcCard>
    </DxcInset>
  );
}`;

const scope = {
  DxcCard,
  DxcInset,
};

export default { code, scope };

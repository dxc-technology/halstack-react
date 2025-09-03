import { DxcBulletedList, DxcInset } from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcBulletedList type="disc">
        <DxcBulletedList.Item>Disc</DxcBulletedList.Item>
      </DxcBulletedList>
    </DxcInset>
  );
}`;

const scope = {
  DxcBulletedList,
  DxcInset,
};

export default { code, scope };

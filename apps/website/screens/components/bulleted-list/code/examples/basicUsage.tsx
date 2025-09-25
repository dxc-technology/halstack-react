import { DxcBulletedList, DxcInset } from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcBulletedList type="number">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    </DxcInset>
  );
}`;

const scope = {
  DxcBulletedList,
  DxcInset,
};

export default { code, scope };

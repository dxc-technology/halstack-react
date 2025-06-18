import { DxcBulletedList, DxcInset } from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcBulletedList type="number">
        <DxcBulletedList.Item>Number</DxcBulletedList.Item>
      </DxcBulletedList>
    </DxcInset>
  );
}`;

const scope = {
  DxcBulletedList,
  DxcInset,
};

export default { code, scope };

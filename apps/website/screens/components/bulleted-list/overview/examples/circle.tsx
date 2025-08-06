import { DxcBulletedList, DxcInset } from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcBulletedList type="circle">
        <DxcBulletedList.Item>Circle</DxcBulletedList.Item>
      </DxcBulletedList>
    </DxcInset>
  );
}`;

const scope = {
  DxcBulletedList,
  DxcInset,
};

export default { code, scope };

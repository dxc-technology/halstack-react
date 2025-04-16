import { DxcBulletedList, DxcInset } from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcBulletedList type="square">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Usage
          <DxcBulletedList type="circle">
            <DxcBulletedList.Item>Usage for admins.</DxcBulletedList.Item>
            <DxcBulletedList.Item>Usage for non-admins.</DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcBulletedList.Item>
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

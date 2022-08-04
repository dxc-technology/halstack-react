import {
  DxcBulletedList,
  DxcInset,
  DxcRow,
} from "@dxc-technology/halstack-react";
const code = `() => {
  return (
    <DxcInset space="2rem">
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
  DxcRow,
};

export default { code, scope };

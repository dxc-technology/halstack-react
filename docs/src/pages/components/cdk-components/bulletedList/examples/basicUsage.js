import {
  DxcBulletedList,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
} from "@dxc-technology/halstack-react";
const code = `() => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  );
  return (
    <DxcInset space="medium">
      <DxcRow justify="spaceAround">
        <DxcStack gutter="medium">
          <DxcHeading text="Type disc" level={4} weight="bold" />
          <DxcBulletedList type="disc">
            <DxcBulletedList.Item>Code</DxcBulletedList.Item>
            <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
            <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcStack>
        <DxcStack gutter="medium">
          <DxcHeading text="Type circle" level={4} weight="bold" />
          <DxcBulletedList type="circle">
            <DxcBulletedList.Item>Code</DxcBulletedList.Item>
            <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
            <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcStack>
        <DxcStack gutter="medium">
          <DxcHeading text="Type square" level={4} weight="bold" />
          <DxcBulletedList type="square">
            <DxcBulletedList.Item>Code</DxcBulletedList.Item>
            <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
            <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcStack>
        <DxcStack gutter="medium">
          <DxcHeading text="Type number" level={4} weight="bold" />
          <DxcBulletedList type="number">
            <DxcBulletedList.Item>Code</DxcBulletedList.Item>
            <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
            <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcStack>
        <DxcStack gutter="medium">
          <DxcHeading text="Type icon" level={4} weight="bold" />
          <DxcBulletedList type="icon" icon={icon}>
            <DxcBulletedList.Item>Code</DxcBulletedList.Item>
            <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
            <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcStack>
      </DxcRow>
    </DxcInset>
  );
}`;
const scope = {
  DxcBulletedList,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
};
export default { code, scope };

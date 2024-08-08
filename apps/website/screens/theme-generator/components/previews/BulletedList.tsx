import { DxcBulletedList } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" fill="currentColor">
    <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
  </svg>
);

const doubleCheckIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" fill="currentColor">
    <path d="m6.104 14.146-3.542-3.542 1.063-1.062 2.479 2.479 1.063 1.062Zm4.25-.021-3.542-3.521 1.063-1.062 2.479 2.479 6-6.021 1.063 1.062Zm0-4.229L9.292 8.833 12.125 6l1.063 1.062Z" />
  </svg>
);

const BulletedList = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcBulletedList>
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
    </Mode>
    <Mode text="With icon">
      <DxcBulletedList type="icon" icon={checkIcon}>
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Usage
          <DxcBulletedList type="icon" icon={doubleCheckIcon}>
            <DxcBulletedList.Item>Usage for admins.</DxcBulletedList.Item>
            <DxcBulletedList.Item>Usage for non-admins.</DxcBulletedList.Item>
          </DxcBulletedList>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    </Mode>
  </PreviewContainer>
);

export default BulletedList;

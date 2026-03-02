import { DxcFileInput } from "@dxc-technology/halstack-react";

const FileInputPreview = () => {
  return <DxcFileInput label="Upload file" mode="filedrop" callbackFile={() => {}} value={[]} />;
};

export default FileInputPreview;

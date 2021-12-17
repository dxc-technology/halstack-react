import { V3DxcUpload } from "@dxc-technology/halstack-react";

const code = `() => {
  async function callbackFunc(file) {
    console.log(file);
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  return <V3DxcUpload margin="small" callbackUpload={callbackFunc} />;
}`;

const scope = {
  V3DxcUpload,
};

export default { code, scope };

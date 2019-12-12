import { DxcUpload } from "@diaas/dxc-react-cdk";

const code = `() => {
  async function callbackFunc(file) {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  return <DxcUpload callbackUpload={callbackFunc} />;
}`;

const scope = {
  DxcUpload
};

export default { code, scope };

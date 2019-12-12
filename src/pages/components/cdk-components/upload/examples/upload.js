import { DxcUpload } from "@diaas/dxc-react-cdk";

const code = `() => {
  async function callbackFunc() {
    const result = await new Promise(resolve => setTimeout(resolve, 1000));
    return result;
  }

  return <DxcUpload callbackUpload={callbackFunc} />;
}`;

const scope = {
  DxcUpload
};

export default { code, scope };

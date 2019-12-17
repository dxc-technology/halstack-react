import { DxcProgressBar } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    return (
      <div>
        <DxcProgressBar label="Loading" overlay={false}/>
      </div>
    );
  }`;
  
  const scope = {
    DxcProgressBar,
    useState
  };
  
  export default { code, scope };
  
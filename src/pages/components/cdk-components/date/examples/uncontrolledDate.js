import {DxcDate} from "@diaas/dxc-react-cdk";
import {useState} from "react";

const code = `() => {
   return <DxcDate label="Date of birth" format="dd-MM-yyyy"/>
}`; 
const scope = {
    DxcDate,
    useState
  };
  
  export default { code, scope };
  
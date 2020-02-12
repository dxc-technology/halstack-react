import {DxcDate} from "@diaas/dxc-react-cdk";
import {useState} from "react";

const code = `() => {
    const [value, changeValue] = useState("01/01/2001");
    const onChange = newValue =>{
        console.log('ey'); 
        changeValue(newValue);
    };

    return <DxcDate label="Date of birth" format="dd-MM-yyyy" value={value} onInputChange={onChange}/>
}`; 
const scope = {
    DxcDate,
    useState
  };
  
  export default { code, scope };
  
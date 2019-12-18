import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const spinnerPropsTable = () => {
  return (
    <DxcTable>
            <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed inside the spinner.</td>
    </tr>
    <tr>
        <td>theme: 'light' |'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available component themes.</td>
    </tr>
    <tr>
        <td>mode: 'large' | 'small' | 'overlay' </td>
        <td>large</td>
        <td>The spinner can have overlay or small or large size. </td>
    </tr>
    <tr>
        <td>value: string</td>
        <td></td>
        <td>The value of the progress indicator. If it´s received the component is determinated otherwise is indeterminate</td>
    </tr>
    <tr>
        <td>showValue: boolean</td>
        <td>false</td>
        <td>If true the value is displayed inside the spinner</td>
    </tr>
    </DxcTable>
  );
};

export default spinnerPropsTable;

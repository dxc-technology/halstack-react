import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const progressBarPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the progress bar.</td>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>overlay: boolean</td>
        <td>true</td>
        <td>If true, the progress bar will be displayed as a modal.</td>
      </tr>
      <tr>
        <td>value: string</td>
        <td></td>
        <td>
          The value of the progress indicator. If it's received the component
          is determinate otherwise is indeterminate.
        </td>
      </tr>
      <tr>
        <td>showValue: boolean</td>
        <td>false</td>
        <td>If true, the value is displayed above the progress bar.</td>
      </tr>
    </DxcTable>
  );
};

export default progressBarPropsTable;

import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const spinnerPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>label: string</th>
        <th></th>
        <th>Text to be placed inside the spinner.</th>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
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
        <td>
          The value of the progress indicator. If it's received the component is
          determinate, otherwise is indeterminate.
        </td>
      </tr>
      <tr>
        <td>showValue: boolean</td>
        <td>false</td>
        <td>If true, the value is displayed inside the spinner.</td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
    </DxcTable>
  );
};

export default spinnerPropsTable;

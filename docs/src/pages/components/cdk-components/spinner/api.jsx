import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const spinnerPropsTable = () => {
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
        <td>Text to be placed inside the spinner.</td>
      </tr>
      <tr>
        <td>mode: 'large' | 'small' | 'overlay' </td>
        <td>
          <code>'large'</code>
        </td>
        <td>The spinner can have overlay or small or large size. </td>
      </tr>
      <tr>
        <td>value: number</td>
        <td></td>
        <td>
          The value of the progress indicator. If it's received the component is
          determinate, otherwise is indeterminate.
        </td>
      </tr>
      <tr>
        <td>showValue: boolean</td>
        <td>
          <code>false</code>
        </td>
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

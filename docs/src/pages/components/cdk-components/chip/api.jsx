import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const chipPropsTable = () => {
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
        <td>Text to be placed on the chip.</td>
      </tr>
      <tr>
        <td>prefixIcon: node</td>
        <td></td>
        <td>Element used as icon to be placed before the chip label.</td>
      </tr>
      <tr>
        <td>suffixIcon: node</td>
        <td></td>
        <td>Element used as icon to be placed after the chip label.</td>
      </tr>
      <tr>
        <td>prefixIconSrc: string</td>
        <td></td>
        <td>Path of the icon to be placed before the chip label.</td>
      </tr>
      <tr>
        <td>suffixIconSrc: string</td>
        <td></td>
        <td>Path of the icon to be placed after the chip label.</td>
      </tr>
      <tr>
        <td>onClickPrefix: function</td>
        <td></td>
        <td>This function will be called when the prefix is clicked.</td>
      </tr>
      <tr>
        <td>onClickSuffix: function</td>
        <td></td>
        <td>This function will be called when the suffix is clicked.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
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

export default chipPropsTable;

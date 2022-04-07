import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const bleedPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>
          space: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' | 'medium'
          | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Applies the spacing scale to all sides.</td>
      </tr>
      <tr>
        <td>
          horizontal: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' |
          'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Applies the spacing scale to the left and right sides.</td>
      </tr>
      <tr>
        <td>
          vertical: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' |
          'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Applies the spacing scale to the top and bottom sides.</td>
      </tr>
      <tr>
        <td>
          top: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' | 'medium' |
          'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Applies the spacing scale to the top side.</td>
      </tr>
      <tr>
        <td>
          right: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' | 'medium'
          | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Applies the spacing scale to the right side.</td>
      </tr>
      <tr>
        <td>
          bottom: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' |
          'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Applies the spacing scale to the bottom side.</td>
      </tr>
      <tr>
        <td>
          left: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' | 'medium'
          | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Applies the spacing scale to the left side.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Custom content inside the bleed.</td>
      </tr>
    </DxcTable>
  );
};

export default bleedPropsTable;

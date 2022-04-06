import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const rowPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>align: 'start' | 'center' | 'end' | 'baseline' | 'stretch'</td>
        <td></td>
        <td>Alignment applied to children.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Custom content inside the row.</td>
      </tr>
      <tr>
        <td>
          gutter: 'none' | 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' |
          'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
        </td>
        <td>
          <code>none</code>
        </td>
        <td>Space applied between each child.</td>
      </tr>
      <tr>
        <td>
          justify: 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround' |
          'spaceEvenly'
        </td>
        <td></td>
        <td>Justification applied to children.</td>
      </tr>
      <tr>
        <td>reverse: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, children are shown in reverse order.</td>
      </tr>
      <tr>
        <td>wrap: boolean</td>
        <td>
          <code>true</code>
        </td>
        <td>If true, children will wrap onto multiple rows.</td>
      </tr>
    </DxcTable>
  );
};

export default rowPropsTable;

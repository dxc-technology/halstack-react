import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const stackPropsTable = () => {
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
        <td>as: string | component</td>
        <td>
          <code>"div"</code>
        </td>
        <td>
          Specifies the HTML tag or component that is rendered as the wrapper
          element.
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Custom content inside the stack.</td>
      </tr>
      <tr>
        <td>divider: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, a divider is shown between children.</td>
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
    </DxcTable>
  );
};

export default stackPropsTable;

import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const navTabsPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>iconPosition: 'top' | 'left'</td>
        <td>
          <code>'top'</code>
        </td>
        <td>
          Whether the icon should appear above or to the left of the label.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>
          <code>0</code>
        </td>
        <td>Value of the tabindex for each tab.</td>
      </tr>
    </DxcTable>
  );
};

export default navTabsPropsTable;

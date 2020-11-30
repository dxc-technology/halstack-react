import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const SidenavApplicationLayoutPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>mode: 'overlay' | 'push' </td>
        <td>
          <code>'overlay'</code>
        </td>
        <td>
          Default action over the content of the page, overlay the content or
          push to the right.
        </td>
      </tr>
      <tr>
        <td>displayArrow: boolean</td>
        <td>
          <code>true</code>
        </td>
        <td>If false, the arrow button is hidden.</td>
      </tr>
    </DxcTable>
  );
};

export default SidenavApplicationLayoutPropsTable;

import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sidenavPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>title: node </td>
        <td></td>
        <td>
          The area assigned to render the sidenav title. It is highly
          recommended to use the sidenav title.
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>
          The area inside the sidenav. This area can be used to render the
          content inside the sidenav.
        </td>
      </tr>
    </DxcTable>
  );
};

export default sidenavPropsTable;

import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sidenavTitlePropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>The content will be showed as the main title in the sidenav.</td>
      </tr>
    </DxcTable>
  );
};

export default sidenavTitlePropsTable;

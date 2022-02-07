import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sidenavSubtitlePropsTable = () => {
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
        <td>The content will be showed as a subtitle in the sidenav.</td>
      </tr>
    </DxcTable>
  );
};

export default sidenavSubtitlePropsTable;

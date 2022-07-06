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
        <td>icon: string | SVG </td>
        <td></td>
        <td>The icon to be displayed in the sidenav title.</td>
      </tr>
      <tr>
        <td>children: node | string</td>
        <td></td>
        <td>
          The area inside the sidenav title. This area can be used to render
          custom content.
        </td>
      </tr>
    </DxcTable>
  );
};

export default sidenavTitlePropsTable;

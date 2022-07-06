import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sidenavGroupPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>title: string </td>
        <td></td>
        <td>
          If true the sidenav group title will be considered a button and the
          group will be collapsable.
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>
          The area inside the sidenav group. This area can be used to render
          sidenav links.
        </td>
      </tr>
      <tr>
        <td>collapsable: boolean </td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true the sidenav group title will be considered a button and the
          group will be collapsable.
        </td>
      </tr>
      <tr>
        <td>icon: string | SVG </td>
        <td></td>
        <td>The icon to be displayed next to the title of the group.</td>
      </tr>
    </DxcTable>
  );
};

export default sidenavGroupPropsTable;

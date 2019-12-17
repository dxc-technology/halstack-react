import React from "react";
import PropsTable from "../../common/PropsTable";

const alertPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>underline: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          Wether a contrast line should appear at the bottom of the header.
        </td>
      </tr>
      <tr>
        <td>logoSrc: string</td>
        <td>
          <code>'default'</code>
        </td>
        <td>The path of an icon to replace the default dxc logo.</td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the header logo.
          <br></br>
        </td>
      </tr>
    </PropsTable>
  );
};

export default alertPropsTable;

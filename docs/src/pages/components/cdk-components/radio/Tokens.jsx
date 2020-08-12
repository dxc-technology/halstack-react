import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const radioTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>color</td>
        <td>
          <code>#000000</code>
        </td>
        <td>This token affects the border and the dot of the radio.</td>
      </tr>
      
    </DxcTable>
  );
};

export default radioTokensTable;

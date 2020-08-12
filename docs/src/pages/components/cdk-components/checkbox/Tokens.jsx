import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const checkboxTokensTable = () => {
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
          <code>#FFED00</code>
        </td>
        <td>This token affects the background when it is checked and the border when it is not checked.</td>
      </tr>
      <tr>
        <td>checkColor</td>
        <td>
          <code>#000000</code>
        </td>
        <td>Color of the check that is shown when it is checked.</td>
      </tr>
      
    </DxcTable>
  );
};

export default checkboxTokensTable;

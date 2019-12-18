import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

function Table() {
  return (
    <DxcTable>
      <tr>
        <th>header 1</th>
        <th>header 2</th>
        <th>header 3</th>
      </tr>
      <tr>
        <td>cell 1</td>
        <td>cell 2</td>
        <td>cell 3</td>
      </tr>
      <tr>
        <td>cell 4</td>
        <td>cell 5</td>
        <td>cell 6</td>
      </tr>
      <tr>
        <td>cell 7</td>
        <td>cell 8</td>
        <td>longer cell example</td>
      </tr>
    </DxcTable>
  );
}

export default Table;

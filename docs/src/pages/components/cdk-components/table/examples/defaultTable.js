import { DxcTable } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
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
        <td>Cell 9</td>
      </tr>
    </DxcTable>
  );
}`;

const scope = {
  DxcTable,
  useState
};

export default { code, scope };

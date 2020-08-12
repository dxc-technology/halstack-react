import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sliderTokensTable = () => {
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
        <td>
          This token affects the color of the thumb, the color of the dots and
          the color of the track line.
        </td>
      </tr>
    </DxcTable>
  );
};

export default sliderTokensTable;

import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const radioTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>baseColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to color and disabledColor.</td>
      </tr>
    </DxcTable>
  );
};

export default radioTokensTable;

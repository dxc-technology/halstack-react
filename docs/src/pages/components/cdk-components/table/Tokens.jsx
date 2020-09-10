import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const tableTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>headerBackgroundColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>
          Applies to the headerBackgroundColor.
        </td>
      </tr>
      <tr>
        <td>headerFontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>
          Applies to headerFontColor.
        </td>
      </tr>
    </DxcTable>
  );
};

export default tableTokensTable;

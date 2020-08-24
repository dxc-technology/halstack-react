import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const chipTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>backgroundcolor</td>
        <td>
          <SampleComponent color="#EEEEEE"></SampleComponent>
        </td>
        <td>
          Applies to the outlinedColor.
        </td>
      </tr>
      <tr>
        <td>outlinedColor</td>
        <td>
          
        </td>
        <td>
          Applies to outlinedColor.
        </td>
      </tr>
      <tr>
        <td>fontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to fontColor.</td>
      </tr>
    </DxcTable>
  );
};

export default chipTokensTable;

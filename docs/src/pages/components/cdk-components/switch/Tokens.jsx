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
        <td>checkedTrackBackgroundColor</td>
        <td>
          <SampleComponent color="#666666"></SampleComponent>
        </td>
        <td>Applies to checkedTrackBackgroundColor.</td>
      </tr>
      
    </DxcTable>
  );
};

export default radioTokensTable;

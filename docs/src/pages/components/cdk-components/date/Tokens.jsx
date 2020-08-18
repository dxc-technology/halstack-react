import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const dateTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>pickerSelectedDateBackgroundColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>
          Applies to the pickerSelectedDateBackgroundColor and pickerHoverDateBackgroundColor(0.34 opacity).
        </td>
      </tr>
      <tr>
        <td>pickerSelectedDateColor</td>
        <td>
          <SampleComponent color="#FFED00"></SampleComponent>
        </td>
        <td>
          Applies to pickerSelectedDateColor.
        </td>
      </tr>
    </DxcTable>
  );
};

export default dateTokensTable;

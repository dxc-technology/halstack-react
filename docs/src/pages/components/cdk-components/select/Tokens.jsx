import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const selectTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>selectedOptionBackgroundColor</td>
        <td>
          <SampleComponent color="#D9D9D9"></SampleComponent>
        </td>
        <td>
          Applies to the selectedOptionBackgroundColor and hoverOptionBackgroundColor(0.34 opacity).
        </td>
      </tr>
    </DxcTable>
  );
};

export default selectTokensTable;

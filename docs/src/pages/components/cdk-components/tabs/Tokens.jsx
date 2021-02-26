import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const tabsTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>selectedFontColor</td>
        <td>
          <SampleComponent color="#6f2c91"></SampleComponent>
        </td>
        <td>Applies to the selectedFontColor token.</td>
      </tr>
    </DxcTable>
  );
};

export default tabsTokensTable;

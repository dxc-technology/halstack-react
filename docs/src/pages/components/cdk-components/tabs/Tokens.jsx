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
        <td>selectedBackgroundColor</td>
        <td>
        <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to the selectedBackgroundColor token.</td>
      </tr>
      <tr>
        <td>selectedUnderlinedColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to the selectedUnderlinedColor token.</td>
      </tr>
      <tr>
        <td>selectedColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to the selectedColor token.</td>
      </tr>
    </DxcTable>
  );
};

export default tabsTokensTable;

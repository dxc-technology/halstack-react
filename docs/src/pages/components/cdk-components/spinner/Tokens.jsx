import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const headerTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>accentColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>Applies to the trackCircleColor token.</td>
      </tr>
      <tr>
        <td>baseColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to the totalCircleColor token.</td>
      </tr>
    </DxcTable>
  );
};

export default headerTokensTable;

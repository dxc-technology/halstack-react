import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const sidenavTokensTable = () => {
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
          <SampleComponent color="#F8F8F8"></SampleComponent>
        </td>
        <td>Applies to the backgroundColor token.</td>
      </tr>
      <tr>
        <td>arrowBaseColor</td>
        <td>
          <SampleComponent color="#F8F8F8"></SampleComponent>
        </td>
        <td>Applies to arrowContainerColor token.</td>
      </tr>
      <tr>
        <td>arrowAccentColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to arrowColor token.</td>
      </tr>
    </DxcTable>
  );
};

export default sidenavTokensTable;

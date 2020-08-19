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
        <td>backgroundColor</td>
        <td>
          <SampleComponent color="#F8F8F8"></SampleComponent>
        </td>
        <td>Applies to the backgroundColor token.</td>
      </tr>
      <tr>
        <td>arrowContainerColor</td>
        <td>
          <SampleComponent color="#D9D9D9"></SampleComponent>
        </td>
        <td>Applies to the arrowContainerColor token.</td>
      </tr>
      <tr>
        <td>arrowColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to the arrowColor token.</td>
      </tr>
    </DxcTable>
  );
};

export default sidenavTokensTable;

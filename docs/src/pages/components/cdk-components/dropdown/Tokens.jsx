import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const dropdownTokensTable = () => {
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
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>
          Applies to the backgroundColor and the hoverBackgroundOption (0.34 opacity).
        </td>
      </tr>
      <tr>
        <td>fontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>
          Applies to fontColor.
        </td>
      </tr>
    </DxcTable>
  );
};

export default dropdownTokensTable;

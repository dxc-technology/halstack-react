import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const accordionTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>arrowColor</td>
        <td>
          <SampleComponent color="#666666"></SampleComponent>
        </td>
        <td>Applies to the arrowColor and hoverBackgroundColor tokens.</td>
      </tr>
    </DxcTable>
  );
};

export default accordionTokensTable;

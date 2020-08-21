import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const progressBarTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>trackLine</td>
        <td>
          <SampleComponent color="#FFED00"></SampleComponent>
        </td>
        <td>Applies to the trackLine token.</td>
      </tr>
      <tr>
        <td>totalLine</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to the totalLine token.</td>
      </tr>
    </DxcTable>
  );
};

export default progressBarTokensTable;

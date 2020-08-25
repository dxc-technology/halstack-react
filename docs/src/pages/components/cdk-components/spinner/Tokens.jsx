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
        <td>trackLine</td>
        <td>
          <SampleComponent color="#FFED00"></SampleComponent>
        </td>
        <td>Applies to the trackLine token.</td>
      </tr>
      <tr>
        <td>totalCircle</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to the totalCircle token.</td>
      </tr>
    </DxcTable>
  );
};

export default headerTokensTable;

import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const checkboxTokensTable = () => {
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
          <SampleComponent color="#0067B3"></SampleComponent>
        </td>
        <td>
          Applies to backgroundColorChecked, borderColor,
          disabledBackgroundColorChecked and disabledBorderColor.
        </td>
      </tr>
      <tr>
        <td>checkColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to checkColor and disabledCheckColor.</td>
      </tr>
    </DxcTable>
  );
};

export default checkboxTokensTable;

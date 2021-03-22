import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const dateTokensTable = () => {
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
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>
          Applies to the pickerSelectedDateBackgroundColor and
          pickerHoverDateBackgroundColor.
        </td>
      </tr>
      <tr>
        <td>accentColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to pickerSelectedDateColor.</td>
      </tr>
    </DxcTable>
  );
};

export default dateTokensTable;

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
        <td>baseColor</td>
        <td>
          <SampleComponent color="#6f2c91"></SampleComponent>
        </td>
        <td>
          Applies to the selectedFontColor, selectedIconColor,
          selectedUnderlineColor, focusOutline, hoverBackgroundColor and
          pressedBackgroundColor tokens.
        </td>
      </tr>
    </DxcTable>
  );
};

export default tabsTokensTable;

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
        <td>fontColor</td>
        <td>
          <SampleComponent color="#666666"></SampleComponent>
        </td>
        <td>Applies to fontColor token and disabledFontColor.</td>
      </tr>
      <tr>
        <td>accentColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>
          Applies to the arrowColor, focusOutline and hoverBackgroundColor
          tokens.
        </td>
      </tr>
    </DxcTable>
  );
};

export default accordionTokensTable;

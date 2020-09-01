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
        <td>backgroundColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to the backgroundColor token.</td>
      </tr>
      <tr>
        <td>underlinedColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to the underlinedColor token.</td>
      </tr>
      <tr>
        <td>fontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to the fontColor token.</td>
      </tr>
      <tr>
        <td>backgroundColorMenu</td>
        <td>
          <SampleComponent color="#D9D9D9"></SampleComponent>
        </td>
        <td>Applies to the backgroundColorMenu token.</td>
      </tr>
      <tr>
        <td>textColorMenu</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to the textColorMenu token.</td>
      </tr>
      <tr>
        <td>hamburguerColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to the hamburguerColor token.</td>
      </tr>
    </DxcTable>
  );
};

export default headerTokensTable;

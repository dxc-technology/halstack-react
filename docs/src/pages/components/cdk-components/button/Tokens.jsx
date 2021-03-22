import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const buttonTokensTable = () => {
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
          Applies to the primaryBackgroundColor, secondaryOutlinedColor,
          disabledPrimaryBackgroundColor and disabledSecondaryOutlinedColor.
        </td>
      </tr>
      <tr>
        <td>hoverBaseColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>
          Applies to primaryHoverBackgroundColor, hoverOutlinedColor and
          textHoverBackgroundColor in the text mode.
        </td>
      </tr>
      <tr>
        <td>primaryFontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to primaryFontColor and disabledPrimaryFontColor.</td>
      </tr>
      <tr>
        <td>primaryHoverFontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to primaryHoverFontColor.</td>
      </tr>
      <tr>
        <td>secondaryFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to secondaryFontColor and disabledSecondaryFontColor.</td>
      </tr>
      <tr>
        <td>secondaryHoverFontColor</td>
        <td>
          <SampleComponent color="#000000"></SampleComponent>
        </td>
        <td>Applies to secondaryHoverFontColor.</td>
      </tr>
      <tr>
        <td>textFontColor</td>
        <td>
          <SampleComponent color="#6F2C91"></SampleComponent>
        </td>
        <td>Applies to textFontColor and disabledTextFontColor.</td>
      </tr>
      <tr>
        <td>textHoverFontColor</td>
        <td>
          <SampleComponent color="#FFFFFF"></SampleComponent>
        </td>
        <td>Applies to textHoverFontColor.</td>
      </tr>
    </DxcTable>
  );
};

export default buttonTokensTable;

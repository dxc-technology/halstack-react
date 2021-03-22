import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";
import SampleComponent from "../../common/SampleComponent";

const sliderTokensTable = () => {
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
          Applies to the thumbBackgroundColor, dotsBackgroundColor, trackLine,
          totalLine, disabledThumbBackgroundColor, disabledDotsBackgroundColor
          and disabledTrackLine tokens.
        </td>
      </tr>
    </DxcTable>
  );
};

export default sliderTokensTable;

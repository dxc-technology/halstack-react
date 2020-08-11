import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const sliderTokensTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>color</td>
        <td>
          <code>#000000</code>
        </td>
        <td>
          This token affects the color of the thumb, the color of the dots and
          the color of the track line.
        </td>
      </tr>
      <tr>
        <td>totalLine</td>
        <td>
          <code>0.34</code>
        </td>
        <td>This token affects the opacity of the total line.</td>
      </tr>
      <tr>
        <td>disabledthumbBacgroundColor</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the thumb when the slider is
          disabled.
        </td>
      </tr>
      <tr>
        <td>disableddotsBackgroundColor</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the dots when the slider is
          disabled.
        </td>
      </tr>
      <tr>
        <td>disabledTrackLine</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the track line when the slider is
          disabled.
        </td>
      </tr>
      <tr>
        <td>disabledtotalLine</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the total line when the slider is
          disabled.
        </td>
      </tr>
    </DxcTable>
  );
};

export default sliderTokensTable;

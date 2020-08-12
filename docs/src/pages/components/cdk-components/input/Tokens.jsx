import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const inputTokensTable = () => {
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
          <code>#000000</code>
        </td>
        <td>
          This token affects the color of the text, the label, the underlined
          and the assistive text.
        </td>
      </tr>
      <tr>
        <td>placeholderColor</td>
        <td>
          <code>#D9D9D9</code>
        </td>
        <td>This token affects the color of the placeholder.</td>
      </tr>
      <tr>
        <td>disabledTextColor</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the text when the input is disabled.
        </td>
      </tr>
      <tr>
        <td>disabledLabelColor</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the label when the input is
          disabled.
        </td>
      </tr>
      <tr>
        <td>disabledUnderlinedColor</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the underlined when the input is
          disabled.
        </td>
      </tr>
      <tr>
        <td>disabledAssistiveTextColor</td>
        <td>
          <code>0.34</code>
        </td>
        <td>
          This token affects the opacity of the assistive text when the input is
          disabled.
        </td>
      </tr>
      <tr>
        <td>error</td>
        <td>
          <code>#D0011B</code>
        </td>
        <td>
          This token affects the color of the underlined, assistive text and
          label when there is an error. It also affects the '*' symbol when the
          input is required.
        </td>
      </tr>
    </DxcTable>
  );
};

export default inputTokensTable;

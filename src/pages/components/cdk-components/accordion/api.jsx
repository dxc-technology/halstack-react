import React from "react";
import PropsTable from "../../common/PropsTable";

const alertPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>mode: 'default'|'alternative'</td>
        <td>
          <code>'default'</code>
        </td>
        <td>Mode for the color of the accordion.</td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>The panel label.</td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to panel label.</td>
      </tr>
      <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the icon should appear after or before the label.</td>
      </tr>
      <tr>
        <td>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed on the right side of the panel.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the icon to
          open/close the panel. The state of the panel(opened/closed) should be
          passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>theme: 'light' |'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available button modes.</td>
      </tr>
    </PropsTable>
  );
};

export default alertPropsTable;

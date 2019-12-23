import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const dropdownPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>options: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the options. Each object has the
          following properties:
          <ul>
            <li>
              <b>label</b>: Option display value.
            </li>
            <li>
              <b>iconSrc</b>: URL of the icon that will be placed next to the
              option label.
            </li>
            <li>
              <b>value</b>: Option inner value.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>optionsIconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>
          In case options include icons, whether the icon should appear after or
          before the label.
        </td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td>
          <code></code>
        </td>
        <td>URL of the icon that will be placed next to the dropdown label.</td>
      </tr>
      <tr>
        <td>iconPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the icon should appear after or before the label.</td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed within the dropdown.</td>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>mode: 'basic' | 'outlined'</td>
        <td>
          <code>'basic'</code>
        </td>
        <td>Uses one of the available component modes.</td>
      </tr>
      <tr>
        <td>showCaret: boolean</td>
        <td>
          <code>true</code>
        </td>
        <td>Whether the arrow next to the label must be displayed or not.</td>
      </tr>
      <tr>
        <td>disableRipple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the ripple effect will be disabled.</td>
      </tr>
      <tr>
        <td>onSelectOption: function</td>
        <td></td>
        <td>
          This function will be called every time the selection changes. The
          value of the selected option will be passed as a parameter.
        </td>
      </tr>
    </DxcTable>
  );
};

export default dropdownPropsTable;

import React from "react";
import PropsTable from "../../common/PropsTable";

const dropdownPropsTable = () => {
  return (
    <PropsTable>
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
              <b>label</b>: Option display value
            </li>
            <li>
              <b>iconSrc</b>: URL of the icon that will be placed next to the
              option label (Optional)
            </li>
            <li>
              <b>value</b>: Option inner value
            </li>
            <li>
              <b>options</b>: array for nested
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
          In case options include an icon, whether the icon should appear after
          or before the label.
        </td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td>
          <code></code>
        </td>
        <td>
          URL of the icon that will be placed next to the option label
          (Optional)
        </td>
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
        <td>Whether the arrow next to the labe must be displayed or not.</td>
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
          string with the key of the selected value will be passed as a
          parameter to this function.
        </td>
      </tr>
    </PropsTable>
  );
};

export default dropdownPropsTable;

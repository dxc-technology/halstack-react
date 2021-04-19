import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const toggleGroupPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>value: any | any[]</td>
        <td></td>
        <td>
          The key(s) of the selected value(s). If the toggle group component
          doesn't allow multiple selection, it must be one unique value. If the
          component allows multiple selection, value must be an array. If
          undefined, the component will be uncontrolled and the value will be
          managed internally by the component.
        </td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called every time the selection changes. The
          number with the key of the selected value will be passed as a
          parameter to this function. If multiple selection is allowed, an array
          of keys will be passed
        </td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>multiple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the toggle group will support multiple selection. In that
          case, value must be an array of numbers with the keys of the selected
          values.
        </td>
      </tr>
      <tr>
        <td>options: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the selectable options. Each object
          has the following properties:
          <ul>
            <li>
              <b>value</b>: Number with the option inner value.
            </li>
            <li>
              <b>label</b>: String with the option display value.
            </li>
            <li>
              <b>icon</b>: Element used as the icon. Icon and label can't be
              used at same time.
            </li>
            <li>
              <b>iconSrc</b>: URL of the icon that will be placed. IconSrc and
              label can't be used at same time. <b>Deprecated.</b>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>
          Value of the tabindex.
        </td>
      </tr>
    </DxcTable>
  );
};

export default toggleGroupPropsTable;

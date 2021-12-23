import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const selectPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the select.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>value: string | string[]</td>
        <td></td>
        <td>
          Value of the select. If undefined, the component will be uncontrolled
          and the value will be managed internally by the component.
        </td>
      </tr>
      <tr>
        <td>options: Option[]| OptionGroup[]</td>
        <td></td>
        <td>
          List of options. The following interfaces should be imported. <br />
          Option:
          <ul>
            <li>
              <b>Label: string</b>: Label of the option to be shown in the
              select.
            </li>
            <li>
              <b>Value: string</b>: Value of the option. It must be unique.{" "}
            </li>
            <li>
              <b>Icon: string</b>: Icon of the option. It is optional.
            </li>
          </ul>
          OptionGroup:
          <br />
          <ul>
            <li>
              <b>Label: string</b>: Label of the group to be shown in the
              select.
            </li>
            <li>
              <b>Options: Option[]</b>: List of options of the group.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>helperText: string</td>
        <td></td>
        <td>Helper text to be placed above the select.</td>
      </tr>
      <tr>
        <td>placeholder: string</td>
        <td></td>
        <td>Text to be put as placeholder of the select.</td>
      </tr>
      <tr>
        <td>searchable: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, an input will appear to filter the list of options.</td>
      </tr>
      <tr>
        <td>multiple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, multiple options can be selected. If false, only a single
          option can be selected.
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
        <td>optional: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the select will be optional, showing (Optional) next to the
          label.
        </td>
      </tr>
      <tr>
        <td>error: string</td>
        <td></td>
        <td>
          If it is defined, the component will change its appearance, showing
          the error below the select component.
        </td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user selects an option. An
          object including the new value (or values) and the error (if the value
          selected is not valid) will be passed to this function. An example of
          this object is: {"{ "}
          <code>value: value, error: error</code>
          {" }"}. If there is no error, error will be null.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the select loses the focus. An
          object including the value (or values) and the error (if the value
          selected is not valid) will be passed to this function. An example of
          this object is: {"{ "}
          <code>value: value, error: error</code>
          {" }"} If there is no error, error will be null.
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
        <td>size: string | object</td>
        <td>
          <code>'medium'</code>
        </td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fillParent').
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>
          <code>0</code>
        </td>
        <td>Value of the tabindex attribute.</td>
      </tr>
    </DxcTable>
  );
};

export default selectPropsTable;

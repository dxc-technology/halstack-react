import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const DateInputPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>defaultValue: string</td>
        <td>
          <code></code>
        </td>
        <td>
          Initial value of the input element, only when it is uncontrolled.
        </td>
      </tr>
      <tr>
        <td>value: string</td>
        <td>
          <code></code>
        </td>
        <td>
          Value of the input element. If undefined, the component will be
          uncontrolled and the value will be managed internally by the
          component.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the date.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>helperText: string</td>
        <td></td>
        <td>Helper text to be placed above the date.</td>
      </tr>
      <tr>
        <td>placeholder: boolean</td>
        <td>false</td>
        <td>
          If true, the date format will appear as placeholder in the field.
        </td>
      </tr>
      <tr>
        <td>format: string</td>
        <td>'dd-MM-yyyy'</td>
        <td>
          The format in which the date value will be displayed. User must follow
          this format when editing the value or it will be considered as an
          invalid date. In this case, the onBlur and onChange functions will be
          called with an internal error as a parameter reporting the situation.
        </td>
      </tr>
      <tr>
        <td>clearable: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the date input will have an action to clear the entered
          value.
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
          If true, the date will be optional, showing <code>(Optional)</code>{" "}
          next to the label. Otherwise, the field will be considered required
          and an error will be passed as a parameter to the OnBlur and onChange
          functions when it has not been filled.
        </td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user types within the input
          element of the component. An object including the string value, the
          error and the date value will be passed to this function. An example
          of this object is: {"{ "}
          <code>value: value, error: error, date: date</code>
          {" }"}. If the string value is a valid date, <code>error</code> will
          be undefined. Also, if the string value is not a valid date,{" "}
          <code>date</code> will be undefined.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the input element loses the focus.
          An object including the string value, the error and the date value
          will be passed to this function. An example of this object is: {"{ "}
          <code>value: value, error: error, date: date</code>
          {" }"}. If the string value is a valid date, <code>error</code> will
          be undefined. Also, if the string value is not a valid date,{" "}
          <code>date</code> will be undefined.
        </td>
      </tr>
      <tr>
        <td>error: string</td>
        <td></td>
        <td>
          If it is a defined value and also a truthy string, the component will
          change its appearance, showing the error below the date input
          component. If the defined value is an empty string, it will reserve a
          space below the component for a future error, but it would not change
          its look. In case of being undefined or null, both the appearance and
          the space for the error message would not be modified.
        </td>
      </tr>
      <tr>
        <td>autocomplete: string</td>
        <td>
          <code>'off'</code>
        </td>
        <td>
          HTML autocomplete attribute. Lets the user specify if any permission
          the user agent has to provide automated assistance in filling out the
          input value. Its value must be one of all the possible values of the
          HTML autocomplete attribute: 'on', 'off', 'email', 'username',
          'new-password', ...
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
        <td>size: string</td>
        <td>
          <code>'medium'</code>
        </td>
        <td>Size of the component ('medium' | 'large' | 'fillParent').</td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>
          <code>0</code>
        </td>
        <td>Value of the tabindex attribute.</td>
      </tr>
      <tr>
        <td>ref: object</td>
        <td></td>
        <td>Reference to the component.</td>
      </tr>
    </DxcTable>
  );
};

export default DateInputPropsTable;

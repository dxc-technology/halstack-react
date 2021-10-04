import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const newInputPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>value: string</td>
        <td>
          <code></code>
        </td>
        <td>
          Value of the input. If undefined, the component will be uncontrolled
          and the value will be managed internally by the component.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the input.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>helperText: string</td>
        <td></td>
        <td>Helper text to be placed above the input.</td>
      </tr>
      <tr>
        <td>placeholder: boolean</td>
        <td>false</td>
        <td>
          If true the date format will appear as placeholder in the field.
        </td>
      </tr>
      <tr>
        <td>format: string</td>
        <td>'dd-MM-yyyy'</td>
        <td>
          The format in which the date value will be displayed. User must use
          this format when editing the input or it will be considered as an
          invalid date.
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
          If true, the input will be optional, showing <code>(Optional)</code>{" "}
          next to the label.
        </td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user types within the input. An
          object including the current string value and the date value will be
          passed to this function. An example of this object is: {"{ "}
          <code>value: value, date: date </code>
          {" }"}. If the string value is not a valid date,{" "}
          <code>date</code> will be null.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the input element of the component
          loses the focus. An object including the string value, the error and
          the date value will be passed to this function. An example of this
          object is: {"{ "}
          <code>value: value, error: error, date: date</code>
          {" }"}. If the string value is a valid date, <code>error</code> will
          be null. Also, if the string value is not a valid date,{" "}
          <code>date</code> will be null.
        </td>
      </tr>
      <tr>
        <td>error: string</td>
        <td></td>
        <td>
          If it is defined, the component will change its appearance, showing
          the error below the date component. If it is not defined, the error
          messages will be managed internally by the component.
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
        <td>Size of the component ('medium' | 'large' | 'fillParent').</td>
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

export default newInputPropsTable;

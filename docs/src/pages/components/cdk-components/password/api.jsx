import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const passwordPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>value: string</td>
        <td></td>
        <td>
          Value of the password. If undefined, the component will be
          uncontrolled and the value will be managed internally by the
          component.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the password.</td>
      </tr>
      <tr>
        <td>helperText: string</td>
        <td></td>
        <td>Helper text to be placed above the password.</td>
      </tr>
      <tr>
        <td>error: string</td>
        <td></td>
        <td>
          If it is defined, the component will change its appearance, showing
          the error below the password component. If it is not defined, the
          error messages will be created internally by the component.
        </td>
      </tr>
      <tr>
        <td>clearable: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the input will have an action to clear the value entered in
          the password.
        </td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user types within the password.
          An object including the value and the error (if the value entered is
          not valid) will be passed to this function. An example of this object
          is: {"{ "}
          <code>value: value, error: error</code>
          {" }"}. If there is no error, error will be null.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the password loses the focus. An
          object including the value and the error (if the value entered is not
          valid) will be passed to this function. An example of this object is:{" "}
          {"{ "}
          <code>value: value, error: error</code>
          {" }"}. If there is no error, error will be null.
        </td>
      </tr>
      <tr>
        <td>margin: function</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
      <tr>
        <td>pattern: string </td>
        <td></td>
        <td>
          Regular expression that defines the valid format allowed by the
          password. This will be checked when the password loses the focus. If
          the value entered does not match the pattern, the onBlur function will
          be called with the value entered and the error informing that the
          value does not match the pattern as parameters. If the pattern is
          accomplished, the error parameter will be null.
        </td>
      </tr>
      <tr>
        <td>length: object</td>
        <td></td>
        <td>
          Specifies the minimun and maximum length allowed by the password. It
          follows this structure: {"{ "}
          <code>min: minLength, max: maxLength</code>
          {" }"}. This will be checked when the user types within the password.
          If the value entered does not comply the length, the onChange function
          will be called with the value entered and the error informing that the
          value does not comply the length as parameters. If the length is
          accomplished, the error parameter will be null.
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
    </DxcTable>
  );
};

export default passwordPropsTable;

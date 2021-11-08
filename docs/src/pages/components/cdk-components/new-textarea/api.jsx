import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const NewTextareaPropsTable = () => {
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
          Value of the textarea. If undefined, the component will be
          uncontrolled and the value will be managed internally.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the textarea.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the textarea element.</td>
      </tr>
      <tr>
        <td>helperText: string</td>
        <td></td>
        <td>Helper text to be placed above the textarea.</td>
      </tr>
      <tr>
        <td>placeholder: string</td>
        <td></td>
        <td>Text to be put as placeholder of the textarea.</td>
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
          If true, the textarea will be marked as optional, showing{" "}
          <code>(Optional)</code> next to the label. Otherwise, the field will
          be considered required and will display an error when not filled in.
        </td>
      </tr>
      <tr>
        <td>verticalGrow: 'auto' | 'manual' | 'none'</td>
        <td>
          <code>'auto'</code>
        </td>
        <td>
          Defines the textarea's ability to resize vertically. It can be:
          <ul>
            <li>
              <b>'auto'</b>: The textarea grows or shrinks automatically in
              order to fit the content.
            </li>
            <li>
              <b>'manual'</b>: The height of the textarea is enabled to be
              manually modified.
            </li>
            <li>
              <b>'none'</b>: The textarea has a fixed height and can't be
              modified.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>rows: number</td>
        <td>4</td>
        <td>Number of rows of the textarea.</td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user types within the textarea.
          The new value will be passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the textarea loses the focus. An
          object including the textarea value and the error will be passed to
          this function. An example of this object is: {"{ "}
          <code>value: value, error: error</code>
          {" }"}. If there is no error, error will be null.
        </td>
      </tr>
      <tr>
        <td>error: string</td>
        <td></td>
        <td>
          If it is defined, the component will change its appearance, showing
          the error below the textarea component. If it is not defined, the
          error messages will be created and managed internally.
        </td>
      </tr>
      <tr>
        <td>pattern: string</td>
        <td></td>
        <td>
          Regular expression that defines the valid format allowed by the
          textarea. This will be checked when the textarea loses the focus. If
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
          Specifies the minimun and maximum length allowed by the textarea. It
          follows this structure: {"{ "}
          <code>min: minLength, max: maxLength</code>
          {" }"}. This will be checked when the textarea loses the focus. If the
          value entered does not comply the length, the onBlur function will be
          called with the value entered and the error informing that the value
          does not comply the length as parameters. If the length is
          accomplished, the error parameter will be null.
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
          textarea value. Its value must be one of all the possible values of
          the HTML autocomplete attribute: 'on', 'off', 'email', 'username',
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
      <tr>
        <td>ref: object</td>
        <td></td>
        <td>Reference to the component.</td>
      </tr>
    </DxcTable>
  );
};

export default NewTextareaPropsTable;

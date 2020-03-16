import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const alertPropsTable = () => {
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
        <td>The value of the input element.</td>
      </tr>
      <tr>
        <td>format: string</td>
        <td></td>
        <td>
          The format in which the date value will be displayed. User must use
          this format when editing the input.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the date component.</td>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>iconSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default calendar icon.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>required: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, a red asterisk will appear before the label to indicate to
          the user that the field is required.
        </td>
      </tr>
      <tr>
        <td>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed at the bottom of the input.</td>
      </tr>
      <tr>
        <td>invalid: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the input will change its appearence, showing that the value
          is not valid.
        </td>
      </tr>
      <tr>
        <td>disableRipple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the ripple effect will be disabled.</td>
      </tr>
      <tr>
        <td>onInputChange: function</td>
        <td></td>
        <td>
          This function will be called when the user types within the input. An
          object including the current sring value and the date value (if the
          string typed is a valid date) will be passed to this function. An
          example of this object is: {"{ "}
          <code>stringValue: value, dateValue: date</code>
          {" }"}.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the the input loses the focus. The
          input value will be passed as a parameter.
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
    </DxcTable>
  );
};

export default alertPropsTable;

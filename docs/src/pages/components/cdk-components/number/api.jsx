import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const numberPropsTable = () => {
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
          Value of the number. If undefined, the component will be uncontrolled
          and the value will be managed internally by the component.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the number.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the number element.</td>
      </tr>
      <tr>
        <td>helperText: string</td>
        <td></td>
        <td>Helper text to be placed above the number.</td>
      </tr>
      <tr>
        <td>placeholder: string</td>
        <td></td>
        <td>Text to be put as placeholder of the number.</td>
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
          If true, the number will be optional, showing <code>(Optional)</code>{" "}
          next to the label.
        </td>
      </tr>
      <tr>
        <td>prefix: string</td>
        <td></td>
        <td>Prefix to be placed before the number value.</td>
      </tr>
      <tr>
        <td>suffix: string</td>
        <td></td>
        <td>Suffix to be placed after the number value.</td>
      </tr>
      <tr>
        <td>min: number</td>
        <td></td>
        <td>Minimum value allowed by the number.</td>
      </tr>
      <tr>
        <td>max: number</td>
        <td></td>
        <td>Maximum value allowed by the number.</td>
      </tr>
      <tr>
        <td>step: number</td>
        <td></td>
        <td>
          The step interval to use when using the up and down arrows to adjust
          the value.
        </td>
      </tr>
      <tr>
        <td>error: string</td>
        <td></td>
        <td>
          If it is defined, the component will change its appearance, showing
          the error below the number component. If it is not defined, the error
          messages will be created internally by the component.
        </td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user types within the number.
          The new value will be passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the number loses the focus. An
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

export default numberPropsTable;

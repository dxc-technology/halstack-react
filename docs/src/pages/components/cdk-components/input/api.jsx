import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const inputPropsTable = () => {
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
          Value of the input element. If undefined, the component will be
          uncontrolled and the value will be managed internally by the
          component.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the input.</td>
      </tr>
      <tr>
        <td>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed below the input.</td>
      </tr>
      <tr>
        <td>prefix: string</td>
        <td></td>
        <td>
          Prefix to be placed before the input value. Use prefixIconSrc in case
          the prefix is an icon.
        </td>
      </tr>
      <tr>
        <td>suffix: string</td>
        <td></td>
        <td>
          Suffix to be placed after the input value. Use suffixIconSrc in case
          the suffix is an icon.
        </td>
      </tr>
      <tr>
        <td>prefixIcon: node</td>
        <td></td>
        <td>Element used as the icon to be placed before the input value.</td>
      </tr>
      <tr>
        <td>suffixIcon: node</td>
        <td></td>
        <td>Element used as icon to be placed after the input value</td>
      </tr>
      <tr>
        <td>prefixIconSrc: string</td>
        <td></td>
        <td>
          <b>Deprecated.</b> Path of the icon to be placed before the input
          value.
        </td>
      </tr>
      <tr>
        <td>suffixIconSrc: string</td>
        <td></td>
        <td>
          <b>Deprecated.</b> Path of the icon to be placed after the input
          value.
        </td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>placeholder: string</td>
        <td></td>
        <td>Text to be put as placeholder in the input.</td>
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
          If true, the input will change its appearence, showing that the value
          is required.
        </td>
      </tr>
      <tr>
        <td>invalid: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the input will change its appearence, showing that the value
          is invalid.
        </td>
      </tr>
      <tr>
        <td>isMasked: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, a mask will be displayed.</td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user changes the value of the
          input. The new value will be passed as a parameter.
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
        <td>onClickPrefix: function</td>
        <td></td>
        <td>
          This function will be called when the prefix (text or icon) is
          clicked.
        </td>
      </tr>
      <tr>
        <td>onClickSuffix: function</td>
        <td></td>
        <td>
          This function will be called when the suffix (text or icon) is
          clicked.
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
        <td>autocompleteOptions: Array | function</td>
        <td></td>
        <td>
          These are the options to be displayed as suggestions. It can be either
          an array or a function:
          <ul>
            <li>
              <b>Array</b>: Array of options that will be filtered by the
              component.
            </li>
            <li>
              <b>Function</b>: This function will be called when the user
              changes the value, we will send as a parameter the new value;
              apart from that this function should return one promise on which
              we should make 'then' to get the suggestions filtered.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>
          Value of the tabindex, it also applies to prefix and suffix when a
          function is given.
        </td>
      </tr>
    </DxcTable>
  );
};

export default inputPropsTable;

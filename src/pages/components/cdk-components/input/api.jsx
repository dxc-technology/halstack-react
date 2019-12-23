import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

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
        <td>Assistive text to be placed bellow the input.</td>
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
        <td>prefixIconSrc: string</td>
        <td></td>
        <td>Path of the icon to be placed before the input value.</td>
      </tr>
      <tr>
        <td>suffixIconSrc: string</td>
        <td></td>
        <td>Path of the icon to be placed after the input value.</td>
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
        <td>multiline: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, a resizable text area will be displayed.</td>
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
    </DxcTable>
  );
};

export default inputPropsTable;

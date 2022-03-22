import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const RadioGroupPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>defaultValue: string</td>
        <td></td>
        <td>Default value of the radio group, only when it is uncontrolled.</td>
      </tr>
      <tr>
        <td>value: string</td>
        <td></td>
        <td>
          Value of the radio group. If undefined, the component will be
          uncontrolled and the value will be managed internally by the
          component.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the radio group.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>
          Name attribute of the input element. This attribute will allow users
          to find the component's value during the submit event.
        </td>
      </tr>
      <tr>
        <td>options: Option[]</td>
        <td></td>
        <td>
          An array of objects representing the selectable options. Each object
          Option has the following properties:
          <ul>
            <li>
              <b>label: string</b>: Label of the option placed next to the radio
              input.
            </li>
            <li>
              <b>value: string</b>: Value of the option. It should be unique and
              not an empty string, which is reserved to the optional item added
              by <i>optional</i> prop.
            </li>
            <li>
              <b>disabled: boolean</b>: disables the option.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>helperText: string</td>
        <td></td>
        <td>Helper text to be placed above the radio group.</td>
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
          If true, the radio group will be optional, showing{" "}
          <code>(Optional)</code> next to the label and adding a default last
          option with an empty string as value. Otherwise, the field will be
          considered required and an error will be passed as a parameter to the
          OnBlur functions if an option wasn't selected.
        </td>
      </tr>
      <tr>
        <td>optionalItemLabel: string</td>
        <td>
          <code>"N/A"</code>
        </td>
        <td>Label of the optional item.</td>
      </tr>
      <tr>
        <td>readonly: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be marked as readonly.</td>
      </tr>
      <tr>
        <td>stacking: "row" | "column"</td>
        <td>
          <code>"column"</code>
        </td>
        <td>Sets the orientation of the options within the radio group.</td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user chooses an option. The new
          value will be passed to this function.
        </td>
      </tr>
      <tr>
        <td>onBlur: function</td>
        <td></td>
        <td>
          This function will be called when the radio group loses the focus. An
          object including the value and the error will be passed to this
          function. An example of this object is: {"{ "}
          <code>value: value, error: error</code>
          {" }"}. If there is no error, error will not be defined.
        </td>
      </tr>
      <tr>
        <td>error: string</td>
        <td></td>
        <td>
          If it is defined, the component will change its appearance, showing
          the error below the radio group component. If it is not defined, the
          error messages will be managed internally, but never displayed on its
          own.
        </td>
      </tr>
      <tr>
        <td>ref: object</td>
        <td></td>
        <td>Reference to the component.</td>
      </tr>
    </DxcTable>
  );
};

export default RadioGroupPropsTable;

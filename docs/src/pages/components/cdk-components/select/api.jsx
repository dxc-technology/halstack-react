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
        <td>value: string | string[]</td>
        <td></td>
        <td>
          Value of the select. If undefined, the component will be uncontrolled
          and the value will be managed internally by the component.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed above the select.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>
          Name attribute of the input element. This attribute will allow users
          to find the component's value during the submit event. In this event,
          the component's value will always be a regular string, for both single
          and multiple selection modes, been in the first one a single option
          value and in the multiple variant more than one option value,
          separated by commas.
        </td>
      </tr>
      <tr>
        <td>options: Option[] | OptionGroup[]</td>
        <td></td>
        <td>
          An array of objects representing the selectable options. Each object
          has the following properties depending on whether it is a regular
          option or a group: <br />
          Option:
          <ul>
            <li>
              <b>Label: string</b>: Label of the option to be shown in the
              select's listbox.
            </li>
            <li>
              <b>Value: string</b>: Value of the option. It should be unique and
              not an empty string, which is reserved to the empty option added
              by <i>optional</i> prop.
            </li>
            <li>
              <b>Icon: string | (HTMLElement & SVGElement)</b>: Element used as
              the icon that will be placed before the option label. It can be a
              url of an image or an inline SVG. If the url option is the chosen
              one, take into account that the component's color styling tokens
              will not be applied to the image.
            </li>
          </ul>
          OptionGroup:
          <br />
          <ul>
            <li>
              <b>Label: string</b>: Label of the group to be shown in the
              select's listbox.
            </li>
            <li>
              <b>Options: Option[]</b>: List of the grouped options.
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
        <td>If true, enables search functionality.</td>
      </tr>
      <tr>
        <td>multiple: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the select component will support multiple selected options.
          In that case, value will be an array of strings with each selected
          option value.
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
          If true, the select will be optional, showing <code>(Optional)</code>{" "}
          next to the label and adding a default first option with empty value, been
          the placeholder (if defined) its label. Otherwise, the field will be
          considered required and an error will be passed as a parameter to the
          OnBlur and onChange functions if an option wasn't selected.
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
        <td>error: string</td>
        <td></td>
        <td>
          If it is defined, the component will change its appearance, showing
          the error below the select component. If it is not defined, the error
          messages will be managed internally, but never displayed on its own.
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

export default selectPropsTable;

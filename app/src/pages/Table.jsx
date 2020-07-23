import React from "react";
import { DxcTable, ThemeContext } from "@dxc-technology/halstack-react";

const colors = {
  black: "blue",
  mediumBlack: "red",
  lightBlack: "grey",
  white: "black",
  darkWhite: "beige",
  yellow: "aquamarine",
  darkGrey: "brown",
  lightGrey: "azure",
  darkRed: "coral",
  lightRed: "aqua",
  lightBlue: "green",
  lightYellow: "white",
  lightPink: "red",
  lightGreen: "blue",
};

function Table() {
  return (
    <div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcTable margin="xxsmall">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcTable margin="xsmall">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcTable margin="small">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcTable margin="medium">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcTable margin="large">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcTable margin="xlarge">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcTable margin="xxlarge">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </div>

        <div className="test-case" id="horizontal-scroll">
          <h5>Table with multiple columns and horizontal scroll</h5>
          <DxcTable margin="xxsmall">
            <thead>
              <tr>
                <th>Name</th>
                <th>Default</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>checked: boolean</td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
                <td>
                  If true, the radio is selected. If undefined the component
                  will be uncontrolled and the value will be managed internally
                  by the component.
                </td>
              </tr>
            </tbody>
          </DxcTable>
        </div>
      </div>

      <div className="test-case" id="custom-colors">
        <h5>Custom Table</h5>
        <ThemeContext.Provider value={colors}>
          <DxcTable margin="xxsmall">
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>checked: boolean</td>
              <td>
                <code>false</code>
              </td>
              <td>
                If true, the radio is selected. If undefined the component will
                be uncontrolled and the value will be managed internally by the
                component.
              </td>
            </tr>
            <tr>
              <td>value: any</td>
              <td></td>
              <td>
                Will be passed to the value attribute of the html input element.
                When inside a form, this value will be only submitted if the
                radio is checked.
              </td>
            </tr>
            <tr>
              <td>label: string</td>
              <td></td>
              <td>Text to be placed next to the radio.</td>
            </tr>
            <tr>
              <td>labelPosition: 'before' | 'after'</td>
              <td>
                <code>'before'</code>
              </td>
              <td>
                Whether the label should appear after or before the radio.
              </td>
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
                If true, the radio will change its appearence, showing that the
                value is required.
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
              <td>onChange: function</td>
              <td></td>
              <td>
                This function will be called when the user clicks the radio. The
                new value will be passed as a parameter.
              </td>
            </tr>
            <tr>
              <td>margin: string | object</td>
              <td></td>
              <td>
                Size of the margin to be applied to the component ('xxsmall' |
                'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
                You can pass an object with 'top', 'bottom', 'left' and 'right'
                properties in order to specify different margin sizes.
              </td>
            </tr>
            <tr>
              <td>size: string | object</td>
              <td>
                <code>"medium"</code>
              </td>
              <td>
                Size of the component ('small' | 'medium' | 'large' |
                'fillParent' | 'fitContent').
              </td>
            </tr>
          </DxcTable>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default Table;

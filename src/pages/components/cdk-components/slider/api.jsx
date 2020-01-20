import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const checkboxPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
      </tr>
      <tr>
        <td>min: number</td>
        <td>
          <code>0</code>
        </td>
        <td>The minimum value available for selection.</td>
      </tr>
      <tr>
        <td>max: number</td>
        <td>
          <code>100</code>
        </td>
        <td>The maximum value available for selection.</td>
      </tr>
      <tr>
        <td>step: number</td>
        <td>
          <code>1</code>
        </td>
        <td>The step interval between values available for selection.</td>
      </tr>
      <tr>
        <td>value: number</td>
        <td>
          <code>0</code>
        </td>
        <td>
          The selected value. If undefined, the component will be uncontrolled
          and the value will be managed internally by the component.
        </td>
      </tr>
      <tr>
        <td>showLimitValues: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          Whether the min/max value labels should be displayed next to the
          slider.
        </td>
      </tr>
      <tr>
        <td>showInput: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          Whether the input number for displaying/controlling the slider value
          should be displayed next to the slider.
        </td>
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
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the slider changes its value, as
          it's being dragged. The new value will be passed as a parameter when
          this function is executed.
        </td>
      </tr>
      <tr>
        <td>onDragEnd: function</td>
        <td></td>
        <td>
          This function will be called when the slider changes its value, but
          only when the thumb is released. The new value will be passed as a
          parameter when this function is executed.
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
        <td></td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
          'fitContent').
        </td>
      </tr>
    </DxcTable>
  );
};

export default checkboxPropsTable;

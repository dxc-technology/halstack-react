import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const wizardPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>mode: 'horizontal' | 'vertical'</td>
        <td>
            <code>'horizontal'</code>
        </td>
        <td>
          The wizard can be showed in horizontal or vertical.
        </td>
      </tr>
      <tr>
        <td>theme: 'light' |'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available themes.</td>
      </tr>
      <tr>
        <td>currentStep: number</td>
        <td>
          <code>0</code>
        </td>
        <td>Defines which step is marked as the current. The numeration starts in 0.</td>
      </tr>
      <tr>
        <td>onStepClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks a step. The
          step number will be passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>steps: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the steps. Each of them has the
          following properties:
          <ul>
            <li>
              <b>label</b>: Step label.
            </li>
            <li>
              <b>description</b>: Step description.
            </li>
            <li>
              <b>iconSrc</b>: URL of the icon to be displayed in the step.
            </li>
            <li>
              <b>disable</b>: Whether the step is disabled or not.
            </li>
            <li>
              <b>valid</b>: Whether the step is valid or not.
            </li>
          </ul>
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
    </DxcTable>
  );
};

export default wizardPropsTable;

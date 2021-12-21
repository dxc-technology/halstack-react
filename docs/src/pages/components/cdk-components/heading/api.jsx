import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const headingPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>level: number</td>
        <td>
          <code>1</code>
        </td>
        <td>
          Defines the heading level from 1 to 5. The styles of the specified in
          'as' prop are applied. If 'as' is not specified, the heading will be
          rendered according to the level.
        </td>
      </tr>
      <tr>
        <td>text: string</td>
        <td></td>
        <td>Heading text.</td>
      </tr>
      <tr>
        <td>as: 'h1' | 'h2' | 'h3' | 'h4'| 'h5' </td>
        <td></td>
        <td>
          Defines the styles to be applied to the heading. This prop can be used
          to render any level heading with the styles of the one specified in
          'as'.
        </td>
      </tr>
      <tr>
        <td>weight: 'light' | 'normal' | 'bold'</td>
        <td></td>
        <td>Modifies the default weight of the heading.</td>
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

export default headingPropsTable;

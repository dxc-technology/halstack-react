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
          Defines the heading level from 1 to 5. The styles of the heading are
          applied according to the level. The html tag of the heading will be
          the one specified in the 'as' prop. If 'as' is not specified, the html
          tag of the heading is the one specified in the 'level' prop.
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
        <td>Specifies the html tag of the heading.</td>
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

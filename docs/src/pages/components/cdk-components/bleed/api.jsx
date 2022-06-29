import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const bleedPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>
          space: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem'
          | '2rem' | '3rem' | '4rem' | '5rem'
        </td>
        <td>
          <code>'0rem'</code>
        </td>
        <td>Applies the spacing scale to all sides.</td>
      </tr>
      <tr>
        <td>
          horizontal: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' |
          '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
        </td>
        <td>
          <code>'0rem'</code>
        </td>
        <td>Applies the spacing scale to the left and right sides.</td>
      </tr>
      <tr>
        <td>
          vertical: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' |
          '1.5rem' | '2rem' | '3rem' | '4rem' | '5rem'
        </td>
        <td>
          <code>'0rem'</code>
        </td>
        <td>Applies the spacing scale to the top and bottom sides.</td>
      </tr>
      <tr>
        <td>
          top: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
          '2rem' | '3rem' | '4rem' | '5rem'
        </td>
        <td>
          <code>'0rem'</code>
        </td>
        <td>Applies the spacing scale to the top side.</td>
      </tr>
      <tr>
        <td>
          right: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem'
          | '2rem' | '3rem' | '4rem' | '5rem'
        </td>
        <td>
          <code>'0rem'</code>
        </td>
        <td>Applies the spacing scale to the right side.</td>
      </tr>
      <tr>
        <td>
          bottom: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem'
          | '2rem' | '3rem' | '4rem' | '5rem'
        </td>
        <td>
          <code>'0rem'</code>
        </td>
        <td>Applies the spacing scale to the bottom side.</td>
      </tr>
      <tr>
        <td>
          left: '0rem' | '0.125rem' | '0.25rem' | '0.5rem' | '1rem' | '1.5rem' |
          '2rem' | '3rem' | '4rem' | '5rem'
        </td>
        <td>
          <code>'0rem'</code>
        </td>
        <td>Applies the spacing scale to the left side.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Custom content inside the bleed.</td>
      </tr>
    </DxcTable>
  );
};

export default bleedPropsTable;

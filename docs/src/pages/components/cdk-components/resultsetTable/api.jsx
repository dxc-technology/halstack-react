import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const resultsetTablePropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>columns: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the columns of the table. Each object
          has the following properties:
          <ul>
            <li>
              <b>displayValue</b>: Column display value.
            </li>
            <li>
              <b>isSortable</b>: Boolean value to indicate whether the column is
              sortable or not.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>rows: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the rows of the table, you will have
          as many objects as columns in the table. Each object has the following
          properties:
          <ul>
            <li>
              <b>displayValue</b>: Value to be displayed in the cell.
            </li>
            <li>
              <b>sortValue</b>: Value to be used when sorting the table by that
              column. If not indicated displayValue will be used for sorting.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>showGoToPage: boolean</td>
        <td>
          <code>true</code>
        </td>
        <td>
          If true, a select component for navigation between pages will be
          displayed.
        </td>
      </tr>
      <tr>
        <td>itemsPerPage: number</td>
        <td>
          <code>5</code>
        </td>
        <td>Number of items per page.</td>
      </tr>
      <tr>
        <td>itemsPerPageOptions: number[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>An array of numbers representing the items per page options.</td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex attribute given to the sortable icon.</td>
      </tr>
      <tr>
        <td>itemsPerPageFunction: function</td>
        <td></td>
        <td>
          This function will be called when the user selects an item per page
          option. The value selected will be passed as a parameter.
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

export default resultsetTablePropsTable;

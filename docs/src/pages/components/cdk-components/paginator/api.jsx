import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const paginatorPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>currentPage: number</td>
        <td>
          <code>1</code>
        </td>
        <td>Number of the current selected page.</td>
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
        <td>itemsPerPageFunction: function</td>
        <td></td>
        <td>
          This function will be called when the user selects an item per page
          option.
        </td>
      </tr>
      <tr>
        <td>totalItems: number</td>
        <td>
          <code>1</code>
        </td>
        <td>Total number of items in the pages.</td>
      </tr>
      <tr>
        <td>showGoToPage: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, a select will be displayed with the page numbers to move
          through them
        </td>
      </tr>
      <tr>
        <td>onPageChange: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks on any of the button
          to change pages. The page number will be passed as a parameter to this
          function.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex.</td>
      </tr>
    </DxcTable>
  );
};

export default paginatorPropsTable;

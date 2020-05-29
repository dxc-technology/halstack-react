import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

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
        <td>totalItems: number</td>
        <td>
          <code>1</code>
        </td>
        <td>Total number of items in the pages.</td>
      </tr>
      <tr>
        <td>nextFunction: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the button to go to
          the next page.
        </td>
      </tr>
      <tr>
        <td>prevFunction: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the button to go to
          the previous page.
        </td>
      </tr>
      <tr>
        <td>lastFunction: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the button to go to
          the last page.
        </td>
      </tr>
      <tr>
        <td>firstFunction: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the button to go to
          the first page.
        </td>
      </tr>
    </DxcTable>
  );
};

export default paginatorPropsTable;

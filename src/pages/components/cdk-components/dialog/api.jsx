import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const checkboxPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>isCloseVisible: boolean</td>
        <td>true</td>
        <td>If true, the close 'x' button will be visible.</td>
      </tr>
      <tr>
        <td>onCloseClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the close 'x'
          button. The user has the responsibility of hidding the modal.
        </td>
      </tr>
      <tr>
        <td>onBackgroundClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks background of the
          modal button. The user has the responsibility of hidding the modal.
        </td>
      </tr>
      <tr>
        <td>overlay: boolean</td>
        <td>true</td>
        <td>If true, the dialog will be displayed over a darker background.</td>
      </tr>
    </DxcTable>
  );
};

export default checkboxPropsTable;

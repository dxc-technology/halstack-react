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
        <td>onUpload: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the 'Upload' button
          for every file to be uploaded, we will send as a parameter the File
          object; apart from that this function should return one promise on
          which we should make 'then'(here we should show a Success alert) or
          'catch' (in this case we would receive the error message as a string).
        </td>
      </tr>
    </DxcTable>
  );
};

export default checkboxPropsTable;

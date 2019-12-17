import React from "react";
import PropsTable from "../../common/PropsTable";

const checkboxPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>isVisible: boolean</td>
        <td>true</td>
        <td>If true, the modal should be visible</td>
    </tr>
    <tr>
        <td>isCloseVisible: boolean</td>
        <td>true</td>
        <td>If true, the close button should be visible</td>
    </tr>
    <tr>
        <td>onClose: function</td>
        <td></td>
        <td>This function will be called when the user clicks the close button. If there is no function we should close the modal by default</td>
    </tr>
    <tr>
        <td>overlay: boolean</td>
        <td>true</td>
        <td>If true, the modal will be over a darker background</td>
    </tr>
    </PropsTable>
  );
};

export default checkboxPropsTable;

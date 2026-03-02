import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const TablePreview = () => {
  return (
    <DxcTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Developer</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>jane@example.com</td>
          <td>Designer</td>
        </tr>
      </tbody>
    </DxcTable>
  );
};

export default TablePreview;

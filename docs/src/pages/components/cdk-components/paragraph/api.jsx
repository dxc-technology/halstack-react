import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const ParagraphPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td>Text to be displayed in the paragraph</td>
      </tr>
    </DxcTable>
  );
};

export default ParagraphPropsTable;

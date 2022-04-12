import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const quickNavPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>title: string</td>
        <td></td>
        <td>Title of the quick nav component.</td>
      </tr>
      <tr>
        <td>links: Link[]</td>
        <td></td>
        <td>
          Links to be shown inside the quick nav component. Each link is
          composed by:
          <ul>
            <li>
              <b>Label: string</b>: Label to be shown in the link.
            </li>
            <li>
              <b>links: Link[]</b>: Sublinks of the link.
            </li>
          </ul>
        </td>
      </tr>
    </DxcTable>
  );
};

export default quickNavPropsTable;

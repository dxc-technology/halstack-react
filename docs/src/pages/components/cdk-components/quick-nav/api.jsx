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
          Links of the quick nav component. Each link has the following
          properties:
          <ul>
            <li>
              <b>label: string</b>: Text to be shown in the link. The content
              must be wrapped with an id equals to the slugified label (in lower
              case and the white spaces replaced by '-') in order to be able to
              navigate to the section that the label references.
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

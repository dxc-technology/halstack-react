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
        <td>sections: Section[]</td>
        <td></td>
        <td>
          Sections to be shown as the content of the quick nav container.
          <ul>
            <li>
              <b>title: string</b>: Title of each section.
            </li>
            <li>
              <b>level: 1 | 2 | 3 | 4 | 5</b>: Level of each section.
            </li>
            <li>
              <b>content: React.ReactNode</b>: Content of each section.
            </li>
            <li>
              <b>subSections: Section[]</b>: Subsections of each section.
            </li>
          </ul>
        </td>
      </tr>
    </DxcTable>
  );
};

export default quickNavPropsTable;

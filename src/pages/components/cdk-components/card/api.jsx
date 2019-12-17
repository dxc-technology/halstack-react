import React from "react";
import PropsTable from "../../common/PropsTable";

const buttonPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>imageSrc: string</td>
        <td></td>
        <td>URL of the image that will be placed inside the card component.</td>
      </tr>
      <tr>
        <td>imagePosition: 'after' | 'before' | 'above' | 'below'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the image should appear in relation to the content.</td>
      </tr>
      <tr>
        <td>mode: 'default' | 'alternative'</td>
        <td>
          <code>'default'</code>
        </td>
        <td>Uses on of the available card modes.</td>
      </tr>
      <tr>
        <td>theme: 'light' | 'dark'</td>
        <td>
          <code>'light'</code>
        </td>
        <td>Uses one of the available component themes.</td>
      </tr>
    </PropsTable>
  );
};

export default buttonPropsTable;

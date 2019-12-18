import React from "react";
import PropsTable from "../../common/PropsTable";

const alertPropsTable = () => {
  return (
    <PropsTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>logoSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default dxc logo.</td>
    </tr>
    <tr>
        <td>socialLinks: object[]</td>
        <td><code>[]</code></td>
        <td>An array of objects representing the links that will be rendered at the bottom part of the footer. Each object has the following properties:
            <ul>
                <li><b>logoSrc</b>: The path of an icon for the link</li>
                <li><b>href</b>: URL of the page the link goes to</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>bottomLinks: object[]</td>
        <td><code>[]</code></td>
        <td>An array of objects representing the incon links that will be rendered at the top-right side of the footer. Each object has the following properties:
            <ul>
                <li><b>text</b>: Text for the link</li>
                <li><b>href</b>: URL of the page the link goes to</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>copyright: string</td>
        <td></td>
        <td>The text that will be displayed as copyright disclaimer.</td>
    </tr>
    </PropsTable>
  );
};

export default alertPropsTable;

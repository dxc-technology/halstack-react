import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const headingPropsTable = () => {
    return (
        <DxcTable>
            <tr>
                <th>Name</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>level: number</td>
                <td>
                    <code>1</code>
                </td>
                <td>Defines the heading level from 1 to 5.</td>
            </tr>
            <tr>
                <td>text: string</td>
                <td></td>
                <td>Heading text.</td>
            </tr>
            <tr>
                <td>weight: 'light' | 'normal' | 'bold'</td>
                <td></td>
                <td>Modifies the default weight of the heading.</td>
            </tr>
            <tr>
                <td>theme: 'light' | 'dark'</td>
                <td>
                    <code>light</code>
                </td>
                <td>Theme of the component.</td>
            </tr>
        </DxcTable>
    );
}

export default headingPropsTable;
import React from "react";
import { DxcTable } from "@diaas/dxc-react-cdk";

const sidenavPropsTable = () => {
    return (
        <DxcTable>
            <tr>
                <th>Name</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>mode: 'overlay' | 'push' </td>
                <td>
                    <code>'overlay'</code>
                </td>
                <td>Default action over the content of the page, overlay 
                    the content or push to the right.
                </td>
            </tr>
            <tr>
                <td>padding: string | object </td>
                <td></td>
                <td>
                    Size of the padding to be applied to the custom area 
                    ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 
                    'xlarge' | 'xxlarge'). You can pass an object with 'top', 
                    'bottom', 'left' and 'right' properties in order to 
                    specify different padding sizes.
                </td>
            </tr>
            <tr>
                <td>navContent: object</td>  
                <td></td>
                <td>
                    Content that will be showed inside the sidenav.
                </td>
            </tr>
            <tr>
                <td>pageContent: object</td>  
                <td></td>
                <td>
                    Content that will be showed in the page outside the sidenav.
                </td>
            </tr>
            <tr>
                <td>arrowDistance: string</td>  
                <td></td>
                <td>
                    Distance from the top of the arrow.
                </td>
            </tr>
            <tr>
                <td>displayArrow: boolean</td>  
                <td>
                    <code>true</code>
                </td>
                <td>
                    If false, the arrow button is hidden.
                </td>
            </tr>
        </DxcTable>
    );
}

export default sidenavPropsTable;
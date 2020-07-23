import { DxcSidenav } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    return (
        <DxcSidenav
            mode="push"
            displayArrow={false}
            navContent={
                <p>Amazon</p>
            }
            pageContent={
                <p>Lorem ipsum</p>
            }
        >
        </DxcSidenav>
    );
}`;

const scope = {
    DxcSidenav,
    useState
}

export default { code, scope };
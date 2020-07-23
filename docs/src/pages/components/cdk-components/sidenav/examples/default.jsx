import { DxcSidenav } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    return (
        <DxcSidenav
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
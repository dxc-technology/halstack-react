import { DxcSidenav } from "@diaas/dxc-react-cdk";
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
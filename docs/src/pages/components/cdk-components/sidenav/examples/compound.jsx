import { DxcSidenav } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    const linkClick = () => {
        console.log("click");
    };

    return (
        <DxcSidenav>
            <DxcSidenav.Title>My sidenav</DxcSidenav.Title>
            <p>This is a sidenav.</p>
            <DxcSidenav.Subtitle>Components</DxcSidenav.Subtitle>
            <DxcSidenav.Link href="#">Button</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Date</DxcSidenav.Link>
            <DxcSidenav.Subtitle>Guidelines</DxcSidenav.Subtitle>
            <DxcSidenav.Link onClick={linkClick}>Layout</DxcSidenav.Link>
            <DxcSidenav.Link onClick={linkClick}>Footer</DxcSidenav.Link>
        </DxcSidenav>
    );
}`;

const scope = {
  DxcSidenav,
  useState,
};

export default { code, scope };

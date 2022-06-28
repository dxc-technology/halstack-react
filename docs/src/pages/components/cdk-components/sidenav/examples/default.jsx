import { DxcSidenav } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcSidenav>
      <DxcSidenav.Section>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </DxcSidenav.Section>
    </DxcSidenav>
  );
}`;

const scope = {
  DxcSidenav,
  useState,
};

export default { code, scope };

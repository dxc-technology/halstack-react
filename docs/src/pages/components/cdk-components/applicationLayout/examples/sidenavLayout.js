import { DxcAlert } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <iframe
      src="https://codesandbox.io/embed/with-sidenav-clkbs?fontsize=14&hidenavigation=1&theme=dark"
      style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title="With sidenav"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}`;

const scope = {
  DxcAlert,
  useState,
};

export default { code, scope };

import { DxcLink } from "@dxc-technology/halstack-react";
import { Link as RouterLink } from "react-router-dom";

const code = `() => {
  return (
    <p>
        This is a text with a 
        <DxcLink>
          <RouterLink to="/components/button">React Router</RouterLink>
        </DxcLink> link.
    </p>
  );
}`;

const scope = {
  DxcLink,
  RouterLink
};

export default { code, scope };

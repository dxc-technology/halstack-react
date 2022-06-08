import { DxcLink } from "@dxc-technology/halstack-react";
import { Link as RouterLink } from "react-router-dom";

const code = `() => {
  return (
    <p>
        This is a text with a 
        <RouterLink to="/components/button" component={DxcLink}>React Router v5</RouterLink>
        {" "}link.
    </p>
  );
}`;

const scope = {
  DxcLink,
  RouterLink,
};

export default { code, scope };

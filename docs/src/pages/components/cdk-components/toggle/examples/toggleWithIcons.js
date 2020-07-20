import { DxcToggle } from "@diaas/dxc-react-cdk";
import { useState } from "react";

import favoriteIcon from "./images/favorite.svg";
import visibilityIcon from "./images/visibility.svg";

const code = `() => {
  const [selected, changeSelected] = useState(false);
  const onClick = newValue => {
    changeSelected(newValue);
  };

  const [selected2, changeSelected2] = useState(false);
  const onClick2 = newValue => {
    changeSelected2(newValue);
  };

  return (
    <div style={{ display: "flex" }}>
      <DxcToggle
        iconSrc={favoriteIcon}
        selected={selected}
        onClick={onClick}
        margin="medium"
      ></DxcToggle>
      <DxcToggle
        iconSrc={visibilityIcon}
        selected={selected2}
        onClick={onClick2}
        margin="medium"
      ></DxcToggle>
    </div>
  );
}`;

const scope = {
  DxcToggle,
  useState,
  favoriteIcon,
  visibilityIcon
};

export default { code, scope };

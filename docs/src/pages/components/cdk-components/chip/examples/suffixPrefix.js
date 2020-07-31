import { DxcChip } from "@dxc-technology/halstack-react";
import avatarIcon from "./images/avatar.svg";
import deleteIcon from "./images/delete.svg";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DxcChip
        label="Chip with prefix"
        prefixIconSrc={deleteIcon}
        margin="small"
        onClickPrefix={onClick}
      />
      <DxcChip label="Chip with suffix" suffixIconSrc={avatarIcon} />
      <DxcChip
        label="Chip with both"
        suffixIconSrc={avatarIcon}
        prefixIconSrc={deleteIcon}
        margin="small"
        onClickSuffix={onClick}
        onClickPrefix={onClick}
      />
      <DxcChip
        suffixIconSrc={avatarIcon}
        margin="small"
        onClickSuffix={onClick}
      />
    </div>
  );
}`;

const scope = {
  DxcChip,
  avatarIcon,
  deleteIcon,
};

export default { code, scope };

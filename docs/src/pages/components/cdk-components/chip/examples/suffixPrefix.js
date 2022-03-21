import { DxcChip } from "@dxc-technology/halstack-react";
import avatarIcon from "./images/avatar.svg";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DxcChip
        label="Chip with prefix"
        prefixIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        }
        margin="small"
        onClickPrefix={onClick}
      />
      <DxcChip label="Chip with suffix" suffixIcon={avatarIcon} />
      <DxcChip
        label="Chip with both"
        suffixIcon={avatarIcon}
        prefixIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        }
        margin="small"
        onClickSuffix={onClick}
        onClickPrefix={onClick}
      />
      <DxcChip suffixIcon={avatarIcon} margin="small" onClickSuffix={onClick} />
    </div>
  );
}`;

const scope = {
  DxcChip,
  avatarIcon,
};

export default { code, scope };

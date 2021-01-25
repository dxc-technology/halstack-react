import { DxcToggleGroup } from "@dxc-technology/halstack-react";

import linkedinLogoPath from "./images/linkedin.svg";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };
  const favoriteSVG = () => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  };
  const optionsWithIcons = [
    {
      value: 1,
      icon: favoriteSVG
    },
    {
      value: 2,
      icon: (
        <svg
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24"
          fill="currentColor"
        >
          <g id="Bounding_Box">
            <rect fill="none" width="24" height="24" />
          </g>
          <g id="Master">
            <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
          </g>
        </svg>
      )
    },
    {
      value: 3,
      icon: <img src={linkedinLogoPath} />
    }
  ];

  return (
    <DxcToggleGroup
      options={optionsWithIcons}
      onChange={onChange}
      margin="medium"
    ></DxcToggleGroup>
  );
}`;

const scope = {
  DxcToggleGroup,
  linkedinLogoPath,
};

export default { code, scope };

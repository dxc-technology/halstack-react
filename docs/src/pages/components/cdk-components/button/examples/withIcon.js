import { DxcButton } from "@dxc-technology/halstack-react";
import twitterIcon from "./images/twitter.svg";

const code = `() => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div>
      <DxcButton
        label="Primary Button"
        onClick={onClick}
        icon={
          <svg
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                enableBackground="new 0 0 24 24"
                fill="currentColor"
              >
                <g id="Bounding_Box">
                  <rect fill="none" width="24" height="24" />
                </g>
                <g id="Master">
                  <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
              </g>
          </svg>
        }
        margin="medium"
      />
      <DxcButton
        label="Primary Button"
        onClick={onClick}
        icon={twitterIcon}
        iconPosition="after"
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcButton,
  twitterIcon,
};

export default { code, scope };

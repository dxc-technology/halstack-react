import { DxcButton, DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import twitterIcon from "./images/twitter.svg";

const code = `() => {
    return (
        <DxcInset space="large">
            <DxcStack gutter="large" align="center">
                <DxcButton
                    label="Primary Button"
                    onClick={()=>{}}
                    icon={
                        <svg
                            x="0px"
                            y="0px"
                            width="24px"
                            height="24px"
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
                    }
                />
            </DxcStack>
        </DxcInset>
    );
  }`;

  const scope = {
    DxcButton,
    twitterIcon,
    DxcStack,
    DxcInset,
  };
  
  export default { code, scope };
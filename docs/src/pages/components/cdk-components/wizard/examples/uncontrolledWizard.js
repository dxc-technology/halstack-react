import { DxcWizard } from "@dxc-technology/halstack-react";
import twitterLogoPath from "./images/twitter.svg";

const code = `() => {
    const onStepClick = i => {
        console.log(i);
    };

    return (
        <DxcWizard
          onStepClick={onStepClick}
          steps={[
              {
                  label: "First step",
                  iconSrc: twitterLogoPath
              },
              {
                  label: "Second step",
                  iconSrc: twitterLogoPath
              },
              {
                  label: "Third step",
                  iconSrc: twitterLogoPath
              },
              {
                  label: "Forth step",
                  iconSrc: twitterLogoPath,
                  disabled: false
              }
          ]}
        ></DxcWizard>
    );
}`;

const scope = {
    DxcWizard,
    twitterLogoPath
  };
  
  export default { code, scope };
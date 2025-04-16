import { DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex gap="var(--spacing-gap-l)">
        <DxcButton icon="cloud_upload" label="Upload" />
        <DxcButton icon="filled_delete" mode="secondary" label="Delete" />
        <DxcButton
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19.2211 5.08325C15.4006 1.09483 9.07054 0.957626 5.08282 4.77818C1.09433 8.59937 0.957865 14.9292 4.77918 18.9182C8.59897 22.9066 14.9298 23.0408 18.9175 19.2211C22.9067 15.4006 23.0408 9.0715 19.2219 5.08235L19.2211 5.08325ZM18.1891 15.6316C17.3879 17.0377 18.1416 17.9922 18.5234 18.5274C18.5227 18.5274 18.5211 18.5258 18.5196 18.5251L18.4905 18.4959L18.5142 18.5312C18.5149 18.5323 18.5157 18.5333 18.5165 18.5343C17.9775 18.1494 17.0665 17.4264 15.5922 18.2115C12.8459 19.8015 9.27221 19.4221 6.92446 17.0715C4.12518 14.2685 4.12671 9.72574 6.9283 6.92576C9.73364 4.12484 14.275 4.12718 17.0743 6.92949C19.4335 9.29013 19.8031 12.8837 18.1891 15.6316Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.446 8.5893C12.524 8.58931 13.558 9.01757 14.3203 9.77988C15.0826 10.5422 15.5108 11.5761 15.5108 12.6542V16.719H13.7447V12.6542C13.7447 12.1994 13.6099 11.7548 13.3572 11.3766C13.1045 10.9985 12.7454 10.7037 12.3252 10.5297C11.905 10.3556 11.4427 10.3101 10.9966 10.3988C10.5505 10.4876 10.1408 10.7066 9.81922 11.0282C9.49763 11.3497 9.27862 11.7595 9.18989 12.2055C9.10116 12.6516 9.1467 13.114 9.32075 13.5341C9.49479 13.9543 9.78953 14.3135 10.1677 14.5661C10.5458 14.8188 10.9904 14.9537 11.4452 14.9537H12.9593V16.719H11.4452C10.3672 16.719 9.33324 16.2907 8.57093 15.5284C7.80862 14.7661 7.38036 13.7322 7.38036 12.6542C7.38036 11.5761 7.80862 10.5422 8.57093 9.77987C9.33324 9.01756 10.3672 8.5893 11.4452 8.5893H11.446Z" fill="currentColor"/>
              <path d="M14.3288 8.34203L13.0948 7.82563L14.3288 7.30896L14.8451 6.07509L15.3618 7.30903L16.5958 7.82569L15.3619 8.34203L14.8452 9.57607L14.3288 8.34203Z" fill="currentColor"/>
            </svg>
          }
          mode="secondary"
          title="Assure answers"
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcFlex,
  DxcInset,
};

export default { code, scope };

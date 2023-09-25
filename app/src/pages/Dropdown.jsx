import React from "react";
import { DxcDropdown, HalstackProvider } from "@dxc-technology/halstack-react";

const colors = {
  dropdown: {
    baseColor: "#666666",
    fontColor: "#FABADA",
  },
};

const facebookSVG = (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
      C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
      h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
      C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
      c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
      c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
      />
    </g>
  </svg>
);

const linkedinSVG = (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
   C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
   h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
   C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
   c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
   c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
   c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
   c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
   c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
   c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
   H370.873z"
      />
    </g>
  </svg>
);

const XSVG = (
  <svg
    width="256"
    height="256"
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="40" fill="white" />
    <path
      d="M140.192 118.205L187.848 64H176.556L135.158 111.056L102.117 64H64L113.975 135.163L64 192H75.2914L118.982 142.296L153.883 192H192L140.192 118.205ZM124.722 135.787L119.65 128.697L79.3634 72.3294H96.7094L129.232 117.837L134.282 124.927L176.551 184.076H159.205L124.722 135.787Z"
      fill="#0F1419"
    />
  </svg>
);

const more_hor = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

function App() {
  const selectOption = () => {
    console.log("selected");
  };
  const optionsWithoutIcon = [
    {
      value: "1",
      label: "Facebook",
    },
    {
      value: "2",
      label: "X",
    },
    {
      value: "3",
      label: "Linkedin",
    },
  ];
  const optionsWithIcon = [
    {
      value: "1",
      label: "Facebook",
      icon: <p>This is a test</p>,
    },
    {
      value: "2",
      label: "Linkedin",
      icon: linkedinSVG,
    },
    {
      value: "3",
      label: "X",
      icon: XSVG,
    },
  ];

  return (
    <div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <DxcDropdown
            label="Small"
            size="small"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="medium-size">
          <DxcDropdown
            label="Medium"
            size="medium"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="large-size">
          <DxcDropdown
            label="Large"
            size="large"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="fitContent-size">
          <DxcDropdown
            label="Fit Content"
            size="fitContent"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="fillParent-size">
          <DxcDropdown
            label="Fill Parent"
            size="fillParent"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <h4>Margin</h4>
        <div className="test-case" id="xxsmall-margin">
          <DxcDropdown
            label="xxSmall margin"
            margin="xxsmall"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcDropdown
            label="xSmall margin"
            margin="xsmall"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="small-margin">
          <DxcDropdown
            label="Small margin"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="medium-margin">
          <DxcDropdown
            label="Medium margin"
            margin="medium"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="large-margin">
          <DxcDropdown
            label="Large margin"
            margin="large"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcDropdown
            label="xLarge margin"
            margin="xlarge"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="xxlarge-margin">
          <DxcDropdown
            label="xxLarge margin"
            margin="xxlarge"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="mode-basic">
          <h4>Basic dropdown and label sizes</h4>
          <DxcDropdown
            label="Basic dropdown"
            mode="basic"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="small-dropdown-max-size-label-oneline">
          <DxcDropdown
            label="Maximum label size for"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="small-dropdown-min-size-label-multiline">
          <DxcDropdown
            label="Minimum label size for12"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="with-caret">
          <DxcDropdown
            label="Dropdown with caret"
            margin="small"
            options={optionsWithoutIcon}
          ></DxcDropdown>
        </div>
        <div className="test-case" id="without-caret">
          <DxcDropdown
            label="Dropdown without caret"
            margin="small"
            options={optionsWithoutIcon}
            caretHidden={true}
          ></DxcDropdown>
        </div>
      </div>
      <div style={{ height: "200px", display: "flex", flexWrap: "wrap" }}>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          margin="medium"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithIcon}
          icon={facebookSVG}
          onSelectOption={selectOption}
          label="Basic ddddddddropdown"
          margin="medium"
        ></DxcDropdown>
      </div>
      <h4>Icon without caret and label</h4>
      <div>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={(option) => console.log(option)}
          caretHidden={true}
          icon={more_hor}
          margin="small"
        ></DxcDropdown>
      </div>
      <h4>Icon & Label</h4>
      <div>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={(option) => console.log(option)}
          caretHidden={true}
          label="Icon & Label"
          icon={more_hor}
          margin="small"
        ></DxcDropdown>
      </div>
      <div>
        <h4>Custom Dropdown</h4>
        <div className="test-case" id="custom-colors">
          <HalstackProvider theme={colors}>
            <DxcDropdown
              label="Custom Dropdown"
              size="large"
              margin="small"
              options={optionsWithoutIcon}
            ></DxcDropdown>
          </HalstackProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

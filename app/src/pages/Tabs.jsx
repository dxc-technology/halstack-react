import React, { useState } from "react";
import {
  DxcTabs,
  DxcButton,
  DxcSwitch,
  HalstackProvider,
  HalstackContext,
} from "@dxc-technology/halstack-react";
import XIcon from "../images/x.svg";

const linkedinSVG = (
  <img
    src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png"
    alt="Linkedin"
  />
);

const colors = {
  tabs: {
    baseColor: "#5c3b92",
  },
  button: {
    color: "#fabada",
  },
};

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (i) => {
    setActiveTab(i);
  };

  const onTabHover = () => {};

  const onClick = () => {};

  const [selected, changeSelected] = useState(true);
  const onClickSwitch = (newValue) => {
    changeSelected(newValue);
  };

  return (
    <div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          onTabHover={onTabHover}
          tabs={[
            {
              label: "Tab 1",
            },
            {
              label: "Tab2",
            },

            {
              label: "Tab 3",
            },
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
          ]}
        />
      </div>
      <div className="test-case" id="underlined-tabs">
        <h4>Underlined tabs</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          onTabHover={onTabHover}
          mode="underlined"
          tabs={[
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
            },
            {
              label: "Tab 3",
            },
          ]}
        />
      </div>
      <div className="test-case" id="icon-tabs">
        <h4>With icon</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              icon: linkedinSVG,
            },
            {
              icon: (
                <svg
                  x="0px"
                  y="0px"
                  width="438.536px"
                  height="438.536px"
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
              ),
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ),
            },
          ]}
        />
      </div>
      <div className="test-case" id="text-icon-left-tabs">
        <h4>With text and icon at the left</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          iconPosition="left"
          tabs={[
            {
              label: "LinkedIn",
              icon: linkedinSVG,
            },
            {
              label: "Facebook",
              icon: (
                <svg
                  x="0px"
                  y="0px"
                  width="438.536px"
                  height="438.536px"
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
              ),
            },
            {
              label: "X",
              icon: <img src={XIcon} alt="X" />,
            },
          ]}
        />
      </div>
      <div className="test-case" id="text-icon-top-tabs">
        <h4>With text and icon at the top</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          iconPosition="top"
          tabs={[
            {
              label: "LinkedIn",
              icon: linkedinSVG,
            },
            {
              label: "Facebook",
              icon: (
                <svg
                  x="0px"
                  y="0px"
                  width="438.536px"
                  height="438.536px"
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
              ),
            },
            {
              label: "X",
              icon: <img src={XIcon} alt="X" />,
            },
          ]}
        />
      </div>
      <div className="test-case" id="disabled-tabs">
        <h4>Disabled tabs</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "Tab 1",
              isDisabled: true,
            },
            {
              label: "Tab 2",
              isDisabled: true,
            },
            {
              label: "Tab 3",
              isDisabled: true,
            },
          ]}
        />
      </div>
      <div>
        <h4>Label max size single line</h4>
        <div className="test-case" id="label-max-size-single-line">
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[
              {
                label: "Example label tab max siz",
              },
              {
                label: "Example label tab max siz",
              },
              {
                label: "Example label tab max siz",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <h4>Label min size multiline</h4>
        <div className="test-case" id="label-min-size-multiline">
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[
              {
                label: "Example label tab min size m",
              },
              {
                label: "Example label tab min size m",
              },
              {
                label: "Example label tab min size m",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <h4>With content</h4>
        <div className="test-case" id="content-tabs">
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
            ]}
          />
          {activeTab === 0 && (
            <div
              style={{ height: "250px", background: "#D9D9D9", margin: "15px" }}
            >
              <HalstackContext.Provider value={colors}>
                <DxcButton
                  mode="primary"
                  label="Button"
                  onClick={onClick}
                  margin="medium"
                />
              </HalstackContext.Provider>
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
            </div>
          )}

          {activeTab === 1 && (
            <div
              style={{ height: "200px", background: "#666666", margin: "15px" }}
            >
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcSwitch
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcSwitch
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcSwitch
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcSwitch
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
              <DxcButton
                mode="primary"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcSwitch
                label="Switch"
                margin="medium"
                selected={selected}
                onClick={onClickSwitch}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            margin="xxsmall"
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
            ]}
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            margin="xsmall"
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
            ]}
          />
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            margin="small"
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
            ]}
          />
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            margin="medium"
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
            ]}
          />
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            margin="large"
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
            ]}
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            margin="xlarge"
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
            ]}
          />
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            margin="xxlarge"
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
            ]}
          />
        </div>
      </div>
      <div className="test-case" id="badgeTabs-only-label">
        <h5>Tabs with badges (Only label)</h5>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "Tab 1",
              notificationNumber: 100,
            },
            {
              label: "Tab 2",
              notificationNumber: 20,
            },
            {
              label: "Tab 3",
              notificationNumber: 30,
            },
          ]}
        />
      </div>
      <div className="test-case" id="badgeTabs-icon-left">
        <h4>Tabs with badges (Icon left)</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          iconPosition="left"
          tabs={[
            {
              label: "LinkedIn",
              icon: linkedinSVG,
              notificationNumber: 10,
            },
            {
              label: "Facebook",
              notificationNumber: 200,
              icon: (
                <svg
                  x="0px"
                  y="0px"
                  width="438.536px"
                  height="438.536px"
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
              ),
            },
            {
              label: "X",
              icon: <img src={XIcon} alt="X" />,
              notificationNumber: 30,
            },
          ]}
        />
      </div>
      <div className="test-case" id="badgeTabs-icon-top">
        <h4>Tabs with badges (Icon Top)</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "LinkedIn",
              icon: linkedinSVG,
              notificationNumber: true,
            },
            {
              label: "Facebook",
              notificationNumber: 10,
              icon: (
                <svg
                  x="0px"
                  y="0px"
                  width="438.536px"
                  height="438.536px"
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
              ),
            },
            {
              label: "X",
              notificationNumber: 20,
              icon: <img src={XIcon} alt="X" />,
            },
          ]}
        />
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Tabs</h4>
        <HalstackProvider theme={colors}>
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[
              {
                label: "Tab 1",
              },
              {
                label: "Tab 2",
              },
              {
                label: "Tab 3",
              },
              {
                label: "Tab 3",
              },
              {
                label: "Tab 3",
              },
            ]}
          />

          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[
              {
                label: "LinkedIn",
                icon: linkedinSVG,
              },
              {
                label: "Facebook",
                icon: (
                  <svg
                    x="0px"
                    y="0px"
                    width="438.536px"
                    height="438.536px"
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
                ),
              },
              {
                label: "X",
                icon: <img src={XIcon} alt="X" />,
              },
            ]}
          />
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            tabs={[
              {
                label: "Tab 1",
                isDisabled: true,
              },
              {
                label: "Tab 2",
                isDisabled: true,
              },
              {
                label: "Tab 3",
                isDisabled: true,
              },
            ]}
          />
        </HalstackProvider>
      </div>
    </div>
  );
}

export default Tabs;

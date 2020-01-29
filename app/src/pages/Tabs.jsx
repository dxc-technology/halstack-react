import React, { useState } from "react";
import { DxcTabs, DxcButton, DxcToggle, DxcSwitch } from "@diaas/dxc-react-cdk";
import facebookIcon from "../images/facebook.svg";
import linkedinIcon from "../images/linkedin.svg";
import twitterIcon from "../images/twitter.svg";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = i => {
    setActiveTab(i);
  };

  const onClick = () => {};

  const [selected, changeSelected] = useState(true);
  const onClickToggle = newValue => {
    changeSelected(newValue);
  };

  const [checked, changeChecked] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <div>
      <div className="test-case" id="light-theme">
        <h4>Light theme</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "Tab 1"
            },
            {
              label: "Tab 2"
            },
            {
              label: "Tab 3"
            }
          ]}
        />
      </div>
      <div>
        <h4>Dark theme</h4>
        <div
          style={{ background: "#000000" }}
          className="test-case"
          id="dark-theme"
        >
          <DxcTabs
            activeTabIndex={activeTab}
            onTabClick={onTabClick}
            theme="dark"
            tabs={[
              {
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
            ]}
          />
        </div>
      </div>
      <div className="test-case" id="underlined-tabs">
        <h4>Underlined tabs</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          mode="underlined"
          tabs={[
            {
              label: "Tab 1"
            },
            {
              label: "Tab 2"
            },
            {
              label: "Tab 3"
            }
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
              iconSrc: linkedinIcon
            },
            {
              iconSrc: facebookIcon
            },
            {
              iconSrc: twitterIcon
            }
          ]}
        />
      </div>
      <div className="test-case" id="text-icon-tabs">
        <h4>With text and icon</h4>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[
            {
              label: "LinkedIn",
              iconSrc: linkedinIcon
            },
            {
              label: "Facebook",
              iconSrc: facebookIcon
            },
            {
              label: "Twitter",
              iconSrc: twitterIcon
            }
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
              isDisabled: true
            },
            {
              label: "Tab 2",
              isDisabled: true
            },
            {
              label: "Tab 3",
              isDisabled: true
            }
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
                label: "Example label tab max siz"
              },
              {
                label: "Example label tab max siz"
              },
              {
                label: "Example label tab max siz"
              }
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
                label: "Example label tab min size m"
              },
              {
                label: "Example label tab min size m"
              },
              {
                label: "Example label tab min size m"
              }
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              }
            ]}
          />
          {activeTab === 0 && (
            <div
              style={{ height: "200px", background: "#666666", margin: "15px" }}
            >
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                theme="dark"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
            </div>
          )}

          {activeTab === 1 && (
            <div
              style={{ height: "200px", background: "#666666", margin: "15px" }}
            >
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                theme="dark"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
              />
              <DxcButton
                mode="basic"
                theme="light"
                label="Button"
                onClick={onClick}
                margin="medium"
              />
              <DxcToggle
                label="Toggle"
                margin="medium"
                selected={selected}
                onClick={onClickToggle}
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
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
                label: "Tab 1"
              },
              {
                label: "Tab 2"
              },
              {
                label: "Tab 3"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Tabs;

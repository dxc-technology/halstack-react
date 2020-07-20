import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useScrollSpy from "react-use-scrollspy";

import DxcTabs from "../tabs/Tabs";

const TABS_HEIGHT = 54;

const DxcTabsForSections = ({ tabsMode = "filled", tabsTheme = "light", disableTabsRipple = false, sections = [], stickAtPx = 0}) => {
  const tabs = sections.map(section => ({ label: section.tabLabel }));

  const refs = sections.map(() => React.createRef());

  const activeTab = useScrollSpy({
    sectionElementRefs: refs,
    offsetPx: -stickAtPx - TABS_HEIGHT
  });

  const onTabClick = tabId => {
    const topOfElement = refs[tabId].current.offsetTop - stickAtPx - TABS_HEIGHT + 5;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <StyledTabs stickAtPx={stickAtPx}>
        <DxcTabs
          mode={tabsMode}
          brightness={tabsTheme}
          disableRipple={disableTabsRipple}
          tabs={tabs}
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
        ></DxcTabs>
      </StyledTabs>
      {sections.map((section, i) => (
        <div key={`section${i}`} ref={refs[i]}>
          <section.section></section.section>
        </div>
      ))}
    </React.Fragment>
  );
};

DxcTabsForSections.propTypes = {
  tabsMode: DxcTabs.propTypes.mode,
  tabsTheme: DxcTabs.propTypes.theme,
  disableTabsRipple: DxcTabs.propTypes.disableRipple,
  stickAtPx: PropTypes.number,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      tabLabel: PropTypes.string,
      section: PropTypes.func
    })
  )
};

DxcTabsForSections.defaultProps = {
  tabsMode: DxcTabs.defaultProps.mode,
  tabsTheme: DxcTabs.defaultProps.theme,
  disableTabsRipple: DxcTabs.defaultProps.disableRipple,
  stickAtPx: 0,
  sections: []
};

const StyledTabs = styled.div`
  z-index: 10;
  ${({ stickAtPx }) =>
    stickAtPx &&
    `
    position: sticky;
    top: ${stickAtPx}px;
  `}
`;
export default DxcTabsForSections;

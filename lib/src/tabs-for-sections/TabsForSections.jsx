import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useScrollSpy from "react-use-scrollspy";

import DxcTabs from "../tabs/Tabs";

const DxcTabsForSections = ({ tabsMode, tabsTheme, disableTabsRipple, sections }) => {
  const tabs = [{ label: "tab 1" }, { label: "tab 2" }, { label: "tab 3" }];
  //const refs = [useRef(null), useRef(null), useRef(null)];
  const refs = sections.map(() => useRef(null));

  const activeTab = useScrollSpy({
    sectionElementRefs: refs
  });

  const onTabClick = tabId =>
    refs[tabId].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  return (
    <React.Fragment>
      <StyledTabs>
        <DxcTabs
          mode={tabsMode}
          theme={tabsTheme}
          disableRipple={disableTabsRipple}
          tabs={tabs}
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
        ></DxcTabs>
      </StyledTabs>
      {sections.map((section, i) => (
        <div ref={refs[i]}>
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
  sections: []
};

const StyledTabs = styled.div`
  position: sticky;
  top: 0px;
`;
export default DxcTabsForSections;

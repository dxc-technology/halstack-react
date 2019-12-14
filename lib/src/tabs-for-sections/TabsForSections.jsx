import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DxcTabs from "../tabs/Tabs";

const DxcTabsForSections = ({ tabsMode, tabsTheme, disableTabsRipple, sections }) => {
  const tabs = sections.map(section => ({ label: section.tabLabel }));
  const refs = sections.map(() => useRef(null));

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
          onTabClick={onTabClick}
          tabs={tabs}
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
  top: 60px;
`;
export default DxcTabsForSections;

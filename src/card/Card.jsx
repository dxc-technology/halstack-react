/* eslint-disable no-else-return */
import React from "react";
import { Card } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../common/OpenSans.css";
import colors from "../common/variables.js";

const DxcCard = ({ children, imagePosition = "before", imageSrc = "", mode = "default", theme = "light", onClick }) => {
  return (
    <DxcCardContainer imagePosition={imagePosition} imageSrc={imageSrc} mode={mode} theme={theme} onClick={() => onClick()}>
      <Card>
        <ImageContainer imagePosition={imagePosition}>
          {imageSrc !== "" && <LogoIcon imageSrc={imageSrc} src={imageSrc} imagePosition={imagePosition} />}
        </ImageContainer>
        {children && <ChildComponent imagePosition={imagePosition}>{children}</ChildComponent>}
      </Card>
    </DxcCardContainer>
  );
};

const DxcCardContainer = styled.span`
  & {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
  }
  .MuiCard-root {
    cursor: pointer;
    margin: 20px;
    display: inline-flex;
    align-items: ${props =>
      props.imagePosition === "before"
        ? "stretch"
        : props.imagePosition === "after"
        ? "stretch"
        : props.imagePosition === "above"
        ? "center"
        : props.imagePosition === "below"
        ? "center"
        : "center"
    };
    flex-direction: ${props =>
      props.imagePosition === "before"
        ? "row"
        : props.imagePosition === "after"
        ? "row-reverse"
        : props.imagePosition === "above"
        ? "column"
        : props.imagePosition === "below"
        ? "column-reverse"
        : "row"};
  }
  .MuiPaper-root {
    color: ${props => {
      if (props.theme === "light" && props.mode === "default") {
        return colors.black;
      } else if (props.theme === "light" && props.mode === "alternative") {
        return colors.white;
      } else if (props.theme === "dark" && props.mode === "default") {
        return colors.white;
      } else if (props.theme === "dark" && props.mode === "alternative") {
        return colors.white;
      }
    }};
    max-width: ${props => {
      if (props.theme === "dark" && props.mode === "alternative") {
        return "396px";
      } else {
        return "400px"
      }
    }};
    max-height: ${props => {
      if (props.theme === "dark" && props.mode === "alternative") {
        return "370px";
      } else {
        return "374px";
      }
    }};
    background-color: ${props => {
      if (props.theme === "light" && props.mode === "default") {
        return colors.white;
      } else if (props.theme === "light" && props.mode === "alternative") {
        return colors.black;
      } else if (props.theme === "dark" && props.mode === "default") {
        return colors.lightBlack;
      } else if (props.theme === "dark" && props.mode === "alternative") {
        return colors.black;
      }
    }};

    border: ${props => {
      if (props.theme === "dark" && props.mode === "alternative") {
        return `solid ${colors.white} 2px`;
      }
    }};
  }
  .MuiPaper-root:hover {
    border: ${props => {
      if (props.theme === "dark" && props.mode === "alternative") {
        return `solid ${colors.yellow} 2px`;
      }
    }};
  }

  .MuiPaper-elevation1 {
    box-shadow: ${props => {
      if (props.theme === "dark" && props.mode === "default") {
        return `0px 3px 6px ${colors.lightGrey}29`;
      } else if (props.theme === "dark" && props.mode === "alternative") {
        return `0px 3px 6px ${colors.white}16`;
      } else if (props.theme === "light" && props.mode === "default") {
        return `0px 3px 6px ${colors.black}29`;
      } else if (props.theme === "light" && props.mode === "alternative") {
        return `0px 3px 6px ${colors.black}40`;
      }
    }};
  }
  .MuiPaper-elevation1:hover {
    box-shadow: ${props => {
      if (props.theme === "dark" && props.mode === "default") {
        return `0px 3px 6px ${colors.white}29`;
      } else if (props.theme === "dark" && props.mode === "alternative") {
        return `0px 3px 6px ${colors.white}29`;
      } else if (props.theme === "light" && props.mode === "default") {
        return `0px 3px 6px ${colors.black}66`;
      } else if (props.theme === "light" && props.mode === "alternative") {
        return `0px 3px 6px ${colors.black}66`;
      }
    }};
  }
`;

const LogoIcon = styled.img`
  object-fit: contain;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: inline-flex;
  max-height: ${props => {
    if(props.imagePosition === "below" || props.imagePosition === "above") {
      return "120px";
    }
  }};
  max-width: ${props => {
    if(props.imagePosition === "after" || props.imagePosition === "before") {
      return "140px";
    }
  }};
`;

const ChildComponent = styled.div`
  padding: 20px;
  width: ${props => {
    if(props.imagePosition === "below" || props.imagePosition === "above") {
      return "calc(100% - 40px)";
    } else if(props.imagePosition === "after" || props.imagePosition === "before") {
      return "calc(100% - 140px - 40px)";
    }
  }};
  overflow: hidden;
  height: calc(100% - 120px - 40px);
`;

DxcCard.propTypes = {
  theme: PropTypes.oneOf(["light", "dark", ""]),
  imagePosition: PropTypes.oneOf(["after", "before", "below", "above", ""]),
  mode: PropTypes.oneOf(["default", "alternative", ""]),
  imageSrc: PropTypes.string,
  onClick: PropTypes.func
};

export default DxcCard;

/* eslint-disable no-else-return */
import React from "react";
import { Card } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../common/OpenSans.css";
import {colors} from "../common/variables.js";

const DxcCard = ({ children, imagePosition = "before", imageSrc = "", mode = "default", theme = "light", onClick }) => {
  return (
    <DxcCardContainer
      child={children}
      imagePosition={imagePosition}
      imageSrc={imageSrc}
      mode={mode}
      theme={theme}
      onClick={() => onClick()}
    >
      <Card>
        {imageSrc !== "" && <ImageContainer child={children} imagePosition={imagePosition}>
          <Image child={children} imageSrc={imageSrc} src={imageSrc} imagePosition={imagePosition} />
        </ImageContainer> }
        {children && <ChildComponent imageSrc={imageSrc} imagePosition={imagePosition}>{children}</ChildComponent>}
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
      props.imagePosition === "before" || props.imagePosition === "after"
        ? "stretch"
        : props.imagePosition === "above" || props.imagePosition === "below"
        ? "center"
        : "center"};
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
    color: ${props => (props.theme === "dark" ? colors.white : props.mode === "default" ? colors.black : colors.white)};

    max-width: ${props => {
      if (props.theme === "dark" && props.mode === "alternative") {
        return "396px";
      } else {
        return "400px";
      }
    }};
    max-height: ${props => {
      if (props.theme === "dark" && props.mode === "alternative") {
        return "370px";
      } else {
        return "374px";
      }
    }};
    background-color: ${props =>
      props.mode === "alternative" ? colors.black : props.theme === "dark" ? colors.lightBlack : colors.white};

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
        return `0px 3px 6px ${colors.white}50`;
      } else if (props.theme === "dark" && props.mode === "alternative") {
        return `0px 3px 6px ${colors.white}29`;
      } else if (props.theme === "light" && props.mode === "default") {
        return `0px 3px 6px ${colors.black}66`;
      } else if (props.theme === "light" && props.mode === "alternative") {
        return `0px 3px 6px ${colors.black}80`;
      }
    }};
  }
`;

const Image = styled.img`
  object-fit: ${props => {
    if (props.child) {
      return "contain";
    }
    return "cover";
  }};
  width: 100%;
`;

const ImageContainer = styled.div`
  display: inline-flex;
  max-height: ${props => {
    if (props.child && (props.imagePosition === "below" || props.imagePosition === "above")) {
      return "120px";
    }
  }};
  max-width: ${props => {
    if (props.child && (props.imagePosition === "after" || props.imagePosition === "before")) {
      return "140px";
    }
  }};
`;

const ChildComponent = styled.div`
  padding: 20px;
  width: ${props => {
    if (props.imageSrc !== "" && (props.imagePosition === "below" || props.imagePosition === "above")) {
      return "calc(100% - 40px)";
    } else if (props.imageSrc !== "" && (props.imagePosition === "after" || props.imagePosition === "before")) {
      return "calc(100% - 140px - 40px)";
    }
  }};
  overflow: hidden;
  height: ${props => ( props.imageSrc !== "" ? "calc(100% - 120px - 40px)" : "")};
`;

DxcCard.propTypes = {
  theme: PropTypes.oneOf(["light", "dark", ""]),
  imagePosition: PropTypes.oneOf(["after", "before", "below", "above", ""]),
  mode: PropTypes.oneOf(["default", "alternative", ""]),
  imageSrc: PropTypes.string,
  onClick: PropTypes.func
};

export default DxcCard;

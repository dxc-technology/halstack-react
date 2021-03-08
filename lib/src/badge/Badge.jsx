import React from "react";
import styled from "styled-components";
import "../common/OpenSans.css";

const DxcBadge = ({ notificationText }) => {
  return (
    <StyledDxcBadge notificationText={notificationText}>
      <span>{notificationText}</span>
    </StyledDxcBadge>
  );
};

const StyledDxcBadge = styled.div`
  background-color: #d0011b;
  border-radius: 10px;
  width: ${(props) => (props.notificationText === true ? "16px" : "23px")};
  height: ${(props) => (props.notificationText === true ? "16px" : "17px")};
  display: flex;
  padding-bottom: 1px;
  padding-right: 1px;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  font-size: 10px;
`;

export default DxcBadge;

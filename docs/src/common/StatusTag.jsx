import React from "react";
import styled from "styled-components";

const StatusTag = ({ status }) => {
  return <StatusTagContainer status={status}>{status}</StatusTagContainer>;
};

const StatusTagContainer = styled.div`
  box-sizing: border-box;
  height: 24px;
  border: 1px solid
    ${(props) =>
      props.status === "Ready"
        ? "#24A148"
        : props.status === "Deprecated"
        ? "#C59F07"
        : props.status === "Experimental"
        ? "#5F249F"
        : ""};
  border-radius: 0.5rem;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(props) =>
    props.status === "Ready"
      ? "#135325"
      : props.status === "Deprecated"
      ? "#624F04"
      : props.status === "Experimental"
      ? "#321353"
      : ""};
  background-color: ${(props) =>
    props.status === "Ready"
      ? "#F7FDF9"
      : props.status === "Deprecated"
      ? "#FFFDF5"
      : props.status === "Experimental"
      ? "#FAF7FD"
      : ""}; ;
`;

export default StatusTag;

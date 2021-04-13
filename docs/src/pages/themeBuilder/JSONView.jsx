import React from "react";
import ReactJson from "react-json-view";
import styled from "styled-components";

const JSONView = ({ customTheme, onEdit }) => {
  return (
    <JSONViewContainer>
      <ReactJson
        src={customTheme}
        onEdit={({ updated_src }) => {
          onEdit(updated_src);
        }}
        displayObjectSize={false}
        displayDataTypes={false}
        name={false}
      />
    </JSONViewContainer>
  );
};

const JSONViewContainer = styled.div`
  height: calc(100vh - 64px);
  padding: 5px;
  width: 30%;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 26px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #666666;
    border-radius: 26px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default JSONView;

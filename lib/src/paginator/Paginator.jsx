import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DxcButton } from "@diaas/dxc-react-cdk";
import first from "./images/previousPage.svg";
import previous from "./images/previous.svg";
import next from "./images/next.svg";
import last from "./images/nextPage.svg";
import "../common/OpenSans.css";

const DxcPaginator = ({
  currentPage = 1,
  itemsPerPage = 5,
  totalItems = 1,
  nextFunction,
  prevFunction,
  lastFunction,
  firstFunction
}) => {
  const totalPages = Math.round(totalItems / itemsPerPage);
  const currentPageInternal = currentPage === -1 ? totalPages : currentPage;
  const minItemsPerPage =
    currentPageInternal === 1 ? currentPageInternal : (currentPageInternal - 1) * itemsPerPage + 1;
  const maxItemsPerPage =
    minItemsPerPage - 1 + itemsPerPage > totalItems ? totalItems : minItemsPerPage - 1 + itemsPerPage;

  return (
    <DxcPaginatorContainer disabled={currentPageInternal === 1}>
      <LabelsContainer>
        {/* <ItemsPageContainer>
          <ItemsLabel>Items per page: </ItemsLabel>
          {itemsPerPage}
        </ItemsPageContainer> */}
        <TotalItemsContainer>
          {minItemsPerPage} to {maxItemsPerPage} of {totalItems}
        </TotalItemsContainer>
        {firstFunction && (
          <DxcButton
            size="small"
            disabled={currentPageInternal === 1}
            mode="flat"
            margin={{ left: "xxsmall", right: "xxsmall" }}
            iconSrc={first}
            onClick={() => {
              if (firstFunction) {
                firstFunction();
              }
            }}
          />
        )}
        {prevFunction && (
          <DxcButton
            size="small"
            mode="flat"
            disabled={currentPageInternal === 1}
            margin={{ left: "xxsmall", right: "xxsmall" }}
            iconSrc={previous}
            onClick={() => {
              if (prevFunction) {
                prevFunction();
              }
            }}
          />
        )}
        <TextContainer>
          Page: {currentPageInternal} of {totalPages}
        </TextContainer>
        {nextFunction && (
          <DxcButton
            size="small"
            mode="flat"
            disabled={currentPageInternal === totalPages}
            margin={{ left: "xxsmall", right: "xxsmall" }}
            iconSrc={next}
            onClick={() => {
              if (nextFunction) {
                nextFunction();
              }
            }}
          />
        )}
        {lastFunction && (
          <DxcButton
            size="small"
            mode="flat"
            disabled={currentPageInternal === totalPages}
            margin={{ left: "xxsmall", right: "xxsmall" }}
            iconSrc={last}
            onClick={() => {
              if (lastFunction) {
                lastFunction(totalPages);
              }
            }}
          />
        )}
      </LabelsContainer>
    </DxcPaginatorContainer>
  );
};
const DxcPaginatorContainer = styled.div`
  display: flex;
  height: 64px;
  background-color: #eeeeee;
  button {
    &:disabled {
      background-color: transparent !important;
      opacity: 0.3 !important;
    }
  }
`;
// const ItemsPageContainer = styled.span`
//   margin-right: 30px;
// `;
// const ItemsLabel = styled.span`
//   margin-right: 15px;
// `;
const TotalItemsContainer = styled.span`
  margin-right: 30px;
`;

const LabelsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0 40px 0 20px;
  font-size: 14px;
`;
const TextContainer = styled.span``;

DxcPaginator.propTypes = {
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  nextFunction: PropTypes.func,
  prevFunction: PropTypes.func,
  lastFunction: PropTypes.func,
  firstFunction: PropTypes.func
};
DxcPaginator.defaultProps = {
  currentPage: 1,
  itemsPerPage: 5,
  nextFunction: null,
  prevFunction: null,
  lastFunction: null,
  firstFunction: null
};

export default DxcPaginator;

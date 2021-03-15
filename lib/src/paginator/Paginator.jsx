import React, { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, componentTokens } from "../common/variables.js";
import useTheme from "../useTheme.js";
import { getCustomTheme } from "../common/utils.js";
import PropTypes from "prop-types";
import DxcButton from "../button/Button";
import DxcSelect from "../select/Select";
import first from "./images/previousPage.svg";
import previous from "./images/previous.svg";
import next from "./images/next.svg";
import last from "./images/nextPage.svg";
import "../common/OpenSans.css";

const DxcPaginator = ({
  currentPage = 1,
  itemsPerPage = 5,
  itemsPerPageOptions,
  totalItems = 1,
  showGoToPage,
  onPageChange,
  itemsPerPageFunction,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPageInternal = currentPage === -1 ? totalPages : currentPage;
  const minItemsPerPage =
    currentPageInternal === 1 || currentPageInternal === 0
      ? currentPageInternal
      : (currentPageInternal - 1) * itemsPerPage + 1;
  const maxItemsPerPage =
    minItemsPerPage - 1 + itemsPerPage > totalItems ? totalItems : minItemsPerPage - 1 + itemsPerPage;

const colorsTheme = useTheme();
  return (
    <ThemeProvider theme={colorsTheme.paginator}>
      <DxcPaginatorContainer disabled={currentPageInternal === 1}>
        <LabelsContainer>
          {itemsPerPageOptions && (
            <ItemsPageContainer>
              <ItemsLabel>Items per page </ItemsLabel>
              <DxcSelect
                options={itemsPerPageOptions.map((num) => ({ label: num, value: num }))}
                onChange={itemsPerPageFunction}
                value={itemsPerPage}
                size="small"
              ></DxcSelect>
            </ItemsPageContainer>
          )}
          <TotalItemsContainer>
            {minItemsPerPage} to {maxItemsPerPage} of {totalItems}
          </TotalItemsContainer>
          {onPageChange && (
            <DxcButton
              size="small"
              mode="secondary"
              disabled={currentPageInternal === 1 || currentPageInternal === 0}
              margin={{ left: "xxsmall", right: "xxsmall" }}
              iconSrc={first}
              onClick={() => {
                onPageChange(1);
              }}
            />
          )}
          {onPageChange && (
            <DxcButton
              size="small"
              mode="secondary"
              disabled={currentPageInternal === 1 || currentPageInternal === 0}
              margin={{ left: "xxsmall", right: "xxsmall" }}
              iconSrc={previous}
              onClick={() => {
                onPageChange(currentPage - 1);
              }}
            />
          )}
          {(showGoToPage && (
            <PageToSelectContainer>
              <GoToLabel>Go to page: </GoToLabel>
              <DxcSelect
                options={[...Array(totalPages).keys()].map((num) => ({ label: num + 1, value: num + 1 }))}
                onChange={onPageChange}
                value={currentPage}
                size="small"
              ></DxcSelect>
            </PageToSelectContainer>
          )) || (
            <TextContainer>
              Page: {currentPageInternal} of {totalPages}
            </TextContainer>
          )}
          {onPageChange && (
            <DxcButton
              size="small"
              mode="secondary"
              disabled={currentPageInternal === totalPages}
              margin={{ left: "xxsmall", right: "xxsmall" }}
              iconSrc={next}
              onClick={() => {
                onPageChange(currentPage + 1);
              }}
            />
          )}
          {onPageChange && (
            <DxcButton
              size="small"
              mode="secondary"
              disabled={currentPageInternal === totalPages}
              margin={{ left: "xxsmall", right: "xxsmall" }}
              iconSrc={last}
              onClick={() => {
                onPageChange(totalPages);
              }}
            />
          )}
        </LabelsContainer>
      </DxcPaginatorContainer>
    </ThemeProvider>
  );
};
const DxcPaginatorContainer = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  background-color: ${(props) => props.theme.paginatorBackgroundColor};
  color: ${(props) => props.theme.paginatorFontColor};
  button {
    &:disabled {
      background-color: transparent !important;
      opacity: 0.3 !important;
    }
  }
`;
const ItemsPageContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
  label {
    height: 0px;
  }

  label + .MuiInput-formControl {
    margin-top: 0px;
  }
`;
const ItemsLabel = styled.span`
  margin-right: 15px;
`;
const GoToLabel = styled.span`
  margin-right: 10px;
  margin-left: 10px;
`;
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
const PageToSelectContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
  label {
    height: 0px;
  }

  label + .MuiInput-formControl {
    margin-top: 0px;
  }
`;
const TextContainer = styled.span``;

DxcPaginator.propTypes = {
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  totalItems: PropTypes.number.isRequired,
  showGoToPage: PropTypes.bool,
  onPageChange: PropTypes.func,
  itemsPerPageFunction: PropTypes.func,
};
DxcPaginator.defaultProps = {
  currentPage: 1,
  itemsPerPage: 5,
  itemsPerPageOptions: null,
  showGoToPage: false,
  onPageChange: null,
  itemsPerPageFunction: null,
};

export default DxcPaginator;

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import DxcButton from "../button/Button";
import DxcSelect from "../select/Select";
import { firstIcon, lastIcon, nextIcon, previousIcon } from "./Icons";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import PaginatorPropsType from "./types";

const DxcPaginator = ({
  currentPage = 1,
  itemsPerPage = 5,
  itemsPerPageOptions,
  totalItems = 1,
  showGoToPage,
  onPageChange,
  itemsPerPageFunction,
  tabIndex = 0,
}: PaginatorPropsType): JSX.Element => {
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
      <BackgroundColorProvider color={colorsTheme.paginator.backgroundColor}>
        <DxcPaginatorContainer disabled={currentPageInternal === 1}>
          <LabelsContainer>
            {itemsPerPageOptions && (
              <ItemsPageContainer>
                <ItemsLabel>Items per page </ItemsLabel>
                <SelectContainer>
                  <DxcSelect
                    options={itemsPerPageOptions.map((num) => ({ label: num.toString(), value: num.toString() }))}
                    onChange={(newValue) => {
                      itemsPerPageFunction(Number(newValue.value));
                    }}
                    value={itemsPerPage.toString()}
                    size="fillParent"
                    margin={{ top: "xsmall" }}
                    tabIndex={tabIndex}
                  />
                </SelectContainer>
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
                icon={firstIcon}
                tabIndex={tabIndex}
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
                icon={previousIcon}
                tabIndex={tabIndex}
                onClick={() => {
                  onPageChange(currentPage - 1);
                }}
              />
            )}
            {(showGoToPage && (
              <PageToSelectContainer>
                <GoToLabel>Go to page: </GoToLabel>
                <SelectContainer>
                  <DxcSelect
                    options={Array.from(Array(totalPages), (e, num) => ({
                      label: (num + 1).toString(),
                      value: (num + 1).toString(),
                    }))}
                    onChange={(newValue) => {
                      onPageChange(Number(newValue.value));
                    }}
                    value={currentPage.toString()}
                    size="fillParent"
                    margin={{ top: "xsmall" }}
                    tabIndex={tabIndex}
                  />
                </SelectContainer>
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
                icon={nextIcon}
                tabIndex={tabIndex}
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
                icon={lastIcon}
                tabIndex={tabIndex}
                onClick={() => {
                  onPageChange(totalPages);
                }}
              />
            )}
          </LabelsContainer>
        </DxcPaginatorContainer>
      </BackgroundColorProvider>
    </ThemeProvider>
  );
};

const DxcPaginatorContainer = styled.div`
  display: flex;
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  text-transform: ${(props) => props.theme.fontTextTransform};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};

  button {
    &:disabled {
      background-color: transparent !important;
      opacity: 0.3 !important;
    }
  }
`;

const SelectContainer = styled.div`
  max-width: 100px;
`;

const ItemsPageContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.theme.itemsPerPageSelectorMarginRight};
  margin-left: ${(props) => props.theme.itemsPerPageSelectorMarginLeft};

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
  margin-right: ${(props) => props.theme.totalItemsContainerMarginRight};
  margin-left: ${(props) => props.theme.totalItemsContainerMarginLeft};
`;

const LabelsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0 ${(props) => props.theme.marginRight} 0 ${(props) => props.theme.marginLeft};
`;

const PageToSelectContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.theme.pageSelectorMarginRight};
  margin-left: ${(props) => props.theme.pageSelectorMarginLeft};

  label {
    height: 0px;
  }
  label + .MuiInput-formControl {
    margin-top: 0px;
  }
`;
const TextContainer = styled.span``;

export default DxcPaginator;

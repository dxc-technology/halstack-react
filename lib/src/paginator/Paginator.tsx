import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import DxcButton from "../button/Button";
import DxcSelect from "../select/Select";
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
  const totalPages = itemsPerPage > 0 && Math.ceil(totalItems / itemsPerPage);
  const currentPageInternal = currentPage === -1 ? totalPages : currentPage;
  const minItemsPerPage =
    currentPageInternal === 1 || currentPageInternal === 0
      ? currentPageInternal
      : (currentPageInternal - 1) * itemsPerPage + 1;
  const maxItemsPerPage =
    minItemsPerPage - 1 + itemsPerPage > totalItems
      ? totalItems
      : minItemsPerPage - 1 + itemsPerPage;

  const colorsTheme = useTheme();
  const translatedLabels = useTranslatedLabels();

  return (
    <ThemeProvider theme={colorsTheme.paginator}>
      <DxcPaginatorContainer>
        <LabelsContainer>
          {itemsPerPageOptions && (
            <ItemsPageContainer>
              <ItemsLabel>
                {translatedLabels.paginator.itemsPerPageText}
              </ItemsLabel>
              <SelectContainer>
                <DxcSelect
                  options={itemsPerPageOptions.map((num) => ({
                    label: num.toString(),
                    value: num.toString(),
                  }))}
                  onChange={(newValue) => {
                    itemsPerPageFunction(Number(newValue.value));
                  }}
                  value={itemsPerPage.toString()}
                  size="fillParent"
                  tabIndex={tabIndex}
                />
              </SelectContainer>
            </ItemsPageContainer>
          )}
          <TotalItemsContainer>
            {translatedLabels.paginator.minToMaxOfText(
              minItemsPerPage,
              maxItemsPerPage,
              totalItems
            )}
          </TotalItemsContainer>
          {onPageChange && (
            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === 1 || currentPageInternal === 0}
              icon="first_page"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(1);
              }}
              title="First results"
            />
          )}
          {onPageChange && (
            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === 1 || currentPageInternal === 0}
              icon="navigate_before"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(currentPage - 1);
              }}
              title="Previous results"
            />
          )}
          {showGoToPage ? (
            <PageToSelectContainer>
              <GoToLabel>{translatedLabels.paginator.goToPageText} </GoToLabel>
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
                  tabIndex={tabIndex}
                />
              </SelectContainer>
            </PageToSelectContainer>
          ) : (
            <span>
              {translatedLabels.paginator.pageOfText(
                currentPageInternal,
                totalPages
              )}
            </span>
          )}
          {onPageChange && (
            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === totalPages}
              icon="navigate_next"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(currentPage + 1);
              }}
              title="Next results"
            />
          )}
          {onPageChange && (
            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === totalPages}
              icon="last_page"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(totalPages);
              }}
              title="Last results"
            />
          )}
        </LabelsContainer>
      </DxcPaginatorContainer>
    </ThemeProvider>
  );
};

const DxcPaginatorContainer = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  text-transform: ${(props) => props.theme.fontTextTransform};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  padding: ${(props) => props.theme.verticalPadding}
    ${(props) => props.theme.horizontalPadding};

  button {
    &:disabled {
      background-color: transparent !important;
      opacity: 0.3 !important;
    }
  }
`;

const SelectContainer = styled.div`
  min-width: 5.25rem;
`;

const ItemsPageContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.theme.itemsPerPageSelectorMarginRight};
  margin-left: ${(props) => props.theme.itemsPerPageSelectorMarginLeft};
`;

const ItemsLabel = styled.span`
  margin-right: 0.5rem;
`;

const GoToLabel = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const TotalItemsContainer = styled.span`
  margin-right: ${(props) => props.theme.totalItemsContainerMarginRight};
  margin-left: ${(props) => props.theme.totalItemsContainerMarginLeft};
`;

const LabelsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const PageToSelectContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

export default DxcPaginator;

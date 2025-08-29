import { useContext, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import DxcButton from "../button/Button";
import DxcSelect from "../select/Select";
import PaginatorPropsType from "./types";
import { HalstackLanguageContext } from "../HalstackContext";
import { responsiveSizes } from "../common/variables";
import useWidth from "../utils/useWidth";

const DxcPaginatorContainer = styled.div<{ width: number }>`
  display: flex;
  justify-content: ${({ width }) => (width && width <= Number(responsiveSizes.medium) * 16 ? "center" : "flex-end")};
  flex-wrap: ${({ width }) => (width && width <= Number(responsiveSizes.medium) * 16 ? "wrap" : "nowrap")};
  gap: ${({ width }) => (width && width <= Number(responsiveSizes.medium) * 16 ? "var(--spacing-gap-s)" : "0")};
  align-items: center;
  width: 100%;
  min-height: 48px;
  box-sizing: border-box;
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-regular);
  background-color: var(--color-bg-neutral-lighter);
  color: var(--color-fg-neutral-dark);
  padding: var(--spacing-padding-xs) var(--spacing-padding-xl);
`;

const ItemsPerPageContainer = styled.span<{ width: number }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  margin-right: ${({ width }) =>
    width && width <= Number(responsiveSizes.medium) * 16 ? "0" : "var(--spacing-gap-ml)"};
`;

const SelectContainer = styled.div`
  min-width: 6.25rem;
`;

const TotalItemsContainer = styled.span<{ width: number }>`
  margin-right: ${({ width }) =>
    width && width <= Number(responsiveSizes.medium) * 16 ? "0" : "var(--spacing-gap-xxl)"};
`;

const GoToPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-ml);
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  flex-shrink: 0;
`;

const PageToSelectContainer = styled.span<{ width: number }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  flex-shrink: 0;
  flex-wrap: wrap;
`;

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
  const totalPages = itemsPerPage > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;
  const currentPageInternal = currentPage === -1 ? totalPages : currentPage;
  const minItemsPerPage =
    currentPageInternal === 1 || currentPageInternal === 0
      ? currentPageInternal
      : (currentPageInternal - 1) * itemsPerPage + 1;
  const maxItemsPerPage =
    minItemsPerPage - 1 + itemsPerPage > totalItems ? totalItems : minItemsPerPage - 1 + itemsPerPage;

  const translatedLabels = useContext(HalstackLanguageContext);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const width = useWidth(containerRef);

  return (
    <DxcPaginatorContainer ref={containerRef} width={width}>
      {itemsPerPageOptions && (
        <ItemsPerPageContainer width={width}>
          <span>{translatedLabels.paginator.itemsPerPageText}</span>
          <SelectContainer>
            <DxcSelect
              options={itemsPerPageOptions.map((num) => ({
                label: num.toString(),
                value: num.toString(),
              }))}
              onChange={(newValue) => {
                itemsPerPageFunction?.(Number(newValue.value));
              }}
              value={itemsPerPage.toString()}
              size="fillParent"
              tabIndex={tabIndex}
            />
          </SelectContainer>
        </ItemsPerPageContainer>
      )}
      <TotalItemsContainer width={width}>
        {translatedLabels.paginator.minToMaxOfText(minItemsPerPage, maxItemsPerPage, totalItems)}
      </TotalItemsContainer>
      <GoToPageContainer>
        {onPageChange && (
          <ButtonsContainer>
            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === 1 || currentPageInternal === 0}
              icon="first_page"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(1);
              }}
              title={translatedLabels.paginator.firstResultsTitle}
              size={{ height: "medium" }}
            />

            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === 1 || currentPageInternal === 0}
              icon="navigate_before"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(currentPage - 1);
              }}
              title={translatedLabels.paginator.previousResultsTitle}
              size={{ height: "medium" }}
            />
          </ButtonsContainer>
        )}
        {showGoToPage ? (
          <PageToSelectContainer width={width}>
            {(width >= Number(responsiveSizes.small) * 16 || !onPageChange) && (
              <span>{translatedLabels.paginator.goToPageText}</span>
            )}
            <SelectContainer>
              <DxcSelect
                options={Array.from(Array(totalPages), (e, num) => ({
                  label: (num + 1).toString(),
                  value: (num + 1).toString(),
                }))}
                onChange={(newValue) => {
                  onPageChange?.(Number(newValue.value));
                }}
                value={currentPage.toString()}
                size="fillParent"
                tabIndex={tabIndex}
              />
            </SelectContainer>
          </PageToSelectContainer>
        ) : (
          <span>{translatedLabels.paginator.pageOfText(currentPageInternal, totalPages)}</span>
        )}
        {onPageChange && (
          <ButtonsContainer>
            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === totalPages}
              icon="navigate_next"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(currentPage + 1);
              }}
              title={translatedLabels.paginator.nextResultsTitle}
              size={{ height: "medium" }}
            />
            <DxcButton
              mode="secondary"
              disabled={currentPageInternal === totalPages}
              icon="last_page"
              tabIndex={tabIndex}
              onClick={() => {
                onPageChange(totalPages);
              }}
              title={translatedLabels.paginator.lastResultsTitle}
              size={{ height: "medium" }}
            />
          </ButtonsContainer>
        )}
      </GoToPageContainer>
    </DxcPaginatorContainer>
  );
};

export default DxcPaginator;

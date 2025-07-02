import { useContext } from "react";
import styled from "@emotion/styled";
import DxcButton from "../button/Button";
import DxcSelect from "../select/Select";
import PaginatorPropsType from "./types";
import { HalstackLanguageContext } from "../HalstackContext";

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

  const DxcPaginatorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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

  const ItemsPerPageContainer = styled.span`
    display: flex;
    align-items: center;
    gap: var(--spacing-gap-s);
    margin-right: var(--spacing-gap-ml);
  `;

  const SelectContainer = styled.div`
    min-width: 6.25rem;
  `;

  const TotalItemsContainer = styled.span`
    margin-right: var(--spacing-gap-xxl);
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
  `;

  const PageToSelectContainer = styled.span`
    display: flex;
    align-items: center;
    gap: var(--spacing-gap-s);
  `;

  return (
    <DxcPaginatorContainer>
      {itemsPerPageOptions && (
        <ItemsPerPageContainer>
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
      <TotalItemsContainer>
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
              title="First results"
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
              title="Previous results"
              size={{ height: "medium" }}
            />
          </ButtonsContainer>
        )}
        {showGoToPage ? (
          <PageToSelectContainer>
            <span>{translatedLabels.paginator.goToPageText} </span>
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
              title="Next results"
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
              title="Last results"
              size={{ height: "medium" }}
            />
          </ButtonsContainer>
        )}
      </GoToPageContainer>
    </DxcPaginatorContainer>
  );
};

export default DxcPaginator;

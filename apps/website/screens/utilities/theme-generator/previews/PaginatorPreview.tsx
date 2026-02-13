import { DxcPaginator, DxcInset, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const PaginatorPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Paginator" />
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcPaginator
          currentPage={1}
          itemsPerPage={10}
          totalItems={27}
          onPageChange={() => {}}
          itemsPerPageOptions={[5, 10, 15]}
          showGoToPage
        />
      </DxcInset>
    </DxcFlex>
  );
};

export default PaginatorPreview;

import { DxcPaginator } from "@dxc-technology/halstack-react";

const PaginatorPreview = () => {
  return (
    <DxcPaginator
      currentPage={1}
      itemsPerPage={10}
      totalItems={27}
      onPageChange={() => {}}
      itemsPerPageOptions={[5, 10, 15]}
      showGoToPage
    />
  );
};

export default PaginatorPreview;

import { DxcPaginator, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [page, changePage] = useState(1);

  const goToPageFunc = (newPage) => {
    changePage(newPage);
  };

  return (
    <DxcInset space="large">
      <DxcPaginator
        currentPage={page}
        itemsPerPage={10}
        totalItems={27}
        onPageChange={goToPageFunc}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcPaginator,
  DxcInset,
  useState,
};

export default { code, scope };

import { DxcPaginator } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [page, changePage] = useState(1);

  const goToPageFunc = (newPage) => {
    changePage(newPage);
  };

  return (
    <DxcPaginator
      currentPage={page}
      itemsPerPage={10}
      totalItems={27}
      onPageChange={goToPageFunc}
    ></DxcPaginator>
  );
}`;

const scope = {
  DxcPaginator,
  useState
};

export default { code, scope };

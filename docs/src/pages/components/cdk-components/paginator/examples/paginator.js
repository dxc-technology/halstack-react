import { DxcPaginator } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [page, changePage] = useState(1);

  const prevClick = () => {
    changePage(page - 1);
  };
  const firstClick = () => {
    changePage(1);
  };
  const nextClick = () => {
    changePage(page + 1);
  };
  const lastClick = currPage => {
    changePage(currPage);
  };

  return (
    <DxcPaginator
      currentPage={page}
      itemsPerPage={10}
      totalItems={27}
      prevFunction={prevClick}
      firstFunction={firstClick}
      nextFunction={nextClick}
      lastFunction={lastClick}
    ></DxcPaginator>
  );
}`;

const scope = {
  DxcPaginator,
  useState
};

export default { code, scope };

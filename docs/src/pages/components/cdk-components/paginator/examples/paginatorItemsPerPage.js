import { DxcPaginator } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [page, changePage] = useState(1);
  const [items, changeItems] = useState(10);

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
  const itemsPerPageClick = value => {
    changeItems(value);
  } 

  return (
    <DxcPaginator
      currentPage={page}
      itemsPerPage={items}
      itemsPerPageOptions={[10,15]}
      itemsPerPageFunction={itemsPerPageClick}
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
  useState,
};

export default { code, scope };

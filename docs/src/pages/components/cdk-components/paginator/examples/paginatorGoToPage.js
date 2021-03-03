import { DxcPaginator } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [page, changePage] = useState(1);
  const [items, changeItems] = useState(10);


  const itemsPerPageClick = value => {
    changeItems(value);
  } 
  const goToPageFunc = value => {
    changePage(value);
  } 

  return (
    <DxcPaginator
      currentPage={page}
      itemsPerPage={items}
      itemsPerPageOptions={[10,15]}
      itemsPerPageFunction={itemsPerPageClick}
      totalItems={27}
      showGoToPage={true}
      onPageChange={goToPageFunc}
    ></DxcPaginator>
  );
}`;

const scope = {
  DxcPaginator,
  useState,
};

export default { code, scope };

import { DxcPaginator, DxcInset } from "@repo/ui";
import { useState } from "react";

const code = `() => {
  const [page, changePage] = useState(1);
  const [items, changeItems] = useState(10);
  const itemsPerPageClick = (value) => {
    changeItems(value);
  };

  return (
    <DxcInset space="2rem">
      <DxcPaginator
        currentPage={page}
        itemsPerPage={items}
        itemsPerPageOptions={[5, 10, 15]}
        itemsPerPageFunction={itemsPerPageClick}
        totalItems={27}
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

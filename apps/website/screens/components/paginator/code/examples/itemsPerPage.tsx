import { DxcPaginator, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [page, changePage] = useState(1);
  const [items, changeItems] = useState(10);
  const itemsPerPageClick = (value) => {
    changeItems(value);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
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

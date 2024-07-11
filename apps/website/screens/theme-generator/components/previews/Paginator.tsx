import React, { useState } from "react";
import { DxcPaginator } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Paginator = () => {
  const [page, changePage] = useState(1);
  const [items, changeItems] = useState(10);

  const itemsPerPageClick = (value: number) => {
    changeItems(value);
  };
  const goToPageFunc = (value: number) => {
    changePage(value);
  };

  return (
    <PreviewContainer>
      <Mode text="Default">
        <DxcPaginator
          currentPage={page}
          itemsPerPage={items}
          itemsPerPageOptions={[10, 15]}
          itemsPerPageFunction={itemsPerPageClick}
          totalItems={27}
          showGoToPage={true}
          onPageChange={goToPageFunc}
        />
      </Mode>
    </PreviewContainer>
  );
};

export default Paginator;

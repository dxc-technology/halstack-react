import React, { useState } from "react";
import styled from "styled-components";
import { DxcPaginator } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Paginator = () => {
  const [page, changePage] = useState(1);
  const [items, changeItems] = useState(10);

  const itemsPerPageClick = (value) => {
    changeItems(value);
  };
  const goToPageFunc = (value) => {
    changePage(value);
  };

  return (
    <PaginatorContainer>
      <Mode text="Default">
        <DxcPaginator
          currentPage={page}
          itemsPerPage={items}
          itemsPerPageOptions={[10, 15]}
          itemsPerPageFunction={itemsPerPageClick}
          totalItems={27}
          showGoToPage={true}
          onPageChange={goToPageFunc}
        ></DxcPaginator>
      </Mode>
    </PaginatorContainer>
  );
};

const PaginatorContainer = styled.div``;

export default Paginator;

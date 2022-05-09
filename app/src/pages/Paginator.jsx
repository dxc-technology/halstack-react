import React from "react";
import { useState } from "react";
import { DxcPaginator, HalstackProvider } from "@dxc-technology/halstack-react";

function App() {
  const [page, changePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const colors = {
    paginator: {
      baseColor: "#fabada",
      fontColor: "red",
    },
  };

  const labels = {
    paginator: {
      itemsPerPage: " Num. items",
      pageOfText: (a, b) => `Pagina: ${a} de ${b}`,
    },
  };

  const goToPageFunc = (newPage) => {
    changePage(newPage);
  };

  return (
    <div>
      {/* <div className="test-case" id="normal-status">
        <h4>Normal Status</h4>
        <DxcPaginator
          currentPage={page}
          itemsPerPage={itemsPerPage}
          totalItems={27}
          onPageChange={goToPageFunc}
        ></DxcPaginator>
      </div>
      <div className="test-case" id="normal-status">
        <h4>Normal Status</h4>
        <DxcPaginator
          currentPage={page}
          itemsPerPage={itemsPerPage}
          itemsPerPageOptions={[10, 15]}
          itemsPerPageFunction={setItemsPerPage}
          totalItems={27}
          showGoToPage={true}
          onPageChange={goToPageFunc}
        ></DxcPaginator>
      </div> */}
      <div className="test-case" id="custom-paginator">
        <h4>Custom paginator</h4>
        {/* <HalstackProvider theme={colors}>
          <DxcPaginator
            currentPage={page}
            itemsPerPage={itemsPerPage}
            itemsPerPageOptions={[10, 15]}
            itemsPerPageFunction={setItemsPerPage}
            totalItems={27}
            onPageChange={goToPageFunc}
          ></DxcPaginator>
        </HalstackProvider> */}
        <HalstackProvider labels={labels}>
          <DxcPaginator
            currentPage={page}
            itemsPerPage={itemsPerPage}
            itemsPerPageOptions={[10, 15]}
            itemsPerPageFunction={setItemsPerPage}
            totalItems={27}
            onPageChange={goToPageFunc}
          ></DxcPaginator>
        </HalstackProvider>
      </div>
    </div>
  );
}

export default App;

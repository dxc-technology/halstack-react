import React from "react";
import { useState } from "react";
import { DxcPaginator, ThemeContext } from "@dxc-technology/halstack-react";

function App() {
  const [page, changePage] = useState(1);

  const colors = {
    paginator: {
      paginatorBackgroundColor: "#fabada",
      paginatorFontColor: "red",
    },
  };

  const goToPageFunc = (newPage) => {
    changePage(newPage);
  };
  

  return (
    <div>
      <div className="test-case" id="normal-status">
        <h4>Normal Status</h4>
        <DxcPaginator
          currentPage={page}
          itemsPerPage={10}
          totalItems={27}
          onPageChange={goToPageFunc}
        ></DxcPaginator>
      </div>
      <div className="test-case" id="normal-status">
        <h4>Normal Status</h4>
        <DxcPaginator
          currentPage={page}
          itemsPerPage={10}
          itemsPerPageOptions={[10, 15]}
          itemsPerPageFunction={(value) => console.log(value)}
          totalItems={27}
          showGoToPage={true}
          onPageChange={goToPageFunc}
        ></DxcPaginator>
      </div>
      <div className="test-case" id="custom-paginator">
        <h4>Custom paginator</h4>
        <ThemeContext.Provider value={colors}>
          <DxcPaginator
            currentPage={page}
            itemsPerPage={10}
            itemsPerPageOptions={[10, 15]}
            itemsPerPageFunction={(value) => console.log(value)}
            totalItems={27}
            onPageChange={goToPageFunc}
          ></DxcPaginator>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;

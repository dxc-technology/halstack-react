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

  const prevClick = () => {
    changePage(page - 1);
  };
  const firstClick = () => {
    changePage(1);
  };
  const nextClick = () => {
    changePage(page + 1);
  };
  const lastClick = (currPage) => {
    changePage(currPage);
  };

  return (
    <div>
      <div className="test-case" id="normal-status">
        <h4>Normal Status</h4>
        <DxcPaginator
          currentPage={page}
          itemsPerPage={10}
          totalItems={27}
          prevFunction={prevClick}
          firstFunction={firstClick}
          nextFunction={nextClick}
          lastFunction={lastClick}
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
          prevFunction={prevClick}
          firstFunction={firstClick}
          nextFunction={nextClick}
          lastFunction={lastClick}
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
            prevFunction={prevClick}
            firstFunction={firstClick}
            nextFunction={nextClick}
            lastFunction={lastClick}
          ></DxcPaginator>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;

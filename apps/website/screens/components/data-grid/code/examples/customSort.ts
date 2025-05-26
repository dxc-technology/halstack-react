import { DxcDataGrid, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const columns = [
    {
      key: "id",
      label: "ID",
      resizable: true,
      draggable: true,
      sortable: true,
    },
    {
      key: "complete",
      label: "% Complete",
      resizable: true,
      draggable: true,
      sortable: true,
      alignment: "right",
    },
  ];
  
  const rows = [
    {
      id: "Row 1",
      complete: 46, 
    },
    {
      id: "Row 2",
      complete: 51,
    },
    {
      id: "Row 3",
      complete: 40,
    },
    {
      id: "Row 4",
      complete: 10,
    },
  ];

  
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [rowsControlled, setRowsControlled] = useState(rows.slice(0, itemsPerPage));
  const [page, setPage] = useState(0);

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcDataGrid
          columns={columns}
          rows={rowsControlled}
          uniqueRowId="id"
          onSort={(sortColumn) => {
            if (sortColumn) {
              const { columnKey, direction } = sortColumn;
              console.log("Sorting the column " + columnKey + " by " + direction);
              setRowsControlled((currentRows) => {
                return currentRows.sort((a, b) => {
                  if (direction === "ASC") {
                    return a[columnKey] < b[columnKey] ? -1 : a[columnKey] > b[columnKey] ? 1 : 0;
                  } else {
                    return a[columnKey] < b[columnKey] ? 1 : a[columnKey] > b[columnKey] ? -1 : 0;
                  }
                });
              });
            } else {
              console.log("Removed sorting criteria")
              setRowsControlled(rows.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage));
            }
          }}
          onPageChange={(page) => {
            const internalPage = page - 1;
            setPage(internalPage);
            setRowsControlled(rows.slice(internalPage * itemsPerPage, internalPage * itemsPerPage + itemsPerPage));
          }}
          showPaginator
          itemsPerPage={itemsPerPage}
          itemsPerPageOptions={[2, 4]}
          itemsPerPageFunction={(n) => 
            {
              setItemsPerPage(n);
              setRowsControlled(rows.slice(0, n));
            }
          }
          totalItems={rows.length}
        />
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcInset,
  useState,
};

export default { code, scope };

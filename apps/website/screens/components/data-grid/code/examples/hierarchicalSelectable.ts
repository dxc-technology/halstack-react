import { DxcDataGrid, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [columns] = useState([
    {
      key: "name",
      label: "Label",
      summaryKey: "label"
    },
    {
      key: "value",
      label: "Value",
      alignment: "right",
      summaryKey: "total"
    },
  ]);
  
  const [rows] = useState([
    {
        name: "Root Node 1",
        value: "1",
        id: "a",
        childRows: [
            {
                name: "Child Node 1.1",
                value: "1.1",
                id: "aa",
                childRows: [
                {
                    name: "Grandchild Node 1.1.1",
                    value: "1.1.1",
                    id: "aaa",
                },
                {
                    name: "Grandchild Node 1.1.2",
                    value: "1.1.2",
                    id: "aab",
                },
                ],
            },
            {
                name: "Child Node 1.2",
                value: "1.2",
                id: "ab",
            },  
        ],
    },
    {
        name: "Root Node 2",
        value: "2",
        id: "b",
        childRows: [
            {
                name: "Child Node 2.1",
                value: "2.1",
                id: "ba",
                childRows: [
                {
                    name: "Grandchild Node 2.1.1",
                    value: "2.1.1",
                    id: "baa",
                },
                ],
            },
            {
                name: "Child Node 2.2",
                value: "2.2",
                id: "bb",
            },
            {
                name: "Child Node 2.3",
                value: "2.3",
                id: "bc",
            },
        ],
    },
  ]);

  const [selectedRows, setSelectedRows] = useState(new Set());
  return (
    <DxcInset space="2rem">
      <DxcDataGrid
          columns={columns}
          rows={rows}
          uniqueRowId="id"
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
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

import { DxcDataGrid, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const columns = [
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
  ];
  
  const rows = [
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
  ];

  const summaryRow = { label: "Total", total: 100, id: "summary" }

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcDataGrid columns={columns} rows={rows} summaryRow={summaryRow} uniqueRowId="id" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcInset,
};

export default { code, scope };

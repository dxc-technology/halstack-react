import { DxcDataGrid, DxcFlex, DxcInset, DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "complete",
      label: "% Complete",
      alignment: "right",
    },
  ];
  
  const rows1 = [
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

  const rows2 = [
    {
      id: "Row 11",
      complete: 20, 
    },
    {
      id: "Row 12",
      complete: 1,
    },
    {
      id: "Row 13",
      complete: 67,
    },
    {
      id: "Row 14",
      complete: 47,
    },
  ];

  const options = [
    { label: "Data set 1", value: "rows1" },
    { label: "Data set 2", value: "rows2" },
  ];

  const [rows, setRows]= useState(rows1);
  const onChange = ({ value }) => {
    value === "rows1" ? setRows(rows1) : setRows(rows2);
  };
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
        <DxcSelect
          label="Select data set"
          options={options}
          onChange={onChange}
          defaultValue="rows1"
        />
        <DxcDataGrid
          columns={columns}
          rows={rows}
          uniqueRowId="id"
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcDataGrid,
  DxcSelect,
  DxcInset,
  DxcFlex,
  useState,
};

export default { code, scope };

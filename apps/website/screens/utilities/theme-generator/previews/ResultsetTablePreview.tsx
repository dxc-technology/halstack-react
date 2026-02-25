import { DxcResultsetTable } from "@dxc-technology/halstack-react";

const ResultsetTablePreview = () => {
  const columns = [{ displayValue: "Name" }, { displayValue: "Email" }, { displayValue: "Role" }];

  const rows = [
    [{ displayValue: "John Doe" }, { displayValue: "john@example.com" }, { displayValue: "Developer" }],
    [{ displayValue: "Jane Smith" }, { displayValue: "jane@example.com" }, { displayValue: "Designer" }],
  ];

  return <DxcResultsetTable columns={columns} rows={rows} />;
};

export default ResultsetTablePreview;

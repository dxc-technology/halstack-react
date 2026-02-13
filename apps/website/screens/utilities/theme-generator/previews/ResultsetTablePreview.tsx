import { DxcResultsetTable, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const ResultsetTablePreview = () => {
  const columns = [{ displayValue: "Name" }, { displayValue: "Email" }, { displayValue: "Role" }];

  const rows = [
    [{ displayValue: "John Doe" }, { displayValue: "john@example.com" }, { displayValue: "Developer" }],
    [{ displayValue: "Jane Smith" }, { displayValue: "jane@example.com" }, { displayValue: "Designer" }],
  ];

  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Resultset Table" />
      <DxcResultsetTable columns={columns} rows={rows} />
    </DxcFlex>
  );
};

export default ResultsetTablePreview;

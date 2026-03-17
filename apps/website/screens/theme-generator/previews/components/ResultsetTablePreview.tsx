import { DxcResultsetTable } from "@dxc-technology/halstack-react";

const deleteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const actions = [
  {
    icon: "filled_edit",
    title: "icon",
    onClick: () => {},
  },
  {
    icon: deleteIcon,
    title: "icon",
    onClick: () => {},
    disabled: true,
  },
];

const ResultsetTablePreview = () => {
  const columns = [
    { displayValue: "Name" },
    { displayValue: "Email" },
    { displayValue: "Role" },
    { displayValue: "Action" },
  ];

  const rows = [
    [
      { displayValue: "John Doe" },
      { displayValue: "john@example.com" },
      { displayValue: "Developer" },
      {
        displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
      },
    ],
    [
      { displayValue: "Jane Smith" },
      { displayValue: "jane@example.com" },
      { displayValue: "Designer" },
      {
        displayValue: <DxcResultsetTable.ActionsCell actions={actions} />,
      },
    ],
  ];

  return <DxcResultsetTable columns={columns} rows={rows} />;
};

export default ResultsetTablePreview;

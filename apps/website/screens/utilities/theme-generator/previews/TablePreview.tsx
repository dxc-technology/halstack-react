import { DxcTable, DxcFlex, DxcHeading, DxcResultsetTable, DxcContainer } from "@dxc-technology/halstack-react";

const TablePreview = () => {
  const columns = [
    { displayValue: "Id", isSortable: false },
    { displayValue: "Name", isSortable: true },
    { displayValue: "City", isSortable: true },
    { displayValue: "Actions", isSortable: false },
  ];

  const actions = [
    {
      icon: "delete",
      title: "Delete",
      onClick: () => {},
    },
    {
      title: "edit",
      onClick: (_value: unknown) => {},
      options: [
        {
          value: "1",
          label: "Edit",
        },
        {
          value: "2",
          label: "Mark as selected",
        },
      ],
    },
  ];

  const rows = [
    [
      { displayValue: "001" },
      { displayValue: "Peter" },
      { displayValue: "Miami" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "002" },
      { displayValue: "Louis" },
      { displayValue: "London" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "003" },
      { displayValue: "Lana" },
      { displayValue: "Amsterdam" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "004" },
      { displayValue: "Rick" },
      { displayValue: "London" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "005" },
      { displayValue: "Mark" },
      { displayValue: "Miami" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
    [
      { displayValue: "006" },
      { displayValue: "Cris" },
      { displayValue: "Paris" },
      { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
    ],
  ];

  return (
    <DxcContainer width="60%">
      <DxcFlex direction="column" gap="1rem">
        <DxcHeading level={5} text="Table" />
        <DxcTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>Designer</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcHeading level={5} text="ResultsetTable" />

        <DxcResultsetTable columns={columns} rows={rows} mode="reduced" />
      </DxcFlex>
    </DxcContainer>
  );
};

export default TablePreview;

import { DxcTable, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const actions = [
    {
      icon: "delete",
      title: "Delete",
      onClick: () => {},
    },
    {
      title: "edit",
      onClick: (value) => {},
      options:[
        {
          value: "1",
          label: "Edit",
        },
        {
          value: "2",
          label: "Mark as selected",
        },
      ]
    },
  ];
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcTable mode="reduced">
        <thead>
          <tr>
            <th>header 1</th>
            <th>header 2</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell 1</td>
            <td>cell 2</td>
            <td><DxcTable.ActionsCell actions={actions} /></td>
          </tr>
          <tr>
            <td>cell 4</td>
            <td>cell 5</td>
            <td><DxcTable.ActionsCell actions={actions} /></td>
          </tr>
          <tr>
            <td>cell 7</td>
            <td>cell 8</td>
            <td><DxcTable.ActionsCell actions={actions} /></td>
          </tr>
        </tbody>
      </DxcTable>
    </DxcInset>
  );
}`;

const scope = {
  DxcTable,
  DxcInset,
};

export default { code, scope };

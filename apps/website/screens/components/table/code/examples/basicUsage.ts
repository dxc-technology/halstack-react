import { DxcTable, DxcInset } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcTable>
        <thead>
          <tr>
            <th>header 1</th>
            <th>header 2</th>
            <th>header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>cell 4</td>
            <td>cell 5</td>
            <td>cell 6</td>
          </tr>
          <tr>
            <td>cell 7</td>
            <td>cell 8</td>
            <td>Cell 9</td>
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

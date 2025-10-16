import { TableCode } from "@/common/Code";
import { DxcTable } from "@dxc-technology/halstack-react";

const BorderTokens = () => (
  <DxcTable>
    <thead>
      <tr>
        <th>Token</th>
        <th>Default value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <TableCode>--line-style-dashed</TableCode>
        </td>
        <td>dashed</td>
      </tr>
      <tr>
        <td>
          <TableCode>--line-style-solid</TableCode>
        </td>
        <td>solid</td>
      </tr>
    </tbody>
  </DxcTable>
);

export default BorderTokens;

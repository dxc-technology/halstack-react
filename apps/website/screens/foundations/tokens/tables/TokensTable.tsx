import { TableCode } from "@/common/Code";
import { DxcTable } from "@dxc-technology/halstack-react";
import { aliasTokens, coreTokens } from "../../../../../../packages/lib/src/styles/tokens";
import getTokensByCategory from "./utils/mapCategory";

const TokensTable = ({ categories, type }: { categories: string[]; type: "alias" | "core" }) => (
  <DxcTable>
    <thead>
      <tr>
        <th>Token</th>
        <th>Default value</th>
      </tr>
    </thead>
    <tbody>
      {getTokensByCategory(type === "alias" ? aliasTokens : coreTokens, categories).map(([token, value]) => (
        <tr key={token}>
          <td>
            <TableCode>{token}</TableCode>
          </td>
          <td>{type === "alias" ? <TableCode>{value}</TableCode> : value}</td>
        </tr>
      ))}
    </tbody>
  </DxcTable>
);

export default TokensTable;

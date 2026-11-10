import { TableCode } from "@/common/Code";
import { DxcTable } from "@dxc-technology/halstack-react";
import { DxcAliasTokens, DxcCoreTokens } from "@dxc-technology/halstack-react";
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
      {getTokensByCategory(
        type === "alias"
          ? (DxcAliasTokens as Record<string, string | number>)
          : (DxcCoreTokens as Record<string, string | number>),
        categories
      ).map(([token, value]) => (
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

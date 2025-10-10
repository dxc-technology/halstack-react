import { TableCode } from "@/common/Code";
import { DxcTable } from "@dxc-technology/halstack-react";

export const FontSizesTokens = () => (
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
          <TableCode>--font-size-12</TableCode>
        </td>
        <td>12px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-14</TableCode>
        </td>
        <td>14px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-16</TableCode>
        </td>
        <td>16px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-18</TableCode>
        </td>
        <td>18px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-20</TableCode>
        </td>
        <td>20px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-24</TableCode>
        </td>
        <td>24px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-32</TableCode>
        </td>
        <td>32px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-40</TableCode>
        </td>
        <td>40px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-48</TableCode>
        </td>
        <td>48px</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-size-60</TableCode>
        </td>
        <td>60px</td>
      </tr>
    </tbody>
  </DxcTable>
);

export const FontWeightTokens = () => (
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
          <TableCode>--font-weight-light</TableCode>
        </td>
        <td>300</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-weight-regular</TableCode>
        </td>
        <td>400</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-weight-semibold</TableCode>
        </td>
        <td>600</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-weight-bold</TableCode>
        </td>
        <td>700</td>
      </tr>
    </tbody>
  </DxcTable>
);

export const FontFamilyTokens = () => (
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
          <TableCode>--font-family-mono</TableCode>
        </td>
        <td>Source Code Pro, mono</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-family-sans</TableCode>
        </td>
        <td>Open Sans, sans-serif</td>
      </tr>
    </tbody>
  </DxcTable>
);

export const FontStylesTokens = () => (
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
          <TableCode>--font-style-lightitalic</TableCode>
        </td>
        <td>light italic</td>
      </tr>
      <tr>
        <td>
          <TableCode>--font-style-normal</TableCode>
        </td>
        <td>normal</td>
      </tr>
    </tbody>
  </DxcTable>
);

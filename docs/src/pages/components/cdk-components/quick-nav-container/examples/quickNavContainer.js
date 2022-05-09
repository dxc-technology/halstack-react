import {
  DxcQuickNavContainer,
  DxcText,
  DxcTable,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const sections = [
    {
      title: "Spacing methods",
      level: 2,
      subSections: [
        {
          title: "Fixed spacing",
          level: 3,
          content: (
            <>
              <DxcText as="p">
                Although the fixed spacing scale is most commonly used for
                vertical spacing, it can also be applied for horizontal spacing,
                especially in the case of spacing inside components.
              </DxcText>
            </>
          ),
        },
        {
          title: "Fluid spacing",
          level: 3,
          content: (
            <>
              <DxcText as="p">
                The use of percentages (e.g. 50% or 33%) is a recommended way to
                divide a page or to control a component max-width and min-width.
                Using percentages for top and bottom values of padding or margin
                inside of a component or element should be avoided.
              </DxcText>
            </>
          ),
        },
      ],
    },
    {
      title: "Core spacing tokens",
      level: 2,
      content: (
        <>
          <DxcText as="p">
            The core spacing scale is used to create space relationships for
            detail-level designs.
          </DxcText>
          <DxcTable>
            <thead>
              <tr>
                <th>Token</th>
                <th>rem</th>
                <th>px</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>spacing-0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>spacing-2</td>
                <td>0.125</td>
                <td>2</td>
              </tr>
              <tr>
                <td>spacing-4</td>
                <td>0.25</td>
                <td>4</td>
              </tr>
              <tr>
                <td>spacing-8</td>
                <td>0.5</td>
                <td>8</td>
              </tr>
              <tr>
                <td>spacing-12</td>
                <td>0.75</td>
                <td>12</td>
              </tr>
              <tr>
                <td>spacing-16</td>
                <td>1</td>
                <td>16</td>
              </tr>
              <tr>
                <td>spacing-24</td>
                <td>1.5</td>
                <td>24</td>
              </tr>
              <tr>
                <td>spacing-32</td>
                <td>2</td>
                <td>32</td>
              </tr>
              <tr>
                <td>spacing-40</td>
                <td>2.5</td>
                <td>40</td>
              </tr>
              <tr>
                <td>spacing-48</td>
                <td>3</td>
                <td>48</td>
              </tr>
              <tr>
                <td>spacing-56</td>
                <td>3.5</td>
                <td>56</td>
              </tr>
              <tr>
                <td>spacing-64</td>
                <td>4</td>
                <td>64</td>
              </tr>
              <tr>
                <td>spacing-80</td>
                <td>5</td>
                <td>80</td>
              </tr>
              <tr>
                <td>spacing-96</td>
                <td>6</td>
                <td>96</td>
              </tr>
              <tr>
                <td>spacing-112</td>
                <td>7</td>
                <td>112</td>
              </tr>
            </tbody>
          </DxcTable>
        </>
      ),
    },
    {
      title: "Component spacing tokens",
      level: 2,
      content: (
        <>
          <DxcText as="p">
            Most components across Halstack can adopt our component spacing
            tokens as margin or padding in every direction in order to create
            white space between components.
          </DxcText>
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>xxsmall</td>
                <td>spacing-4</td>
                <td>4px</td>
              </tr>
              <tr>
                <td>xsmall</td>
                <td>spacing-8</td>
                <td>8px</td>
              </tr>
              <tr>
                <td>small</td>
                <td>spacing-12</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>medium</td>
                <td>spacing-16</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>large</td>
                <td>spacing-24</td>
                <td>24px</td>
              </tr>
              <tr>
                <td>xlarge</td>
                <td>spacing-32</td>
                <td>32px</td>
              </tr>
              <tr>
                <td>xxlarge</td>
                <td>spacing-48</td>
                <td>48px</td>
              </tr>
            </tbody>
          </DxcTable>
        </>
      ),
    },
  ];

  return (
    <DxcQuickNavContainer
      title="Spacing"
      sections={sections}
    ></DxcQuickNavContainer>
  );
}`;

const scope = {
  DxcQuickNavContainer,
  DxcText,
  DxcTable,
  useState,
};

export default { code, scope };

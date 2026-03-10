import { DxcFlex, DxcGrid, DxcTypography } from "@dxc-technology/halstack-react";
import { Tokens } from "../../types";
import React, { useMemo } from "react";
import { divideColorTokens, SHADE_VALUES } from "../../utils";

const ReviewTokensGrid = ({ tokens }: { tokens: Tokens }) => {
  const tokenGroups = useMemo(() => divideColorTokens(tokens), [tokens]);
  return (
    <DxcGrid
      templateColumns={["100px", "repeat(10, 1fr)"]}
      templateRows={["auto", "repeat(9, 1fr)"]}
      gap="var(--spacing-gap-xs)"
    >
      {SHADE_VALUES.map((value, index) =>
        index === 0 ? (
          <DxcGrid.Item column={"2/3"} key={"shade_" + value}>
            <DxcTypography
              fontSize="var(--typography-body-s)"
              color="var(--color-fg-neutral-strong)"
              textAlign="center"
            >
              {value}
            </DxcTypography>
          </DxcGrid.Item>
        ) : (
          <DxcTypography
            key={"shade_" + value}
            fontSize="var(--typography-body-s)"
            color="var(--color-fg-neutral-strong)"
            textAlign="center"
          >
            {value}
          </DxcTypography>
        )
      )}
      {Object.entries(tokenGroups).map(([group, colors]) => (
        <React.Fragment key={group}>
          <DxcFlex alignItems="center">
            <DxcTypography fontWeight="var(--typography-label-semibold)">
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </DxcTypography>
          </DxcFlex>
          {colors.map((color: string, index: number) => (
            <div
              key={group + "_" + SHADE_VALUES[index]}
              style={{
                backgroundColor: color,
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "var(--border-radius-m)",
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </DxcGrid>
  );
};

export default ReviewTokensGrid;

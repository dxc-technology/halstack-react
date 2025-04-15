import {
  DxcDialog,
  DxcButton,
  DxcTextInput,
  DxcInset,
  DxcFlex,
  DxcGrid,
  DxcHeading,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
  };
  return (
    <DxcInset space="2rem">
      <DxcButton label="Enter your address" onClick={handleClick} />
      {isDialogVisible && (
        <DxcDialog onCloseClick={handleClick}>
          <DxcInset space="var(--spacing-padding-l)">
            <DxcGrid gap="2rem">
              <DxcHeading level={2} text="Delivery address" weight="normal" />
              <DxcGrid templateColumns={["1fr", "1fr"]} templateColumns={["1fr", "1fr"]} gap="var(--spacing-gap-ml)">
                <DxcTextInput label="Street" size="fillParent" />
                <DxcTextInput label="City" size="fillParent" />
                <DxcGrid.Item column={{ start: 1, end: 3 }}>
                  <DxcTextInput label="State" size="fillParent" />
                </DxcGrid.Item>
              </DxcGrid>
              <DxcFlex justifyContent="flex-end" gap="var(--spacing-gap-s)">
                <DxcButton label="Add client" onClick={handleClick} />
                <DxcButton label="Cancel" onClick={handleClick} mode="tertiary" />
              </DxcFlex>
            </DxcGrid>
          </DxcInset>
        </DxcDialog>
      )}
    </DxcInset>
  );
}`;

const scope = {
  useState,
  DxcButton,
  DxcDialog,
  DxcTextInput,
  DxcInset,
  DxcFlex,
  DxcGrid,
  DxcHeading,
};

export default { code, scope };

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
          <DxcInset space="1.5rem">
            <DxcGrid gap="2rem">
              <DxcHeading level={2} text="Delivery address" weight="normal" />
              <DxcGrid templateColumns={["1fr", "1fr"]} templateColumns={["1fr", "1fr"]} gap="1rem">
                <DxcTextInput label="Street" size="fillParent" />
                <DxcTextInput label="City" size="fillParent" />
                <DxcGrid.Item column={{ start: 1, end: 3 }}>
                  <DxcTextInput label="State" size="fillParent" />
                </DxcGrid.Item>
              </DxcGrid>
              <DxcFlex justifyContent="flex-end" gap="0.5rem">
                <DxcButton label="Add client" onClick={handleClick} />
                <DxcButton label="Cancel" onClick={handleClick} mode="text" />
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

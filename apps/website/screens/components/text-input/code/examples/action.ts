import { DxcTextInput, DxcInset } from "@repo/ui";
import { useState } from "react";

const code = `() => {
  const actionIcon = {
    onClick: () => {
      console.log("Copied.");
    },
    icon: "Content_Copy",
    title: "Copy",
  };

  return (
    <DxcInset space="2rem">
      <DxcTextInput label="Enter your name" action={actionIcon} clearable />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  useState,
};

export default { code, scope };

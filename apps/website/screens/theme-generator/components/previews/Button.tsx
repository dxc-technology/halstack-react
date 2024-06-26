import React from "react";
import { DxcButton } from "@repo/ui";
import Mode from "../Mode";
import linkedinIcon from "../../images/LinkedinIcon";
import PreviewContainer from "./PreviewContainer";

const Button = () => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <PreviewContainer>
      <Mode text="Primary">
        <DxcButton mode="primary" label="button" />
        <DxcButton mode="primary" label="Button" icon={linkedinIcon} onClick={onClick} />
        <DxcButton mode="primary" label="button" disabled onClick={onClick} />
      </Mode>
      <Mode text="Secondary">
        <DxcButton mode="secondary" label="button" onClick={onClick} />
        <DxcButton label="Button" mode="secondary" icon={linkedinIcon} iconPosition="after" onClick={onClick} />
        <DxcButton mode="secondary" label="button" disabled={true} onClick={onClick} />
      </Mode>
      <Mode text="Text">
        <DxcButton mode="text" label="button" onClick={onClick} />
        <DxcButton label="Button" mode="text" icon={linkedinIcon} onClick={onClick} />
        <DxcButton mode="text" label="button" disabled onClick={onClick} />
      </Mode>
    </PreviewContainer>
  );
};

export default Button;

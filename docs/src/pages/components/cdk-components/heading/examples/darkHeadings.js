import { DxcHeading } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ background: "#000000", overflow: "hidden" }}>
        <DxcHeading theme="dark" level={3} text="Subtitle introducing a section" />
        <DxcHeading theme="dark" level={4} text="Heading for a paragraph with text" />
        <DxcHeading theme="dark" level={5} text="Heading to mix with the rest of the headings or use by itself" />
    </div>
  );
}`;

const scope = {
  DxcHeading,
};

export default { code, scope };

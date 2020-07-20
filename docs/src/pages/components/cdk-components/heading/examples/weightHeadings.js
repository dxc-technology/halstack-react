import { DxcHeading } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
    <div>
        <DxcHeading level={3} weight="light" text="Subtitle introducing a section" />
        <DxcHeading level={3} weight="normal" text="Subtitle introducing a section" />
        <DxcHeading level={3} weight="bold" text="Subtitle introducing a section" />
    </div>
  );F
}`;

const scope = {
  DxcHeading,
};

export default { code, scope };

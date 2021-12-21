import { DxcHeading } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div>
        <DxcHeading level={1} as="h5"text="Level 1 heading as h5" />
        <DxcHeading level={3} as="h2" text="Level 3 heading as h2" />
    </div>
  );
}`;

const scope = {
  DxcHeading,
};

export default { code, scope };

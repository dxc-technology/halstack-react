import { DxcHeading } from "@dxc-technology/halstack-react";

export default function ComponentHeading({ name }: { name: string }) {
  return <DxcHeading level={1} text={name} />;
}

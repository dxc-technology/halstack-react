import { DxcHeading } from "@dxc-technology/halstack-react";

type ComponentHeadingProps = {
  name: string;
};

const ComponentHeading = ({ name }: ComponentHeadingProps) => <DxcHeading level={1} text={name} />;

export default ComponentHeading;

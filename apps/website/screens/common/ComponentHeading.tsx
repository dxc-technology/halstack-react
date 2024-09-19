import { DxcHeading } from "@dxc-technology/halstack-react";

type ComponentHeadingProps = {
  name: string;
};

const ComponentHeading = ({ name }: ComponentHeadingProps) => <DxcHeading level={1} text={name} weight="bold" />;

export default ComponentHeading;

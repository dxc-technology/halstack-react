import { DxcHeading } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
    <div>
        <DxcHeading text="Title for main section" />
        <DxcHeading level={2} text="Heading for sections within the page" />
    </div>
  );
}`;

const scope = {
  DxcHeading,
};

export default { code, scope };

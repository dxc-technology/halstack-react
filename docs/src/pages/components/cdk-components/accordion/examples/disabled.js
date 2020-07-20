import { DxcAccordion } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onChange = () => {};

  return (
    <div>
      <DxcAccordion
        disabled
        label="Disabled Accordion"
        onChange={onChange}
        padding="medium"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </DxcAccordion>
    </div>
  );
}`;

const scope = {
  DxcAccordion
};

export default { code, scope };

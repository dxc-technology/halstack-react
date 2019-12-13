import { DxcAccordion } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onChange = () => {};

  return (
    <div style={{ padding: "15px", background: "#000000" }}>
      <DxcAccordion
        theme="light"
        label="Dark theme Accordion"
        onChange={onChange}
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

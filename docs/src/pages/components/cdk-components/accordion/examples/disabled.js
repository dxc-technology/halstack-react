import { DxcAccordion } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = () => {};

  return (
    <div>
      <DxcAccordion
        disabled
        label="Disabled Accordion"
        onChange={onChange}
        margin="medium"
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

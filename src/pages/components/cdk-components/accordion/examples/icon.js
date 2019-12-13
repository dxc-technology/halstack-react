import { DxcAccordion } from "@diaas/dxc-react-cdk";
import homeLogo from "./images/home.svg";

const code = `() => {
  const onChange = () => {};

  return (
    <div style={{ margin: "15px" }}>
      <DxcAccordion
        label="Accordion with icon"
        onChange={onChange}
        iconSrc={homeLogo}
        iconPosition="before"
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
  DxcAccordion,
  homeLogo
};

export default { code, scope };

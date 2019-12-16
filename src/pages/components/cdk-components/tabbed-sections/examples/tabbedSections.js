import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
      <DxcTabsForSections
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "S1",
            section: () => ( <div style={{height:"200px"}}> Section 1 </div> )
          },
          {
            tabLabel: "S2",
            section: () => ( <div style={{height:"200px"}}> Section 2 </div> )
          },
          {
            tabLabel: "S3",
            section: () => ( <div style={{height:"200px"}}> Section 3 </div> )
          },
        ]}
      ></DxcTabsForSections>
  );
}`;

const scope = {
  DxcTabsForSections
};

export default { code, scope };

import { DxcWizard } from "@diaas/dxc-react-cdk";

const code = `() => {
    return (
        <div style={{ background: "#000000" }}>
            <DxcWizard
            theme="dark"
            steps={[
                {
                    label: "First step",
                    description: "My step description"
                },
                {
                    label: "Second step",
                    description: "Another step description"
                },
                {
                    label: "Third step",
                    description: "Almost finished"
                },
                {
                    label: "Forth step",
                    description: "Disable step",
                    disabled: true
                }
            ]}
            ></DxcWizard>
        </div>
    );
}`;

const scope = {
    DxcWizard
  };
  
  export default { code, scope };
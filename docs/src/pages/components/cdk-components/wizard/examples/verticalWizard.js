import { DxcWizard } from "@diaas/dxc-react-cdk";

const code = `() => {
    return (
        <DxcWizard
            mode="vertical"
            steps={[
            {
                label: "First step",
                description: "Not validated step",
                valid: false
            },
            {
                label: "Second step",
                description: "Validated step",
                valid: true
            },
            {
                label: "Third step",
                description: "Another step description"
            },
            {
                label: "Forth step",
                description: "Disable step",
                disabled: true
            }
            ]}
        ></DxcWizard>
    );
}`;

const scope = {
    DxcWizard
  };
  
  export default { code, scope };
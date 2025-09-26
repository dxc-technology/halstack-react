import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    ...Array.from({ length: 10000 }, (_, i) => ({
      label: \`Option \${String(i + 1).padStart(2, "0")}\`,
      value: \`\${i + 1}\`,
    })),
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcSelect 
        label="Select a virtualized value" 
        options={options} 
        virtualizedHeight="300px" 
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcInset,
};

export default { code, scope };

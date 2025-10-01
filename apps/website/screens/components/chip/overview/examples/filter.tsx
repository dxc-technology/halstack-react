import { DxcChip, DxcInset, DxcFlex, DxcSelect, DxcHeading } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
const roles = ["Admin", "Security Analyst", "Auditor", "Read-Only User"];
  const [selectedRoles, setSelectedRoles] = useState([roles[0]]);

  const handleSelectChange = ({value}) => {
    setSelectedRoles(value);
  };
  const handleRemoveRole = (roleToRemove) => {
    setSelectedRoles(selectedRoles.filter((role) => role !== roleToRemove));
  };

  return (
    <DxcInset space="var(--spacing-padding-m)">
      <DxcFlex gap="var(--spacing-gap-ml)" direction="column">
        <DxcSelect
          label="Available roles"
          helperText="Select one or more roles to filter"
          options={roles.map((role) => ({ label: role, value: role }))}
          onChange={handleSelectChange}
          value={selectedRoles}
          multiple
        />
        <DxcFlex gap="var(--spacing-gap-xs)" direction="column">
          <DxcHeading level={5} text="Selected roles" />
          <DxcFlex gap="var(--spacing-gap-s)">
            {selectedRoles.map((role) => (
              <DxcChip
                key={role}
                label={role}
                prefixIcon="filled_account_circle"
                suffixIcon="cancel"
                onClickSuffix={() => handleRemoveRole(role)}
              />
            ))}
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcFlex,
  DxcHeading,
  DxcInset,
  DxcSelect,
  useState,
};

export default { code, scope };

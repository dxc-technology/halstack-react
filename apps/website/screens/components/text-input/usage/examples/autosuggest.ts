import { DxcTextInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Andorra",
    "Antigua and Barbuda",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Democratic Republic of the Congo",
    "Dominica",
    "Denmark",
    "Djibouti",
  ];

  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center">
        <DxcTextInput
          label="Country"
          placeholder="Write your country name"
          suggestions={countries}
          clearable
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };

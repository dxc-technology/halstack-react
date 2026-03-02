import {
  DxcButton,
  DxcContainer,
  DxcFlex,
  DxcTextInput,
  DxcHeading,
  DxcTypography,
} from "@dxc-technology/halstack-react";
const FormPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Simple Form Composition" />
      <DxcContainer
        padding="2rem"
        background={{ color: "color_white" }}
        style={{
          borderRadius: "12px",
          border: "2px solid #e8e8e8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <DxcFlex direction="column" gap="1.5rem">
          <DxcTypography fontSize="1.125rem" fontWeight="600">
            Contact Information
          </DxcTypography>

          <DxcFlex direction="column" gap="1rem">
            <DxcTextInput
              label="Full Name"
              placeholder="Enter your full name..."
              required
              helperText="Please provide your complete name"
            />

            <DxcTextInput
              label="Email Address"
              placeholder="your@email.com"
              required
              helperText="We'll use this to contact you"
            />

            <DxcFlex justifyContent="flex-end" gap="1rem" style={{ marginTop: "1rem" }}>
              <DxcButton label="Clear" mode="secondary" onClick={() => {}} />
              <DxcButton label="Submit Form" onClick={() => {}} />
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
      </DxcContainer>
    </DxcFlex>
  );
};

export default FormPreview;

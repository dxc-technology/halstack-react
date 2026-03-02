import styled from "@emotion/styled";
import {
  DxcFlex,
  DxcTypography,
  DxcTextInput,
  DxcPasswordInput,
  DxcButton,
  DxcLink,
} from "@dxc-technology/halstack-react";

const LoginPreview = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <DxcFlex direction="column" gap="1.5rem">
          <TitleContainer>
            <DxcTypography fontSize="1.25rem" fontWeight="400" textAlign="center">
              Sign in to your account
            </DxcTypography>
          </TitleContainer>
          <DxcFlex direction="column" gap="1rem">
            <DxcTextInput label="Username" value="" size="fillParent" placeholder="" />
            <DxcPasswordInput label="Password" value="" size="fillParent" />
          </DxcFlex>
          <DxcFlex justifyContent="flex-end">
            <DxcLink href="#">Forgot password?</DxcLink>
          </DxcFlex>
          <DxcButton mode="primary" label="Sign in" size={{ width: "fillParent" }} />
        </DxcFlex>
      </LoginCard>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 4px;
  padding: 48px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 420px;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

export default LoginPreview;

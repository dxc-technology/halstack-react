//
// import {
//   DxcFlex,
//   DxcTypography,
//   DxcTextInput,
//   DxcPasswordInput,
//   DxcButton,
//   DxcLink,
// } from "@dxc-technology/halstack-react";
// import styled from "styled-components";
// import { useThemeStore } from "../../stores/themeStore";
// import ScaledPreviewContainer from "../components/ScaledPreviewContainer";

// const LoginPreview = () => {
//   const currentThemeData = useThemeStore((state) => state.currentThemeData);
//   const { loginBg = "", loginLogo = "" } = currentThemeData || {};

//   return (
//     <ScaledPreviewContainer scale={0.5} width={2120}>
//       <LoginContainer backgroundImage={loginBg}>
//         <LoginCard>
//           <DxcFlex direction="column" gap="1.5rem">
//             {loginLogo && (
//               <LogoContainer>
//                 <img src={loginLogo} alt="Logo" />
//               </LogoContainer>
//             )}

//             <TitleContainer>
//               <DxcTypography
//                 fontSize="1.25rem"
//                 fontWeight="400"
//                 textAlign="center"
//               >
//                 Sign in to your account
//               </DxcTypography>
//             </TitleContainer>

//             <DxcFlex direction="column" gap="1rem">
//               <DxcTextInput
//                 label="Username"
//                 value=""
//                 size="fillParent"
//                 placeholder=""
//               />
//               <DxcPasswordInput
//                 label="Password"
//                 value=""
//                 size="fillParent"
//                 placeholder=""
//               />
//             </DxcFlex>

//             <DxcFlex justifyContent="flex-end">
//               <DxcLink href="#" underlined>
//                 Forgot password?
//               </DxcLink>
//             </DxcFlex>

//             <DxcButton
//               mode="primary"
//               label="Sign in"
//               size={{ width: "fillParent" }}
//             />
//           </DxcFlex>
//         </LoginCard>
//       </LoginContainer>
//     </ScaledPreviewContainer>
//   );
// };

// const LoginContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: ${(props) =>
//     props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-color: ${(props) =>
//     props.backgroundImage ? "transparent" : "#f5f5f5"};
//   position: relative;
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 150px;
//   max-height: 50px;
//   margin: 0 auto;

//   img {
//     max-width: 100%;
//     max-height: 100%;
//     object-fit: contain;
//   }
// `;

// const LoginCard = styled.div`
//   background: white;
//   border-radius: 4px;
//   padding: 48px 40px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   width: 100%;
//   max-width: 420px;
// `;

// const TitleContainer = styled.div`
//   text-align: center;
// `;

// export default LoginPreview;

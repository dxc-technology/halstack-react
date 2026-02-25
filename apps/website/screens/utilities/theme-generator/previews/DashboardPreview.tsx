// import React, { useState } from "react";
// import {
//   DxcApplicationLayout,
//   DxcContainer,
//   DxcFlex,
//   DxcTypography,
//   DxcGrid,
//   DxcCard,
//   DxcHeading,
//   DxcInset,
//   DxcBadge,
//   DxcSpinner,
//   DxcDivider,
//   DxcButton,
//   DxcAvatar,
// } from "@dxc-technology/halstack-react";
// import { useThemeStore } from "../../stores/themeStore";
// import ScaledPreviewContainer from "../components/ScaledPreviewContainer";

// const TabContent = () => {
//   return (
//     <DxcFlex gap="2rem" wrap="wrap">
//       <DxcContainer width="48%">
//         <DxcCard imageSrc="" imageBgColor="#fabada">
//           <DxcInset space="1rem">
//             <DxcFlex direction="column" gap="1rem">
//               <DxcHeading level={3} text="Server Status" />
//               <DxcTypography>All systems operational.</DxcTypography>
//               <DxcFlex
//                 justifyContent="center"
//                 alignItems="center"
//                 style={{
//                   height: "100px",
//                   background: "#e6f4ea",
//                   borderRadius: "8px",
//                 }}
//               >
//                 <DxcTypography
//                   color="#137333"
//                   fontWeight="bold"
//                   fontSize="2rem"
//                 >
//                   99.9%
//                 </DxcTypography>
//               </DxcFlex>
//             </DxcFlex>
//           </DxcInset>
//         </DxcCard>
//       </DxcContainer>

//       <DxcContainer width="48%">
//         <DxcCard>
//           <DxcInset space="1rem">
//             <DxcFlex direction="column" gap="1rem">
//               <DxcHeading level={3} text="Active Users" />
//               <DxcTypography>Current active sessions.</DxcTypography>
//               <DxcFlex
//                 justifyContent="center"
//                 alignItems="center"
//                 style={{
//                   height: "100px",
//                   background: "#e8f0fe",
//                   borderRadius: "8px",
//                 }}
//               >
//                 <DxcTypography
//                   color="#1967d2"
//                   fontWeight="bold"
//                   fontSize="2rem"
//                 >
//                   1,245
//                 </DxcTypography>
//               </DxcFlex>
//             </DxcFlex>
//           </DxcInset>
//         </DxcCard>
//       </DxcContainer>

//       <DxcContainer width="100%">
//         <DxcCard>
//           <DxcInset space="1rem">
//             <DxcFlex direction="column" gap="1rem">
//               <DxcHeading level={3} text="Recent Activity" />
//               <DxcTypography>Log of recent system events.</DxcTypography>
//               <div
//                 style={{
//                   background: "#f8f9fa",
//                   padding: "1rem",
//                   borderRadius: "4px",
//                 }}
//               >
//                 <DxcFlex direction="column" gap="0.5rem">
//                   <DxcTypography fontSize="0.875rem">
//                     10:00 AM - System backup completed
//                   </DxcTypography>
//                   <DxcTypography fontSize="0.875rem">
//                     09:45 AM - New user registered
//                   </DxcTypography>
//                   <DxcTypography fontSize="0.875rem">
//                     09:30 AM - Database optimized
//                   </DxcTypography>
//                 </DxcFlex>
//               </div>
//             </DxcFlex>
//           </DxcInset>
//         </DxcCard>
//       </DxcContainer>
//     </DxcFlex>
//   );
// };

// const DashboardPreview = () => {
//   const currentThemeData = useThemeStore((state) => state.currentThemeData);
//   const { mainLogo, companyName } = currentThemeData || {};

//   const logo = {
//     src: mainLogo,
//     alt: "Company logo",
//   };

//   const tabLabel = (label) => (
//     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//       {label}
//     </div>
//   );
//   const groupItems = [
//     {
//       title: "Section 1",
//       items: [
//         {
//           label: "Grouped Item 1",
//           icon: "favorite",
//           items: [
//             { label: "Item 1", icon: "person" },
//             {
//               label: "Grouped Item 2",
//               items: [
//                 {
//                   label: "Item 2",
//                   icon: "bookmark",
//                   badge: <DxcBadge color="primary" label="Experimental" />,
//                 },
//                 { label: "Selected Item 3" },
//               ],
//             },
//           ],
//           badge: <DxcBadge color="success" label="New" />,
//         },
//         { label: "Item 4", icon: "key" },
//       ],
//     },
//     {
//       title: "Section 2",
//       items: [
//         { label: "Item 5", icon: "person" },
//         {
//           label: "Grouped Item 6",
//           items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }],
//         },
//         { label: "Item 9" },
//       ],
//     },
//   ];

//   return (
//     <ScaledPreviewContainer scale={0.45} width={2120}>
//       <DxcApplicationLayout
//         sidenav={<DxcApplicationLayout.Sidenav navItems={groupItems} />}
//       >
//         <DxcApplicationLayout.Main>
//           <DxcInset space="3rem">
//             <DxcFlex direction="column" gap="2rem">
//               <DxcFlex gap="2rem">
//                 <DxcContainer
//                   width="50%"
//                   background={{ color: "var(--border-color-neutral-brighter)" }}
//                   height="430px"
//                   borderRadius="var(--border-radius-s)"
//                   boxShadow="var(--shadow-200)"
//                 >
//                   <DxcInset space="var(--spacing-padding-xs)">
//                     <DxcFlex
//                       direction="column"
//                       gap="var(--spacing-gap-xl)"
//                       alignItems="center"
//                     >
//                       <DxcFlex justifyContent="space-between" width="100%">
//                         <DxcHeading text={"Availability"} level={3} />
//                         <DxcButton mode="tertiary" icon="open_in_new" />
//                       </DxcFlex>

//                       <DxcSpinner value={"70"} showValue />
//                       <DxcTypography
//                         fontSize="var(--font-size-xs)"
//                         color="var(--text-color-neutral)"
//                         fontWeight="var(--font-weight-semibold)"
//                       >
//                         Uptime over the last 24 hours
//                       </DxcTypography>
//                     </DxcFlex>
//                     <DxcInset horizontal="var(--spacing-padding-xl)">
//                       <DxcInset top="var(--spacing-padding-xl)">
//                         <DxcDivider
//                           orientation="horizontal"
//                           color="var(--border-color-neutral)"
//                         />
//                       </DxcInset>
//                       <DxcInset
//                         space="var(--spacing-padding-xs)"
//                         top="var(--spacing-padding-xl)"
//                       >
//                         <DxcFlex
//                           direction="column"
//                           alignItems="center"
//                           gap="var(--spacing-gap-xs)"
//                           alignSelf="stretch"
//                         >
//                           <DxcTypography
//                             fontSize="var(--font-size-24)"
//                             fontWeight="var(--font-weight-semibold)"
//                             color="#37A526"
//                           >
//                             0
//                           </DxcTypography>
//                           <DxcTypography
//                             fontSize="var(--font-size-xs)"
//                             fontWeight="var(--font-weight-semibold)"
//                             color="var(--text-color-neutral)"
//                           >
//                             Detected outages in the last 24 hours
//                           </DxcTypography>
//                         </DxcFlex>
//                       </DxcInset>
//                     </DxcInset>
//                   </DxcInset>
//                 </DxcContainer>

//                 <DxcContainer
//                   width="50%"
//                   background={{ color: "var(--border-color-neutral-brighter)" }}
//                   height="430px"
//                   borderRadius="var(--border-radius-s)"
//                   boxShadow="var(--shadow-200)"
//                 >
//                   <div
//                     style={{
//                       height: "100%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <DxcFlex
//                       direction="column"
//                       gap="var(--spacing-gap-xl)"
//                       alignItems="center"
//                     >
//                       <DxcFlex justifyContent="space-between">
//                         <DxcHeading text={"Performance"} level={3} />
//                         <DxcButton mode="tertiary" icon="open_in_new" />
//                       </DxcFlex>

//                       <DxcFlex
//                         direction="column"
//                         alignItems="center"
//                         gap="var(--spacing-gap-l)"
//                       >
//                         <DxcTypography
//                           fontSize="var(--font-size-48)"
//                           fontWeight="var(--font-weight-bold)"
//                           color="#D06C18"
//                         >
//                           N/A
//                         </DxcTypography>
//                         <DxcTypography
//                           fontSize="var(--font-size-xs)"
//                           color="var(--text-color-neutral)"
//                         >
//                           95th pctl. response time
//                         </DxcTypography>
//                       </DxcFlex>

//                       <DxcInset top="var(--spacing-padding-xl)" width="100%">
//                         <DxcFlex
//                           justifyContent="space-around"
//                           gap="var(--spacing-gap-l)"
//                         >
//                           <DxcFlex direction="column" alignItems="center">
//                             <DxcTypography
//                               fontSize="var(--font-size-24)"
//                               fontWeight="var(--font-weight-bold)"
//                               color="#D06C18"
//                             >
//                               N/A
//                             </DxcTypography>
//                             <DxcTypography fontSize="var(--font-size-xs)">
//                               Avg actions per session
//                             </DxcTypography>
//                           </DxcFlex>
//                           <DxcFlex direction="column" alignItems="center">
//                             <DxcTypography
//                               fontSize="var(--font-size-24)"
//                               fontWeight="var(--font-weight-bold)"
//                               color="#D06C18"
//                             >
//                               N/A
//                             </DxcTypography>
//                             <DxcTypography fontSize="var(--font-size-xs)">
//                               Bounce rate
//                             </DxcTypography>
//                           </DxcFlex>
//                           <DxcFlex direction="column" alignItems="center">
//                             <DxcTypography
//                               fontSize="var(--font-size-24)"
//                               fontWeight="var(--font-weight-bold)"
//                               color="#D06C18"
//                             >
//                               N/A
//                             </DxcTypography>
//                             <DxcTypography fontSize="var(--font-size-xs)">
//                               User sessions
//                             </DxcTypography>
//                           </DxcFlex>
//                         </DxcFlex>
//                       </DxcInset>
//                     </DxcFlex>
//                   </div>
//                 </DxcContainer>
//               </DxcFlex>

//               <DxcFlex gap="2rem" justifyContent="center">
//                 <DxcContainer
//                   width="32%"
//                   background={{ color: "var(--border-color-neutral-brighter)" }}
//                   height="200px"
//                   borderRadius="var(--border-radius-s)"
//                   boxShadow="var(--shadow-200)"
//                 >
//                   <div
//                     style={{
//                       height: "100%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <DxcFlex direction="column" gap="var(--spacing-gap-m)">
//                       <DxcFlex justifyContent="center" gap="1rem">
//                         <DxcHeading text={"Access management"} level={3} />
//                         <DxcButton mode="tertiary" icon="open_in_new" />
//                       </DxcFlex>
//                       <DxcFlex
//                         justifyContent="space-around"
//                         gap="var(--spacing-gap-l)"
//                       >
//                         <DxcFlex direction="column" alignItems="center">
//                           <DxcTypography
//                             fontSize="var(--font-size-24)"
//                             fontWeight="var(--font-weight-bold)"
//                             color="#37A526"
//                           >
//                             3
//                           </DxcTypography>
//                           <DxcTypography fontSize="var(--font-size-xs)">
//                             Total users
//                           </DxcTypography>
//                         </DxcFlex>
//                         <DxcFlex direction="column" alignItems="center">
//                           <DxcTypography
//                             fontSize="var(--font-size-24)"
//                             fontWeight="var(--font-weight-bold)"
//                             color="var(--text-color-neutral)"
//                           >
//                             0
//                           </DxcTypography>
//                           <DxcTypography fontSize="var(--font-size-xs)">
//                             MFA enrollments
//                           </DxcTypography>
//                         </DxcFlex>
//                         <DxcFlex direction="column" alignItems="center">
//                           <DxcTypography
//                             fontSize="var(--font-size-24)"
//                             fontWeight="var(--font-weight-bold)"
//                             color="var(--text-color-neutral)"
//                           >
//                             0
//                           </DxcTypography>
//                           <DxcTypography fontSize="var(--font-size-xs)">
//                             Login success
//                           </DxcTypography>
//                         </DxcFlex>
//                       </DxcFlex>
//                     </DxcFlex>
//                   </div>
//                 </DxcContainer>

//                 <DxcContainer
//                   width="32%"
//                   background={{ color: "var(--border-color-neutral-brighter)" }}
//                   height="200px"
//                   borderRadius="var(--border-radius-s)"
//                   boxShadow="var(--shadow-200)"
//                 >
//                   <div
//                     style={{
//                       height: "100%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <DxcFlex direction="column" gap="var(--spacing-gap-m)">
//                       <DxcFlex justifyContent="center" gap="1rem">
//                         <DxcHeading text={"API"} level={3} />
//                         <DxcButton mode="tertiary" icon="open_in_new" />
//                       </DxcFlex>
//                       <DxcFlex
//                         justifyContent="space-around"
//                         gap="var(--spacing-gap-l)"
//                       >
//                         <DxcFlex direction="column" alignItems="center">
//                           <DxcTypography
//                             fontSize="var(--font-size-24)"
//                             fontWeight="var(--font-weight-bold)"
//                             color="var(--text-color-neutral)"
//                           >
//                             N/A
//                           </DxcTypography>
//                           <DxcTypography fontSize="var(--font-size-xs)">
//                             Secure API calls
//                           </DxcTypography>
//                         </DxcFlex>
//                         <DxcFlex direction="column" alignItems="center">
//                           <DxcTypography
//                             fontSize="var(--font-size-24)"
//                             fontWeight="var(--font-weight-bold)"
//                             color="var(--text-color-neutral)"
//                           >
//                             N/A
//                           </DxcTypography>
//                           <DxcTypography fontSize="var(--font-size-xs)">
//                             API calls failed
//                           </DxcTypography>
//                         </DxcFlex>
//                       </DxcFlex>
//                     </DxcFlex>
//                   </div>
//                 </DxcContainer>

//                 <DxcContainer
//                   width="32%"
//                   background={{ color: "var(--border-color-neutral-brighter)" }}
//                   height="430px"
//                   borderRadius="var(--border-radius-s)"
//                   boxShadow="var(--shadow-200)"
//                 >
//                   <DxcInset space="var(--spacing-padding-xs)">
//                     <DxcFlex direction="column" gap="1rem">
//                       <DxcFlex alignItems="center" gap="0.5rem">
//                         <DxcHeading text={"Agentic AI Insights"} level={3} />
//                       </DxcFlex>
//                       <DxcTypography fontSize="var(--font-size-xs)">
//                         STABLE: Ingenium 100% availability with custom version
//                         demonstrating 4+ months long-term stability. July 2025
//                         deployment providing extended operational excellence.
//                         Warning-level performance metrics require monitoring but
//                         service reliable. (Analysis ID:
//                         analysis_220fb7ab605e4f03ab6133b2dce1865f).
//                       </DxcTypography>
//                     </DxcFlex>
//                   </DxcInset>
//                 </DxcContainer>
//               </DxcFlex>
//             </DxcFlex>
//           </DxcInset>
//         </DxcApplicationLayout.Main>
//       </DxcApplicationLayout>
//     </ScaledPreviewContainer>
//   );
// };

// export default DashboardPreview;

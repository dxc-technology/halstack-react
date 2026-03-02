//
// import {
//   DxcApplicationLayout,
//   DxcHeading,
//   DxcParagraph,
//   DxcContainer,
//   DxcFlex,
// } from "@dxc-technology/halstack-react";
// import { useThemeStore } from "../../stores/themeStore";
// import ScaledPreviewContainer from "../components/ScaledPreviewContainer";

// const sidenavItems = [
//   {
//     label: "Sidenav Content",
//     icon: "tab",
//     selected: true,
//   },
//   {
//     label: "Sidenav Content",
//     icon: "capture",
//   },
//   {
//     label: "Sidenav Content",
//     icon: "folder",
//   },
//   {
//     label: "Sidenav Content",
//     icon: "picture_in_picture_mobile",
//   },
//   {
//     label: "Sidenav Content",
//     icon: "picture_as_pdf",
//   },
// ];

// const BasicApplicationLayoutPreview = () => {
//   const currentThemeData = useThemeStore((state) => state.currentThemeData);
//   const { mainLogo, companyName, footerLogo } = currentThemeData || {};

//   const logo = {
//     src: mainLogo,
//     alt: "Company logo",
//   };
//   const footerLogoObj = {
//     src: footerLogo,
//     alt: "Footer logo",
//   };

//   return (
//     <ScaledPreviewContainer scale={0.6} width={2120} height={1440}>
//       <DxcApplicationLayout
//         logo={logo}
//         footer={
//           <DxcApplicationLayout.Footer
//             leftContent={
//               <>
//                 <DxcParagraph>
//                   Application description, version, notes, and contact details
//                   can go here for additional information
//                 </DxcParagraph>
//                 <DxcParagraph>
//                   <strong>Contact Us:</strong> email@dxc.com
//                 </DxcParagraph>
//               </>
//             }
//             logo={footerLogoObj}
//           />
//         }
//         header={<DxcApplicationLayout.Header appTitle={companyName} />}
//         sidenav={<DxcApplicationLayout.Sidenav navItems={sidenavItems} />}
//       >
//         <DxcApplicationLayout.Main>
//           <DxcContainer
//             width="100%"
//             height="100%"
//             background={{ color: "var(--color-bg-neutral-lighter)" }}
//             padding="var(--spacing-gap-l)"
//             boxSizing="border-box"
//           >
//             <DxcFlex direction="column" gap="var(--spacing-gap-l)" fullHeight>
//               <DxcHeading text="Example Application Layout" level={4} as="h2" />
//               <DxcParagraph>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//                 vehicula quam turpis, ac sodales arcu efficitur quis. Duis ante
//                 lacus, dictum eu eleifend ac, iaculis vel lectus. Integer non
//                 ante id purus consectetur luctus. Duis et odio a odio placerat
//                 blandit. Cras ultricies ante vel turpis ultricies, a suscipit
//                 velit ultricies. Nam risus leo, laoreet ut augue ac, sagittis
//                 iaculis diam. Praesent nec turpis leo. Aliquam posuere, orci a
//                 pharetra convallis, erat est blandit dolor, nec aliquet tortor
//                 sapien ac felis. Maecenas laoreet, nisi a ultrices cursus, leo
//                 ipsum rutrum risus, at interdum enim enim non eros. Donec
//                 placerat, ex vitae pulvinar maximus, sapien odio varius massa,
//                 vel pulvinar massa ipsum vitae ipsum.
//               </DxcParagraph>
//               <DxcParagraph>
//                 Nullam blandit convallis mi, sit amet pretium sapien auctor ut.
//                 Etiam eu magna purus. Quisque pellentesque mollis libero eget
//                 ullamcorper. Vestibulum ante ipsum primis in faucibus orci
//                 luctus et ultrices posuere cubilia curae; Nunc egestas, nisi
//                 consequat mollis vestibulum, nulla felis pulvinar neque, non
//                 aliquam eros elit quis diam. Curabitur odio tortor, sagittis at
//                 neque sed, faucibus varius sem. Ut rutrum massa eros, nec luctus
//                 orci hendrerit in. Nam hendrerit sed magna in tincidunt. Proin
//                 pretium, orci id placerat maximus, est purus facilisis est, sed
//                 euismod turpis urna id enim. Morbi tristique efficitur
//                 hendrerit. Etiam ut viverra est. Vestibulum at ex a nisl
//                 vulputate accumsan et nec elit. Donec sollicitudin justo non
//                 odio viverra, sit amet luctus velit facilisis. Nam tortor dui,
//                 dictum vitae sapien fringilla, tempus ullamcorper lectus.
//               </DxcParagraph>
//               <DxcParagraph>
//                 Sed quam ipsum, pharetra sed tortor pulvinar, egestas pulvinar
//                 quam. Vestibulum mauris mi, iaculis eu augue id, bibendum
//                 fermentum massa. Etiam a purus accumsan, tristique arcu eget,
//                 laoreet purus. Morbi in pellentesque magna, ut condimentum urna.
//                 Duis erat nisi, tempor a risus quis, porta commodo ante. Donec
//                 ex sem, viverra a pulvinar a, consectetur nec risus. Nam vitae
//                 risus purus. Morbi porta orci a tincidunt pulvinar. Curabitur
//                 eleifend tincidunt eros, vel pretium urna malesuada ac.
//               </DxcParagraph>
//               <DxcParagraph>
//                 Integer rutrum faucibus leo. Sed vel tincidunt urna.
//                 Pellentesque quis risus vel dui elementum laoreet. Quisque non
//                 ornare nunc. Donec vestibulum mauris et gravida varius.
//                 Suspendisse aliquam, libero nec sollicitudin commodo, sem tellus
//                 cursus arcu, quis pellentesque mauris nisl euismod libero. Etiam
//                 vitae sagittis sem. Suspendisse potenti. Integer scelerisque
//                 mattis turpis varius rutrum.
//               </DxcParagraph>
//               <DxcParagraph>
//                 Praesent faucibus diam metus, eu blandit quam rutrum ut.
//                 Maecenas non risus dapibus nulla congue rutrum at vitae risus.
//                 Etiam arcu augue, maximus eu justo ac, ultrices suscipit dui.
//                 Pellentesque turpis quam, accumsan at arcu vel, feugiat
//                 ultricies neque. Nullam sit amet ipsum feugiat, facilisis eros
//                 sit amet, bibendum enim. Sed sagittis, mauris at ullamcorper
//                 fringilla, lorem nibh pretium magna, ac tristique turpis nulla
//                 id dui. Praesent gravida congue odio, et commodo metus tristique
//                 sed. Class aptent taciti sociosqu ad litora torquent per conubia
//                 nostra, per inceptos himenaeos. Etiam eleifend pretium rhoncus.
//                 Pellentesque id interdum nunc. Mauris sit amet posuere libero.
//                 Aenean et eleifend quam. Vestibulum eu ex vitae nulla efficitur
//                 sagittis id vitae elit. Nullam vehicula sollicitudin libero id
//                 tristique. Aliquam pulvinar posuere nibh quis fringilla. Integer
//                 placerat massa orci, ut accumsan elit iaculis ac.
//               </DxcParagraph>
//             </DxcFlex>
//           </DxcContainer>
//         </DxcApplicationLayout.Main>
//       </DxcApplicationLayout>
//     </ScaledPreviewContainer>
//   );
// };

// export default BasicApplicationLayoutPreview;

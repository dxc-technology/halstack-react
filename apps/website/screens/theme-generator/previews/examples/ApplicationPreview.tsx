// import React, { useState } from "react";
// import {
//   DxcApplicationLayout,
//   DxcFlex,
//   DxcBadge,
//   DxcButton,
//   DxcAvatar,
//   DxcResultsetTable,
//   DxcDataGrid,
//   DxcHeading,
//   DxcParagraph,
//   DxcDivider,
// } from "@dxc-technology/halstack-react";

// const columnsDatagrid = [
//   {
//     key: "policyId",
//     label: "Policy ID",
//     sortable: true,
//   },
//   {
//     key: "memberName",
//     label: "Member Name",
//     sortable: true,
//   },
//   {
//     key: "policyType",
//     label: "Policy Type",
//     sortable: true,
//   },
//   {
//     key: "startDate",
//     label: "Start Date",
//     sortable: true,
//   },
//   {
//     key: "endDate",
//     label: "End Date",
//     sortable: true,
//   },
//   {
//     key: "premium",
//     label: "Premium",
//     sortable: true,
//   },
//   {
//     key: "status",
//     label: "Status",
//     sortable: true,
//   },
// ];

// const rowsDatagrid = [
//   {
//     policyId: "POL-1001",
//     memberName: "John Doe",
//     policyType: "Health Insurance",
//     startDate: "Jan 1, 2022",
//     endDate: "Jan 1, 2025",
//     premium: "$450/month",
//     status: "Active",
//     childRows: [
//       {
//         policyId: "POL-1001-1",
//         memberName: "- Basic Coverage",
//         policyType: "Medical",
//         startDate: "Jan 1, 2022",
//         endDate: "Jan 1, 2025",
//         premium: "$250/month",
//         status: "Active",
//       },
//       {
//         policyId: "POL-1001-2",
//         memberName: "- Dental Coverage",
//         policyType: "Dental",
//         startDate: "Jan 1, 2022",
//         endDate: "Jan 1, 2025",
//         premium: "$100/month",
//         status: "Active",
//       },
//       {
//         policyId: "POL-1001-3",
//         memberName: "- Vision Coverage",
//         policyType: "Vision",
//         startDate: "Jan 1, 2022",
//         endDate: "Jan 1, 2025",
//         premium: "$100/month",
//         status: "Active",
//       },
//     ],
//   },
//   {
//     policyId: "POL-1002",
//     memberName: "Jane Doe",
//     policyType: "Life Insurance",
//     startDate: "Jun 15, 2021",
//     endDate: "Jun 15, 2026",
//     premium: "$125/month",
//     status: "Active",
//     childRows: [
//       {
//         policyId: "POL-1002-1",
//         memberName: "- Term Life",
//         policyType: "Life",
//         startDate: "Jun 15, 2021",
//         endDate: "Jun 15, 2026",
//         premium: "$125/month",
//         status: "Active",
//       },
//     ],
//   },
//   {
//     policyId: "POL-1003",
//     memberName: "Emily Doe",
//     policyType: "Auto Insurance",
//     startDate: "Mar 20, 2023",
//     endDate: "Mar 20, 2024",
//     premium: "$180/month",
//     status: "Active",
//     childRows: [
//       {
//         policyId: "POL-1003-1",
//         memberName: "- Liability Coverage",
//         policyType: "Auto",
//         startDate: "Mar 20, 2023",
//         endDate: "Mar 20, 2024",
//         premium: "$90/month",
//         status: "Active",
//       },
//       {
//         policyId: "POL-1003-2",
//         memberName: "- Collision Coverage",
//         policyType: "Auto",
//         startDate: "Mar 20, 2023",
//         endDate: "Mar 20, 2024",
//         premium: "$90/month",
//         status: "Active",
//       },
//     ],
//   },
//   {
//     policyId: "POL-1004",
//     memberName: "Michael Doe",
//     policyType: "Home Insurance",
//     startDate: "Nov 5, 2022",
//     endDate: "Nov 5, 2025",
//     premium: "$200/month",
//     status: "Pending Renewal",
//     childRows: [
//       {
//         policyId: "POL-1004-1",
//         memberName: "- Property Coverage",
//         policyType: "Home",
//         startDate: "Nov 5, 2022",
//         endDate: "Nov 5, 2025",
//         premium: "$150/month",
//         status: "Pending Renewal",
//       },
//       {
//         policyId: "POL-1004-2",
//         memberName: "- Liability Coverage",
//         policyType: "Home",
//         startDate: "Nov 5, 2022",
//         endDate: "Nov 5, 2025",
//         premium: "$50/month",
//         status: "Pending Renewal",
//       },
//     ],
//   },
//   {
//     policyId: "POL-1005",
//     memberName: "Sarah Doe",
//     policyType: "Travel Insurance",
//     startDate: "Feb 10, 2023",
//     endDate: "Feb 10, 2024",
//     premium: "$75/month",
//     status: "Expired",
//   },
// ];
// const items = [
//   {
//     label: "Policies",
//     icon: "description",
//     items: [
//       { label: "All Policies", icon: "list", selected: true },
//       { label: "Active", icon: "check_circle" },
//       { label: "Pending", icon: "schedule" },
//       { label: "Expired", icon: "cancel" },
//     ],
//     badge: <DxcBadge color="info" label="5" />,
//   },
//   { label: "Claims", icon: "assignment" },
//   { label: "Documents", icon: "folder" },
//   { label: "Payments", icon: "payment" },
// ];

// const columns = [
//   { displayValue: "Name" },
//   { displayValue: "Relationship" },
//   { displayValue: "Age" },
//   { displayValue: "Occupation" },
//   { displayValue: "Coverage Amount" },
//   { displayValue: "Actions" },
// ];

// const actions = [
//   {
//     icon: "edit",
//     title: "Edit Member",
//     onClick: () => {},
//   },
//   {
//     icon: "visibility",
//     title: "View Details",
//     onClick: () => {},
//   },
// ];

// const rows = [
//   [
//     { displayValue: "John Doe" },
//     { displayValue: "Policyholder" },
//     { displayValue: "42" },
//     { displayValue: "Software Engineer" },
//     { displayValue: "$500,000" },
//     { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
//   ],
//   [
//     { displayValue: "Jane Doe" },
//     { displayValue: "Spouse" },
//     { displayValue: "40" },
//     { displayValue: "Teacher" },
//     { displayValue: "$300,000" },
//     { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
//   ],
//   [
//     { displayValue: "Emily Doe" },
//     { displayValue: "Daughter" },
//     { displayValue: "14" },
//     { displayValue: "Student" },
//     { displayValue: "$100,000" },
//     { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
//   ],
//   [
//     { displayValue: "Michael Doe" },
//     { displayValue: "Son" },
//     { displayValue: "10" },
//     { displayValue: "Student" },
//     { displayValue: "$100,000" },
//     { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
//   ],
// ];

// const ApplicationPreview = () => {
//   const currentThemeData = useThemeStore((state) => state.currentThemeData);
//   const { mainLogo, companyName, footerLogo } = currentThemeData || {};
//   const [selectedRows, setSelectedRows] = useState(new Set());

//   const logo = {
//     src: mainLogo,
//     alt: "Company logo",
//   };

//   return (
//     <ScaledPreviewContainer scale={0.6} width={2120}>
//       <DxcApplicationLayout
//         logo={logo}
//         footer={
//           <DxcApplicationLayout.Footer
//             logo={{ src: footerLogo, alt: "Footer logo" }}
//           />
//         }
//         header={
//           <DxcApplicationLayout.Header
//             appTitle={companyName || "Insurance Portal"}
//             navItems={items}
//             sideContent={
//               <>
//                 <DxcButton
//                   icon="settings"
//                   title="Settings"
//                   mode="tertiary"
//                   size={{ height: "medium" }}
//                 />
//                 <DxcAvatar
//                   label="JD"
//                   primaryText="John Doe"
//                   secondaryText="john.doe@example.com"
//                 />
//               </>
//             }
//           />
//         }
//       >
//         <DxcApplicationLayout.Main>
//           <div
//             style={{
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//               marginTop: "var(--spacing-padding-xl)",
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "var(--spacing-gap-xl)",
//               }}
//             >
//               <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
//                 <DxcHeading level={1} text="Family Insurance Dashboard" />
//                 <DxcParagraph>
//                   Manage your family's insurance policies, view coverage
//                   details, and track policy status all in one place.
//                 </DxcParagraph>
//               </DxcFlex>
//               <DxcDivider />
//               <DxcFlex direction="column" gap="var(--spacing-gap-m)">
//                 <DxcFlex justifyContent="space-between" alignItems="center">
//                   <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
//                     <DxcHeading level={2} text="Family Members" />
//                     <DxcParagraph>
//                       View and manage coverage information for all family
//                       members
//                     </DxcParagraph>
//                   </DxcFlex>
//                   <DxcButton label="Add Member" icon="add" mode="primary" />
//                 </DxcFlex>
//                 <DxcResultsetTable
//                   columns={columns}
//                   rows={rows}
//                   mode="reduced"
//                   itemsPerPage={3}
//                   itemsPerPageOptions={[3, 5, 10]}
//                   totalItems={rows.length}
//                   showGoToPage={true}
//                 />
//               </DxcFlex>
//               <DxcDivider />
//               <DxcFlex direction="column" gap="var(--spacing-gap-m)">
//                 <DxcFlex justifyContent="space-between" alignItems="center">
//                   <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
//                     <DxcHeading level={2} text="Active Policies" />
//                     <DxcParagraph>
//                       Complete overview of all insurance policies associated
//                       with your family
//                     </DxcParagraph>
//                   </DxcFlex>
//                   <DxcFlex gap="var(--spacing-gap-s)">
//                     <DxcButton
//                       label="Download Report"
//                       icon="download"
//                       mode="secondary"
//                     />
//                     <DxcButton label="New Policy" icon="add" mode="primary" />
//                   </DxcFlex>
//                 </DxcFlex>
//                 <DxcDataGrid
//                   columns={columnsDatagrid}
//                   rows={rowsDatagrid}
//                   uniqueRowId="policyId"
//                   selectable
//                   selectedRows={selectedRows}
//                   onSelectRows={setSelectedRows}
//                 />
//               </DxcFlex>
//             </div>
//           </div>
//         </DxcApplicationLayout.Main>
//       </DxcApplicationLayout>
//     </ScaledPreviewContainer>
//   );
// };

// export default ApplicationPreview;

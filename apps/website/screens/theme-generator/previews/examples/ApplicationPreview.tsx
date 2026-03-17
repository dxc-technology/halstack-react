import React, { useState } from "react";
import {
  DxcFlex,
  DxcButton,
  DxcResultsetTable,
  DxcDataGrid,
  DxcHeading,
  DxcParagraph,
  DxcDivider,
  DxcApplicationLayout,
  DxcAvatar,
  DxcBadge,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { GridRow } from "../../../../../../../packages/lib/src/data-grid/types";
import { Logos } from "screens/theme-generator/types";

const columnsDatagrid = [
  {
    key: "policyId",
    label: "Policy ID",
    sortable: true,
  },
  {
    key: "memberName",
    label: "Member Name",
    sortable: true,
  },
  {
    key: "policyType",
    label: "Policy Type",
    sortable: true,
  },
  {
    key: "startDate",
    label: "Start Date",
    sortable: true,
  },
  {
    key: "endDate",
    label: "End Date",
    sortable: true,
  },
  {
    key: "premium",
    label: "Premium",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
];

const rowsDatagrid = [
  {
    policyId: "REC-001",
    memberName: "Primary Record A",
    policyType: "Category Alpha",
    startDate: "Jan 1, 2024",
    endDate: "Dec 31, 2024",
    premium: "$1,000",
    status: "Active",
    childRows: [
      {
        policyId: "REC-001-1",
        memberName: "Sub Record A1",
        policyType: "Subcategory A",
        startDate: "Jan 1, 2024",
        endDate: "Dec 31, 2024",
        premium: "$400",
        status: "Active",
      },
      {
        policyId: "REC-001-2",
        memberName: "Sub Record A2",
        policyType: "Subcategory A",
        startDate: "Jan 1, 2024",
        endDate: "Dec 31, 2024",
        premium: "$600",
        status: "Active",
      },
    ],
  },
  {
    policyId: "REC-002",
    memberName: "Primary Record B",
    policyType: "Category Beta",
    startDate: "Feb 15, 2024",
    endDate: "Feb 14, 2025",
    premium: "$750",
    status: "Active",
    childRows: [
      {
        policyId: "REC-002-1",
        memberName: "Sub Record B1",
        policyType: "Subcategory B",
        startDate: "Feb 15, 2024",
        endDate: "Feb 14, 2025",
        premium: "$750",
        status: "Active",
      },
    ],
  },
  {
    policyId: "REC-003",
    memberName: "Primary Record C",
    policyType: "Category Gamma",
    startDate: "Mar 10, 2024",
    endDate: "Mar 9, 2025",
    premium: "$500",
    status: "In Progress",
    childRows: [
      {
        policyId: "REC-003-1",
        memberName: "Sub Record C1",
        policyType: "Subcategory C",
        startDate: "Mar 10, 2024",
        endDate: "Mar 9, 2025",
        premium: "$250",
        status: "In Progress",
      },
      {
        policyId: "REC-003-2",
        memberName: "Sub Record C2",
        policyType: "Subcategory C",
        startDate: "Mar 10, 2024",
        endDate: "Mar 9, 2025",
        premium: "$250",
        status: "In Progress",
      },
    ],
  },
  {
    policyId: "REC-004",
    memberName: "Primary Record D",
    policyType: "Category Delta",
    startDate: "Apr 1, 2024",
    endDate: "Mar 31, 2025",
    premium: "$900",
    status: "Pending",
    childRows: [
      {
        policyId: "REC-004-1",
        memberName: "Sub Record D1",
        policyType: "Subcategory D",
        startDate: "Apr 1, 2024",
        endDate: "Mar 31, 2025",
        premium: "$500",
        status: "Pending",
      },
      {
        policyId: "REC-004-2",
        memberName: "Sub Record D2",
        policyType: "Subcategory D",
        startDate: "Apr 1, 2024",
        endDate: "Mar 31, 2025",
        premium: "$400",
        status: "Pending",
      },
    ],
  },
  {
    policyId: "REC-005",
    memberName: "Primary Record E",
    policyType: "Category Epsilon",
    startDate: "May 20, 2024",
    endDate: "May 19, 2025",
    premium: "$300",
    status: "Completed",
  },
];

const columns = [
  { displayValue: "Name" },
  { displayValue: "Relationship" },
  { displayValue: "Age" },
  { displayValue: "Occupation" },
  { displayValue: "Coverage Amount" },
  { displayValue: "Actions" },
];

const actions = [
  {
    icon: "edit",
    title: "Edit Member",
    onClick: () => {},
  },
  {
    icon: "visibility",
    title: "View Details",
    onClick: () => {},
  },
];

const rows = [
  [
    { displayValue: "John Doe" },
    { displayValue: "Policyholder" },
    { displayValue: "42" },
    { displayValue: "Software Engineer" },
    { displayValue: "$500,000" },
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
  ],
  [
    { displayValue: "Jane Doe" },
    { displayValue: "Spouse" },
    { displayValue: "40" },
    { displayValue: "Teacher" },
    { displayValue: "$300,000" },
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
  ],
  [
    { displayValue: "Emily Doe" },
    { displayValue: "Daughter" },
    { displayValue: "14" },
    { displayValue: "Student" },
    { displayValue: "$100,000" },
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
  ],
  [
    { displayValue: "Michael Doe" },
    { displayValue: "Son" },
    { displayValue: "10" },
    { displayValue: "Student" },
    { displayValue: "$100,000" },
    { displayValue: <DxcResultsetTable.ActionsCell actions={actions} /> },
  ],
];

const ApplicationPreview = ({ logos }: { logos: Logos }) => {
  const [selectedRows, setSelectedRows] = useState(new Set<string | number>());

  return (
    <DxcApplicationLayout
      logo={logos.mainLogo && logos.mainLogo[0] ? { src: logos.mainLogo[0].preview!, alt: "Main logo" } : undefined}
      footer={
        <DxcApplicationLayout.Footer
          logo={
            logos.footerLogo && logos.footerLogo[0]
              ? { src: logos.footerLogo[0].preview!, alt: "Footer logo" }
              : undefined
          }
        />
      }
      header={
        <DxcApplicationLayout.Header
          appTitle={"App title"}
          navItems={[
            {
              label: "Policies",
              icon: "description",
              items: [
                { label: "All Policies", icon: "list", selected: true },
                { label: "Active", icon: "check_circle" },
                { label: "Pending", icon: "schedule" },
                { label: "Expired", icon: "cancel" },
              ],
              badge: <DxcBadge color="info" label="5" />,
            },
            { label: "Claims", icon: "assignment" },
            { label: "Documents", icon: "folder" },
            { label: "Payments", icon: "payment" },
          ]}
          sideContent={
            <>
              <DxcButton icon="settings" title="Settings" mode="tertiary" size={{ height: "medium" }} />
              <DxcAvatar label="JD" primaryText="John Doe" secondaryText="john.doe@example.com" />
            </>
          }
        />
      }
      sidenav={
        <DxcApplicationLayout.Sidenav
          navItems={[
            {
              label: "Sidenav Content",
              icon: "tab",
              selected: true,
            },
            {
              label: "Sidenav Content",
              icon: "capture",
            },
            {
              label: "Sidenav Content",
              icon: "folder",
            },
            {
              label: "Sidenav Content",
              icon: "picture_in_picture_mobile",
            },
            {
              label: "Sidenav Content",
              icon: "picture_as_pdf",
            },
          ]}
        />
      }
    >
      <DxcApplicationLayout.Main>
        <DxcInset space={"var(--spacing-padding-m)"}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-gap-xl)",
            }}
          >
            <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
              <DxcHeading level={1} text="Family Insurance Dashboard" />
              <DxcParagraph>
                Manage your family's insurance policies, view coverage details, and track policy status all in one
                place.
              </DxcParagraph>
            </DxcFlex>
            <DxcDivider />
            <DxcFlex direction="column" gap="var(--spacing-gap-m)">
              <DxcFlex justifyContent="space-between" alignItems="center">
                <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
                  <DxcHeading level={2} text="Family Members" />
                  <DxcParagraph>View and manage coverage information for all family members</DxcParagraph>
                </DxcFlex>
                <DxcButton label="Add Member" icon="add" mode="primary" />
              </DxcFlex>
              <DxcResultsetTable
                columns={columns}
                rows={rows}
                mode="reduced"
                itemsPerPage={3}
                itemsPerPageOptions={[3, 5, 10]}
                showGoToPage={true}
              />
            </DxcFlex>
            <DxcDivider />
            <DxcFlex direction="column" gap="var(--spacing-gap-m)">
              <DxcFlex justifyContent="space-between" alignItems="center">
                <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
                  <DxcHeading level={2} text="Active Policies" />
                  <DxcParagraph>Complete overview of all insurance policies associated with your family</DxcParagraph>
                </DxcFlex>
                <DxcFlex gap="var(--spacing-gap-s)">
                  <DxcButton label="Download Report" icon="download" mode="secondary" />
                  <DxcButton label="New Policy" icon="add" mode="primary" />
                </DxcFlex>
              </DxcFlex>
              <DxcDataGrid
                columns={columnsDatagrid}
                rows={rowsDatagrid as GridRow[]}
                uniqueRowId="policyId"
                selectable
                selectedRows={selectedRows}
                onSelectRows={setSelectedRows}
              />
            </DxcFlex>
          </div>
        </DxcInset>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

export default ApplicationPreview;

import { DxcContextualMenu, DxcBadge } from "@dxc-technology/halstack-react";

const contextualMenuItems = [
  {
    title: "File",
    items: [
      {
        label: "New",
        icon: "note_add",
        items: [
          { label: "Project" },
          {
            label: "Template",
            items: [
              {
                label: "Web Template",
                icon: "web",
                badge: <DxcBadge color="primary" label="Beta" />,
              },
              { label: "Mobile Template", selectedByDefault: true },
            ],
          },
        ],
        badge: <DxcBadge color="success" label="New" />,
      },
      { label: "Open", icon: "folder_open" },
    ],
  },
  {
    title: "Edit",
    items: [
      { label: "Undo" },
      {
        label: "Preferences",
        items: [{ label: "Theme" }, { label: "Notifications" }],
      },
      { label: "Redo" },
    ],
  },
];

const ContextualMenuPreview = () => {
  return <DxcContextualMenu items={contextualMenuItems} />;
};

export default ContextualMenuPreview;

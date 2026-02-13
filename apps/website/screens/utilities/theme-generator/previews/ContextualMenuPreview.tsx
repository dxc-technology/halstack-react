import { DxcInset, DxcContainer, DxcContextualMenu, DxcBadge } from "@dxc-technology/halstack-react";

const contextualMenuItems = [
  {
    title: "Section 1",
    items: [
      {
        label: "Grouped Item 1",
        icon: "favorite",
        items: [
          { label: "Item 1" },
          {
            label: "Grouped Item 2",
            items: [
              {
                label: "Item 2",
                icon: "bookmark",
                badge: <DxcBadge color="primary" label="Experimental" />,
              },
              { label: "Selected Item 3", selectedByDefault: true },
            ],
          },
        ],
        badge: <DxcBadge color="success" label="New" />,
      },
      { label: "Item 4", icon: "key" },
    ],
  },
  {
    title: "Section 2",
    items: [
      { label: "Item 5" },
      {
        label: "Grouped Item 6",
        items: [{ label: "Item 7" }, { label: "Item 8" }],
      },
      { label: "Item 9" },
    ],
  },
];

const ContextualPreview = () => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcContainer width="300px">
        <DxcContextualMenu items={contextualMenuItems} />
      </DxcContainer>
    </DxcInset>
  );
};

export default ContextualPreview;

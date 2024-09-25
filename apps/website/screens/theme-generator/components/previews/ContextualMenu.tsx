import { DxcBadge, DxcContextualMenu } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const items = [
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
                badge: <DxcBadge color="purple" label="Experimental" />,
              },
              { label: "Selected Item 3", selectedByDefault: true },
            ],
          },
        ],
        badge: <DxcBadge color="green" label="New" />,
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

const ContextualMenu = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcContextualMenu items={items} />
    </Mode>
  </PreviewContainer>
);

export default ContextualMenu;

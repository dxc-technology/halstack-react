import { DxcBadge, DxcContextualMenu, DxcContainer, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const items = [
    {
      items: [
        { 
          label: "Collaboration & access", 
          icon: "group", 
          onSelect: () => { console.log("Collaboration & access"); }
        },
        {
          label: "Comments",
          icon: "forum",
          badge: <DxcBadge mode="notification" label={9} />,
          onSelect: () => { console.log("Comments"); }
        },
        { 
          label: "Pending tasks", 
          icon: "task",
          onSelect: () => { console.log("Pending tasks"); }
        },
      ],
    },
    {
      items: [
        { 
          label: "Apps", 
          icon: "apps", 
          onSelect: () => { console.log("Apps"); } 
        }, 
        { 
          label: "Settings", 
          icon: "settings", 
          onSelect: () => { console.log("Settings"); } 
        }
      ],
    }
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcContainer width="300px">
        <DxcContextualMenu items={items} />
      </DxcContainer>
    </DxcInset>
  );
}`;

const scope = {
  DxcBadge,
  DxcContextualMenu,
  DxcContainer,
  DxcInset,
};

export default { code, scope };

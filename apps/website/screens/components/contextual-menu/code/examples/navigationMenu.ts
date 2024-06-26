import { DxcBadge, DxcContextualMenu, DxcContainer, DxcInset } from "@repo/ui";

const code = `() => {
  const groupItems = [
    {
      title: "Business services",
      items: [
        {
          label: "Home",
          icon: "home",
          items: [
            { label: "Data & statistics" },
            {
              label: "Apps",
              items: [
                {
                  label: "Sales data module",
                  badge: <DxcBadge color="purple" label="Experimental" />,
                },
                { label: "Central platform" },
              ],
            },
          ],
        },
        {
          label: "Data warehouse",
          icon: "database",
          items: [
            {
              label: "Data & statistics",
            },
            {
              label: "Sales performance",
            },
            { 
              label: "Key metrics" 
            },
          ],
        },
      ],
    },
    {
      items: [
        { label: "Support", icon: "support_agent" },
      ],
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcContainer width="300px">
        <DxcContextualMenu items={groupItems} />
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

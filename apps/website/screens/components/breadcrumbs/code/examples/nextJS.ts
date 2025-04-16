import { DxcBreadcrumbs, DxcInset } from "@dxc-technology/halstack-react";
import { useRouter } from "next/router";

const code = `() => {
  const router = useRouter();
  const handleClick = (href) => {
    router.push(href);
  };

  const items = [
    {
      label: "Select component",
      href: "/components/select",
    },
    {
      label: "Specifications",
      href: "/components/select/specifications",
    },
    {
      label: "Design Tokens",
      href: "/components/select/specifications/#design-tokens",
    },
    {
      label: "Color",
    }
  ]; 

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcBreadcrumbs items={items} onItemClick={handleClick} />
    </DxcInset>
  );
}`;

const scope = {
  DxcBreadcrumbs,
  DxcInset,
  useRouter,
};

export default { code, scope };

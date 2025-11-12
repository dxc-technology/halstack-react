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
      label: "Code",
      href: "/components/select/code",
    },
    {
      label: "Examples",
      href: "/components/select/code/#examples",
    },
    {
      label: "Uncontrolled",
    }
  ]; 

  return (
    <DxcInset space="var(--spacing-padding-xl)">
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

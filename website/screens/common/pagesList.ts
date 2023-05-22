type ComponentStatus = "Ready" | "Deprecated" | "Experimental";

export type LinkDetails = {
  label: string;
  path: string;
  status: ComponentStatus;
};

export type LinksSectionDetails = {
  label: string;
  links: LinkDetails[];
};

type NavigationLinks = {
  previousLink: LinkDetails | null;
  nextLink: LinkDetails | null;
};

export const themeGeneratorLinks = [
  "/theme-generator/opinionated-theme/",
  "/theme-generator/advanced-theme/",
];

const overviewLinks: LinkDetails[] = [
  { label: "Introduction", path: "/overview/introduction", status: "Ready" },
  { label: "Releases", path: "/overview/releases", status: "Experimental" },
];
const utilitiesLinks: LinkDetails[] = [
  {
    label: "Halstack Provider",
    path: "/utilities/halstack-provider",
    status: "Ready",
  },
];

const principlesLinks: LinkDetails[] = [
  { label: "Color", path: "/principles/color", status: "Ready" },
  { label: "Spacing", path: "/principles/spacing", status: "Ready" },
  { label: "Typography", path: "/principles/typography", status: "Ready" },
  { label: "Layout", path: "/principles/layout", status: "Ready" },
  { label: "Themes", path: "/principles/themes", status: "Ready" },
  { label: "Localization", path: "/principles/localization", status: "Ready" },
];

const componentsLinks: LinkDetails[] = [
  { label: "Accordion", path: "/components/accordion", status: "Ready" },
  { label: "Alert", path: "/components/alert", status: "Ready" },
  {
    label: "Application layout",
    path: "/components/application-layout",
    status: "Ready",
  },
  { label: "Bleed", path: "/components/bleed", status: "Ready" },
  { label: "Box", path: "/components/box", status: "Ready" },
  {
    label: "Bulleted List",
    path: "/components/bulleted-list",
    status: "Ready",
  },
  { label: "Button", path: "/components/button", status: "Ready" },
  { label: "Card", path: "/components/card", status: "Ready" },
  { label: "Checkbox", path: "/components/checkbox", status: "Ready" },
  { label: "Chip", path: "/components/chip", status: "Ready" },
  { label: "Date Input", path: "/components/date-input", status: "Ready" },
  { label: "Dialog", path: "/components/dialog", status: "Ready" },
  { label: "Dropdown", path: "/components/dropdown", status: "Ready" },
  { label: "File Input", path: "/components/file-input", status: "Ready" },
  { label: "Flex", path: "/components/flex", status: "Ready" },
  { label: "Footer", path: "/components/footer", status: "Ready" },
  { label: "Grid", path: "/components/grid", status: "Experimental" },
  { label: "Header", path: "/components/header", status: "Ready" },
  { label: "Heading", path: "/components/heading", status: "Ready" },
  { label: "Inset", path: "/components/inset", status: "Ready" },
  { label: "Link", path: "/components/link", status: "Ready" },
  { label: "Nav Tabs", path: "/components/nav-tabs", status: "Ready" },
  { label: "Number Input", path: "/components/number-input", status: "Ready" },
  { label: "Paginator", path: "/components/paginator", status: "Ready" },
  { label: "Paragraph", path: "/components/paragraph", status: "Ready" },
  {
    label: "Password Input",
    path: "/components/password-input",
    status: "Ready",
  },
  { label: "Progress Bar", path: "/components/progress-bar", status: "Ready" },
  { label: "Quick Nav", path: "/components/quick-nav", status: "Ready" },
  { label: "Radio Group", path: "/components/radio-group", status: "Ready" },
  {
    label: "Resultset Table",
    path: "/components/resultset-table",
    status: "Ready",
  },
  { label: "Select", path: "/components/select", status: "Ready" },
  { label: "Sidenav", path: "/components/sidenav", status: "Ready" },
  { label: "Slider", path: "/components/slider", status: "Ready" },
  { label: "Spinner", path: "/components/spinner", status: "Ready" },
  { label: "Switch", path: "/components/switch", status: "Ready" },
  { label: "Table", path: "/components/table", status: "Ready" },
  { label: "Tabs", path: "/components/tabs", status: "Ready" },
  { label: "Tag", path: "/components/tag", status: "Ready" },
  { label: "Text Input", path: "/components/text-input", status: "Ready" },
  { label: "Textarea", path: "/components/textarea", status: "Ready" },
  { label: "Toggle Group", path: "/components/toggle-group", status: "Ready" },
  { label: "Typography", path: "/components/typography", status: "Ready" },
  { label: "Wizard", path: "/components/wizard", status: "Ready" },
];

export const LinksSections: LinksSectionDetails[] = [
  { label: "Overview", links: overviewLinks },
  { label: "Principles", links: principlesLinks },
  { label: "Utilities", links: utilitiesLinks },
  { label: "Components", links: componentsLinks },
];

const getCurrentLinkIndex = (links: LinkDetails[], currentPath: string) => {
  let currentLinkIndex = -1;
  let matchedWords = 0;
  links.forEach((link, index) => {
    if (currentPath.startsWith(link.path) && link.path.length > matchedWords) {
      currentLinkIndex = index;
      matchedWords = link.path.length;
    }
  });
  return currentLinkIndex;
};

export const getNavigationLinks = (currentPath: string): NavigationLinks => {
  const links = LinksSections.flatMap((section) => section.links);
  const currentLinkIndex = getCurrentLinkIndex(links, currentPath);
  if (currentLinkIndex === -1) {
    return { previousLink: null, nextLink: null };
  }
  const nextLinkIndex = currentLinkIndex + 1;
  const nextLinkExists = nextLinkIndex < links.length;
  const previousLinkIndex = currentLinkIndex - 1;
  const previousLinkExists = previousLinkIndex >= 0;
  return {
    previousLink: previousLinkExists ? links[previousLinkIndex] : null,
    nextLink: nextLinkExists ? links[nextLinkIndex] : null,
  };
};

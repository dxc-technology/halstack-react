export type LinkDetails = {
  label: string;
  path: string;
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
  { label: "Introduction", path: "/overview/introduction" },
];
const utilitiesLinks: LinkDetails[] = [
  {
    label: "HalstackProvider",
    path: "/utilities/halstackProvider/",
  },
];

const principlesLinks: LinkDetails[] = [
  { label: "Color", path: "/principles/color" },
  { label: "Spacing", path: "/principles/spacing" },
  { label: "Typography", path: "/principles/typography" },
  { label: "Layout", path: "/principles/layout" },
  { label: "Themes", path: "/principles/themes" },
  { label: "Localization", path: "/principles/localization" },
];

const componentsLinks: LinkDetails[] = [
  { label: "Accordion", path: "/components/accordion" },
  { label: "Alert", path: "/components/alert" },
  { label: "Application layout", path: "/components/application-layout" },
  { label: "Bleed", path: "/components/bleed" },
  { label: "Box", path: "/components/box" },
  { label: "Bulleted List", path: "/components/bulleted-list" },
  { label: "Button", path: "/components/button" },
  { label: "Card", path: "/components/card" },
  { label: "Checkbox", path: "/components/checkbox" },
  { label: "Chip", path: "/components/chip" },
  { label: "Date Input", path: "/components/date-input" },
  { label: "Dialog", path: "/components/dialog" },
  { label: "Dropdown", path: "/components/dropdown" },
  { label: "File Input", path: "/components/file-input" },
  { label: "Flex", path: "/components/flex" },
  { label: "Footer", path: "/components/footer" },
  { label: "Header", path: "/components/header" },
  { label: "Heading", path: "/components/heading" },
  { label: "Inset", path: "/components/inset" },
  { label: "Link", path: "/components/link" },
  { label: "Nav Tabs", path: "/components/nav-tabs" },
  { label: "Number Input", path: "/components/number-input" },
  { label: "Paginator", path: "/components/paginator" },
  { label: "Paragraph", path: "/components/paragraph" },
  { label: "Password Input", path: "/components/password-input" },
  { label: "Progress Bar", path: "/components/progress-bar" },
  { label: "Quick Nav", path: "/components/quick-nav" },
  { label: "Radio Group", path: "/components/radio-group" },
  { label: "Resultset Table", path: "/components/resultset-table" },
  { label: "Select", path: "/components/select" },
  { label: "Sidenav", path: "/components/sidenav" },
  { label: "Slider", path: "/components/slider" },
  { label: "Spinner", path: "/components/spinner" },
  { label: "Switch", path: "/components/switch" },
  { label: "Table", path: "/components/table" },
  { label: "Tabs", path: "/components/tabs" },
  { label: "Tag", path: "/components/tag" },
  { label: "Text Input", path: "/components/text-input" },
  { label: "Textarea", path: "/components/textarea" },
  { label: "Toggle Group", path: "/components/toggle-group" },
  { label: "Typography", path: "/components/typography" },
  { label: "Wizard", path: "/components/wizard" },
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

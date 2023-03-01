const fs = require("fs");

// const componentsLinks =
//   require("./website/screens/common/pagesList").componentsLinks;

const componentsLinks = [
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

const setCatalog = () => {
  console.log("creating catalog");
  let catalog = [];
  componentsLinks.forEach((el) => {
    let component = {
      key: el.split("/")[2],
      name: el.label,
    };
    catalog.push(component);
  });
  console.log("catalog: ", catalog);
  const jsonData = JSON.stringify(catalog);
  fs.writeFile("./catalog/catalog.json", jsonData, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
};

setCatalog();

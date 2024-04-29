const fs = require("fs");

const componentsLinks = require("../website/screens/common/componentsList.json");

const setCatalog = () => {
  let catalog = [];
  componentsLinks.componentsList.forEach((el) => {
    let component = {
      key: el.path.split("/")[2],
      name: el.label,
    };
    catalog.push(component);
  });
  const jsonData = JSON.stringify(catalog);
  fs.writeFile("catalog/components/catalog.json", jsonData, (err) => {
    if (err) throw err;
  });
};

setCatalog();

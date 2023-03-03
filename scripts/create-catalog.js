const fs = require("fs");

const componentsLinks = require("../website/screens/common/componentList.js");

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
  fs.writeFile("catalog/catalog.json", jsonData, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
};

setCatalog();

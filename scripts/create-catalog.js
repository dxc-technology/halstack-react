const fs = require("fs");

const componentsLinks =
  require("website/screens/common/pagesList").componentsLinks;

const setCatalog = () => {
  let catalog = [];
  componentsLinks.forEach((el) => {
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

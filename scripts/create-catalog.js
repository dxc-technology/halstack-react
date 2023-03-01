const fs = require("fs");

const componentsLinks =
  require("../website/screens/common/pagesList").componentsLinks;

export const setCatalog = () => {
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

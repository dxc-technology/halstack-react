const fs = require("fs");

import { componentsLinks } from "../website/screens/common/pagesList";

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

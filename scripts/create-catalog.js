const fs = require("fs");

const componentsList = require("../apps/website/screens/common/componentsList.json");

const setCatalog = () => {
  let catalog = [];
  componentsList.forEach((el) => {
    let component = {
      key: el.path.split("/")[2],
      name: el.label,
    };
    catalog.push(component);
  });
  const jsonData = JSON.stringify(catalog);

  const catalogDirectory = "./catalog/components/";
  if (!fs.existsSync(catalogDirectory)) fs.mkdirSync(catalogDirectory, { recursive: true });
  fs.writeFile(`${catalogDirectory}catalog.json`, jsonData, (err) => {
    if (err) throw err;
  });
};

setCatalog();

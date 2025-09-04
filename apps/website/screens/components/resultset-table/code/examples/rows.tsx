import { DxcButton } from "@dxc-technology/halstack-react";

const cities = ["London", "New York", "Madrid", "Berlin", "Paris", "Tokyo"];
const names = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona"];
export const rows = Array.from({ length: 100000 }, (_, index) => {
  const id = String(index + 1).padStart(6, "0");
  const name = names[index % names.length];
  const city = cities[index % cities.length];
  return [
    { displayValue: id, sortValue: id },
    { displayValue: name, sortValue: name },
    { displayValue: city, sortValue: city },
    { displayValue: <DxcButton icon="delete" /> },
  ];
});

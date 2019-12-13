import Button from "./pages/Button";
import Checkbox from "./pages/Checkbox";
import Alert from "./pages/Alert";
import Switch from "./pages/Switch";
import Upload from "./pages/Upload";
import InputText from "./pages/InputText";
import Tabs from "./pages/Tabs";

export default [
  {
    path: "alert",
    name: "Alert",
    component: Alert
  },
  {
    path: "button",
    name: "Button",
    component: Button
  },
  {
    path: "checkbox",
    name: "Checkbox",
    component: Checkbox
  },
  {
    path: "inputText",
    name: "Input Text",
    component: InputText
  },
  {
    path: "upload",
    name: "Upload",
    component: Upload
  },
  {
    path: "switch",
    name: "Switch",
    component: Switch
  },
  {
    path: "tabs",
    name: "Tabs",
    component: Tabs
  }
];

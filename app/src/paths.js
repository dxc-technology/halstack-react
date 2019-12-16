import Button from "./pages/Button";
import Checkbox from "./pages/Checkbox";
import Alert from "./pages/Alert";
import Switch from "./pages/Switch";
import Upload from "./pages/Upload";
import InputText from "./pages/InputText";
import Tabs from "./pages/Tabs";
import TabsForSections from "./pages/TabsForSections";
import Toggle from "./pages/Toggle";
import Radio from "./pages/Radio";

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
    path: "radio",
    name: "Radio",
    component: Radio
  },
    {
    path: "switch",
    name: "Switch",
    component: Switch
  },
  {
    path: "toggle",
    name: "Toggle",
    component: Toggle
  },
  {
    path: "tabs",
    name: "Tabs",
    component: Tabs
  },
  {
    path: "tabs-for-sections",
    name: "Tabs for sections",
    component: TabsForSections
  },
  {
    path: "upload",
    name: "Upload",
    component: Upload
  }
];

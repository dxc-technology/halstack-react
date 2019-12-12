import Button from "./cdk-components/button/Button";
import Checkbox from "./cdk-components/checkbox/Checkbox";
import Switch from "./cdk-components/switch/Switch";
import Alert from "./cdk-components/alert/Alert";
import Radio from "./cdk-components/radio/Radio";
import Dropdown from "./cdk-components/dropdown/Dropdown";
import Tabs from "./cdk-components/tabs/Tabs";


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
    path: "switch",
    name: "Switch",
    component: Switch
  },
  {
    path: "radio",
    name: "Radio Button",
    component: Radio
  },
  {
    path: "dropdown",
    name: "Dropdown",
    component: Dropdown
  },
  {
    path: "tabs",
    name: "Tabs",
    component: Tabs
  }
];

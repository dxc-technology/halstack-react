import Button from "./cdk-components/button/Button";
import Checkbox from "./cdk-components/checkbox/Checkbox";
import Switch from "./cdk-components/switch/Switch";
import Alert from "./cdk-components/alert/Alert";
import Radio from "./cdk-components/radio/Radio";
<<<<<<< HEAD
import Dropdown from "./cdk-components/dropdown/Dropdown";
import Tabs from "./cdk-components/tabs/Tabs";
=======
>>>>>>> 8d5ba561ef1609874497994f845344720535334a
import Upload from "./cdk-components/upload/Upload";

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
<<<<<<< HEAD
    path: "dropdown",
    name: "Dropdown",
    component: Dropdown
  },
  {
    path: "radio",
    name: "Radio Button",
    component: Radio
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
  },
  {
=======
    path: "radio",
    name: "Radio Button",
    component: Radio
  },
  {
    path: "switch",
    name: "Switch",
    component: Switch
  },
  {
>>>>>>> 8d5ba561ef1609874497994f845344720535334a
    path: "upload",
    name: "Upload",
    component: Upload
  }
];

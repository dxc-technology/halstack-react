import Button from "./cdk-components/button/Button";
import Checkbox from "./cdk-components/checkbox/Checkbox";
import Switch from "./cdk-components/switch/Switch";
import Alert from "./cdk-components/alert/Alert";

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
  }
];

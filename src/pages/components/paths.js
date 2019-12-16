import Button from "./cdk-components/button/Button";
import Checkbox from "./cdk-components/checkbox/Checkbox";
import Switch from "./cdk-components/switch/Switch";
import Alert from "./cdk-components/alert/Alert";
import Radio from "./cdk-components/radio/Radio";
import Dropdown from "./cdk-components/dropdown/Dropdown";
import Tabs from "./cdk-components/tabs/Tabs";
import Upload from "./cdk-components/upload/Upload";
import Input from "./cdk-components/input/Input";
import Accordion from "./cdk-components/accordion/Accordion";
import Select from "./cdk-components/select/Select";
import Slider from "./cdk-components/slider/Slider";
import Toggle from "./cdk-components/toggle/Toggle";


export default [
  {
    path: "accordion",
    name: "Accordion",
    component: Accordion
  },
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
    path: "dropdown",
    name: "Dropdown",
    component: Dropdown
  },
  {
    path: "input",
    name: "Input",
    component: Input
  },
  {
    path: "radio",
    name: "Radio Button",
    component: Radio
  },
  {
    path: "select",
    name: "Select",
    component: Select
  },
  {
    path: "switch",
    name: "Switch",
    component: Switch
  },
  {
    path: "slider",
    name: "Slider",
    component: Slider
  },
  {
    path: "tabs",
    name: "Tabs",
    component: Tabs
  },
  {
    path: "toggle",
    name: "Toggle",
    component: Toggle
  },
  {
    path: "upload",
    name: "Upload",
    component: Upload
  }
];

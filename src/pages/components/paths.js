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
import TabbedSections from "./cdk-components/tabbed-sections/TabbedSections";
import Card from "./cdk-components/card/Card";
import Dialog from "./cdk-components/dialog/Dialog";
import ProgressBar from "./cdk-components/progressBar/progressBar";
import Header from "./cdk-components/header/Header";
import Footer from "./cdk-components/footer/Footer";
import Table from "./cdk-components/table/Table";
import Spinner from "./cdk-components/spinner/Spinner";

export const types = {
  FORMS: "Forms",
  NAVIGATION: "Navigation",
  LAYOUT: "Layout",
  UTILS: "Utilities"
};

export default [
  {
    path: "accordion",
    name: "Accordion",
    component: Accordion,
    type: types.UTILS
  },
  {
    path: "alert",
    name: "Alert",
    component: Alert,
    type: types.UTILS
  },
  {
    path: "button",
    name: "Button",
    component: Button,
    type: types.FORMS
  },
  {
    path: "card",
    name: "Card",
    component: Card,
    type: types.LAYOUT
  },
  {
    path: "checkbox",
    name: "Checkbox",
    component: Checkbox,
    type: types.FORMS
  },
  {
    path: "dialog",
    name: "Dialog",
    component: Dialog,
    type: types.UTILS
  },
  {
    path: "dropdown",
    name: "Dropdown",
    component: Dropdown,
    type: types.FORMS
  },
  {
    path: "footer",
    name: "Footer",
    component: Footer,
    type: types.NAVIGATION
  },
  {
    path: "header",
    name: "Header",
    component: Header,
    type: types.NAVIGATION
  },
  {
    path: "input",
    name: "Input",
    component: Input,
    type: types.FORMS
  },
  {
    path: "progressBar",
    name: "Progress Bar",
    component: ProgressBar,
    type: types.UTILS
  },
  {
    path: "radio",
    name: "Radio Button",
    component: Radio,
    type: types.FORMS
  },
  {
    path: "select",
    name: "Select",
    component: Select,
    type: types.FORMS
  },
  {
    path: "slider",
    name: "Slider",
    component: Slider,
    type: types.FORMS
  },
  {
    path: "spinner",
    name: "Spinner",
    component: Spinner,
    type: types.UTILS
  },
  {
    path: "switch",
    name: "Switch",
    component: Switch,
    type: types.FORMS
  },
  {
    path: "table",
    name: "Table",
    component: Table,
    type: types.UTILS
  },
  {
    path: "tabs",
    name: "Tabs",
    component: Tabs,
    type: types.NAVIGATION
  },
  {
    path: "tabbed-sections",
    name: "Tabbed Sections",
    component: TabbedSections,
    type: types.LAYOUT
  },
  {
    path: "toggle",
    name: "Toggle",
    component: Toggle,
    type: types.FORMS
  },
  {
    path: "upload",
    name: "Upload",
    component: Upload,
    type: types.UTILS
  }
];

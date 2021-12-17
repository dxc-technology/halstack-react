import Button from "./cdk-components/button/Button";
import Checkbox from "./cdk-components/checkbox/Checkbox";
import Switch from "./cdk-components/switch/Switch";
import Alert from "./cdk-components/alert/Alert";
import Radio from "./cdk-components/radio/Radio";
import Dropdown from "./cdk-components/dropdown/Dropdown";
import Tabs from "./cdk-components/tabs/Tabs";
import Upload from "./cdk-components/upload/Upload";
import InputText from "./cdk-components/input-text/InputText";
import Accordion from "./cdk-components/accordion/Accordion";
import Select from "./cdk-components/select/Select";
import Slider from "./cdk-components/slider/Slider";
import TabbedSections from "./cdk-components/tabbed-sections/TabbedSections";
import Card from "./cdk-components/card/Card";
import Dialog from "./cdk-components/dialog/Dialog";
import ProgressBar from "./cdk-components/progressBar/progressBar";
import Header from "./cdk-components/header/Header";
import Footer from "./cdk-components/footer/Footer";
import Table from "./cdk-components/table/Table";
import Spinner from "./cdk-components/spinner/Spinner";
import Box from "./cdk-components/box/Box";
import Tag from "./cdk-components/tag/Tag";
import Date from "./cdk-components/date/Date";
import Paginator from "./cdk-components/paginator/Paginator";
import Sidenav from "./cdk-components/sidenav/Sidenav";
import Link from "./cdk-components/link/Link";
import Wizard from "./cdk-components/wizard/Wizard";
import Textarea from "./cdk-components/textarea/Textarea";
import Heading from "./cdk-components/heading/Heading";
import ResultsetTable from "./cdk-components/resultsetTable/resultsetTable";
import Autocomplete from "./cdk-components/autocomplete/Autocomplete";
import Chip from "./cdk-components/chip/Chip";
import ToggleGroup from "./cdk-components/toggleGroup/ToggleGroup";
import ApplicationLayout from "./cdk-components/applicationLayout/ApplicationLayout";
import AccordionGroup from "./cdk-components/accordion-group/AccordionGroup";
import TextInput from "./cdk-components/text-input/TextInput";
import PasswordInput from "./cdk-components/password-input/PasswordInput";
import NewDate from "./cdk-components/new-date/NewDate";
import NumberInput from "./cdk-components/number-input/NumberInput";
import NewTextarea from "./cdk-components/new-textarea/NewTextarea";
import FileInput from "./cdk-components/file-input/FileInput";

export const types = {
  FORMS: "Forms",
  NAVIGATION: "Navigation",
  LAYOUT: "Layout",
  UTILS: "Utilities",
};

export default [
  {
    path: "accordion",
    name: "Accordion",
    component: Accordion,
    type: types.UTILS,
  },
  {
    path: "groupAccordion",
    name: "Accordion Group",
    component: AccordionGroup,
    type: types.UTILS,
  },
  {
    path: "alert",
    name: "Alert",
    component: Alert,
    type: types.UTILS,
  },
  {
    path: "applicationLayout",
    name: "Application Layout",
    component: ApplicationLayout,
    type: types.LAYOUT,
  },
  {
    path: "autocomplete",
    name: "Autocomplete",
    component: Autocomplete,
    type: types.FORMS,
  },
  {
    path: "box",
    name: "Box",
    component: Box,
    type: types.LAYOUT,
  },
  {
    path: "button",
    name: "Button",
    component: Button,
    type: types.FORMS,
  },
  {
    path: "card",
    name: "Card",
    component: Card,
    type: types.LAYOUT,
  },
  {
    path: "checkbox",
    name: "Checkbox",
    component: Checkbox,
    type: types.FORMS,
  },
  {
    path: "chip",
    name: "Chip",
    component: Chip,
    type: types.UTILS,
  },
  {
    path: "date",
    name: "Date",
    component: Date,
    type: types.FORMS,
  },
  {
    path: "dialog",
    name: "Dialog",
    component: Dialog,
    type: types.UTILS,
  },
  {
    path: "dropdown",
    name: "Dropdown",
    component: Dropdown,
    type: types.UTILS,
  },
  {
    path: "fileInput",
    name: "File Input",
    component: FileInput,
    type: types.UTILS,
  },
  {
    path: "footer",
    name: "Footer",
    component: Footer,
    type: types.NAVIGATION,
  },
  {
    path: "header",
    name: "Header",
    component: Header,
    type: types.NAVIGATION,
  },
  {
    path: "heading",
    name: "Heading",
    component: Heading,
    type: types.UTILS,
  },
  {
    path: "inputText",
    name: "Input Text",
    component: InputText,
    type: types.FORMS,
  },
  {
    path: "link",
    name: "Link",
    component: Link,
    type: types.UTILS,
  },
  {
    path: "newDate",
    name: "New Date",
    component: NewDate,
    type: types.FORMS,
  },
  {
    path: "newTextarea",
    name: "New Textarea",
    component: NewTextarea,
    type: types.FORMS,
  },
  {
    path: "numberInput",
    name: "Number Input",
    component: NumberInput,
    type: types.FORMS,
  },

  {
    path: "paginator",
    name: "Paginator",
    component: Paginator,
    type: types.UTILS,
  },
  {
    path: "passwordInput",
    name: "Password Input",
    component: PasswordInput,
    type: types.FORMS,
  },
  {
    path: "progressBar",
    name: "Progress Bar",
    component: ProgressBar,
    type: types.UTILS,
  },
  {
    path: "radio",
    name: "Radio Button",
    component: Radio,
    type: types.FORMS,
  },
  {
    path: "resultsetTable",
    name: "Resultset Table",
    component: ResultsetTable,
    type: types.UTILS,
  },
  {
    path: "select",
    name: "Select",
    component: Select,
    type: types.FORMS,
  },
  {
    path: "sidenav",
    name: "Sidenav",
    component: Sidenav,
    type: types.LAYOUT,
  },
  {
    path: "slider",
    name: "Slider",
    component: Slider,
    type: types.FORMS,
  },
  {
    path: "spinner",
    name: "Spinner",
    component: Spinner,
    type: types.UTILS,
  },
  {
    path: "switch",
    name: "Switch",
    component: Switch,
    type: types.FORMS,
  },
  {
    path: "table",
    name: "Table",
    component: Table,
    type: types.UTILS,
  },
  {
    path: "tabs",
    name: "Tabs",
    component: Tabs,
    type: types.NAVIGATION,
  },
  {
    path: "tabbed-sections",
    name: "Tabbed Sections",
    component: TabbedSections,
    type: types.LAYOUT,
  },
  {
    path: "tag",
    name: "Tag",
    component: Tag,
    type: types.LAYOUT,
  },
  {
    path: "textarea",
    name: "Textarea",
    component: Textarea,
    type: types.FORMS,
  },
  {
    path: "textInput",
    name: "Text Input",
    component: TextInput,
    type: types.FORMS,
  },
  {
    path: "toggleGroup",
    name: "Toggle Group",
    component: ToggleGroup,
    type: types.FORMS,
  },
  {
    path: "upload",
    name: "Upload",
    component: Upload,
    type: types.UTILS,
  },
  {
    path: "wizard",
    name: "Wizard",
    component: Wizard,
    type: types.NAVIGATION,
  },
];

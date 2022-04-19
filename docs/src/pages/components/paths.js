import Button from "./cdk-components/button/Button";
import Checkbox from "./cdk-components/checkbox/Checkbox";
import Switch from "./cdk-components/switch/Switch";
import Alert from "./cdk-components/alert/Alert";
import Radio from "./cdk-components/radio/Radio";
import Dropdown from "./cdk-components/dropdown/Dropdown";
import Tabs from "./cdk-components/tabs/Tabs";
import Accordion from "./cdk-components/accordion/Accordion";
import Slider from "./cdk-components/slider/Slider";
import Card from "./cdk-components/card/Card";
import Dialog from "./cdk-components/dialog/Dialog";
import ProgressBar from "./cdk-components/progressBar/progressBar";
import Header from "./cdk-components/header/Header";
import Footer from "./cdk-components/footer/Footer";
import Table from "./cdk-components/table/Table";
import Spinner from "./cdk-components/spinner/Spinner";
import Box from "./cdk-components/box/Box";
import Tag from "./cdk-components/tag/Tag";
import Paginator from "./cdk-components/paginator/Paginator";
import Sidenav from "./cdk-components/sidenav/Sidenav";
import Link from "./cdk-components/link/Link";
import Wizard from "./cdk-components/wizard/Wizard";
import Heading from "./cdk-components/heading/Heading";
import ResultsetTable from "./cdk-components/resultsetTable/resultsetTable";
import Chip from "./cdk-components/chip/Chip";
import ToggleGroup from "./cdk-components/toggleGroup/ToggleGroup";
import ApplicationLayout from "./cdk-components/applicationLayout/ApplicationLayout";
import AccordionGroup from "./cdk-components/accordion-group/AccordionGroup";
import TextInput from "./cdk-components/text-input/TextInput";
import PasswordInput from "./cdk-components/password-input/PasswordInput";
import DateInput from "./cdk-components/date-input/DateInput";
import NumberInput from "./cdk-components/number-input/NumberInput";
import Textarea from "./cdk-components/textarea/Textarea";
import FileInput from "./cdk-components/file-input/FileInput";
import Select from "./cdk-components/select/Select";
import RadioGroup from "./cdk-components/radio-group/RadioGroup";
import Stack from "./cdk-components/stack/Stack";
import Inset from "./cdk-components/inset/Inset";
import Row from "./cdk-components/row/Row";
import Bleed from "./cdk-components/bleed/Bleed";
import QuickNav from "./cdk-components/quick-nav/QuickNav";

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
    status: "ready",
  },
  {
    path: "groupAccordion",
    name: "Accordion Group",
    component: AccordionGroup,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "alert",
    name: "Alert",
    component: Alert,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "applicationLayout",
    name: "Application Layout",
    component: ApplicationLayout,
    type: types.LAYOUT,
    status: "ready",
  },
  {
    path: "box",
    name: "Box",
    component: Box,
    type: types.LAYOUT,
    status: "ready",
  },
  {
    path: "bleed",
    name: "Bleed",
    component: Bleed,
    type: types.LAYOUT,
    status: "experimental",
  },
  {
    path: "button",
    name: "Button",
    component: Button,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "card",
    name: "Card",
    component: Card,
    type: types.LAYOUT,
    status: "ready",
  },
  {
    path: "checkbox",
    name: "Checkbox",
    component: Checkbox,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "chip",
    name: "Chip",
    component: Chip,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "dateInput",
    name: "Date Input",
    component: DateInput,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "dialog",
    name: "Dialog",
    component: Dialog,
    type: types.UTILS,
    status: "ready",
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
    status: "ready",
  },
  {
    path: "footer",
    name: "Footer",
    component: Footer,
    type: types.NAVIGATION,
    status: "ready",
  },
  {
    path: "header",
    name: "Header",
    component: Header,
    type: types.NAVIGATION,
    status: "ready",
  },
  {
    path: "heading",
    name: "Heading",
    component: Heading,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "inset",
    name: "Inset",
    component: Inset,
    type: types.LAYOUT,
    status: "experimental",
  },
  {
    path: "link",
    name: "Link",
    component: Link,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "numberInput",
    name: "Number Input",
    component: NumberInput,
    type: types.FORMS,
    status: "ready",
  },

  {
    path: "paginator",
    name: "Paginator",
    component: Paginator,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "passwordInput",
    name: "Password Input",
    component: PasswordInput,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "progressBar",
    name: "Progress Bar",
    component: ProgressBar,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "quickNav",
    name: "Quick Nav",
    component: QuickNav,
    type: types.NAVIGATION,
    status: "experimental",
  },
  {
    path: "radio",
    name: "Radio Button",
    component: Radio,
    type: types.FORMS,
    status: "deprecated",
  },
  {
    path: "radioGroup",
    name: "Radio Group",
    component: RadioGroup,
    type: types.FORMS,
    status: "experimental",
  },
  {
    path: "resultsetTable",
    name: "Resultset Table",
    component: ResultsetTable,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "row",
    name: "Row",
    component: Row,
    type: types.LAYOUT,
    status: "experimental",
  },
  {
    path: "select",
    name: "Select",
    component: Select,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "sidenav",
    name: "Sidenav",
    component: Sidenav,
    type: types.LAYOUT,
    status: "ready",
  },
  {
    path: "slider",
    name: "Slider",
    component: Slider,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "spinner",
    name: "Spinner",
    component: Spinner,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "stack",
    name: "Stack",
    component: Stack,
    type: types.LAYOUT,
    status: "experimental",
  },
  {
    path: "switch",
    name: "Switch",
    component: Switch,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "table",
    name: "Table",
    component: Table,
    type: types.UTILS,
    status: "ready",
  },
  {
    path: "tabs",
    name: "Tabs",
    component: Tabs,
    type: types.NAVIGATION,
    status: "ready",
  },
  {
    path: "tag",
    name: "Tag",
    component: Tag,
    type: types.LAYOUT,
    status: "ready",
  },
  {
    path: "textarea",
    name: "Textarea",
    component: Textarea,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "textInput",
    name: "Text Input",
    component: TextInput,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "toggleGroup",
    name: "Toggle Group",
    component: ToggleGroup,
    type: types.FORMS,
    status: "ready",
  },
  {
    path: "wizard",
    name: "Wizard",
    component: Wizard,
    type: types.NAVIGATION,
    status: "ready",
  },
];

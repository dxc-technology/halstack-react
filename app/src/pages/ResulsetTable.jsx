import React from "react";
import {
  DxcResulsetTable,
  ThemeContext,
  DxcButton,
} from "@diaas/dxc-react-cdk";
import deleteIcon from "../images/delete-24px.svg";

const colors = {
  black: "blue",
  mediumBlack: "red",
  lightBlack: "grey",
  white: "black",
  darkWhite: "beige",
  yellow: "aquamarine",
  darkGrey: "brown",
  lightGrey: "azure",
  darkRed: "coral",
  lightRed: "aqua",
  lightBlue: "green",
  lightYellow: "white",
  lightPink: "red",
  lightGreen: "blue",
};

const columns = [
  {
    displayValue: "Id",
    isSortable: false,
  },
  {
    displayValue: "Name",
    isSortable: true,
  },
  {
    displayValue: "City",
    isSortable: false,
  },
  {
    displayValue: "Actions",
    isSortable: true,
  },
];

const rows = [
  [
    {
      displayValue: "001",
      sortValue: "001",
    },
    {
      displayValue: "Peter",
      sortValue: "Peter",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: (
        <DxcButton
          mode="flat"
          iconSrc={deleteIcon}
          onClick={() => console.log("Clicked")}
        />
      ),
    },
  ],
  [
    {
      displayValue: "002",
      sortValue: "002",
    },
    {
      displayValue: "Louis",
      sortValue: "Louis",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "003",
      sortValue: "003",
    },
    {
      displayValue: "Lana",
      sortValue: "Lana",
    },
    {
      displayValue: "Albacete",
      sortValue: "Albacete",
    },
    {
      displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "004",
      sortValue: "004",
    },
    {
      displayValue: "Rick",
      sortValue: "Rick",
    },
    {
      displayValue: "Albacete",
      sortValue: "Albacete",
    },
    {
      displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "005",
      sortValue: "005",
    },
    {
      displayValue: "Mark",
      sortValue: "Mark",
    },
    {
      displayValue: "Madrid",
      sortValue: "Madrid",
    },
    {
      displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "006",
      sortValue: "006",
    },
    {
      displayValue: "Cris",
      sortValue: "Cris",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "007",
      sortValue: "007",
    },
    {
      displayValue: "Susan",
      sortValue: "Susan",
    },
    {
      displayValue: "Madrid",
      sortValue: "Madrid",
    },
    {
      displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "008",
      sortValue: "008",
    },
    {
      displayValue: "Tina",
      sortValue: "Tina",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: <DxcButton mode="flat" iconSrc={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "009",
      sortValue: "009",
    },
    {
      displayValue: "Kevin",
      sortValue: "Kevin",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "010",
      sortValue: "010",
    },
    {
      displayValue: "Cosmin",
      sortValue: "Cosmin",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: "",
    },
  ],
];

function App() {
  return (
    <div>
      <div className="test-case" id="xxsmall-margin">
        <h5>xxsmall margin</h5>

        <DxcResulsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="xxsmall"
        ></DxcResulsetTable>
      </div>
      <div className="test-case" id="xsmall-margin">
        <h5>xsmall margin</h5>

        <DxcResulsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={5}
          margin="xsmall"
        ></DxcResulsetTable>
      </div>
      <div className="test-case" id="small-margin">
        <h5>small margin</h5>

        <DxcResulsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="small"
        ></DxcResulsetTable>
      </div>
      <div className="test-case" id="medium-margin">
        <h5>medium margin</h5>

        <DxcResulsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="medium"
        ></DxcResulsetTable>
      </div>
      <div className="test-case" id="large-margin">
        <h5>large margin</h5>

        <DxcResulsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="large"
        ></DxcResulsetTable>
      </div>
      <div className="test-case" id="xlarge-margin">
        <h5>xlarge margin</h5>

        <DxcResulsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="xlarge"
        ></DxcResulsetTable>
      </div>
      <div className="test-case" id="xxlarge-margin">
        <h5>xxlarge margin</h5>

        <DxcResulsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="xxlarge"
        ></DxcResulsetTable>
      </div>

    </div>
  );
}

export default App;

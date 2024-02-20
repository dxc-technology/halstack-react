import React from "react";
import DxcTable from "./Table";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Table",
  component: DxcTable,
};

const opinionatedTheme = {
  table: {
    baseColor: "#5f249f",
    headerFontColor: "#ffffff",
    cellFontColor: "#000000",
  },
};

const icon1 = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
  </svg>
);

const icon2 = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </svg>
);

const actions = [
  {
    title: "icon",
    onClick: (value?) => {
      console.log(value);
    },
    options: [
      {
        value: "1",
        label: "Amazon with a very long text",
      },
      {
        value: "2",
        label: "Ebay",
      },
      {
        value: "3",
        label: "Apple",
      },
    ],
  },
  {
    disabled: true,
    title: "icon",
    onClick: (value?) => {
      console.log(value);
    },
    options: [
      {
        value: "1",
        label: "Amazon with a very long text",
      },
      {
        value: "2",
        label: "Ebay",
      },
      {
        value: "3",
        label: "Apple",
      },
    ],
  },
  {
    icon: icon2,
    title: "icon",
    onClick: () => {},
  },
  {
    icon: icon2,
    title: "icon",
    onClick: () => {},
    disabled: true,
  },
];

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcTable>
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>actions</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>
            <DxcTable.ActionsCell actions={actions} />
          </td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>
            <DxcTable.ActionsCell actions={actions} />
          </td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>
            <DxcTable.ActionsCell actions={actions} />
          </td>
        </tr>
      </DxcTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With scrollbar" theme="light" level={4} />
      <div
        style={{ height: 200 + "px", display: "flex", flexDirection: "row", width: 100 + "%", marginBottom: 50 + "px" }}
      >
        <DxcTable>
          <tr>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </td>
            <td>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </td>
            <td>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
        </DxcTable>
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Default reduced" theme="light" level={4} />
      <DxcTable mode="reduced">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Reduced with scrollbar" theme="light" level={4} />
      <div
        style={{ height: 200 + "px", display: "flex", flexDirection: "row", width: 100 + "%", marginBottom: 50 + "px" }}
      >
        <DxcTable mode="reduced">
          <tr>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </td>
            <td>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </td>
            <td>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
        </DxcTable>
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Reduced table with actions" theme="light" level={4} />
      <DxcTable mode="reduced">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>
            <DxcTable.ActionsCell actions={actions} />
          </td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>
            <DxcTable.ActionsCell actions={actions} />
          </td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>
            <DxcTable.ActionsCell actions={actions} />
          </td>
        </tr>
      </DxcTable>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcTable margin="xxsmall">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcTable margin="xsmall">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Small margin" theme="light" level={4} />
      <DxcTable margin="small">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcTable margin="medium">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Large margin" theme="light" level={4} />
      <DxcTable margin="large">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcTable margin="xlarge">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcTable margin="xxlarge">
        <tr>
          <th>header 1</th>
          <th>header 2</th>
          <th>header 3</th>
        </tr>
        <tr>
          <td>cell 1</td>
          <td>cell 2</td>
          <td>cell 3</td>
        </tr>
        <tr>
          <td>cell 4</td>
          <td>cell 5</td>
          <td>cell 6</td>
        </tr>
        <tr>
          <td>cell 7</td>
          <td>cell 8</td>
          <td>Cell 9</td>
        </tr>
      </DxcTable>
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <HalstackProvider theme={opinionatedTheme}>
        <DxcTable>
          <tr>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
            <th>
              header<br></br>subheader
            </th>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </td>
            <td>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </td>
            <td>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
          <tr>
            <td>cell data</td>
            <td>cell data</td>
            <td>cell data</td>
          </tr>
        </DxcTable>
      </HalstackProvider>
    </ExampleContainer>
  </>
);

const ActionsCellDropdown = () => (
  <ExampleContainer>
    <Title title="Dropdown Action" theme="light" level={4} />
    <DxcTable>
      <tr>
        <th>header 1</th>
        <th>header 2</th>
        <th>actions</th>
      </tr>
      <tr>
        <td>cell 1</td>
        <td>cell 2</td>
        <td>
          <DxcTable.ActionsCell actions={actions} />
        </td>
      </tr>
      <tr>
        <td>cell 4</td>
        <td>cell 5</td>
        <td>
          <DxcTable.ActionsCell actions={actions} />
        </td>
      </tr>
      <tr>
        <td>cell 7</td>
        <td>cell 8</td>
        <td>
          <DxcTable.ActionsCell actions={actions} />
        </td>
      </tr>
    </DxcTable>
  </ExampleContainer>
);

export const DropdownAction = ActionsCellDropdown.bind({});
DropdownAction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nextButton = canvas.getAllByRole("button")[6];
  await userEvent.click(nextButton);
};

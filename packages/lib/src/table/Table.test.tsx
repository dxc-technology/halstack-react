import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcTable from "./Table";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </svg>
);
describe("Table component tests", () => {
  test("Table renders with correct content", () => {
    const { getByText } = render(
      <DxcTable>
        <thead>
          <tr>
            <th>header-1</th>
            <th>header-2</th>
            <th>header-3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell-1</td>
            <td>cell-2</td>
            <td>cell-3</td>
          </tr>
          <tr>
            <td>cell-4</td>
            <td>cell-5</td>
            <td>cell-6</td>
          </tr>
        </tbody>
      </DxcTable>
    );
    expect(getByText("header-1")).toBeTruthy();
    expect(getByText("header-2")).toBeTruthy();
    expect(getByText("header-3")).toBeTruthy();
    expect(getByText("cell-1")).toBeTruthy();
    expect(getByText("cell-2")).toBeTruthy();
    expect(getByText("cell-3")).toBeTruthy();
    expect(getByText("cell-4")).toBeTruthy();
    expect(getByText("cell-5")).toBeTruthy();
    expect(getByText("cell-6")).toBeTruthy();
  });

  test("Table ActionsCell", () => {
    const onSelectOption = jest.fn();
    const onClick = jest.fn();
    const actions = [
      {
        title: "icon1",
        onClick: onSelectOption,
        options: [
          {
            value: "1",
            label: "Amazon",
          },
          {
            value: "2",
            label: "Ebay",
          },
          {
            value: "3",
            label: "Aliexpress",
          },
        ],
      },
      {
        icon,
        title: "icon2",
        onClick,
      },
    ];
    const { getAllByRole, getByRole, getByText } = render(
      <DxcTable>
        <thead>
          <tr>
            <th>header-1</th>
            <th>header-2</th>
            <th>header-3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell-1</td>
            <td>cell-2</td>
            <td>cell-3</td>
          </tr>
          <tr>
            <td>cell-4</td>
            <td>cell-5</td>
            <td aria-label="actions">
              <DxcTable.ActionsCell actions={actions} />
            </td>
          </tr>
        </tbody>
      </DxcTable>
    );

    const dropdown = getAllByRole("button")[1];
    act(() => {
      if (dropdown) {
        userEvent.click(dropdown);
      }
    });
    expect(getByRole("menu")).toBeTruthy();
    const option = getByText("Aliexpress");
    userEvent.click(option);
    expect(onSelectOption).toHaveBeenCalledWith("3");
    const action = getAllByRole("button")[0];
    if (action) {
      userEvent.click(action);
    }
    expect(onClick).toHaveBeenCalled();
  });
});

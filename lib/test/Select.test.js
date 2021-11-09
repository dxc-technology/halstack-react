import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcSelect from "../src/select/Select";

const optionsWithoutIcon = [
  {
    value: 1,
    label: "Amazon",
  },
  {
    value: 2,
    label: "Ebay",
  },
  {
    value: 3,
    label: "Apple",
  },
];

const optionsWithIcons = [
  {
    value: 1,
    label: "Image 1",
    icon: (
      <svg
        data-testid="image-1"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    ),
  },
  {
    value: 2,
    label: "Image 2",
    icon: (
      <svg
        data-testid="image-2"
        version="1.1"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        enable-background="new 0 0 24 24"
      >
        <g id="Bounding_Box">
          <rect fill="none" width="24" height="24" />
        </g>
        <g id="Master">
          <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
        </g>
      </svg>
    ),
  },
];

describe("Select component tests", () => {
  test("Select renders with correct label", () => {
    const { getByText } = render(<DxcSelect label="test-select-label"></DxcSelect>);
    expect(getByText("test-select-label")).toBeTruthy();
  });

  test("Select renders options when select is clicked", () => {
    const { getByText, getByRole, queryByText } = render(
      <DxcSelect label="test-select-name" options={optionsWithoutIcon}></DxcSelect>
    );
    //Before are not shown
    expect(queryByText("Amazon")).toBeFalsy();
    expect(queryByText("Ebay")).toBeFalsy();
    expect(queryByText("Apple")).toBeFalsy();
    const select = getByRole("button");
    act(() => {
      userEvent.click(select);
    });
    expect(getByText("Amazon")).toBeTruthy();
    expect(getByText("Ebay")).toBeTruthy();
    expect(getByText("Apple")).toBeTruthy();
  });

  test("Select renders options with icons before", () => {
    const { getByRole, getByTestId } = render(
      <DxcSelect label="test-select-name" options={optionsWithIcons}></DxcSelect>
    );
    const select = getByRole("button");
    act(() => {
      userEvent.click(select);
    });
    expect(getByTestId("image-1")).toBeTruthy();
    expect(getByTestId("image-2")).toBeTruthy();
  });

  test("Select renders options with icons after", () => {
    const { getByRole, getByTestId } = render(
      <DxcSelect label="test-select-name" options={optionsWithIcons} iconPosition="after"></DxcSelect>
    );
    const select = getByRole("button");
    act(() => {
      userEvent.click(select);
    });
    expect(getByTestId("image-1")).toBeTruthy();
    expect(getByTestId("image-2")).toBeTruthy();
  });

  test("Select renders with a default value", () => {
    const { getByText } = render(
      <DxcSelect label="test-select-name" options={optionsWithoutIcon} value={1}></DxcSelect>
    );
    expect(getByText("Amazon")).toBeTruthy();
  });

  test("Select renders with multiple default values", () => {
    const { getByText } = render(
      <DxcSelect label="test-select-name" options={optionsWithoutIcon} value={[1, 2]} multiple></DxcSelect>
    );
    expect(getByText("Amazon, Ebay")).toBeTruthy();
  });

  test("Disabled select is not clickable", () => {
    const { getByText, queryByText } = render(
      <DxcSelect label="test-select-name" options={optionsWithoutIcon} disabled></DxcSelect>
    );
    expect(queryByText("Amazon")).toBeFalsy();
    expect(queryByText("Ebay")).toBeFalsy();
    expect(queryByText("Apple")).toBeFalsy();
    const select = getByText("test-select-name");
    act(() => {
      userEvent.click(select);
    });
    expect(queryByText("Amazon")).toBeFalsy();
    expect(queryByText("Ebay")).toBeFalsy();
    expect(queryByText("Apple")).toBeFalsy();
  });

  test("Controlled select with unique value", () => {
    const onChange = jest.fn();
    const { getByText, getAllByText } = render(
      <DxcSelect label="test-select-name" options={optionsWithoutIcon} value={1} onChange={onChange}></DxcSelect>
    );
    const select = getByText("Amazon");
    act(() => {
      userEvent.click(select);
    });
    const option2 = getByText("Ebay");
    act(() => {
      userEvent.click(option2);
    });
    expect(onChange).toHaveBeenCalledWith(2);
    //The value is not changed
    expect(getAllByText("Amazon").length).toBe(2);
  });

  test("Controlled select with multiple values", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <DxcSelect
        label="test-select-name"
        options={optionsWithoutIcon}
        value={[1, 2]}
        multiple
        onChange={onChange}
      ></DxcSelect>
    );
    const select = getByText("Amazon, Ebay");
    act(() => {
      userEvent.click(select);
    });
    const option3 = getByText("Apple");
    act(() => {
      userEvent.click(option3);
    });
    expect(onChange).toHaveBeenCalledWith([1, 2, 3]);
    //The value is not changed
    expect(getByText("Amazon, Ebay")).toBeTruthy();
  });

  test("Uncontrolled select with multiple values", () => {
    const onChange = jest.fn();
    const { getByText, getByRole } = render(
      <DxcSelect label="test-select-name" options={optionsWithoutIcon} multiple onChange={onChange}></DxcSelect>
    );
    const select = getByRole("button");
    act(() => {
      userEvent.click(select);
    });
    act(() => {
      userEvent.click(getByText("Amazon"));
    });
    expect(onChange).toHaveBeenCalledWith([1]);
    act(() => {
      userEvent.click(getByText("Ebay"));
    });
    expect(onChange).toHaveBeenCalledWith([1, 2]);
    expect(getByText("Amazon, Ebay")).toBeTruthy();
    act(() => {
      userEvent.click(getByText("Apple"));
    });
    expect(onChange).toHaveBeenCalledWith([1, 2, 3]);
    expect(getByText("Amazon, Ebay, Apple")).toBeTruthy();
    act(() => {
      userEvent.click(getByText("Amazon"));
    });
    expect(onChange).toHaveBeenCalledWith([2, 3]);
    expect(getByText("Ebay, Apple")).toBeTruthy();
  });
});

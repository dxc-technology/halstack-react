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
    label: "Facebook",
    iconSrc: "/testIconFacebook",
  },
  {
    value: 2,
    label: "Twitter",
    iconSrc: "/testIconTwitter",
  },
  {
    value: 3,
    label: "Linkedin",
    iconSrc: "/testIconLinkedin",
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
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-name" options={optionsWithIcons}></DxcSelect>
    );
    const select = getByRole("button");
    act(() => {
      userEvent.click(select);
    });
    expect(getAllByRole("img")[0].getAttribute("src")).toEqual("/testIconFacebook");
    expect(getAllByRole("img")[1].getAttribute("src")).toEqual("/testIconTwitter");
    expect(getAllByRole("img")[2].getAttribute("src")).toEqual("/testIconLinkedin");
  });

  test("Select renders options with icons after", () => {
    const { getByRole, getAllByRole } = render(
      <DxcSelect label="test-select-name" options={optionsWithIcons} iconPosition="after"></DxcSelect>
    );
    const select = getByRole("button");
    act(() => {
      userEvent.click(select);
    });
    expect(getAllByRole("img")[0].getAttribute("src")).toEqual("/testIconFacebook");
    expect(getAllByRole("img")[1].getAttribute("src")).toEqual("/testIconTwitter");
    expect(getAllByRole("img")[2].getAttribute("src")).toEqual("/testIconLinkedin");
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

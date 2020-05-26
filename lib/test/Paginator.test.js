import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcPaginator from "../src/paginator/Paginator";
import DxcButton from "../src/button/Button";

describe("Paginator component tests", () => {
  test("Paginator renders with default values", () => {
    const { getByText } = render(<DxcPaginator></DxcPaginator>);
    expect(getByText("1 to 1 of 1")).toBeTruthy();
    expect(getByText("Page: 1 of 1")).toBeTruthy();
  });

  test("Paginator renders with currentPage", () => {
    const { getByText } = render(<DxcPaginator currentPage={2}></DxcPaginator>);
    expect(getByText("Page: 2 of 1")).toBeTruthy();
  });

  test("Paginator renders with itemsPerPage", () => {
    const { getByText } = render(<DxcPaginator currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>);
    expect(getByText("1 to 10 of 20")).toBeTruthy();
    expect(getByText("Page: 1 of 2")).toBeTruthy();
  });

  test("Paginator renders with totalItems", () => {
    const { getByText } = render(<DxcPaginator totalItems={20}></DxcPaginator>);
    expect(getByText("1 to 5 of 20")).toBeTruthy();
    expect(getByText("Page: 1 of 4")).toBeTruthy();
  });

  test("Paginator renders with correct text in second page", () => {
    const { getByText } = render(<DxcPaginator currentPage={2} itemsPerPage={10} totalItems={20}></DxcPaginator>);
    expect(getByText("11 to 20 of 20")).toBeTruthy();
    expect(getByText("Page: 2 of 2")).toBeTruthy();
  });

  test("Call correct nextFunction", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator nextFunction={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const nextButton = getByRole("button");
    fireEvent.click(nextButton);
    expect(onClick).toHaveBeenCalled();
  });

  test("Call correct lastFunction", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator lastFunction={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const lastButton = getByRole("button");
    fireEvent.click(lastButton);
    expect(onClick).toHaveBeenCalledWith(2);
  });

  test("Call correct prevFunction", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator prevFunction={onClick} currentPage={2} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const prevButton = getByRole("button");
    fireEvent.click(prevButton);
    expect(onClick).toHaveBeenCalled();
  });

  test("Call correct firstFunction", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator firstFunction={onClick} currentPage={2} itemsPerPage={10} totalItems={30}></DxcPaginator>
    );
    const firstButton = getByRole("button");
    fireEvent.click(firstButton);
    expect(onClick).toHaveBeenCalled();
  });

  test("Next button is disable in last page", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator nextFunction={onClick} currentPage={2} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const nextButton = getByRole("button");
    expect(nextButton.hasAttribute("disabled")).toBeTruthy();
    fireEvent.click(nextButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Last button is disable in last page", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator lastFunction={onClick} currentPage={2} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const lastButton = getByRole("button");
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
    fireEvent.click(lastButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("First button is disable in first page", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator firstFunction={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const lastButton = getByRole("button");
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
    fireEvent.click(lastButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Previous button is disable in first page", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <DxcPaginator prevFunction={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const lastButton = getByRole("button");
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
    fireEvent.click(lastButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Last and next buttons are disable in last page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator
        prevFunction={onClick}
        firstFunction={onClick}
        nextFunction={onClick}
        lastFunction={onClick}
        currentPage={2}
        itemsPerPage={10}
        totalItems={20}
      ></DxcPaginator>
    );
    const firstButton = getAllByRole("button")[0];
    const prevButton = getAllByRole("button")[1];
    const nextButton = getAllByRole("button")[2];
    const lastButton = getAllByRole("button")[3];
    expect(firstButton.hasAttribute("disabled")).toBeFalsy();
    expect(prevButton.hasAttribute("disabled")).toBeFalsy();
    expect(nextButton.hasAttribute("disabled")).toBeTruthy();
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
  });

  test("First and previous buttons are disable in first page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator
        prevFunction={onClick}
        firstFunction={onClick}
        nextFunction={onClick}
        lastFunction={onClick}
        currentPage={1}
        itemsPerPage={10}
        totalItems={20}
      ></DxcPaginator>
    );
    const firstButton = getAllByRole("button")[0];
    const prevButton = getAllByRole("button")[1];
    const nextButton = getAllByRole("button")[2];
    const lastButton = getAllByRole("button")[3];
    expect(firstButton.hasAttribute("disabled")).toBeTruthy();
    expect(prevButton.hasAttribute("disabled")).toBeTruthy();
    expect(nextButton.hasAttribute("disabled")).toBeFalsy();
    expect(lastButton.hasAttribute("disabled")).toBeFalsy();
  });
});

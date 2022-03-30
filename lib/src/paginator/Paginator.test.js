import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcPaginator from "./Paginator";

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

  test("Paginator renders with itemsPerPageOptions", () => {
    const { getByText } = render(
      <DxcPaginator currentPage={1} itemsPerPage={10} itemsPerPageOptions={[10, 15]} totalItems={20}></DxcPaginator>
    );
    expect(getByText("Items per page")).toBeTruthy();
  });

  test("Paginator renders with itemsPerPageOptions", () => {
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

  test("Paginator renders goToPage select", () => {
    const { getByText } = render(
      <DxcPaginator currentPage={2} showGoToPage={true} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    expect(getByText("Go to page:")).toBeTruthy();
  });

  test("Paginator goToPage call correct function", () => {
    const onClick = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByText, getAllByRole, getByRole } = render(
      <DxcPaginator
        currentPage={1}
        itemsPerPage={10}
        totalItems={27}
        showGoToPage={true}
        onPageChange={onClick}
      ></DxcPaginator>
    );
    const goToPageSelect = getAllByRole("combobox")[0];
    act(() => {
      userEvent.click(goToPageSelect);
    });
    const goToPageOption = getByText("2");
    act(() => {
      userEvent.click(goToPageOption);
    });
    expect(onClick).toHaveBeenCalledWith(2);
  });

  test("Call correct goToPageFunction", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const nextButton = getAllByRole("button")[2];
    userEvent.click(nextButton);
    expect(onClick).toHaveBeenCalled();
  });

  test("Call correct itemsPerPageFunction", () => {
    const onClick = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getAllByText, getByText } = render(
      <DxcPaginator
        currentPage={1}
        itemsPerPage={10}
        itemsPerPageOptions={[10, 15]}
        itemsPerPageFunction={onClick}
        totalItems={20}
      ></DxcPaginator>
    );
    const select = getAllByText("10")[0];
    act(() => {
      userEvent.click(select);
    });
    const itemPerPageOption = getByText("15");
    act(() => {
      userEvent.click(itemPerPageOption);
    });
    expect(onClick).toHaveBeenCalledWith(15);
  });

  test("Next button is disable in last page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={2} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const nextButton = getAllByRole("button")[2];
    expect(nextButton.hasAttribute("disabled")).toBeTruthy();
    userEvent.click(nextButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Last button is disable in last page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={2} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const lastButton = getAllByRole("button")[3];
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
    userEvent.click(lastButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("First button is disable in first page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const lastButton = getAllByRole("button")[0];
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
    userEvent.click(lastButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Previous button is disable in first page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
    );
    const lastButton = getAllByRole("button")[1];
    expect(lastButton.hasAttribute("disabled")).toBeTruthy();
    userEvent.click(lastButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Last and next buttons are disable in last page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={2} itemsPerPage={10} totalItems={20}></DxcPaginator>
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
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20}></DxcPaginator>
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

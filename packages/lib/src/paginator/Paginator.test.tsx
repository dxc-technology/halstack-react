import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcPaginator from "./Paginator";

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
};

describe("Paginator component tests", () => {
  test("Paginator renders with default values", () => {
    const { getByText } = render(<DxcPaginator />);
    expect(getByText("1 to 1 of 1")).toBeTruthy();
    expect(getByText("Page: 1 of 1")).toBeTruthy();
  });

  test("Paginator renders with currentPage", () => {
    const { getByText } = render(<DxcPaginator currentPage={2} />);
    expect(getByText("Page: 2 of 1")).toBeTruthy();
  });

  test("Paginator renders with itemsPerPageOptions", () => {
    const { getByText } = render(
      <DxcPaginator currentPage={1} itemsPerPage={10} itemsPerPageOptions={[10, 15]} totalItems={20} />
    );
    expect(getByText("Items per page:")).toBeTruthy();
    expect(getByText("1 to 10 of 20")).toBeTruthy();
    expect(getByText("Page: 1 of 2")).toBeTruthy();
  });

  test("Paginator renders with totalItems", () => {
    const { getByText } = render(<DxcPaginator totalItems={20} />);
    expect(getByText("1 to 5 of 20")).toBeTruthy();
    expect(getByText("Page: 1 of 4")).toBeTruthy();
  });

  test("Paginator renders with correct text in second page", () => {
    const { getByText } = render(<DxcPaginator currentPage={2} itemsPerPage={10} totalItems={20} />);
    expect(getByText("11 to 20 of 20")).toBeTruthy();
    expect(getByText("Page: 2 of 2")).toBeTruthy();
  });

  test("Paginator renders goToPage select", () => {
    const { getByText } = render(<DxcPaginator currentPage={2} showGoToPage itemsPerPage={10} totalItems={20} />);
    expect(getByText("Go to page:")).toBeTruthy();
  });

  test("Paginator goToPage call correct function", async () => {
    const onClick = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.HTMLElement.prototype.scrollTo = () => {};
    const { getByText, getAllByRole } = render(
      <DxcPaginator currentPage={1} itemsPerPage={10} totalItems={27} showGoToPage onPageChange={onClick} />
    );
    const goToPageSelect = getAllByRole("combobox")[0];
    goToPageSelect && (await userEvent.click(goToPageSelect));
    const goToPageOption = getByText("2");
    goToPageOption && (await userEvent.click(goToPageOption));
    expect(onClick).toHaveBeenCalledWith(2);
  });

  test("Call correct goToPageFunction", async () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20} />
    );
    const nextButton = getAllByRole("button")[2];
    nextButton && (await userEvent.click(nextButton));
    expect(onClick).toHaveBeenCalled();
  });

  test("Call correct itemsPerPageFunction", async () => {
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
      />
    );
    const select = getAllByText("10")[0];
    select && (await userEvent.click(select));
    const itemPerPageOption = getByText("15");
    itemPerPageOption && (await userEvent.click(itemPerPageOption));
    expect(onClick).toHaveBeenCalledWith(15);
  });

  test("Next button is disable in last page", async () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={2} itemsPerPage={10} totalItems={20} />
    );
    const nextButton = getAllByRole("button")[2];
    expect(nextButton?.hasAttribute("disabled")).toBeTruthy();
    nextButton && (await userEvent.click(nextButton));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Last button is disable in last page", async () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={2} itemsPerPage={10} totalItems={20} />
    );
    const lastButton = getAllByRole("button")[3];
    expect(lastButton?.hasAttribute("disabled")).toBeTruthy();
    lastButton && (await userEvent.click(lastButton));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("First button is disable in first page", async () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20} />
    );
    const lastButton = getAllByRole("button")[0];
    expect(lastButton?.hasAttribute("disabled")).toBeTruthy();
    lastButton && (await userEvent.click(lastButton));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Previous button is disable in first page", async () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20} />
    );
    const lastButton = getAllByRole("button")[1];
    expect(lastButton?.hasAttribute("disabled")).toBeTruthy();
    lastButton && (await userEvent.click(lastButton));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test("Last and next buttons are disable in last page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={2} itemsPerPage={10} totalItems={20} />
    );
    const firstButton = getAllByRole("button")[0];
    const prevButton = getAllByRole("button")[1];
    const nextButton = getAllByRole("button")[2];
    const lastButton = getAllByRole("button")[3];
    expect(firstButton?.hasAttribute("disabled")).toBeFalsy();
    expect(prevButton?.hasAttribute("disabled")).toBeFalsy();
    expect(nextButton?.hasAttribute("disabled")).toBeTruthy();
    expect(lastButton?.hasAttribute("disabled")).toBeTruthy();
  });

  test("First and previous buttons are disable in first page", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <DxcPaginator onPageChange={onClick} currentPage={1} itemsPerPage={10} totalItems={20} />
    );
    const firstButton = getAllByRole("button")[0];
    const prevButton = getAllByRole("button")[1];
    const nextButton = getAllByRole("button")[2];
    const lastButton = getAllByRole("button")[3];
    expect(firstButton?.hasAttribute("disabled")).toBeTruthy();
    expect(prevButton?.hasAttribute("disabled")).toBeTruthy();
    expect(nextButton?.hasAttribute("disabled")).toBeFalsy();
    expect(lastButton?.hasAttribute("disabled")).toBeFalsy();
  });

  test("itemsPerPage is 0 and showGoToPage is true", () => {
    const { getByText, getAllByRole } = render(
      <DxcPaginator itemsPerPage={0} itemsPerPageOptions={[5, 10, 15]} totalItems={27} showGoToPage />
    );
    expect(getByText("Items per page:")).toBeTruthy();
    expect(getAllByRole("combobox")).toBeTruthy();
  });
});

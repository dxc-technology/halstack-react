import { render, fireEvent } from "@testing-library/react";
import DxcAccordionGroup from "./AccordionGroup";

describe("Accordion component tests", () => {
  test("Uncontrolled accordion group calls correct function on click", () => {
    const onActiveChange = jest.fn();
    const { getByText, getAllByRole } = render(
      <DxcAccordionGroup margin="large" onActiveChange={onActiveChange}>
        <DxcAccordionGroup.Accordion label="Accordion1">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    expect(getAllByRole("button")[0].getAttribute("aria-expanded")).toBe("false");
    expect(getAllByRole("button")[1].getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(getByText("Accordion1"));
    expect(onActiveChange).toHaveBeenCalled();
    expect(getAllByRole("button")[0].getAttribute("aria-expanded")).toBe("true");
    expect(getAllByRole("button")[1].getAttribute("aria-expanded")).toBe("false");
  });

  test("Uncontrolled accordion group renders initially with an accordion expanded using defaultIndexActive", () => {
    const { queryByText, getByText, getAllByRole } = render(
      <DxcAccordionGroup defaultIndexActive={1}>
        <DxcAccordionGroup.Accordion label="Accordion1">
          <div>First accordion</div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2">
          <div>Second accordion</div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    expect(getAllByRole("button")[0].getAttribute("aria-expanded")).toBe("false");
    expect(getAllByRole("button")[1].getAttribute("aria-expanded")).toBe("true");
    expect(getByText("Second accordion")).toBeTruthy();
    expect(queryByText("First accordion")).toBeFalsy();
  });

  test("Controlled accordion with indexActive change", () => {
    const onActiveChange = jest.fn();
    const { queryByText, getByText, getAllByRole, rerender } = render(
      <DxcAccordionGroup margin="large" indexActive={1} onActiveChange={onActiveChange}>
        <DxcAccordionGroup.Accordion label="Accordion1">
          <div>Text1</div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2">
          <div>Text2</div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    expect(queryByText("Text1")).toBeFalsy();
    expect(getByText("Text2")).toBeTruthy();
    fireEvent.click(getByText("Accordion1"));
    fireEvent.click(getByText("Accordion2"));
    expect(onActiveChange.mock.calls[0][0]).toBe(0);
    expect(onActiveChange.mock.calls[1][0]).toBe(1);
    expect(getAllByRole("button")[0].getAttribute("aria-expanded")).toBe("false");
    expect(getAllByRole("button")[1].getAttribute("aria-expanded")).toBe("true");

    rerender(
      <DxcAccordionGroup margin="large" indexActive={0} onActiveChange={onActiveChange}>
        <DxcAccordionGroup.Accordion label="Accordion1">
          <div>Text1</div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2">
          <div>Text2</div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    expect(getAllByRole("button")[0].getAttribute("aria-expanded")).toBe("true");
    expect(getAllByRole("button")[1].getAttribute("aria-expanded")).toBe("false");
  });

  test("Disabled uncontrolled accordion group", () => {
    const onActiveChange = jest.fn();
    const { getByText } = render(
      <DxcAccordionGroup margin="large" onActiveChange={onActiveChange} disabled>
        <DxcAccordionGroup.Accordion label="Accordion1">
          <div>Text1</div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2">
          <div>Text2</div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    fireEvent.click(getByText("Accordion1"));
    fireEvent.click(getByText("Accordion2"));
    expect(onActiveChange).toHaveBeenCalledTimes(0);
  });
});

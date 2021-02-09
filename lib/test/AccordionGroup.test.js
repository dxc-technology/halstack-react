import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcAccordionGroup from "../src/accordion-group/AccordionGroup";

describe("Accordion component tests", () => {
  test("Uncontrolled accordion group renders with children", () => {
    const { getByText } = render(
      <DxcAccordionGroup>
        <DxcAccordionGroup.Accordion label="Accordion1" padding="medium">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2" padding="medium">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
            eget.
          </div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );

    expect(getByText("Accordion1")).toBeTruthy();
    expect(getByText("Accordion2")).toBeTruthy();
  });

  test("Controlled accordion group calls correct function on click", () => {
    const onActiveChange = jest.fn();
    const { getByText } = render(
        <DxcAccordionGroup
        margin="large"
        onActiveChange={onActiveChange}
        >
          <DxcAccordionGroup.Accordion label="Accordion1" padding="medium" margin="large">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion2" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
    );

    fireEvent.click(getByText("Accordion1"));
    expect(onActiveChange).toHaveBeenCalled();
  });

  test("Controlled accordion", () => {
    const onActiveChange = jest.fn();
    const { getByText } = render(
      <DxcAccordionGroup
        margin="large"
        indexActive={1}
        onActiveChange={onActiveChange}
      >
        <DxcAccordionGroup.Accordion label="Accordion1" padding="medium" margin="large">
          <div>
            Text1
          </div>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2" padding="medium">
          <div>
            Text2
          </div>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    );
    expect(getByText("Text1")).toBeTruthy();
    expect(getByText("Text2")).toBeTruthy();
    fireEvent.click(getByText("Accordion1"));
    fireEvent.click(getByText("Accordion2"));
    expect(onActiveChange).toHaveBeenCalledTimes(4);
    expect(onActiveChange.mock.calls[0][0]).toBe(0);
    expect(onActiveChange.mock.calls[1][0]).toBe(0);
    expect(onActiveChange.mock.calls[2][0]).toBe(1);
    expect(onActiveChange.mock.calls[3][0]).toBe(1);
  });
});

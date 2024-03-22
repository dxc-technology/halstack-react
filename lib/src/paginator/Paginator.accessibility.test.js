import React from "react";
import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcPaginator from "./Paginator.tsx";

// Mocking DOMRect for Radix Primitive Popover
global.globalThis = global;
global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
global.ResizeObserver = class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
};

global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};

describe("Paginator component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcPaginator
        currentPage={1}
        itemsPerPage={10}
        totalItems={27}
        onPageChange={() => {}}
        itemsPerPageOptions={[5, 10, 15]}
        showGoToPage
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

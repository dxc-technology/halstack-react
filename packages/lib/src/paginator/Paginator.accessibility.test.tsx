import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcPaginator from "./Paginator";
import { vi } from "vitest";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

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
    expect(results.violations).toHaveLength(0);
  });
});

import { fireEvent, render } from "@testing-library/react";
import DxcSidenav from "./Sidenav";

describe("Sidenav component tests", () => {
  test("Sidenav renders anchors and Section correctly", () => {
    const { getByText } = render(
      <DxcSidenav>
        <DxcSidenav.Section>
          <p>nav-content-test</p>
          <DxcSidenav.Link href="#">Link</DxcSidenav.Link>
        </DxcSidenav.Section>
      </DxcSidenav>
    );
    expect(getByText("nav-content-test")).toBeTruthy();
    const link = getByText("Link");
    expect(link.closest("a").getAttribute("href")).toBe("#");
  });

  test("Sidenav renders groups correctly", () => {
    const sidenav = render(
      <DxcSidenav>
        <DxcSidenav.Section>
          <DxcSidenav.Group title="Collapsable" collapsable>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
            <DxcSidenav.Link href="#">Lorem ipsum</DxcSidenav.Link>
          </DxcSidenav.Group>
        </DxcSidenav.Section>
      </DxcSidenav>
    );
    expect(sidenav.getByText("Collapsable")).toBeTruthy();
    expect(sidenav.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(sidenav.getByText("Collapsable"));
    expect(sidenav.getAllByRole("button")[0].getAttribute("aria-expanded")).toBe("false");
  });
});

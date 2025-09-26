import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcTable from "./Table";

// TODO: REMOVE
import rules from "../../test/accessibility/rules/specific/table/disabledRules";

const disabledRules = {
  rules: formatRules(rules),
};

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Table component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcTable margin="medium" mode="default">
        <thead>
          <tr>
            <th>header-1</th>
            <th>header-2</th>
            <th>header-3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell-1</td>
            <td>cell-2</td>
            <td>cell-3</td>
          </tr>
          <tr>
            <td>cell-4</td>
            <td>cell-5</td>
            <td>cell-6</td>
          </tr>
        </tbody>
      </DxcTable>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for reduced mode", async () => {
    const { container } = render(
      <DxcTable margin="medium" mode="reduced">
        <thead>
          <tr>
            <th>header-1</th>
            <th>header-2</th>
            <th>header-3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell-1</td>
            <td>cell-2</td>
            <td>cell-3</td>
          </tr>
          <tr>
            <td>cell-4</td>
            <td>cell-5</td>
            <td>cell-6</td>
          </tr>
        </tbody>
      </DxcTable>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
});

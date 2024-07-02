import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcTable from "./Table";

// TODO: REMOVE
import { disabledRules as rules } from "../../test/accessibility/rules/specific/table/disabledRules.js";

const disabledRules = {
  rules: rules.reduce((rulesObj, rule) => {
    rulesObj[rule] = { enabled: false };
    return rulesObj;
  }, {}),
};

(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

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

import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcButton from "../button/Button";
import DxcCard from "../card/Card";
import DxcCheckbox from "../checkbox/Checkbox";
import DxcDateInput from "../date-input/DateInput";
import DxcLink from "../link/Link";
import DxcRadioGroup from "../radio-group/RadioGroup";
import DxcSelect from "../select/Select";
import DxcSlider from "../slider/Slider";
import DxcSwitch from "../switch/Switch";
import DxcTextInput from "../text-input/TextInput";
import DxcTextarea from "../textarea/Textarea";
import DxcDialog from "./Dialog";
import DxcTooltip from "../tooltip/Tooltip";
import DxcAlert from "../alert/Alert";
import MockDOMRect from "../../test/mocks/domRectMock";

global.DOMRect = MockDOMRect;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const options = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non-binary", value: "non-binary" },
  { label: "Other", value: "other" },
];

describe("Dialog component tests", () => {
  test("Dialog renders with correct text and accessibility attributes", () => {
    const { getByText, getByRole } = render(<DxcDialog>dialog-text</DxcDialog>);
    expect(getByRole("dialog")).toBeTruthy();
    expect(getByRole("dialog").getAttribute("aria-modal")).toBe("true");
    expect(getByText("dialog-text")).toBeTruthy();
  });
  test("Dialog renders without close button", () => {
    const { queryByRole } = render(<DxcDialog closable={false}>dialog-text</DxcDialog>);
    expect(queryByRole("button")).toBeFalsy();
  });
  test("Dialog renders with aria-modal false when overlay is not used", () => {
    const { getByRole } = render(
      <DxcDialog closable={false} overlay={false}>
        dialog-text
      </DxcDialog>
    );
    expect(getByRole("dialog")).toBeTruthy();
    expect(getByRole("dialog").getAttribute("aria-modal")).toBe("false");
  });
  test("Calls correct function onCloseClick", () => {
    const onCloseClick = jest.fn();
    const { getByRole } = render(<DxcDialog onCloseClick={onCloseClick}>dialog-text</DxcDialog>);
    const closeButton = getByRole("button");
    fireEvent.click(closeButton);
    expect(onCloseClick).toHaveBeenCalled();
  });
  test("Calls correct function onCloseClick when 'Escape' key is pressed", () => {
    const onCloseClick = jest.fn();
    const { getByRole } = render(<DxcDialog onCloseClick={onCloseClick}>dialog-text</DxcDialog>);
    fireEvent.keyDown(getByRole("dialog"), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(onCloseClick).toHaveBeenCalled();
  });
  test("Does not call function onCloseClick when 'Escape' key is pressed while a child popover is opened", () => {
    const onCloseClick = jest.fn();
    const { getByRole } = render(
      <DxcDialog onCloseClick={onCloseClick}>
        <DxcDateInput label="With format M-dd-yyyy" format="M-dd-yyyy" />
      </DxcDialog>
    );
    const calendarAction = getByRole("combobox");
    userEvent.click(calendarAction);
    fireEvent.keyDown(document.activeElement!, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });
    expect(onCloseClick).not.toHaveBeenCalled();
  });
});

describe("Dialog component: Focus lock tests", () => {
  test("Close action: when there's no focusable content, the focus never leaves the close action (unless you click outside)", () => {
    const { getByRole } = render(<DxcDialog>example-dialog</DxcDialog>);
    const button = getByRole("button");
    const dialog = getByRole("dialog");
    expect(document.activeElement).toEqual(button);
    expect(button.getAttribute("aria-label")).toBe("Close dialog");
    userEvent.tab();
    expect(document.activeElement).toEqual(button);
    fireEvent.keyDown(dialog, { key: "Tab", shiftKey: true });
    expect(document.activeElement).toEqual(button);
  });
  test("Autofocus with Button component", () => {
    const { getAllByRole } = render(
      <DxcDialog>
        <DxcButton label="Accept" />
      </DxcDialog>
    );
    const button = getAllByRole("button")[0];
    expect(document.activeElement).toEqual(button);
    expect(button?.getAttribute("aria-label")).not.toBe("Close dialog");
  });
  test("Autofocus with Card component", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcCard linkHref="https://developer.dxc.com/halstack/next/components/card/">example-card</DxcCard>
      </DxcDialog>
    );
    const card = getByRole("link");
    expect(document.activeElement).toEqual(card);
  });
  test("Autofocus with Checkbox component", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcCheckbox label="Name" />
      </DxcDialog>
    );
    const checkbox = getByRole("checkbox");
    expect(document.activeElement).toEqual(checkbox);
  });
  test("Autofocus with Link component", () => {
    const { getByRole } = render(
      <DxcDialog>
        This is a text with a <DxcLink href="#">Link</DxcLink> to another page.
      </DxcDialog>
    );
    const link = getByRole("link");
    expect(document.activeElement).toEqual(link);
  });
  test("Autofocus with RadioGroup component", () => {
    const { getAllByRole } = render(
      <DxcDialog>
        <DxcRadioGroup label="Example" options={options} />
      </DxcDialog>
    );
    const checkedRadio = getAllByRole("radio")[0];
    expect(document.activeElement).toEqual(checkedRadio);
  });
  test("Autofocus with Select component", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcSelect label="Country" options={options} />
      </DxcDialog>
    );
    const select = getByRole("combobox");
    expect(document.activeElement).toEqual(select);
  });
  test("Autofocus with Slider component", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcSlider label="label" minValue={0} maxValue={100} showLimitsValues />
      </DxcDialog>
    );
    const slider = getByRole("slider");
    expect(document.activeElement).toEqual(slider);
  });
  test("Autofocus with Switch component", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcSwitch label="Example" />
      </DxcDialog>
    );
    const switchButton = getByRole("switch");
    expect(document.activeElement).toEqual(switchButton);
  });
  test("Autofocus with Text Input component", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcTextInput label="Name" />
      </DxcDialog>
    );
    const input = getByRole("textbox");
    expect(document.activeElement).toEqual(input);
  });
  test("Autofocus with Textarea component", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcTextarea label="Name" />
      </DxcDialog>
    );
    const textarea = getByRole("textbox");
    expect(document.activeElement).toEqual(textarea);
  });
  test("Negative tabindex elements are not automatically focused, even if it is enabled and a valid focusable item (programatically and by click)", () => {
    const { getAllByRole, getByRole } = render(
      <DxcDialog>
        <input title="Name" tabIndex={-1} />
        <input title="Name" />
      </DxcDialog>
    );
    const inputs = getAllByRole("textbox");
    const button = getByRole("button");
    expect(document.activeElement).toEqual(inputs[1]);
    userEvent.tab();
    expect(document.activeElement).toEqual(button);
    userEvent.tab();
    expect(document.activeElement).toEqual(inputs[1]);
  });
  test("Focus jumps disabled components and negative tabIndexes when autofocusing first item", () => {
    const { getAllByRole } = render(
      <DxcDialog>
        <DxcButton label="Accept" disabled />
        <DxcCheckbox label="Older age" disabled />
        <DxcSelect label="Country" options={options} disabled />
        <DxcRadioGroup label="Country" options={options} disabled />
        <DxcTextInput label="Name" disabled />
        <DxcButton label="Accept" tabIndex={-1} />
        <DxcCheckbox label="Older age" tabIndex={-1} />
        <DxcSelect label="Country" options={options} tabIndex={-1} />
        <DxcRadioGroup label="Country" options={options} tabIndex={-1} />
        <DxcTextInput label="Name" tabIndex={-1} />
        <DxcTextarea label="Description" />
      </DxcDialog>
    );
    const textarea = getAllByRole("textbox")[2];
    expect(document.activeElement).toEqual(textarea);
  });
  test("Focus jumps from last element to the first", () => {
    const { getByRole } = render(
      <DxcDialog>
        <DxcCheckbox label="Accept" disabled />
        <DxcTextarea label="Name" />
        <DxcRadioGroup label="Name" options={options} />
      </DxcDialog>
    );
    const closeAction = getByRole("button");
    const textarea = getByRole("textbox");
    expect(document.activeElement).toEqual(textarea);
    userEvent.tab();
    userEvent.tab();
    expect(document.activeElement).toEqual(closeAction);
    userEvent.tab();
    expect(document.activeElement).toEqual(textarea);
  });
  test("'display: none;', 'visibility: hidden;' and 'type = 'hidden'' elements are never autofocused", () => {
    const { getByRole } = render(
      <DxcDialog>
        <input title="Name" style={{ display: "none" }} />
        <input title="Name" style={{ visibility: "hidden" }} />
        <input type="hidden" name="example" />
      </DxcDialog>
    );
    const closeAction = getByRole("button");
    expect(document.activeElement).toEqual(closeAction);
    userEvent.tab();
    expect(document.activeElement).toEqual(closeAction);
  });
  test("Focus gets trapped in the Dialog when there are not focusable elements inside until it is closed", () => {
    const { getAllByRole, getByRole } = render(
      <>
        <DxcTextInput label="Name" />
        <DxcDialog closable={false}>
          <h2>Policy agreement</h2>
          <p>Sample text.</p>
        </DxcDialog>
        <DxcTextInput label="Surname" />
      </>
    );
    const inputs = getAllByRole("textbox");
    const dialog = getByRole("dialog");
    userEvent.tab();
    userEvent.tab();
    expect(document.activeElement).not.toEqual(inputs[1]);
    fireEvent.keyDown(dialog, { key: "Tab", shiftKey: true });
    fireEvent.keyDown(dialog, { key: "Tab", shiftKey: true });
    expect(document.activeElement).not.toEqual(inputs[0]);
  });
  test("Focus travels correctly in a complex tab sequence", () => {
    const { getAllByRole, queryByRole, getByRole } = render(
      <DxcDialog>
        <DxcSelect label="Accept" options={options} />
        <DxcDateInput label="Older age" />
        <DxcTooltip label="Text input tooltip label">
          <DxcTextInput label="Name" />
        </DxcTooltip>
        <DxcAlert
          semantic="error"
          title="Error"
          message={{
            text: "User: arn:aws:xxx::xxxxxxxxxxxx:assumed-role/assure-sandbox-xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx/sandbox-xxxx-xxxxxxxxxxxxxxxxxx is not authorized to perform: lambda:xxxxxxxxxxxxxx on resource: arn:aws:lambda:us-east-1:xxxxxxxxxxxx:function:sandbox-xxxx-xx-xxxxxxx-xxxxxxx-lambda because no identity-based policy allows the lambda:xxxxxxxxxxxxxx action",
          }}
        />
        <DxcButton label="Cancel" />
        <DxcButton label="Save" />
      </DxcDialog>
    );
    const select = getAllByRole("combobox")[0];
    expect(document.activeElement).toEqual(select);
    if (select != null) {
      fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    }
    expect(queryByRole("listbox")).toBeTruthy();
    userEvent.tab();
    userEvent.tab();
    userEvent.keyboard("{Enter}");
    expect(getAllByRole("dialog")[1]).toBeTruthy();
    const dialog = getAllByRole("dialog")[0];
    if (dialog != null) {
      userEvent.click(dialog);
    }
    userEvent.tab();
    userEvent.tab();
    userEvent.tab();
    userEvent.tab();
    expect(document.activeElement).toEqual(getByRole("button", { name: "Close alert" }));
    userEvent.tab();
    userEvent.tab();
    expect(document.activeElement).toEqual(getByRole("button", { name: "Save" }));
    userEvent.tab();
    userEvent.tab();
    expect(document.activeElement).toEqual(select);
    userEvent.tab({ shift: true });
    userEvent.tab({ shift: true });
    expect(getByRole("button", { name: "Save" })).toBeTruthy();
  });
});

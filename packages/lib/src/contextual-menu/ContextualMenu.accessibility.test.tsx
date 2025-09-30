import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcBadge from "../badge/Badge";
import DxcContextualMenu from "./ContextualMenu";

const badgeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z" />
    <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
);

const keyIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
    <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z" />
  </svg>
);

const favIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
  </svg>
);

const itemsWithTruncatedText = [
  {
    label: "Item with a very long label that should be truncated",
    slot: <DxcBadge color="blue" mode="contextual" label="Label" size="small" icon={badgeIcon} title="Badge" />,
    icon: keyIcon,
  },
  {
    label: "Item 2",
    slot: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.6667 10.6667H1.33333V1.33333H6V0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6H10.6667V10.6667ZM7.33333 0V1.33333H9.72667L3.17333 7.88667L4.11333 8.82667L10.6667 2.27333V4.66667H12V0H7.33333Z"
          fill="#323232"
        />
      </svg>
    ),
    icon: favIcon,
  },
];

const items = [
  {
    title: "Business services",
    items: [
      {
        label: "Home",
        icon: "home",
        items: [
          { label: "Data & statistics" },
          {
            label: "Apps",
            items: [
              {
                label: "Sales data module",
                badge: <DxcBadge color="purple" label="Experimental" />,
              },
              { label: "Central platform" },
            ],
          },
        ],
      },
      {
        label: "Data warehouse",
        icon: "database",
        items: [
          {
            label: "Data & statistics",
          },
          {
            label: "Sales performance",
          },
          {
            label: "Key metrics",
          },
        ],
      },
    ],
  },
  {
    items: [{ label: "Support", icon: "support_agent" }],
  },
];

describe("Context menu accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcContextualMenu items={itemsWithTruncatedText} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("A complex contextual menu should not have basic accessibility issues", async () => {
    const { container } = render(<DxcContextualMenu items={items} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

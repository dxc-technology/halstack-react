import { toHaveNoViolations } from "jest-axe";
import { expect } from "storybook/internal/test";

expect.extend(toHaveNoViolations);

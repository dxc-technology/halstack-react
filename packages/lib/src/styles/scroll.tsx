import { css } from "@emotion/react";

const scrollbarStyles = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-fg-neutral-strong);
    border-radius: var(--border-radius-s);
  }
  &::-webkit-scrollbar-track {
    background: var(--color-bg-neutral-light);
    border-radius: var(--border-radius-s);
  }
`;

export default scrollbarStyles;

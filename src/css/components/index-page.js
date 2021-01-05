import { css } from "@emotion/react"
import button from "./common/button"
import themeTransition from "./common/theme-transiton"

export const indexPageTab = css`
  ${themeTransition};
  display: flex;
  border-bottom: 1px solid var(--color-border-primary);
  overflow: hidden;
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4);
  button {
    ${button};
    margin: var(--spacing-0) var(--spacing-3) var(--spacing-0) var(--spacing-0);
    color: var(--color-text-light);
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding: var(--spacing-2) var(--spacing-0);
    :focus {
      filter: brightness(1);
    }
  }
  span {
  }
  .active {
    border-bottom: 2px solid var(--color-text);
    font-weight: bold;
    color: var(--color-text);
  }
`

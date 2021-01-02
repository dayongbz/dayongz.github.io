import { css } from "@emotion/react"
import button from "./common/button"
import flexCenter from "./common/flex-center"
import themeTransition from "./common/theme-transiton"

export const seriesHead = css`
  ${flexCenter};
  justify-content: space-between;

  h2 {
    font-size: var(--fontSize-3);
    margin: var(--spacing-0);
  }

  span {
    color: var(--color-text-light);
    font-size: var(--fontSize-0);
    margin-left: var(--spacing-2);
  }

  button {
    ${button};
    ${themeTransition}
    border: none;
    padding: var(--spacing-1);
  }
`

const series = css`
  ${themeTransition}
  position: relative;
  background-color: var(--color-bg-tertiary);
  border-radius: 8px;
  padding: var(--spacing-6) var(--spacing-4);
  margin-bottom: var(--spacing-8);
  font-size: var(--fontSize-0);
  overflow: hidden;

  ul {
    list-style-type: decimal;
    margin: var(--spacing-6) var(--spacing-0) var(--spacing-0);
  }

  ul ::marker {
    color: var(--color-text-light);
  }

  a {
    color: var(--color-text);
  }

  .active {
    color: var(--color-primary);
    font-weight: var(--fontWeight-bold);
  }
`

export default series

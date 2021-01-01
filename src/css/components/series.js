import { css } from "@emotion/react"
import button from "./common/button"
import flexCenter from "./common/flex-center"

export const seriesFooter = css`
  ${flexCenter};
  justify-content: space-between;
  margin-top: var(--spacing-8);
  p {
    color: var(--color-text-light);
    margin: var(--spacing-0);
  }

  button {
    ${button};
    border: none;
    padding: var(--spacing-0);
    :hover,
    :focus {
      background-color: transparent;
    }
  }
`

export const backgroundText = css`
  position: absolute;
  bottom: calc(-1 * var(--spacing-6));
  right: var(--spacing-2);
  font-size: var(--fontSize-7);
  font-weight: var(--fontWeight-black);
  font-style: var(--fontStyle-italic);
  opacity: 0.3;
`

const series = css`
  position: relative;
  background-color: var(--color-bg-tertiary);
  border-radius: 8px;
  padding: var(--spacing-8) var(--spacing-6);
  margin-bottom: var(--spacing-16);
  font-size: var(--fontSize-0);
  overflow: hidden;

  h2 {
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-6);
    font-size: var(--fontSize-3);
  }

  ul {
    list-style-type: decimal;
  }

  ul ::marker {
    color: var(--color-text-light);
  }

  a {
    color: var(--color-text);
  }

  strong {
    font-style: italic;
  }

  .active {
    color: var(--color-primary);
    font-weight: var(--fontWeight-bold);
  }
`

export default series

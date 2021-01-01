import { css } from "@emotion/react"

const button = css`
  display: inline-block;
  background-color: var(--color-bg-tertiary);
  padding: var(--spacing-2) var(--spacing-4);
  color: 1px solid var(--color-text);
  font-size: var(--fontSize-0);
  font-weight: var(--fontWeight-bold);
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  appearance: none;

  svg {
    vertical-align: middle;
  }

  span {
    vertical-align: middle;
  }

  :hover,
  :focus {
    text-decoration: none;
    filter: brightness(0.8);
  }
`

export default button

import { css } from "@emotion/react"

const button = css`
  display: inline-block;
  padding: var(--spacing-2);
  font-size: var(--fontSize-0);
  font-weight: var(--fontWeight-bold);
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  appearance: none;
  background-color: var(--color-bg-tertiary);
  color: 1px solid var(--color-text);
  :hover {
    text-decoration: none;
    filter: brightness(0.8);
  }
`

export default button

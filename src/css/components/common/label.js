import { css } from "@emotion/react"

const label = css`
  background-color: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-secondary);
  color: var(--color-text);
  text-align: center;
  vertical-align: middle;
  font-size: var(--fontSize-0);
  padding: var(--spacing-0) var(--spacing-2);
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-2);
  border-radius: 100px;
  :first-of-type {
    margin-left: var(--spacing-0);
  }
`

export default label

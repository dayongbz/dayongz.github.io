import { css } from "@emotion/react"

const label = css`
  background-color: var(--color-border-primary);
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

export const labelLayout = css`
  position: absolute;
  top: var(--spacing-2);
  left: var(--spacing-0);
  z-index: 9;
`

export default label

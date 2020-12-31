import { css } from "@emotion/react"

const label = css`
  background-color: var(--color-tag-primary);
  color: var(--color-white);
  text-align: center;
  font-size: var(--fontSize-0);
  padding: var(--spacing-0) var(--spacing-2);
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-2);
  border-radius: 100px;
`

export const labelLayout = css`
  position: absolute;
  top: var(--spacing-2);
  left: var(--spacing-0);
  z-index: 9;
`

export default label

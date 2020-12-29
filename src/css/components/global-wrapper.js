import { css } from "@emotion/react"

const globalWrapper = css`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-16) var(--spacing-5);

  > header {
    display: flex;
    height: 50px;
    justify-content: flex-end;
    align-items: center;
  }
`

export default globalWrapper

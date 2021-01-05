import { css } from "@emotion/react"

const blogPost = css`
  position: relative;
  margin-top: var(--spacing-8);
  header {
    h1 {
      margin: var(--spacing-0) var(--spacing-0) var(--spacing-2)
        var(--spacing-0);
    }
  }
`

export const infoWrapper = css`
  margin-bottom: var(--spacing-8);
  p {
    color: var(--color-text-light);
    font-family: var(--font-heading);
    margin: var(--spacing-0);
  }
`
export default blogPost

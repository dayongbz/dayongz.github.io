import { css } from "@emotion/react"

const postItem = css`
  padding: var(--spacing-6) var(--spacing-0);
  border-bottom: 1px solid var(--color-border-primary);

  :first-of-type {
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-6);
  }

  a {
    color: var(--color-text);
  }

  a,
  p {
    margin-bottom: var(--spacing-0);
  }

  h3 {
    margin-top: var(--spacing-0);
    margin-bottom: var(--spacing-0);
  }

  header {
    margin-bottom: var(--spacing-2);
  }

  .gatsby-image-wrapper {
    margin-bottom: var(--spacing-5);
  }
`

export default postItem

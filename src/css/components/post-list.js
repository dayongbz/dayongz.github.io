import { css } from "@emotion/react"

const postList = css`
  border-top: 1px solid var(--color-border-primary);
  margin: var(--spacing-0);

  article {
    padding: var(--spacing-12) var(--spacing-0);
  }

  a {
    color: var(--color-text);
  }

  a,
  p {
    margin-bottom: var(--spacing-0);
  }

  h2 {
    margin-top: var(--spacing-0);
    margin-bottom: var(--spacing-2);
  }

  header {
    margin-bottom: var(--spacing-4);
  }

  .gatsby-image-wrapper {
    margin-bottom: var(--spacing-5);
  }
`

export default postList

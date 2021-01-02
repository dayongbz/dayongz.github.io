import { css } from "@emotion/react"

const postItem = css`
  margin: var(--spacing-0);

  article {
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-6);
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

export default postItem

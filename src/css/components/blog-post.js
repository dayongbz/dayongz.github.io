import { css } from "@emotion/react"

const blogPost = css`
  position: relative;
  header {
    h1 {
      margin: var(--spacing-0) var(--spacing-0) var(--spacing-4)
        var(--spacing-0);
    }
    p {
      color: var(--color-text-light);
      font-family: var(--font-heading);
      margin: 0 0 0 var(--spacing-2);
    }
    ul {
      margin: var(--spacing-0);
    }
    .info-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-8);
    }
  }
`

export const infoWrapper = css`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-8);
`
export default blogPost

import { css } from "@emotion/react"

export const htmlElements = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html {
    line-height: var(--lineHeight-normal);
    font-size: var(--fontSize-root);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-body);
    font-size: var(--fontSize-1);
    color: var(--color-text);
    background-color: var(--color-background);
  }

  footer {
    padding: var(--spacing-6) var(--spacing-0);
  }

  hr {
    background: var(--color-border-primary);
    height: 1px;
    border: 0;
  }
`

export const heading = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-6);
    line-height: var(--lineHeight-tight);
    letter-spacing: -0.025em;
    font-weight: var(--fontWeight-bold);
    color: var(--color-heading);
    > a {
      color: inherit;
      text-decoration: none;
    }
  }

  h1 {
    font-size: var(--fontSize-6);
    color: var(--color-heading-black);
  }

  h2 {
    font-size: var(--fontSize-4);
  }

  h3 {
    font-size: var(--fontSize-3);
  }

  h4 {
    font-size: var(--fontSize-2);
  }

  h5 {
    font-size: var(--fontSize-1);
  }

  h6 {
    font-size: var(--fontSize-0);
  }
`

export const prose = css`
  p {
    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
    padding: var(--spacing-0);
  }

  ul,
  ol {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    padding: var(--spacing-0);
    margin-bottom: var(--spacing-6);
    list-style-position: inside;
    li {
      padding-left: var(--spacing-0);
      overflow-wrap: break-word;
    }
  }

  li {
    + li {
      margin-top: var(--spacing-1);
    }
    *:last-child {
      margin-bottom: var(--spacing-0);
    }
    > ul,
    > ol {
      margin-left: var(--spacing-8);
      margin-bottom: var(--spacing-0);
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: var(--spacing-0);
  }

  code {
    font-family: var(--fontFamily-code);
  }

  strong {
    font-weight: var(--fontWeight-bold);
  }
`

const link = css`
  a {
    color: var(--color-text-link);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`

const globalElements = css`
  ${htmlElements};
  ${heading};
  ${prose}
  ${link}
`

export default globalElements

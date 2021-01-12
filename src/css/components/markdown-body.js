import { css } from "@emotion/react"
const markdownBody = css`
  width: var(--maxWidth-full);

  ul,
  ol {
    ul,
    ol {
      margin-top: var(--spacing-0);
      margin-bottom: var(--spacing-0);
    }
  }

  li {
    margin-top: var(--spacing-1);
    p {
      display: inline;
    }
  }

  h1,
  h2 {
    padding-bottom: var(--spacing-2);
    border-bottom: 1px solid var(--color-border-secondary);
  }

  table {
    display: block;
    width: 100%;
    margin-bottom: var(--spacing-8);

    tr {
      background-color: var(--color-background);
      border-top: 1px solid var(--color-markdown-table-tr-border);
      :nth-of-type(2n) {
        background-color: var(--color-bg-tertiary);
      }
    }

    td,
    th {
      padding: var(--spacing-2) var(--spacing-3);
      border: 1px solid var(--color-markdown-table-border);
    }
  }

  blockquote {
    color: var(--color-text-light);
    padding: var(--spacing-0) var(--spacing-4);
    border-left: var(--spacing-1) solid var(--color-markdown-blockquote-border);
    margin: var(--spacing-0);
  }

  code {
    font-size: var(--fontSize-0);
    padding: 0.1rem var(--spacing-1);
    background-color: var(--color-markdown-code-bg);
    border-radius: 6px;
    font-family: var(--fontFamily-code);
  }

  pre.grvsc-container {
    font-size: var(--fontSize-0);
    background-color: var(--color-bg-tertiary) !important;

    code {
      background-color: transparent;
      padding: var(--spacing-0);
    }
  }

  img {
    max-width: var(--maxWidth-full);
  }
`
export default markdownBody

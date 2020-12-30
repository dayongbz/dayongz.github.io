import { css } from "@emotion/react"

export const tocWrapper = css`
  position: absolute;
  top: 0;
  right: -13rem;
  height: 100%;
  font-size: var(--fontSize-0);
  max-width: var(--maxWidth-3xs);
`

export const toc = css`
  position: sticky;
  top: 9.2rem;
  ul {
    list-style-type: none;
  }
`

export const tocTitle = css`
  margin: 0 0 var(--spacing-1);
  font-weight: var(--fontWeight-bold);
  font-size: var(--fontSize-1);
`

export const tocLink = css`
  color: var(--color-text-light);
  :hover {
    color: var(--color-primary);
  }
`

export const tocActiveLink = css`
  ${tocLink};
  font-weight: bold;
  color: var(--color-primary);
`

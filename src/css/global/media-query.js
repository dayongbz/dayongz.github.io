import { css } from "@emotion/react"

export const breakpoints = [576, 768, 992, 1200]
export const mqMin = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
export const mqMax = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const mediaQuery = css`
  ${mqMax[1]} {
    :root {
      --fontSize-root: 16px;
    }
  }
`
export default mediaQuery

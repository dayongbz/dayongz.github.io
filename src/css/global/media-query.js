import { css } from "@emotion/react"
import breakpoints from "../breakpoints"

const mqMax = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const mediaQuery = css`
  ${mqMax[1]} {
    :root {
      --fontSize-root: 16px;
    }
  }
`
export default mediaQuery

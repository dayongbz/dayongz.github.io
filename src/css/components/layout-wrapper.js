import { css } from "@emotion/react"
import themeTransition from "./common/theme-transiton"

const layoutWrapper = css`
  ${themeTransition}
  color: var(--color-text);
  background-color: var(--color-background);
`

export default layoutWrapper

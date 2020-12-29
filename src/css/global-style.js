import { css } from "@emotion/react"
import cssVariable from "./global/css-variable"
import globalElements from "./global/global-elements"
import mediaQuery from "./global/media-query"

const globalStyle = css`
  ${cssVariable};
  ${globalElements};
  ${mediaQuery};
`

export default globalStyle

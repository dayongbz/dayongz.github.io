import { css } from "@emotion/react"
import cssVariable from "./global/css-variable"
import globalElements from "./global/global-elements"
import mediaQuery from "./global/media-query"
import normalize from "./normalize.css"

const globalStyle = css`
  ${normalize};
  ${cssVariable};
  ${globalElements};
  ${mediaQuery};
`

export default globalStyle

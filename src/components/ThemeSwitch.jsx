import React, { memo, useContext } from "react"
import Toggle from "./Toggle"
import { GlobalDarkModeContext } from "../context/GlobalContextProvider"

import MoonIcon from "./icon/MoonIcon"

const ThemeSwitch = memo(() => {
  const darkMode = useContext(GlobalDarkModeContext)

  if (!darkMode) {
    return null
  }

  return (
    <Toggle
      checked={darkMode?.value}
      onChange={darkMode?.toggle}
      icons={<MoonIcon />}
    />
  )
})

export default ThemeSwitch

import React, { memo } from "react"
import Toggle from "../Toggle"
import useDarkMode from "use-dark-mode"

import MoonIcon from "../icon/MoonIcon"

const ThemeSwitch = memo(() => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  })

  return (
    <Toggle
      checked={darkMode.value}
      onChange={darkMode.toggle}
      icons={<MoonIcon />}
    />
  )
})

export default ThemeSwitch

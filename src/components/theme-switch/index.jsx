import React, { memo } from "react"
import Switch from "react-switch"
import useDarkMode from "use-dark-mode"

import DarkIcon from "../icon/DarkIcon"
import LightIcon from "../icon/LightIcon"

const ThemeSwitch = memo(() => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  })

  return (
    <Switch
      checked={darkMode.value}
      onChange={darkMode.toggle}
      onColor="#666666"
      offColor="#d1dce5"
      checkedIcon={<DarkIcon />}
      uncheckedIcon={<LightIcon />}
      onHandleColor="#1b1b1b"
      offHandleColor="#ffffff"
    />
  )
})

export default ThemeSwitch

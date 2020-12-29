import React, { memo, useContext, useState, useEffect } from "react"
import Toggle from "./Toggle"
import { GlobalDarkModeContext } from "../context/GlobalContextProvider"

import MoonIcon from "./icon/MoonIcon"

const ThemeSwitch = memo(() => {
  const [darkMode, setDarkMode] = useState()
  const darkModeCont = useContext(GlobalDarkModeContext)

  useEffect(() => {
    setDarkMode(darkModeCont)
  }, [darkModeCont])

  return (
    <Toggle
      checked={darkMode?.value}
      onChange={darkMode?.toggle}
      icons={<MoonIcon />}
    />
  )
})

export default ThemeSwitch

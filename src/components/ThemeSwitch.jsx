import React, { useState, useEffect } from "react"
import Switch from "react-switch"

import DarkIcon from "./DarkIcon"
import LightIcon from "./LightIcon"

const ThemeSwitch = () => {
  const [theme, setTheme] = useState()

  useEffect(() => {
    const prefersColorScheme = window.matchMedia(`(prefers-color-scheme: dark)`)
      .matches
      ? "dark"
      : "light"
    const localTheme = localStorage.getItem("theme")
    const initialTheme = localTheme || prefersColorScheme
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    if (theme) {
      const bodyElem = document.getElementsByTagName("body")[0]
      bodyElem.classList.remove("light")
      bodyElem.classList.remove("dark")
      bodyElem.classList.add(theme === "light" ? "light" : "dark")
    }
  }, [theme])

  const setMode = mode => {
    localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  return (
    <>
      {theme && (
        <Switch
          checked={theme === "dark"}
          onChange={themeToggler}
          onColor="#666666"
          offColor="#d1dce5"
          checkedIcon={<DarkIcon />}
          uncheckedIcon={<LightIcon />}
          onHandleColor="#1b1b1b"
          offHandleColor="#ffffff"
        />
      )}
    </>
  )
}

export default ThemeSwitch

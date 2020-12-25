import React, { useEffect, useContext, memo } from "react"
import Switch from "react-switch"

import DarkIcon from "../icon/DarkIcon"
import LightIcon from "../icon/LightIcon"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../context/GlobalContextProvider"

const ThemeSwitch = memo(() => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    const prefersColorScheme = window.matchMedia(`(prefers-color-scheme: dark)`)
      .matches
      ? "dark"
      : "light"
    const localTheme = localStorage.getItem("theme")
    const initialTheme = localTheme || prefersColorScheme
    dispatch({ type: "SET_THEME", theme: initialTheme })
  }, [dispatch])

  useEffect(() => {
    if (state.theme) {
      const bodyElem = document.getElementsByTagName("body")[0]
      bodyElem.classList.remove(state.theme === "dark" ? "light" : "dark")
      bodyElem.classList.add(state.theme)
    }
  }, [state.theme])

  const setMode = mode => {
    localStorage.setItem("theme", mode)
    dispatch({ type: "SET_THEME", theme: mode })
  }

  const themeToggler = () => {
    state.theme === "light" ? setMode("dark") : setMode("light")
  }

  return (
    <>
      {state.theme && (
        <Switch
          checked={state.theme === "dark"}
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
})

export default ThemeSwitch

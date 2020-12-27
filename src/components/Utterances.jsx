import React, { useRef, useEffect, memo, useContext } from "react"
import { GlobalDarkModeContext } from "../context/GlobalContextProvider"

const src = "https://utteranc.es/client.js"

const Utterances = memo(({ repo }) => {
  const containerRef = useRef()
  const darkMode = useContext(GlobalDarkModeContext)

  useEffect(() => {
    const parent = containerRef.current
    const utterances = document.createElement("script")
    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "comment",
      theme: !!darkMode.value ? "github-dark" : "github-light",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    parent.appendChild(utterances)
    return () => {
      parent.removeChild(parent.firstChild)
    }
  }, [repo, darkMode.value])

  return <div ref={containerRef} />
})

Utterances.displayName = "Utterances"

export default Utterances

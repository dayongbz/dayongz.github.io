import React, { useRef, useLayoutEffect, memo } from "react"

const src = "https://utteranc.es/client.js"

const Utterances = memo(({ repo }) => {
  const containerRef = useRef()

  useLayoutEffect(() => {
    const parent = containerRef.current
    const utterances = document.createElement("script")
    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light",
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
  }, [repo])

  return <div ref={containerRef}></div>
})

Utterances.displayName = "Utterances"

export default Utterances

/*
 * Copyright (c) 2015 Gatsbyjs
 * Forked from https://github.com/gatsbyjs/gatsby/
 **/

import { useEffect, useState } from "react"

export const useActiveHash = (itemIds, rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id)
          }
        })
      },
      { rootMargin: rootMargin || `0% 0% -95% 0%` }
    )

    itemIds.forEach(id => {
      const target = document.getElementById(id)
      if (target) observer.observe(target) // when target is a element
    })

    return () => {
      itemIds.forEach(id => {
        const target = document.getElementById(id)
        if (target) observer.unobserve(target)
      })
    }
  }, [itemIds, rootMargin])

  return activeHash
}

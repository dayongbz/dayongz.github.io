import React, { useEffect, useRef, memo } from "react"

import PostItem from "./PostItem"

const PostList = memo(({ posts, postsCount, maxPostsCount, dispatch }) => {
  const parentRef = useRef()

  useEffect(() => {
    const parent = parentRef?.current
    const elements = Array.from(parent.children)
    const target = elements[postsCount - 1]

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && maxPostsCount > postsCount) {
            dispatch({ type: "ADD_POST" })
          }
        })
      },
      { threshold: 0.8 }
    )
    if (target) observer.observe(target)
    return () => {
      if (target) observer.unobserve(target)
    }
  }, [dispatch, maxPostsCount, postsCount])

  return (
    <ol ref={parentRef} style={{ listStyle: `none` }}>
      {postsCount &&
        posts
          .slice(0, postsCount)
          .map(post => <PostItem key={post.fields.slug} post={post} />)}
    </ol>
  )
})

export default PostList

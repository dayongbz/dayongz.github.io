import React, { useEffect, useRef, memo, useContext } from "react"

import postList from "../css/components/post-list"
import PostItem from "./PostItem"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const PostList = memo(({ posts }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const parentRef = useRef()

  useEffect(() => {
    // lazy load
    if (parentRef.current) {
      const parent = parentRef.current
      const elements = Array.from(parent.children)
      const target = elements[state.visiblePostCount - 1]

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              dispatch({ type: "ADD_VISIBLE_POST_COUNT" })
            }
          })
        },
        { threshold: 0.8 }
      )
      if (target) observer.observe(target)
      return () => {
        if (target) observer.unobserve(target)
      }
    }
  }, [dispatch, state.posts, state.visiblePostCount])

  return (
    <>
      {posts.length ? (
        <ol ref={parentRef} css={postList}>
          {posts?.slice(0, state.visiblePostCount).map(post => (
            <PostItem key={post.fields.slug} post={post} />
          ))}
        </ol>
      ) : (
        <p>No blog posts found.</p>
      )}
    </>
  )
})

export default PostList

import React, { useEffect, useRef, memo, useContext } from "react"

import postList from "../css/components/post-list"
import PostItem from "./PostItem"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const PostList = memo(({ postsAll }) => {
  const parentRef = useRef()
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    // set max post count
    dispatch({ type: "SET_MAX_POST_COUNT", maxPostCount: postsAll.length })
  }, [postsAll, dispatch])

  useEffect(() => {
    if (parentRef.current) {
      const parent = parentRef.current
      const elements = Array.from(parent.children)
      const target = elements[state.postCount - 1]

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && state.maxPostCount > state.postCount) {
              dispatch({ type: "ADD_POST_COUNT" })
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
  }, [dispatch, state.maxPostCount, state.postCount])

  return (
    <>
      {postsAll?.length ? (
        <ol ref={parentRef} css={postList}>
          {state.postCount &&
            postsAll
              ?.slice(0, state.postCount)
              .map(post => <PostItem key={post.fields.slug} post={post} />)}
        </ol>
      ) : (
        <p>No blog posts found.</p>
      )}
    </>
  )
})

export default PostList

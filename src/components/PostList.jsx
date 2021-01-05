import React, { useEffect, useRef, memo, useContext } from "react"

import postList from "../css/components/post-list"
import PostItem from "./PostItem"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const PostList = memo(({ postsAll, categories }) => {
  const parentRef = useRef()
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    if (state.postTab === 0) {
      dispatch({ type: "SET_POSTS", posts: postsAll })
    } else {
      dispatch({
        type: "SET_POSTS",
        posts: postsAll.filter(item =>
          item.frontmatter.categories.includes(categories[state.postTab - 1])
        ),
      })
    }
  }, [state.postTab, postsAll, categories, dispatch])

  useEffect(() => {
    // set max post count
    dispatch({ type: "SET_MAX_POST_COUNT", maxPostCount: state.posts?.length })
  }, [state.posts, dispatch])

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
      {state.posts?.length ? (
        <ol ref={parentRef} css={postList}>
          {state.postCount &&
            state.posts
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

import React, { useEffect, useRef, memo, useState } from "react"

import postList from "../css/components/post-list"
import PostItem from "./PostItem"

const PostList = memo(({ posts }) => {
  const parentRef = useRef()
  const [visiblePostCount, setVisiblePostCount] = useState(3)

  useEffect(() => {
    // lazy load
    if (parentRef.current) {
      const parent = parentRef.current
      const target = parent.lastChild

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && posts?.length > visiblePostCount) {
              setVisiblePostCount(visiblePostCount + 3)
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
  }, [posts, visiblePostCount])

  return (
    <>
      {posts.length ? (
        <ol ref={parentRef} css={postList}>
          {posts?.slice(0, visiblePostCount).map(post => (
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

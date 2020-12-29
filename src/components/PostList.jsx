import React, { memo } from "react"
import PostItem from "./PostItem"

const PostList = memo(({ posts, postsCount }) => {
  return (
    <ol style={{ listStyle: `none` }}>
      {postsCount &&
        posts
          .slice(0, postsCount)
          .map(post => <PostItem key={post.fields.slug} post={post} />)}
    </ol>
  )
})

export default PostList

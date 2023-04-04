import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from './Post/Post';

const Posts = () => {
    const posts = useLoaderData();
  return (
    <div>
        <h2>All posts are here: {posts.length}</h2>
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    </div>
  )
}

export default Posts
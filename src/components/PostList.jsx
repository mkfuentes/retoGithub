import React from 'react'
import PostCard from '../components/PostCard'

function PostList(props) {
  return (
    <div className='row'>
      {
        props.list.map((repos, index) => (
          <div
            key={repos.id || `post-${index}`}
            className='col-md-4'
          >
            <PostCard
              name={repos.name}
              private={repos.private}
              ownerLogin={repos.ownerLogin}
              createdAt={repos.createdAt}
              updatedAt={repos.updatedAt}
              img={repos.img}
            />
          </div>
        ))
      }
    </div>
  )
}

export default PostList

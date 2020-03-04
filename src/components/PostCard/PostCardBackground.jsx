import React from 'react'

function PostCardBackground(props) {
  return (
    <img
      className='bd-placeholder-img card-img-top'
      width='100%'
      height='auto'
      src={props.img}
      alt={props.img}
    />
  )
}

export default PostCardBackground

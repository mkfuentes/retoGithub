import React from 'react'

function PostCardBody(props) {

  return (

    <div className='card-body'>
      <h5 className='card-title'>
        <p>Name: {props.name}</p>
      </h5>
      <p>OwnerLogin: {props.ownerLogin}</p>
      <p className='card-text'>
        <p>Privacidad: {props.private}</p>
        <p>Created At: {props.createdAt}</p>
        <p>Updated At: {props.updatedAt}</p>
      </p>
    </div>
  )
}

export default PostCardBody

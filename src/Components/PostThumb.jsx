import React from 'react'
import {Link} from 'react-router-dom'

export default function PostThumb(props) {
    const post = props.post
    let image = `https://picsum.photos/id/${post.id}/400/300`
    
  return (
    <div className='col-span-4 text-center'>
        <h4 className='inner-head'>{post.title}</h4>
        <div><img className='w-full' src={image} alt="api image" /></div>
        <p className='paragraph my-8'>{post.body}</p>
        <Link
            to={`/blog/${post.id}`}
            className='link'
        >
            Read more
        </Link>
    </div>
  )
}

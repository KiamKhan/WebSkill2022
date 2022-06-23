import React from 'react'
import {Link} from 'react-router-dom'

export default function PostThumb(props) {
    const post = props.post
    let image = `https://picsum.photos/id/${post.id}/400/300`
    
  return (
    <div className='col-span-4 text-center shadow-lg'>
        <h4 className='inner-head mt-6'>{post.title}</h4>
        <div><img className='w-full' src={image} alt="api image" /></div>
        <p className='paragraph mt-8 px-5'>{post.body}</p>

        <Link
                to={`/blog/${post.id}`}
                className='btn my-8'
            >
                Read more
        </Link>
    </div>
  )
}

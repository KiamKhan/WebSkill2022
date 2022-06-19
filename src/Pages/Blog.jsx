import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Layout from '../Components/Layout'

export default function Blog() {
    const [post, setPost] = useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            if(response.status === 200){
                setPost(response.data)
            }
        })
    }, [])
    

  return (
    <Layout>
        <section className='banner' style={{
            background: `url('/images/blog.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='sm:container mx-auto'>
                <h1 className='main_head'>welcome to blog page</h1>
            </div>
        </section>

        <section className='section-gap'>
            <div className='sm:container mx-auto'>
                <div>
                    <h3 className='secondary_head'>Blog Posts</h3>
                </div>

                <div>
                    {post.map(post =>{
                        return(
                            <Link 
                                key={post.id}
                                to={`/blog/${post.id}`}
                                className='link'
                            >
                                {post.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    </Layout>
  )
}

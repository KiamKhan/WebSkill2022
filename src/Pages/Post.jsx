import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Layout from '../Components/Layout'

export default function Post() {
    const params = useParams()
    const id = params.id
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response =>{
              if(response.status === 200){
                  setPost(response.data)
              }
          })
      }, [id])

  return (
        <Layout>
            
                {post ? (
                    <section className='h-screen flex justify-center items-center'>
                        <div className='sm:container mx-auto'>
                            <h2 className='secondary_head'>{post.title}</h2>
                            <p className='paragraph text-xl text-center'>{post.body}</p>
                        </div>
                    </section>
                ) : 'Loading...'}
            
        </Layout>
  )
}

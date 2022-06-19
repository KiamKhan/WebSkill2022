import React from 'react'
import AboutShort from '../Components/AboutShort'
import Layout from '../Components/Layout'
import Service from '../Components/Service'


export default function Home() {
  return (
    <Layout>
        <section className='banner' style={{
            background: `url('/images/banner.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='sm:container mx-auto'>
                <h1 className='main_head'>We are creative designer</h1>
            </div>
        </section>

        <AboutShort />

        <Service />
    </Layout>
  )
}

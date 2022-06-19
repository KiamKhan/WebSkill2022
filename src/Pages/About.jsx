import React from 'react'
import Layout from '../Components/Layout'

export default function About() {
  return (
    <Layout>
        <section className="banner" style={{
            background: `url('/images/about_banner.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
          <div className="sm:container mx-auto flex justify-center">
            <div className='w-[560px]'>
              <h2 className="main_head mb-8">
                about us
              </h2>

              <p className='text-xl text-gray-100 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus quasi explicabo vitae deleniti iste facere, alias, atque et quaerat odit pariatur architecto non facilis.</p>
            </div>
          </div>
        </section>

        <section className='section-gap'>
            <div className='sm:container mx-auto grid md:grid-cols-2 grid-cols-1 gap-6'>
              <div className='order-1 md:order-none'>
                <img className='w-full' src="/images/about.jpg" alt="about us" />
              </div>
              <div className='xl:mt-16'>
                <p className="paragraph">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem
                    ipsum' will uncover many web sites still in their infancy.
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the like).
                    <span className="block mt-8">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text.
                    </span>
                </p>
              </div>
            </div>
        </section>
    </Layout>
  )
}

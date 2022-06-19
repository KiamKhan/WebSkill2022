import React from 'react'
import {Link} from 'react-router-dom'

export default function AboutShort() {
  return (
        <section className='pt-[80px]'>
            <div className='sm:container mx-auto'>
                <div>
                    <h3 className='secondary_head'>about us</h3>
                </div>

                <div className='text-center'>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis perferendis laboriosam quo eligendi voluptate voluptas nobis doloribus illum voluptatum nostrum consequuntur tempora qui similique, labore quos velit alias aperiam ducimus sint quidem fuga repellendus. Quos soluta repellat dolorem, enim architecto, sunt perferendis vero eaque neque rerum nihil! Veniam esse eaque optio aliquam dolores similique. 
                    <span className='block mt-8'>
                    Impedit, laudantium rem. Explicabo reprehenderit sapiente accusamus minima enim totam iure a, exercitationem voluptatem ut officiis odit eum architecto numquam soluta quas dolores quidem tenetur quos aperiam nulla labore ipsum illum quibusdam! Repellat, repudiandae ullam in architecto officiis quia eos, error, ipsa porro est voluptates.
                        </span> </p>
                </div>

                <div className='text-center'>
                    <Link className='btn' to='/about'>read more</Link>
                </div>
            </div>
        </section>
  )
}
